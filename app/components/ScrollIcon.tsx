import React from "react";
import styles from "./ScrollIcon.module.css";

export default function ScrollIcon() {
  return (
    <>
      <div className={styles.scroll}>
        <span className={styles.scrollDown}></span>
      </div>
    </>
  );
}
