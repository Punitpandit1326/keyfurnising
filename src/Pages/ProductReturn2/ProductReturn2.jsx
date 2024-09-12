import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./product.module.css";
import Header from "../../Components/Header/Header";

const ProductReturn2 = () => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleChange = (e) => {
    setSelectedOption(e.target.value);
  };
  return (
    <React.Fragment>
      <Header title="Product Return" />

      <div className={styles.scrollable_content}>
        <h6>Product</h6>

        <div className={styles.card_section}>
          <img src="/images/sofa-yellow.png" alt="sofa" />
          <div>
            <h6>Frank Gehry wiggle Chair </h6>
            <span className="text-decoration-none">Upholstery Chair</span>
            <div className="d-flex gap-2 pt-2">
              <p>
                <span> ₹ 2999 </span>₹ 1999
              </p>
              <div className={styles.offer}>50%</div>
            </div>
            <div className={styles.star_secx}>
              <img
                className={`${styles.star}`}
                src="/images/star.png"
                alt="start"
              />
              <span className="text-decoration-none">4.5</span>
            </div>
          </div>
        </div>
        <hr />

        <div className={styles.product_section}>
          <h6>Refund Amount</h6>
          <div className={styles.box}>
         
              <input type="radio" value="option1" checked={selectedOption === "option1"}
                onChange={handleChange}
              />
  
            <div>
              <p>Original Payment Method</p>
              <span>Refund Within 5-7 days of pickup</span>
            </div>
          </div>

          <label>Pickup Address</label>
          <div className={styles.addressBox}>
            <h6>Nishant Choudhary</h6>
            <h6>Apt. 453 52466 Kimberlie Trail,IL 70724</h6>
            <h6>7503063585</h6>
          </div>
          <Link to={"/myaddress"}>Change Adress</Link>
        </div>

        <button>Refund</button>
      </div>
    </React.Fragment>
  );
};

export default ProductReturn2;
