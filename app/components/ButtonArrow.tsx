import React from "react";
import Link from "next/link";
import styles from "./ButtonArrow.module.css";

type ButtonArrowProps = {
  text: string;
  link: string;
};

const ButtonArrow: React.FC<ButtonArrowProps> = ({ text, link }) => {
  return (
    <div>
      <Link
        href={link}
        className={`${styles.button} inline-flex items-center rounded-md bg-emerald-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-emerald-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600`}
      >
        {text}
        <span aria-hidden="true" className={styles.icon}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
            />
          </svg>
        </span>
      </Link>
    </div>
  );
};

export default ButtonArrow;
