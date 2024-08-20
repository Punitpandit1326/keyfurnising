import React, { useRef, useState } from "react";
import styles from "./home.module.css";
import { CiSearch } from "react-icons/ci";
import { LuShoppingBag } from "react-icons/lu";
import { PiMapPinAreaBold } from "react-icons/pi";
import { FaRegBell, FaCouch } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { MdOutlineCurtainsClosed } from "react-icons/md";
import { HiOutlineGlobeAsiaAustralia } from "react-icons/hi2";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../../Components/Footer/Footer";

const Home = () => {
  const navigate = useNavigate();
  const categories = [
    { name: "Explore", icon: <HiOutlineGlobeAsiaAustralia /> },
    { name: "Curtains", icon: <MdOutlineCurtainsClosed /> },
    { name: "Furniture", icon: <FaCouch /> },
    { name: "Interior", icon: <FaCouch /> },
  ];
  return (
    <React.Fragment>
      <div className={styles.head_section}>
        <h6>
          <PiMapPinAreaBold className={styles.icon} /> Lajpat Nagar, Delhi
        </h6>
        <div className={styles.child_img}>
          <LuShoppingBag className={styles.icon} />
          <FaRegBell onClick={() => navigate(`/notification`)} className={styles.icon} />
        </div>
      </div>

      <div className={styles.scrollable_content}>
        <input type="text" placeholder="Search" />
        <CiSearch className={styles.search_icon} />

        <div className={styles.category_section}>
          {categories.map((category, index) => (
            <div key={index} className={styles.categoryItem}>
              <span className={styles.categoryIcon}>{category.icon}</span>
              <span className={styles.categoryName}>{category.name}</span>
            </div>
          ))}
        </div>

        <>
          <Swiper
            pagination={{
              dynamicBullets: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className={styles.slider}>
                <img src="/images/interior.png" alt="interior" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <div className={styles.slider}>
                <img src="/images/interior.png" alt="interior" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <div className={styles.slider}>
                <img src="/images/interior.png" alt="interior" />
              </div>
            </SwiperSlide>
          </Swiper>
        </>

        <div className={styles.rounded_img}>
          <div>
            <img src="/images/mat-rounded.png" alt="mat" />
            <p>Upholstery</p>
          </div>
          <div>
            <img src="/images/chair_rounded.png" alt="chair" />
            <p>Furniture</p>
          </div>
          <div>
            <img src="/images/curtain_rounded.jpg" alt="curtain" />
            <p>Curtains</p>
          </div>
        </div>

        <div className={styles.overlay_section}>
          <img src="/images/mat.png" alt="mat" />
        </div>

        <div className={styles.overlay}>
          <h6>Upholstery Fabric</h6>
          <p>Torem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>

        <div className={styles.off}>10% OFF</div>

        <div className={styles.product_section}>
          
          {/* ----------card-section--------- */}

          <div className={styles.child}>
            <p>Luxury : Chairs</p>
            <Link to={""}>View all</Link>
          </div>
          <hr style={{ margin: "0" }} />

          <div className="d-flex justify-content-between">
            <div>
              <div
                className={styles.card_section}
                onClick={() => navigate(`/category`)}
              >
                <img src="/images/sofa.png" alt="sofa" />
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
              <div className={styles.rating_section}>
                <img src="/images/star.png" alt="star" />
                <p>4.5 (45)</p>
              </div>
            </div>

            <div>
              <div className={styles.card_section}>
                <img src="/images/sofa-3.png" alt="sofa" />
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
              <div className={styles.rating_section}>
                <img src="/images/star.png" alt="star" />
                <p>4.5 (45)</p>
              </div>
            </div>
          </div>

          {/* ----------card-mat-section--------- */}

          <div className={styles.child}>
            <p>Upholstery </p>
            <Link to={""}>View all</Link>
          </div>
          <hr style={{ margin: "0" }} />

          <div className="d-flex justify-content-between">
            <div>
              <div className={styles.card_section}>
                <img src="/images/mat-sq.png" alt="sofa" />
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
              <div className={styles.rating_section}>
                <img src="/images/star.png" alt="star" />
                <p>4.5 (45)</p>
              </div>
            </div>

            <div>
              <div className={styles.card_section}>
                <img src="/images/mat-sq2.png" alt="sofa" />
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
              <div className={styles.rating_section}>
                <img src="/images/star.png" alt="star" />
                <p>4.5 (45)</p>
              </div>
            </div>
          </div>

          {/* ----------card-curtain-section--------- */}

          <div className={styles.child}>
            <p>Curtains </p>
            <Link to={""}>View all</Link>
          </div>
          <hr style={{ margin: "0" }} />

          <div className="d-flex justify-content-between">
            <div>
              <div className={styles.card_section}>
                <img src="/images/mat-sq.png" alt="sofa" />
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
              <div className={styles.rating_section}>
                <img src="/images/star.png" alt="star" />
                <p>4.5 (45)</p>
              </div>
            </div>

            <div>
              <div className={styles.card_section}>
                <img src="/images/mat-sq2.png" alt="sofa" />
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
              <div className={styles.rating_section}>
                <img src="/images/star.png" alt="star" />
                <p>4.5 (45)</p>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </React.Fragment>
  );
};

export default Home;
