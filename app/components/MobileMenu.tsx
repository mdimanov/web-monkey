"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { NAVIGATION } from "../utils/constants";

type MobileMenuProps = {
  mobileMenuOpen: boolean;
};

const MobileMenu: React.FC<MobileMenuProps> = ({ mobileMenuOpen }) => {
  // Variants for the staggered animation
  const itemVariants = {
    visible: {
      transition: { staggerChildren: 0.07, delayChildren: 0.2 },
    },
    hidden: {
      transition: { staggerChildren: 0.05, staggerDirection: -1 },
    },
  };

  const variants = {
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        y: { stiffness: 1000, velocity: -100 },
      },
    },
    hidden: {
      y: 50,
      opacity: 0,
      transition: {
        y: { stiffness: 1000 },
      },
    },
  };

  const pathname = usePathname();

  return (
    <AnimatePresence>
      {mobileMenuOpen && (
        <motion.div
          className="mobile-menu shadow-2xl"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 120, transition: { delay: 0.4 } }}
        >
          <div className="mt-6 flow-root">
            <div className="divide-gray-500/10">
              <motion.div
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={itemVariants}
                transition={{
                  duration: 1.2,
                  staggerChildren: 0.1,
                  delayChildren: 0.1,
                }}
                className="space-y-2 py-6 px-4"
              >
                {NAVIGATION.map((item) => (
                  <motion.div key={item.name} variants={variants}>
                    <Link
                      href={item.href}
                      className={`text-3xl sm:text-5xl font-black leading-7 ${
                        pathname === item.href
                          ? "active text-emerald-400"
                          : "text-black"
                      }`}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;
