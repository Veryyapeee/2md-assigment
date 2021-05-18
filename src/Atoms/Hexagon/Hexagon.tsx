import React from "react";

import styles from "./Hexagon.module.css";

const Hexagon = () => {
  return (
    <div className={["hidden lg:block", styles.hexagon].join(" ")}>
      <div className={styles.triangleLeft}></div>
      <div className={styles.triangleRight}></div>
    </div>
  );
};

export default Hexagon;
