import React from "react";

import styles from "./Hexagon.module.css";

const Hexagon = () => {
  return (
    <div className={styles.hexagon}>
      <div className={styles.triangle}></div>
      <div className={styles.triangle}></div>
      <div className={styles.triangle}></div>
      <div className={styles.triangle}></div>
      <div className={styles.triangle}></div>
      <div className={styles.triangle}></div>
    </div>
  );
};

export default Hexagon;
