import { motion, AnimatePresence } from "framer-motion";
import { NAVIGATION } from "../utils/constants";
import SocialNetworks from "./SocialNetworks";
import MobileMenuNavItem from "./MobileMenuNavItem";

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

  const fadeInitemVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 },
  };

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
                <MobileMenuNavItem href="/">Home</MobileMenuNavItem>
                {NAVIGATION.map((item) => (
                  <MobileMenuNavItem key={item.name} href={item.href}>
                    {item.name}
                  </MobileMenuNavItem>
                ))}
              </motion.div>
            </div>
          </div>
          <motion.div
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={fadeInitemVariants}
            transition={{
              duration: 0.4,
            }}
            style={{
              padding: "0 6px",
            }}
          >
            <SocialNetworks color="black" />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;
