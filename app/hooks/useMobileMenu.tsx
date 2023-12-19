import { useState, useEffect, useRef } from "react";

const useMobileMenu = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const blurWrapperRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // Create a variable to store the current value of blurWrapperRef
    const currentRef = blurWrapperRef.current;

    // Apply or remove the 'blur' class on the blurWrapperRef div based on the mobileMenuOpen state
    if (blurWrapperRef.current) {
      blurWrapperRef.current.classList.toggle("blur", mobileMenuOpen);
    }

    // Cleanup the class when the component unmounts
    return () => {
      if (currentRef) {
        currentRef.classList.remove("blur");
      }
    };
  }, [mobileMenuOpen]);

  return { mobileMenuOpen, setMobileMenuOpen, blurWrapperRef };
};

export default useMobileMenu;
