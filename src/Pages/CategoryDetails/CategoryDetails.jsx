import styles from "./category.module.css";
import "./cate.css";
import { FaSignal } from "react-icons/fa";
import { LuBatteryFull } from "react-icons/lu";
import { Swiper, SwiperSlide } from "swiper/react";
import { SlArrowLeft } from "react-icons/sl";
import { FaStar, FaCheck } from "react-icons/fa";
import { ProgressBar } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { Pagination, Navigation } from "swiper/modules";
import StarRating from "../../Components/Star/StarRating";
import React, { useEffect, useRef, useState } from "react";
import ColorPicker from "../../Components/ColorPicker/ColorPicker";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
// import { IoMdAlarm, IoIosWifi, IoMdBluetooth } from "react-icons/io";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft, MdEdit,} from "react-icons/md";

const CategoryDetails = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  // const [time, setTime] = useState(new Date());

  const navigate = useNavigate();

  const handleclick = () => {
    navigate(`/checkout`);
  };

  const images = [
    "/Images/chair.png",
    "/Images/chair-2.png",
    "/Images/chair-3.png",
    "/Images/chair-4.png",
  ];



  // Ref to access Swiper instance
  const swiperRef = useRef(null);

  // Handle Swiper slide change
  const handleSlideChange = (swiper) => {
    const index = swiper.activeIndex;
    setActiveIndex(index);
  };

  // Handle thumbnail click
  const handleThumbnailClick = (index) => {
    setActiveIndex(index);
    swiperRef.current?.slideTo(index); 
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
        <h6>
          <SlArrowLeft onClick={() => navigate(-1)} /> Product Details
        </h6>
        <div className={styles.child_img}>
          <img src="/images/share.png" alt="Heart_Red" />
          <img src="/images/Heart-Red.png" alt="Heart-Red" />
        </div>
      </div>

      <div className={`${styles.scrollable_content}`}>
        <div className={styles.slider_section}>

          {/* ----------swiper-section--------- */}

          <div className={styles.swiperContainer}>
            <Swiper
              navigation={true}
              modules={[Navigation]}
              className="mySwiper"
              onSlideChange={handleSlideChange} 
              initialSlide={activeIndex} 
              onSwiper={(swiper) => {
                swiperRef.current = swiper; 
              }}
            >
              {images.map((img, index) => (
                <SwiperSlide key={index}>
                  <div className={styles.slider}>
                    <img
                      className={styles.mainImage}
                      src={img}
                      alt={`chair-${index}`}
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Thumbnails below the Swiper */}
            <div className={styles.allChairs}>
              {images.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`chair-${index}`}
                  className={`${styles.smallImage} ${
                    activeIndex === index ? styles.active : ""
                  }`}
                  onClick={() => handleThumbnailClick(index)}
                />
              ))}
            </div>
          </div>
        </div>

        <div className={styles.des_section}>
          <h6> Sofa : Frank Gehry wiggle Chair </h6>
          <div className="d-flex justify-content-between mx-2 mt-3">
            <div className="d-flex ">
              <p>
                <span> ₹ 2999 </span>₹ 1999
              </p>
              <div className={styles.offer}>50%</div>
            </div>
            <div className={styles.rating_section}>
              <img src="/images/star.png" alt="star" />
              <p> 4.5 </p>
            </div>
          </div>
          <hr style={{ color: "#d9d9d9", height: "2px" }} />
        </div>

        <div className={styles.variant_section}>
          <p>Select Variant </p>
          <div className={styles.color}>
            <div className="d-flex gap-2">
              <p>Color : Brown </p>
              <ColorPicker />
            </div>
            <p>
              6 more <MdOutlineKeyboardArrowRight />
            </p>
          </div>
          <hr style={{ color: "#d9d9d9", height: "2px" }} />
        </div>

        <div className={styles.variant_section}>
          <p>Deliver to </p>
          <div className={styles.color}>
            <div>
              <p className="mb-0">Nishant Choudhary ,110044 </p>
              <span>
                h-11 gali no 1 Saraswati colony sehatpur Faridabad Near Baisla
                properties
              </span>
            </div>
            <p className="m-0">
              <MdEdit />
            </p>
          </div>
          <h6>Free Delivery by tommorow </h6>
          <hr style={{ color: "#d9d9d9", height: "2px" }} />

          <div className={styles.coupon_section}>
            <p>All Offers & Coupon</p>
            <p className="me-0">
              <MdOutlineKeyboardArrowRight />
            </p>
          </div>
          <hr style={{ color: "#d9d9d9", height: "2px" }} />
        </div>

        <div className={styles.specification}>
          <div>
            <h6>Specifications</h6>
            <p>
              He’s got style, a groovy style, and a car that just won’t stop.
              When the going gets tough, he’s really rough, with a Hong Kong
              Phooey chop Hong Kong Phooey, number one super guy
            </p>
          </div>
          <div>
            <h6>Fabric</h6>
            <ul>
              <li>55% Cotton</li>
              <li>12% Viscose</li>
              <li>14% Rayon</li>
              <li>25% Polyester</li>
            </ul>
          </div>
          <div>
            <h6>Total Composition</h6>
            <p>100% Polyester</p>
            <p>
              high Resilient Polyurethane foam ( Cold Foam ) Polyurethane foam
              2.0 lb/cu.ft, hollow Fiber polyester wadding.
            </p>
          </div>
          <hr style={{ color: "#d9d9d9", height: "2px" }} />
        </div>

        <div className={styles.review_section}>
          <h6>Review</h6>
          <div className={styles.main_review}>
            <div className={styles.left}>
              <h1>4.5</h1>
              <StarRating />
              <p>
                75,020 Ratings and <br />
                2565 Reviews
              </p>
            </div>
            <div className={styles.right}>
              <div className="d-flex">
                <p>5 &#9733;</p>
                <ProgressBar variant="success" now={60} />
                <span>75,020</span>
              </div>
              <div className="d-flex ">
                <p>4 &#9733;</p>
                <ProgressBar variant="success" now={20} />
                <span>10,020</span>
              </div>
              <div className="d-flex ">
                <p> 3 &#9733; </p>
                <ProgressBar variant="success" now={40} />
                <span>5,020</span>
              </div>
              <div className="d-flex">
                <p> 2 &#9733; </p>
                <ProgressBar variant="success" now={30} />
                <span>1,020</span>
              </div>
              <div className="d-flex ">
                <p> 1 &#9733; </p>
                <ProgressBar variant="success" now={10} />
                <span>199</span>
              </div>
            </div>
          </div>
          <hr style={{ color: "#d9d9d9", height: "2px" }} />
        </div>

        <div className={styles.fab_section}>
          <div className="d-flex gap-2">
            {" "}
            <StarRating /> <h6> Fabulous ! </h6>
          </div>
          <p>
            Qorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
            turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus
            nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum
            tellus elit sed risus. <span>more</span>
          </p>
          <div className={styles.mat_sec}>
            <img src="/images/mat-1.png" alt="mat" />
            <img src="/images/mat-2.png" alt="mat" />
          </div>
          <div className="d-flex ">
            <h5>Nishant Choudhary, Delhi</h5>
            <div className={styles.verfied_sec}>
              Verified <FaCheck />
            </div>
          </div>

          <hr style={{ color: "#d9d9d9", height: "2px" }} />
        </div>

        <div className={styles.rev_section}>
          <p>Reviews</p>
          <p>
            <MdOutlineKeyboardArrowRight />
          </p>
        </div>

        <hr
          style={{
            color: "#d9d9d9",
            height: "2px",
            width: "95%",
            margin: "0 auto",
          }}
        />
        <div>
          <div className={styles.product_sec}>
            <p>Related Products</p>
            <Link to={""}>View All</Link>
          </div>

          <div className={styles.main_card_section}>
            <div>
              <div className={styles.card_section}>
                <img src="/images/sofa.png" alt="sofa" />
                <h6>Modern Sofa : Frank Gehry wiggle Chair </h6>
                <div className="d-flex">
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

            <div>
              <div className={styles.card_section_2}>
                <img src="/images/sofa-2.png" alt="sofa" />
                <h6> Sofa : Frank Gehry wiggle Chair </h6>
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
        </div>
      </div>

      <div className={styles.btn_section}>
        <button onClick={handleclick}>Add To Cart</button>
        <button onClick={handleclick}>Buy Now</button>
      </div>
    </React.Fragment>
  );
};

export default CategoryDetails;
