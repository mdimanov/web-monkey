"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";

const variants = {
  visible: { opacity: 1, scale: 1, y: 0 },
  hidden: {
    opacity: 0,
    scale: 0.65,
    y: 50,
  },
};

const AnimatedAboutImage = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
    triggerOnce: false,
  });

  return (
    <motion.div
      animate={inView ? "visible" : "hidden"}
      variants={variants}
      transition={{ duration: 2, ease: "easeOut" }}
      ref={ref}
      className="magic"
    >
      <Image
        src="/assets/images/cloud1.png"
        width="305"
        height="155"
        alt="Clouds"
        className="cloud1"
      />
      <Image
        src="/assets/images/cloud2.png"
        width="220"
        height="110"
        alt="Clouds"
        className="cloud2"
      />
    </motion.div>
  );
};

export default AnimatedAboutImage;
