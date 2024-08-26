import React from "react";
import styles from "./page.module.css";
import { IoIosArrowForward } from "react-icons/io";

const TroublePage = () => {
  return (
    <React.Fragment>
      <div className={styles.main_section}>
        <h6>Any Trouble with login in your app ?</h6>
        <div>
          <div className={styles.input_section}>
            <p>Shipping & Delivery</p>
            <IoIosArrowForward className={styles.icon_right} />
          </div>
          <div className={styles.input_section}>
            <p>Managing Your Account</p>
            <IoIosArrowForward className={styles.icon_right} />
          </div>
          <div className={styles.input_section}>
            <p>Payments & Pricing</p>
            <IoIosArrowForward className={styles.icon_right} />
          </div>
          <div className={styles.input_section}>
            <p>Ordering</p>
            <IoIosArrowForward className={styles.icon_right} />
          </div>
          <div className={styles.input_section}>
            <p>Returns, Refunds</p>
            <IoIosArrowForward className={styles.icon_right} />
          </div>
          <div className={styles.input_section}>
            <p>Contact With Us</p>
            <IoIosArrowForward className={styles.icon_right} />
          </div>
        </div>
        <div className={styles.bottom_section}>
          <p>
            By signing up , you agree to our <span>Terms</span>. See how we use
            your data in our <span>Privacy Policy</span>. We Never Post to
            Facebook
          </p>
        </div>
      </div>
    </React.Fragment>
  );
};

export default TroublePage;
