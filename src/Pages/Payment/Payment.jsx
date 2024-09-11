import React from "react";
import styles from "./pay.module.css";
import { Link, useNavigate } from "react-router-dom";

const Payment = () => {
  const navigate = useNavigate()

  return (
    <React.Fragment>


      <div className={styles.main_section}>
        <h6>Acknowledgement </h6>
        <div className={styles.checked}>
          <div className={styles.img_sec}>
            <img src="/images/checked.png" alt="checked" />
          </div>
          <h6>Payment Successful !</h6>
          <span>Thank you for your Purchase</span>
        </div>

        <div className={styles.btn_section}>
          <button onClick={() => navigate(`/category`)}>Explore More Products</button>
          <Link to={"/orderdetails"}>View Order Details</Link>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Payment;
