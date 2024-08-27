import React from "react";
import styles from "./cart.module.css";
import { IoMdClose } from "react-icons/io";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import ValueBox from "../../Components/Valuebox/Valuebox";
import { useNavigate } from "react-router-dom";

const MyCart = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/checkout`);
  };
  return (
    <React.Fragment>
      {/* ----------main-section---------- */}
      <div className={styles.main_section}>
        <Header title="My Cart" />

        <div className={styles.scrollable_content}>
          <div className={styles.child_section}>
            <p>3 times</p>
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
            <hr style={{ color: "#d9d9d9", height: "2px" }} />
            <div className={styles.cart}>
              <div className="d-flex gap-3">
                <img src="/images/wal_curtain.png" alt="sofa" />
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

          <div className={styles.btn}>
            <div className={`mt-2 ${styles.add}`}>
              <p>Total (2 Items)</p>
              <span>₹ 8997</span>
            </div>
            <h2>Including ₹34 in Taxes</h2>
          <button onClick={handleClick}>Continue</button>
          </div>
        </div>

        <Footer />
      </div>
    </React.Fragment>
  );
};

export default MyCart;
