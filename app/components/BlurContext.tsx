"use client";

import React, { createContext, useContext, useRef, ReactNode } from "react";

type BlurContextProps = {
  blurWrapperRef: React.MutableRefObject<HTMLDivElement | null>;
};

type BlurProviderProps = {
  children: ReactNode;
};

const BlurContext = createContext<BlurContextProps | undefined>(undefined);

export const BlurProvider: React.FC<BlurProviderProps> = ({ children }) => {
  const blurWrapperRef = useRef<HTMLDivElement | null>(null);

  return (
    <BlurContext.Provider value={{ blurWrapperRef }}>
      {children}
    </BlurContext.Provider>
  );
};

export const useBlurContext = () => {
  const context = useContext(BlurContext);

  if (!context) {
    throw new Error("useBlurContext must be used within a BlurProvider");
  }

  return context.blurWrapperRef;
};
