"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

type MobileMenuNavItemProps = {
  href: string;
  children: React.ReactNode;
};

const MobileMenuNavItem: React.FC<MobileMenuNavItemProps> = ({
  href,
  children,
}) => {
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
    <motion.div variants={variants}>
      <Link
        href={href}
        className={`text-3xl sm:text-5xl font-black leading-7 ${
          pathname === href ? "active text-emerald-400" : "text-black"
        }`}
      >
        {children}
      </Link>
    </motion.div>
  );
};
export default MobileMenuNavItem;
