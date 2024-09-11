import React, { useState } from "react";
import styles from "./wishlist.module.css";
import { FaHeart } from "react-icons/fa";
import { SlArrowLeft } from "react-icons/sl";
import { useNavigate } from "react-router-dom";
import { FiShoppingBag } from "react-icons/fi";
import Footer from "../../Components/Footer/Footer";

const Wishlist = () => {
  const navigate = useNavigate();
  // const [isActive, setIsActive] = useState(false);
  const [activeTab, setActiveTab] = useState("All");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  // const handleClick = () => {
  //   setIsActive(!isActive);
  // };

  return (
    <React.Fragment>
      <div className={styles.head_section}>
        <h6>
          <SlArrowLeft onClick={() => navigate(-1)} /> Wishlist
        </h6>
        <p>Remove All</p>
      </div>

      <div className={`${styles.scrollable_content}`}>
        <div className={styles.status}>
          <p
            onClick={() => handleTabClick("All")}
            style={{
              color: activeTab === "All" ? "#000" : "#e3e3e3",
            }}
          >
            All
          </p>
          <p
            onClick={() => handleTabClick("Raw")}
            style={{
              color: activeTab === "Raw" ? "#000" : "#e3e3e3",
            }}
          >
            Raw
          </p>
          <p
            onClick={() => handleTabClick("Chair")}
            style={{
              color: activeTab === "Chair" ? "#000" : "#e3e3e3",
            }}
          >
            Chair
          </p>
          <p
            onClick={() => handleTabClick("Curtain")}
            style={{
              color: activeTab === "Curtain" ? "#000" : "#e3e3e3",
            }}
          >
            Curtain
          </p>
        </div>

        <div className={styles.content}>
          {activeTab === "All" && (
            <div className={styles.main_section}>
              {/* ---------1st-------- */}

              <div className="d-flex gap-4">
                <div>
                  <div className={styles.card_section}>
                    <img src="/images/sofa.png" alt="sofa" />
                    <FaHeart className={styles.heart_icon_first} />
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
                  <button>
                    <FiShoppingBag /> Add To Cart
                  </button>
                </div>

                <div>
                  <div className={styles.card_section_2}>
                    <img src="/images/sofa-3.png" alt="sofa" />
                    <FaHeart className={styles.heart_icon} />
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
                  <button>
                    <FiShoppingBag /> Add To Cart
                  </button>
                </div>
              </div>

              {/* ---------2st-------- */}

              <div className="d-flex gap-4">
                <div>
                  <div className={`${styles.card_section} ${styles.card3}`}>
                    <img src="/images/sofa.png" alt="sofa" />
                    <FaHeart className={styles.heart_icon_3} />
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
                  <button>
                    <FiShoppingBag /> Add To Cart
                  </button>
                </div>

                <div>
                  <div className={styles.card_section_2}>
                    <img src="/images/sofa-2.png" alt="sofa" />
                    <FaHeart className={styles.heart_icon} />
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
                  <button>
                    <FiShoppingBag /> Add To Cart
                  </button>
                </div>
              </div>
            </div>
          )}
          {activeTab === "Raw" && (
            <div className={styles.main_section}>
              <div className="d-flex gap-3">
                <div>
                  <div className={styles.card_section}>
                    <img src="/images/mat-sq.png" alt="sofa" />
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
                  <button>
                    <FiShoppingBag /> Add To Cart
                  </button>
                </div>

                <div>
                  <div className={styles.card_section_2}>
                    <img src="/images/mat-sq2.png" alt="sofa" />
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
                  <button>
                    <FiShoppingBag /> Add To Cart
                  </button>
                </div>
              </div>
            </div>
          )}
          {activeTab === "Chair" && <div></div>}
          {activeTab === "Curtain" && <div></div>}
        </div>
      </div>
      <Footer/>
    </React.Fragment>
  );
};

export default Wishlist;
