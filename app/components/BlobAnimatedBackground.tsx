import React from "react";
import styles from "./BlobAnimatedBackground.module.css";

export default function BlobAnimatedBackground() {
  return (
    <>
      <div className={styles.blobC}>
        <div className={styles.blob}></div>
        <div className={`${styles.shapeBlob} ${styles.one}`}></div>
        <div className={`${styles.shapeBlob} ${styles.two}`}></div>
        <div className={`${styles.shapeBlob} ${styles.three}`}></div>
        <div className={`${styles.shapeBlob} ${styles.four}`}></div>
        <div className={`${styles.shapeBlob} ${styles.five}`}></div>
        <div className={`${styles.shapeBlob} ${styles.six}`}></div>
      </div>
    </>
  );
}
