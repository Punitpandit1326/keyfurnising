import React from "react";
import { HiUser } from "react-icons/hi2";
import styles from "./profile.module.css";
import { HiOutlineUserCircle } from "react-icons/hi";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate()
  return (
    <React.Fragment>
      <div className={styles.head_section}>
        <h6>Profile</h6>
        <div className={styles.user_section}>
          <div className={styles.user_icon}>
            {" "}
            <HiUser />
          </div>
          <div>
            <h6>Nishant Choudhary</h6>
            <p>Nishu12364@gmail.com</p>
          </div>
        </div>
        <hr style={{ background: "#000", height: "1px", margin: "0" }} />

          {/* ------Suppoort-section-------- */}

        <div className={styles.bottom_section}>
          <h6>Settings</h6>
          <div className={styles.section}>
            <span>
              {" "}
              <HiOutlineUserCircle style={{ fontSize: "30px" }} />
            </span>
            <p>Personal Information</p>
            <MdOutlineKeyboardArrowRight className={styles.icon} />
          </div>
          <hr style={{ height: "1px", margin: "0" }} />

          <div className={styles.section} onClick={() => navigate(`/editprofile`)}>
            <span>
              {" "}
              <HiOutlineUserCircle style={{ fontSize: "30px" }} />
            </span>
            <p>Edit Profile</p>
            <MdOutlineKeyboardArrowRight className={styles.icon} />
          </div>
          <hr style={{ height: "1px", margin: "0" }} />

          <div className={styles.section}>
            <span>
              {" "}
              <HiOutlineUserCircle style={{ fontSize: "30px" }} />
            </span>
            <p>My orders</p>
            <MdOutlineKeyboardArrowRight className={styles.icon} />
          </div>
          <hr style={{ height: "1px", margin: "0" }} />

          <div className={styles.section}>
            <span>
              {" "}
              <HiOutlineUserCircle style={{ fontSize: "30px" }} />
            </span>
            <p>My Address</p>
            <MdOutlineKeyboardArrowRight className={styles.icon} />
          </div>
          <hr style={{ height: "1px", margin: "0" }} />

          <div className={styles.section}>
            <span>
              {" "}
              <HiOutlineUserCircle style={{ fontSize: "30px" }} />
            </span>
            <p>My Wishlist</p>
            <MdOutlineKeyboardArrowRight className={styles.icon} />
          </div>
          <hr style={{ height: "1px", margin: "0" }} />
        </div>

        {/* ------Support-section-------- */}

        <div className={styles.bottom_section}>
          <h6>Support</h6>
          <div className={styles.section}>
            <span>
              {" "}
              <HiOutlineUserCircle style={{ fontSize: "30px" }} />
            </span>
            <p>Give us Feedback</p>
            <MdOutlineKeyboardArrowRight className={styles.icon} />
          </div>
          <hr style={{ height: "1px", margin: "0" }} />

          <div className={styles.section}>
            <span>
              {" "}
              <HiOutlineUserCircle style={{ fontSize: "30px" }} />
            </span>
            <p>Report a product</p>
            <MdOutlineKeyboardArrowRight className={styles.icon} />
          </div>
          <hr style={{ height: "1px", margin: "0" }} />

          <div className={styles.section}>
            <span>
              {" "}
              <HiOutlineUserCircle style={{ fontSize: "30px" }} />
            </span>
            <p>Call Us</p>
            <MdOutlineKeyboardArrowRight className={styles.icon} />
          </div>
       
          <hr style={{ height: "1px", margin: "0" }} />

        
        </div>


        {/* ------leggal-section-------- */}

        <div className={styles.bottom_section}>
          <h6>Legal</h6>
          <div className={styles.section}>
            <span>
              {" "}
              <HiOutlineUserCircle style={{ fontSize: "30px" }} />
            </span>
            <p>Terms & Condition</p>
            <MdOutlineKeyboardArrowRight className={styles.icon} />
          </div>
          <hr style={{ height: "1px", margin: "0" }} />

          <div className={styles.section}>
            <span>
              {" "}
              <HiOutlineUserCircle style={{ fontSize: "30px" }} />
            </span>
            <p>Privacy Policies</p>
            <MdOutlineKeyboardArrowRight className={styles.icon} />
          </div>
          <hr style={{ height: "1px", margin: "0" }} />

          <div className={styles.section}>
            <span>
              {" "}
              <HiOutlineUserCircle style={{ fontSize: "30px" }} />
            </span>
            <p>Open sources licences</p>
            <MdOutlineKeyboardArrowRight className={styles.icon} />
          </div>
       
          <hr style={{ height: "1px", margin: "0" }} />

        
        </div>


        {/* ------leggal-section-------- */}

        <div className={styles.bottom_section}>
          <h5>Log Out</h5>
        </div>

      </div>
    </React.Fragment>
  );
};

export default Profile;
