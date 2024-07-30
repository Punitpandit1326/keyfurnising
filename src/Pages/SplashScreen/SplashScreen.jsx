import React from "react";
import styles from "./screen.module.css";

const SplashScreen = () => {
  return (
    <React.Fragment>

        <div className={styles.main_section}>
          <img src="/images/key.png" alt="key" />
          <h6>Key Furnishings</h6>

      </div>
    </React.Fragment>
  );
};

export default SplashScreen;
