import React from "react";
import styles from "./details.module.css";
import Header from "../../Components/Header/Header";
import Step from "../../Components/Steeper/Step";
import { FaChevronRight } from "react-icons/fa6";

const OrderDetails = () => {
  return (
    <React.Fragment>
      <Header title="Order Details" />

      <div className={styles.scrollable_content}>
        <h6>Order Id - OD4585566558546</h6>

        <div className={styles.card_section}>
          <img src="/images/sofa-yellow.png" alt="sofa" />
          <div>
            <h6>Frank Gehry wiggle Chair </h6>
            <span className="text-decoration-none">Upholstery Chair</span>
            <div className="d-flex gap-2 pt-2">
              <p>
                {" "}
                ₹ 1999 <span> ₹ 2999 </span>{" "}
              </p>
              <div className={styles.offer}>50%</div>
            </div>
          </div>
          <hr />
        </div>

        
        <div className="mt-5">
          <Step />
          <hr className="m-0" />
        </div>

        <div className={styles.rate_section}>
          <h6>Rate this Product</h6>
          <span>
            <FaChevronRight className={styles.icon} />
          </span>
        </div>
        <hr className="m-0" />

        <div className={styles.shipping_section}>
          <h5>Shipping Details</h5>
          <h6>Nishant Choudhary</h6>
          <p>
            Sorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et.
          </p>
          <p>India 110044</p>
          <p>7503063585</p>
        </div>
        <hr className="m-0" />

        <div className={styles.price_section}>
          <h5>Price Details</h5>
          <div className="d-flex justify-content-between mt-2">
            <p>List Price</p>
            <p className="text-decoration-line-through">₹ 2999</p>
          </div>
          <div className="d-flex justify-content-between">
            <p>Selling price</p>
            <p>₹ 1999</p>
          </div>
          <div className="d-flex justify-content-between">
            <p>Discount</p>
            <p className="text-success">-₹100</p>
          </div>
          <div className="d-flex justify-content-between">
            <p>Delivery Charge</p>
            <p className="text-decoration-line-through">₹50</p>
          </div>
          <div className="d-flex justify-content-between">
            <p>Total amount</p>
            <p>₹2549</p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default OrderDetails;
