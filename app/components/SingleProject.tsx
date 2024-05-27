"use client";

import React, { useRef } from "react";
import { useInView } from "framer-motion";
import Link from "next/link";
import { ProjectData } from "../utils/constants";
import styles from "./SingleProject.module.css";

const SingleProject: React.FC<ProjectData & { gridSize: number }> = ({
  title,
  banner,
  url,
  specifications,
  gridSize,
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref);

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
        style={{ backgroundImage: `url(${banner})` }}
      ></div>
      <div
        className={`${styles.info} ${
          gridSize === 2 ? "p-12" : gridSize === 4 ? "p-8" : ""
        }`}
      >
        <div className={styles.pill}>
          {specifications.map((specification, index) => (
            <span
              className={`${
                gridSize === 2
                  ? "py-3 px-5 text-base"
                  : gridSize === 4
                  ? "py-1 px-2 text-sm"
                  : ""
              }`}
              key={index}
            >
              {specification}
            </span>
          ))}
        </div>
        <div className="flex justify-between items-center w-full">
          <h3
            className={`text-xl leading-4 font-black tracking-tight text-white w-full xl:w-2/3 ${
              gridSize === 2
                ? "md:text-3xl"
                : gridSize === 4
                ? "md:text-xl md:leading-5"
                : ""
            }`}
          >
            {title}
          </h3>
          {url !== undefined && (
            <Link
              href={url}
              target="_blank"
              className="p-3 hover:rotate-45"
              aria-label="Open link in new tab"
            >
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
                  d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                />
              </svg>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default SingleProject;
