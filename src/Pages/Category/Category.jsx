import React, { useState, useEffect } from "react";
import styles from "./category.module.css";
import { FaSignal } from "react-icons/fa";
import { LuBatteryFull } from "react-icons/lu";
import { IoFilterSharp } from "react-icons/io5";
import { IoMdAlarm, IoIosWifi, IoMdBluetooth } from "react-icons/io";
import { Col, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Footer from "../../Components/Footer/Footer";

const Category = () => {
  // const [time, setTime] = useState(new Date());
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/category/categorydetails`);
  };

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setTime(new Date());
  //   }, 1000);

  //   return () => clearInterval(interval);
  // }, []);

  // const formattedTime = time.toLocaleTimeString("en-US", {
  //   hour: "2-digit",
  //   minute: "2-digit",
  // });

  return (
    <React.Fragment>
      <div>
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

        <div className={styles.head_section}>
          <h6>Upholstery Furniture 1</h6>
          <div className={styles.filter}>
            {" "}
            <IoFilterSharp />
          </div>
        </div>
        <div className={styles.child_img}>
          <img src="/images/bg.png" alt="back_img" />
        </div>
      </div>

      <div className={styles.product_section}>
        <h6>Products</h6>
        <hr style={{ color: "#d9d9d9", height: "2px" }} />

        <div className="d-flex gap-3">
          
          <div onClick={handleClick}>
            <div className={styles.card_section}>
              <img src="/images/sofa.png" alt="sofa" />
              <h6>Modern Sofa : Frank Gehry wiggle Chair </h6>
              <div className="d-flex gap-2">
                <p>
                  <span> ₹ 2999 </span>₹ 1999
                </p>
                <div className={styles.offer}>50%</div>
              </div>
            </div>
            <div className={styles.rating_section}>
              <img src="/images/star.png" alt="star" />
              <p>
                4.5 <span>(45)</span>
              </p>
            </div>
          </div>

          <div onClick={handleClick}>
            <div className={styles.card_section_2}>
              <img src="/images/sofa-2.png" alt="sofa" />
              <h6>Modern Sofa : Frank Gehry wiggle Chair </h6>
              <div className="d-flex gap-2">
                <p>
                  <span> ₹ 2999 </span>₹ 1999
                </p>
                <div className={styles.offer}>50%</div>
              </div>
            </div>
            <div className={styles.rating_section_2}>
              <img src="/images/star.png" alt="star" />
              <p>
                4.5 <span>(45)</span>
              </p>
            </div>
          </div>
        </div>

        <div className="d-flex gap-3">
          <div onClick={handleClick}>
            <div className={styles.card_section_3}>
              <img src="/images/sofa-3.png" alt="sofa" />
              <h6>Modern Sofa : Frank Gehry wiggle Chair </h6>
              <div className="d-flex gap-2">
                <p>
                  <span> ₹ 2999 </span>₹ 1999
                </p>
                <div className={styles.offer}>50%</div>
              </div>
            </div>
            <div className={styles.rating_section_3}>
              <img src="/images/star.png" alt="star" />
              <p>
                4.5 <span>(45)</span>
              </p>
            </div>
          </div>

          <div onClick={handleClick}>
            <div className={styles.card_section_3}>
              <img src="/images/sofa-4.png" alt="sofa" />
              <h6>Modern Sofa : Frank Gehry wiggle Chair </h6>
              <div className="d-flex gap-2">
                <p>
                  <span> ₹ 2999 </span>₹ 1999
                </p>
                <div className={styles.offer}>50%</div>
              </div>
            </div>
            <div className={styles.rating_section_3}>
              <img src="/images/star.png" alt="star" />
              <p>
                4.5 <span>(45)</span>
              </p>
            </div>
          </div>

{/* 
          <div onClick={handleClick}>
            <div className={styles.card_section_4}>
              <img src="/images/sofa-4.png" alt="sofa" />
              <h6>Modern Sofa : Frank Gehry wiggle Chair </h6>
              <div className="d-flex gap-2">
                <p>
                  <span> ₹ 2999 </span>₹ 1999
                </p>
                <div className={styles.offer}>50%</div>
              </div>
            </div>
            <div className={styles.rating_section_4}>
              <img src="/images/star.png" alt="star" />
              <p>
                4.5 <span>(45)</span>
              </p>
            </div>
          </div> */}
        </div>
      </div>

      <Footer />
    </React.Fragment>
  );
};

export default Category;
