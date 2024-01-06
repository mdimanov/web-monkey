"use client";

import React, { useRef } from "react";
import { useInView } from "framer-motion";
import { LatestProjectData } from "../utils/constants";
import styles from "./SingleLatestProject.module.css";

const SingleLatestProject: React.FC<LatestProjectData> = ({
  title,
  url,
  specifications,
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div
      ref={ref}
      className={`${styles.container} rounded-lg`}
      style={{
        transform: isInView ? "none" : "translateY(120px)",
        opacity: isInView ? 1 : 0,
      }}
    >
      <div
        className={`${styles.project} rounded-lg`}
        style={{ backgroundImage: `url(${url})` }}
      ></div>
      <div className={styles.info}>
        <div className={styles.pill}>
          {specifications.map((specification, index) => (
            <span key={index}>{specification}</span>
          ))}
        </div>
        <div className="flex justify-between items-center w-full">
          <h3 className="text-xl leading-4 font-black tracking-tight text-white w-full xl:w-2/3 md:text-3xl">
            {title}
          </h3>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6 m-3"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default SingleLatestProject;
