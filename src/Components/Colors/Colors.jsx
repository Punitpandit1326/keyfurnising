import React from "react";
import styles from "./color.module.css";

const Colors = () => {
  return (
    <div className={styles.main}>
      <div className={styles.red}></div>
      <div className={styles.organde}></div>
      <div className={styles.green}></div>
      <div className={styles.sea}></div>
      <div className={styles.yellow}></div>
      <div className={styles.blue}></div>
      {/* <div className={styles.brown}></div> */}
    </div>
  );
};

export default Colors;
