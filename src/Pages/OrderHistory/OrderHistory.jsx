import React from "react";
import styles from "./his.module.css";
import Header from "../../Components/Header/Header";
import { IoIosArrowForward } from "react-icons/io";

const OrderHistory = () => {
  return (
    <React.Fragment>
      <Header title="Order History" />

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

        <div className={styles.input_section}>
          <p>Buy it again</p>
          <IoIosArrowForward className={styles.icon_right} />
        </div>

        <div className={styles.section}>
          <h6>How’s your Item</h6>
          <div className={styles.input_section}>
            <p>Write a product Review</p>
            <IoIosArrowForward className={styles.icon_right} />
          </div>
        </div>

        <div className={styles.section}>
          <h6>Order Info</h6>
          <div className={styles.input_section}>
            <p>Write a product Review</p>
            <IoIosArrowForward className={styles.icon_right} />
          </div>
          <div className={styles.input_section}>
            <p>Download invoice</p>
            <IoIosArrowForward className={styles.icon_right} />
          </div>
        </div>

        <div className={styles.main_card}>
          <h1>Related Products</h1>

          <div className={styles.card}>
          <div>
            <div className={styles.card_section_3}>
              <img src="/images/sofa-4.png" alt="sofa" />
              <h6>
                Modern Sofa Chair : Frank <br /> Gehry wiggle Chair{" "}
              </h6>
              <div className="d-flex gap-2">
                <p>
                  <span> ₹ 2999 </span>₹ 1999
                </p>
                <div className={styles.offer}>50%</div>
              </div>
            </div>
            <div className={styles.rating_section_4}>
              <img src="/images/star.png" alt="star" /> <p>4.5 (45)</p>
            </div>
          </div>


          <div>
            <div className={styles.card_section_2}>
              <img src="/images/sofa-2.png" alt="sofa" />
              <h6>
                Modern Sofa Chair : Frank <br /> Gehry wiggle Chair{" "}
              </h6>
              <div className="d-flex gap-2">
                <p>
                  <span> ₹ 2999 </span>₹ 1999
                </p>
                <div className={styles.offer}>50%</div>
              </div>
            </div>
            <div className={styles.rating_section_2}>
              <img src="/images/star.png" alt="star" /> <p>4.5 (45)</p>
            </div>
          </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default OrderHistory;
