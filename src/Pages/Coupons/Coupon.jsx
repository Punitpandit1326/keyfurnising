import React from "react";
import styles from "./coupon.module.css";
import { BiSolidOffer } from "react-icons/bi";
import { IoCopyOutline } from "react-icons/io5";
import Header from "../../Components/Header/Header";

const Coupon = () => {
  return (
    <React.Fragment>
      <Header title="Coupons" />

      {/* ---------main-section--------- */}

      <div className={`${styles.scrollable_content}`}>
        <h6>Best Offers for you</h6>
        <hr />

        <div className={styles.box}>
          <h6>WELCOME200</h6>
          <p>Add items worth ₹500 to unlock</p>
          <div className={styles.off}>
            {" "}
            <BiSolidOffer className="text-danger" /> Get Upto 50% OFF{" "}
          </div>
          <div className={styles.code}>
            <IoCopyOutline /> <h6>Copy Code</h6>
          </div>
        </div>

        <div className={styles.box}>
          <h6>WELCOME200</h6>
          <p>Add items worth ₹500 to unlock</p>
          <div className={styles.off}>
            {" "}
            <BiSolidOffer className="text-danger" /> Get Upto 50% OFF{" "}
          </div>
          <div className={styles.code}>
            <IoCopyOutline /> <h6>Copy Code</h6>
          </div>
        </div>

        <div className={styles.box}>
          <h6>WELCOME200</h6>
          <p>Add items worth ₹500 to unlock</p>
          <div className={styles.off}>
            {" "}
            <BiSolidOffer className="text-danger" /> Get Upto 50% OFF{" "}
          </div>
          <div className={styles.code}>
            <IoCopyOutline /> <h6>Copy Code</h6>
          </div>
        </div>
        
        <div className={styles.box}>
          <h6>WELCOME200</h6>
          <p>Add items worth ₹500 to unlock</p>
          <div className={styles.off}>
            {" "}
            <BiSolidOffer className="text-danger" /> Get Upto 50% OFF{" "}
          </div>
          <div className={styles.code}>
            <IoCopyOutline /> <h6>Copy Code</h6>
          </div>
        </div>




      </div>
    </React.Fragment>
  );
};

export default Coupon;
