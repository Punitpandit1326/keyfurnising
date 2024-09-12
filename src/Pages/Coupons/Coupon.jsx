import React, { useRef } from "react";
import styles from "./coupon.module.css";
import { BiSolidOffer } from "react-icons/bi";
import { IoCopyOutline } from "react-icons/io5";
import Header from "../../Components/Header/Header";

const Coupon = () => {
  const codeRef = useRef(null);

  // const handleCopyCode = () => {
  //   const codeText = codeRef.current.innerText;
  //   navigator?.clipboard?.writeText(codeText)?.then(() => { alert(`Code "${codeText}" copied to clipboard!`)});
    
  // };


  const handleCopyCode = () => {
    if (navigator.clipboard) {
      const codeText = codeRef.current ? codeRef.current.innerText : '';
      if (codeText) {
        navigator.clipboard.writeText(codeText).then(() => {
          alert(`Code "${codeText}" copied to clipboard!`);
        }).catch((err) => {
          console.error('Failed to copy text: ', err);
        });
      } else {
        alert('No text available to copy.');
      }
    } else {
      alert('Clipboard API not supported.');
    }
  };
  
  return (
    <React.Fragment>
      <Header title="Coupons" />

      {/* ---------main-section--------- */}

      <div className={`${styles.scrollable_content}`}>
        <h6>Best Offers for you</h6>
        <hr />

        <div className={styles.box}>
          <h6 ref={codeRef}>Off50</h6>
          <p>Add items worth ₹500 to unlock</p>
          <div className={styles.off}>
            {" "}
            <BiSolidOffer className="text-danger" /> Get Upto 50% OFF{" "}
          </div>
          <div className={styles.code} onClick={handleCopyCode}>
            <IoCopyOutline /> <h6>Copy Code</h6>
          </div>
        </div>

        <div className={styles.box}>
          <h6 ref={codeRef}>WELCOME200</h6>
          <p>Add items worth ₹500 to unlock</p>
          <div className={styles.off}>
            {" "}
            <BiSolidOffer className="text-danger" /> Get Upto 50% OFF{" "}
          </div>
          <div className={styles.code} onClick={handleCopyCode}>
            <IoCopyOutline /> <h6>Copy Code</h6>
          </div>
        </div>

        <div className={styles.box}>
          <h6 ref={codeRef}>WELCOME200</h6>
          <p>Add items worth ₹500 to unlock</p>
          <div className={styles.off}>
            {" "}
            <BiSolidOffer className="text-danger" /> Get Upto 50% OFF{" "}
          </div>
          <div className={styles.code} onClick={handleCopyCode}>
            <IoCopyOutline /> <h6>Copy Code</h6>
          </div>
        </div>

        <div className={styles.box}>
          <h6 ref={codeRef}>WELCOME200</h6>
          <p>Add items worth ₹500 to unlock</p>
          <div className={styles.off}>
            {" "}
            <BiSolidOffer className="text-danger" /> Get Upto 50% OFF{" "}
          </div>
          <div className={styles.code} onClick={handleCopyCode}>
            <IoCopyOutline /> <h6>Copy Code</h6>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Coupon;
