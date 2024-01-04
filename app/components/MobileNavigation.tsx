"use client";

import MobileMenuButton from "./MobileMenuButton";
import MobileMenu from "./MobileMenu";
import useMobileMenu from "../hooks/useMobileMenu";

const MobileNavigation: React.FC = () => {
  const { mobileMenuOpen, setMobileMenuOpen } = useMobileMenu();

  return (
    <>
      <MobileMenuButton setMobileMenuOpen={setMobileMenuOpen} />
      <MobileMenu mobileMenuOpen={mobileMenuOpen} />
    </>
  );
};

export default MobileNavigation;
