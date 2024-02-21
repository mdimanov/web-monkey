"use client";

import { AnimatePresence, motion, Spring } from "framer-motion";
import { useSelectedLayoutSegment } from "next/navigation";
import { ElementRef, forwardRef, ReactNode } from "react";
import FrozenRouter from "./provider/FrozenRouter";

const transitionSpringPhysics: Spring = {
  type: "spring",
  mass: 0.2,
  stiffness: 60,
  damping: 10,
};

const Child = forwardRef<
  ElementRef<typeof motion.div>,
  { children: React.ReactNode; segment: string | null }
>((props, ref) => {
  const { segment } = props;

  return (
    <motion.div ref={ref}>
      <motion.div
        style={{
          background: "rgb(52 211 153)",
          position: "fixed",
          clipPath: "ellipse(100% 68% at 52% 68%)",
          width: "100vw",
          zIndex: 1000,
          bottom: 0,
        }}
        transition={transitionSpringPhysics}
        animate={{ height: "0vh", transition: { delay: 0.5 } }}
        exit={{ height: "120vh" }}
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ delay: 0.5 }}
      >
        <motion.div
          style={{
            background: "rgb(52 211 153)",
            clipPath: "ellipse(100% 68% at 52% 32%)",
            position: "fixed",
            width: "100vw",
            zIndex: 1000,
            top: 0,
          }}
          transition={transitionSpringPhysics}
          initial={{ height: "120vh" }}
          animate={{ height: "0vh", top: "-200px", transition: { delay: 1.6 } }}
        >
          <motion.h1
            className="text-4xl pb-4 md:pb-0 font-black tracking-tight text-white sm:text-6xl"
            style={{
              position: "absolute",
              left: "50%",
              top: "40%",
              textTransform: "capitalize",
              textAlign: "center",
              x: "-50%",
              y: 20,
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, y: 0, transition: { delay: 0.8 } }}
            exit={{ opacity: 0 }}
          >
            {segment === null ? "Home" : segment}
          </motion.h1>
        </motion.div>
        <FrozenRouter>{props.children}</FrozenRouter>
      </motion.div>
    </motion.div>
  );
});

Child.displayName = "Child";

export default function PageLayout({ children }: { children: ReactNode }) {
  const segment = useSelectedLayoutSegment();

  return (
    <AnimatePresence mode="popLayout" initial={false}>
      <Child key={segment} segment={segment}>
        {children}
      </Child>
    </AnimatePresence>
  );
}
