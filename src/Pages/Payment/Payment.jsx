import React, { useState, useEffect } from "react";
import styles from "./pay.module.css";
import { IoIosWifi, IoMdAlarm, IoMdBluetooth } from "react-icons/io";
import { FaSignal } from "react-icons/fa";
import { LuBatteryFull } from "react-icons/lu";
import { Link } from "react-router-dom";

const Payment = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formattedTime = time.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <React.Fragment>
      <div className={styles.header}>
        <p> {formattedTime}</p>
        <div className={styles.icon}>
          <IoMdAlarm />
          <IoMdBluetooth />
          <IoIosWifi />
          <FaSignal />
          <LuBatteryFull style={{ marginTop: "-3px" }} size={22} />
        </div>
      </div>

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
          <button>Explore More Products</button>
          <Link to={""}>View Order Details</Link>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Payment;
