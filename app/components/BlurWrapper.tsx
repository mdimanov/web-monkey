"use client";

import React, { ReactNode } from "react";
import { useBlurContext } from "../components/BlurContext";

type BlurWrapperProps = {
  children: ReactNode;
};

const BlurWrapper: React.FC<BlurWrapperProps> = ({ children }) => {
  const blurWrapperRef = useBlurContext();

  return (
    <div ref={blurWrapperRef} className="bg-blur-wrap">
      {children}
    </div>
  );
};

export default BlurWrapper;
