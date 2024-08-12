import React from "react";
import styles from "./edit.module.css"
import { SlArrowLeft } from "react-icons/sl";

const Editprofile = () => {
  return (
    <React.Fragment>
      <div className={styles.head_section}>
        <h6>
          <SlArrowLeft /> Product Details
        </h6>
        <div className={styles.child_img}>
          <img src="/images/share.png" alt="Heart_Red" />
          <img src="/images/Heart-Red.png" alt="Heart-Red" />
        </div>
      </div>

      <div className={styles.scrollable_content}></div>
    </React.Fragment>
  );
};

export default Editprofile;
