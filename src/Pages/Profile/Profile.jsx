import React from "react";
import { HiUser } from "react-icons/hi2";
import { BsHeart } from "react-icons/bs";
import styles from "./profile.module.css";
import { MdOutlineModeEdit } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { FiShoppingBag } from "react-icons/fi";
import Footer from "../../Components/Footer/Footer";
import { RiDiscountPercentLine } from "react-icons/ri";
import { IoIosHelpCircleOutline } from "react-icons/io";
import { IoChatboxEllipsesOutline } from "react-icons/io5";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const Profile = () => {
  const navigate = useNavigate();

  return (
    <React.Fragment>
      <div className={styles.head_section}>
        <h6>Profile</h6>
        <div className={styles.user_section}>
          <div className="d-flex gap-2">
            <div className={styles.user_icon}>
              <HiUser />
            </div>
            <div>
              <h6>Nishant Choudhary</h6>
              <p>Nishu12364@gmail.com</p>
            </div>
          </div>
          <img
            onClick={() => navigate(`/editprofile`)}
            src="/Images/edit_profile.png"
            alt="profile"
          />
        </div>

        {/* ------hero-section-------- */}

        <div className={styles.main_hero_section}>
          <div className={styles.cards} onClick={() => navigate(`/wishlist`)}>
            <span>
              {" "}
              <BsHeart />{" "}
            </span>
            <p>My Wishlist</p>
          </div>

          <div className={styles.cards} onClick={() => navigate(`/myorder`)}>
            <span>
              {" "}
              <FiShoppingBag />{" "}
            </span>
            <p>My Orders</p>
          </div>
        </div>

        {/* ------Suppoort-section-------- */}

        <div className={styles.bottom_section}>
          <div
            className={styles.section}
            onClick={() => navigate(`/editprofile`)}
          >
            <MdOutlineModeEdit size={22} />
            <p>Edit Profile</p>
            <MdOutlineKeyboardArrowRight className={styles.icon} />
          </div>

          <div className={styles.section} onClick={() => navigate(`/help`)}>
            <IoIosHelpCircleOutline size={22}  />
            <p>Help</p>
            <MdOutlineKeyboardArrowRight className={styles.icon} />
          </div>

          <div className={styles.section} onClick={() => navigate(`/coupon`)}>
            <RiDiscountPercentLine size={22}  />
            <p>Coupons & Promotional deals</p>
            <MdOutlineKeyboardArrowRight className={styles.icon} />
          </div>

          <div
            className={styles.section}
            onClick={() => navigate(`/myaddress`)}
          >
            <img
              src="/Images/home.png"
              alt="file"
              width="26px"
              height="24px"
            />
            <p>Manage Addresses</p>
            <MdOutlineKeyboardArrowRight className={styles.icon} />
          </div>

          <div
            className={styles.section}
            onClick={() => navigate(`/chatsupport`)}
          >
            <IoChatboxEllipsesOutline size={22}/>
            <p>Chat with us</p>
            <MdOutlineKeyboardArrowRight className={styles.icon} />
          </div>
        </div>

        {/* ------leggal-section-------- */}

        <div className={styles.bottom_section_end}>
          <button>Log Out</button>
          <p>Version 1.0</p>
        </div>

        <Footer />
      </div>
    </React.Fragment>
  );
};

export default Profile;
