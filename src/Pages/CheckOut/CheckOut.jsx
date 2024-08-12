import React, { useState, useEffect } from "react";
import styles from "./checkout.module.css";
import { IoIosWifi, IoMdAlarm, IoMdBluetooth, IoMdClose } from "react-icons/io";
import { FaSignal } from "react-icons/fa";
import { LuBatteryFull } from "react-icons/lu";
import ValueBox from "../../Components/Valuebox/Valuebox";
import { Link, useNavigate } from "react-router-dom";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import Footer from "../../Components/Footer/Footer";

const CheckOut = () => {
  const [time, setTime] = useState(new Date());
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/payment`);
  };

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
      {/* <div className={styles.header}>
        <p> {formattedTime}</p>
        <div className={styles.icon}>
          <IoMdAlarm />
          <IoMdBluetooth />
          <IoIosWifi />
          <FaSignal />
          <LuBatteryFull style={{ marginTop: "-3px" }} size={22} />
        </div>
      </div> */}

      {/* ----------main-section---------- */}
      <div className={styles.main_section}>
        <h6>Checkout</h6>

        <div className={styles.child_section}>
          <p>Your Orders</p>
          <hr style={{ color: "#d9d9d9", height: "2px" }} />
          <div className={styles.cart}>
            <div className="d-flex gap-3">
              <img src="/images/sofa-2.png" alt="sofa" />
              <div>
                <h6>Frank Gehry wiggle Chair</h6>
                <span>Product Category</span>
                <div className="d-flex justify-content-between">
                  <ValueBox />
                  <p>₹ 2999</p>
                </div>
              </div>
              <IoMdClose className={styles.icon} />
            </div>
          </div>
          <hr style={{ color: "#d9d9d9", height: "2px" }} />
          <div className={styles.cart}>
            <div className="d-flex gap-3">
              <img src="/images/sofa-yellow.png" alt="sofa" />
              <div>
                <h6>Frank Gehry wiggle Chair</h6>
                <span>Product Category</span>
                <div className="d-flex justify-content-between">
                  <ValueBox />
                  <p>₹ 2999</p>
                </div>
              </div>
              <IoMdClose className={styles.icon} />
            </div>
          </div>
        </div>

        <div className={styles.discount_section}>
          <h6>Discount</h6>
          <hr style={{ color: "#d9d9d9", height: "2px" }} />

          <div className={styles.box}>
            <p>Enter coupon code or gift card</p>
            <span>Apply</span>
          </div>
          <Link to={""}>
            View All Coupons <MdOutlineKeyboardArrowRight />
          </Link>
          <hr style={{ color: "#d9d9d9", height: "2px" }} />
        </div>

        <div className={styles.additional}>
          <div className={styles.add}>
            <p>Subtotal</p>
            <span>₹ 899</span>
          </div>
          <div className={styles.add}>
            <p>Delivery</p>
            <span>₹ 20</span>
          </div>
          <div className={styles.add}>
            <p>Discount</p>
            <h6>- ₹150</h6>
          </div>
          <hr style={{ color: "#d9d9d9", height: "2px", margin: "0" }} />

          <div className={`mt-2 ${styles.add}`}>
            <p>Total (2 Items)</p>
            <span>₹ 899</span>
          </div>
          <h2>Including ₹34 in Taxes</h2>
        </div>

        <div className={styles.btn}>
          <button onClick={handleClick}>Checkout</button>
        </div>

        <Footer />
      </div>
    </React.Fragment>
  );
};

export default CheckOut;
