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
    if (item === "home") {
      handleClick();
    }
    if (item === "search") {
      handleSearch();
    }
    if (item === "wishlist") {
      handleWishlist();
    }
    if (item === "cart") {
      handlecart();
    }
  };

  const handleClickNavigation = () => {
    navigate(`/Profile`);
  };

  const handleClick = () => {
    navigate(`/home`);
  };

  const handleSearch = () => {
    navigate(`/search`);
  }

  const handleWishlist = () => {
    navigate(`/wishlist`);
  }

  const handlecart = () => {
    navigate(`/cart`);
  }

  return (
    <div>
      {/* <hr style={{ color: "#d9d9d9", height: "2px" }} /> */}
      <div className={`${styles.footer_bottom} ${styles.fixed_footer}`}>
        <div onClick={() => handleItemClick("home")}
          className={activeItem === "home" ? styles.active : ""}
        >
          <img src="/images/home.png" alt="home" /> <p>Home</p>
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
          onClick={() => handleItemClick("cart")}
          className={activeItem === "cart" ? styles.active : ""}
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
