import React, { useState } from "react";
import styles from "./footer.module.css";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const [activeItem, setActiveItem] = useState("home");
  const navigate = useNavigate();

  const handleItemClick = (item) => {
    setActiveItem(item);
    if (item === "profile") {
      handleClickNavigation();
    }
  };

  const handleClickNavigation = () => {
    navigate(`/Profile`);
  };

  return (
    <div>
      <hr style={{ color: "#d9d9d9", height: "2px" }} />
      <div className={`${styles.footer_bottom} ${styles.fixed_footer}`}>
        <div
          onClick={() => handleItemClick("home")}
          className={activeItem === "home" ? styles.active : ""}
        >
          <img src="/images/home.png" alt="home" />
          <p>Home</p>
        </div>
        <div
          onClick={() => handleItemClick("search")}
          className={activeItem === "search" ? styles.active : ""}
        >
          <img src="/images/search.png" alt="search" />
          <p>Search</p>
        </div>
        <div
          onClick={() => handleItemClick("wishlist")}
          className={activeItem === "wishlist" ? styles.active : ""}
        >
          <img className="ms-1" src="/images/Heart.png" alt="heart" />
          <p>Wishlist</p>
        </div>
        <div
          onClick={() => handleItemClick("bag")}
          className={activeItem === "bag" ? styles.active : ""}
        >
          <img src="/images/bag.png" alt="bag" />
          <p>Bag</p>
        </div>
        <div
          onClick={() => handleItemClick("profile")}
          className={activeItem === "profile" ? styles.active : ""}
        >
          <img src="/images/profile.png" alt="profile" />
          <p>Profile</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
