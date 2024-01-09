"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const Logo = () => {
  return (
    <div className="flex lg:flex-1">
      <Link
        href="/"
        className="logo -m-1.5 p-1.5 flex justify-items-center items-center"
      >
        <motion.div whileHover={{ rotate: -12 }}>
          <Image
            src="/assets/images/webmonkey-logo.png"
            width="60"
            height="60"
            alt="webmonkey logo"
          />
        </motion.div>
      </Link>
    </div>
  );
};

export default Logo;
