import React from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { NAVIGATION } from "../utils/constants";

type MobileMenuProps = {
  mobileMenuOpen: boolean;
};

const MobileMenu: React.FC<MobileMenuProps> = ({ mobileMenuOpen }) => {
  // Variants for the staggered animation
  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <AnimatePresence>
      {mobileMenuOpen && (
        <motion.div
          className="mobile-menu"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 120 }}
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
                  <motion.div
                    key={item.name}
                    variants={itemVariants}
                    className="text-4xl sm:text-5xl font-black leading-7 text-gray-900"
                  >
                    <Link href={item.href}>{item.name}</Link>
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
