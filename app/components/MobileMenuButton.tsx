import React from "react";
import { useState } from "react";
import styles from "./MobileMenuButton.module.css";

type HeaderProps = {
  setMobileMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const MobileMenuButton: React.FC<HeaderProps> = ({ setMobileMenuOpen }) => {
  const [buttonToggle, setbuttonToggle] = useState(false);

  const handleButtonClick = () => {
    setbuttonToggle(!buttonToggle);
    setMobileMenuOpen(!buttonToggle);
  };

  return (
    <div className={`flex lg:hidden ${styles.mobileMenuWrapper}`}>
      <button
        type="button"
        className="-m-2.5 rounded-md p-2.5 text-gray-700"
        onClick={handleButtonClick}
      >
        <span className="sr-only">Open close menu</span>

        <div
          id={styles.nav}
          className={
            buttonToggle ? `${styles.nav} ${styles.open}` : `${styles.nav}`
          }
        >
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </button>
    </div>
  );
};

export default MobileMenuButton;
