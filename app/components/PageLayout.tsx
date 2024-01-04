"use client";

import { AnimatePresence, motion, Spring } from "framer-motion";
import { useSelectedLayoutSegment } from "next/navigation";
import { ElementRef, forwardRef, ReactNode } from "react";
import FrozenRouter from "./provider/FrozenRouter";

const transitionSpringPhysics: Spring = {
  type: "spring",
  mass: 0.2,
  stiffness: 80,
  damping: 10,
};

const Child = forwardRef<
  ElementRef<typeof motion.div>,
  { children: React.ReactNode }
>((props, ref) => {
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        style={{
          background:
            "linear-gradient(to right, rgb(0, 61, 136) 0%, rgb(15, 161, 218) 25%, rgb(30, 220, 224) 50%, rgb(25, 230, 223) 75%, rgb(9, 226, 157) 100%)",
          position: "fixed",
          width: "100vw",
          zIndex: 1000,
          bottom: 0,
        }}
        transition={transitionSpringPhysics}
        animate={{ height: "0vh" }}
        exit={{ height: "100vh" }}
      />
      <motion.div
        style={{
          background:
            "linear-gradient(to right, rgb(0, 61, 136) 0%, rgb(15, 161, 218) 25%, rgb(30, 220, 224) 50%, rgb(25, 230, 223) 75%, rgb(9, 226, 157) 100%)",
          position: "fixed",
          width: "100vw",
          zIndex: 1000,
          top: 0,
        }}
        transition={transitionSpringPhysics}
        initial={{ height: "100vh" }}
        animate={{ height: "0vh", transition: { delay: 0.2 } }}
      />
      <FrozenRouter>{props.children}</FrozenRouter>
    </motion.div>
  );
});

Child.displayName = "Child";

export default function PageLayout({ children }: { children: ReactNode }) {
  const segment = useSelectedLayoutSegment();

  return (
    <AnimatePresence mode="popLayout" initial={false}>
      <Child key={segment}>{children}</Child>
    </AnimatePresence>
  );
}
