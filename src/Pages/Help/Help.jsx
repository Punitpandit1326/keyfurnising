import React from "react";
import styles from "./help.module.css";
import { CiSearch } from "react-icons/ci";
import Header from "../../Components/Header/Header";
import { MdKeyboardArrowRight } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const Help = () => {
  const navigate = useNavigate();
  return (
    <React.Fragment>
      <Header title="Help" />

      <div className={styles.scrollable_content}>
        <div>
          <input type="text" placeholder="Search Help" />
          <CiSearch className={styles.search_icon} />
        </div>

        <h6>Nishant, how can I help you</h6>

        <div className={styles.orders}>
          <div className="d-flex gap-2">
            <div className={styles.bag}>
              <img src="/images/bag-2.png" alt="bag" />
            </div>
            <div>
              <p>Your Orders</p>
              <span>Track packages edit and cancel orders</span>
            </div>
          </div>

          <span>
            <MdKeyboardArrowRight style={{ color: "#d9d9d9" }} size={26} />
          </span>
        </div>

        <div
          className={styles.orders}
          onClick={() => navigate(`/product-return`)}
        >
          <div className="d-flex gap-2">
            <div className={styles.bag}>
              <img src="/images/rotate.png" alt="bag" />
            </div>
            <div>
              <p>Return And Refunds</p>
              <span>Return and exchange your items</span>
            </div>
          </div>

          <span>
            <MdKeyboardArrowRight style={{ color: "#d9d9d9" }} size={26} />
          </span>
        </div>

        <h6>All help Topic</h6>

        <div className={styles.orders} onClick={() => navigate(`/help2`)}>
          <p>Shipping & Delivery</p>
          <span>
            <MdKeyboardArrowRight style={{ color: "#d9d9d9" }} size={26} />
          </span>
        </div>

        <div className={styles.orders}>
          <p>Managing Your Account</p>
          <span>
            <MdKeyboardArrowRight style={{ color: "#d9d9d9" }} size={26} />
          </span>
        </div>

        <div className={styles.orders}>
          <p>Payments & Pricing</p>
          <span>
            <MdKeyboardArrowRight style={{ color: "#d9d9d9" }} size={26} />
          </span>
        </div>

        <div className={styles.orders}>
          <p>Ordering</p>
          <span>
            <MdKeyboardArrowRight style={{ color: "#d9d9d9" }} size={26} />
          </span>
        </div>

        <div className={styles.orders}>
          <p>Returns, Refunds</p>
          <span>
            <MdKeyboardArrowRight style={{ color: "#d9d9d9" }} size={26} />
          </span>
        </div>

        <div className={`${styles.orders} ${styles.chat}`}>
          <p>Chat With Us</p>
          <span>
            <MdKeyboardArrowRight style={{ color: "#d9d9d9" }} size={26} />
          </span>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Help;
