import React, { useState, useEffect, useContext } from "react";
import styles from "./footer.module.css";
import { useNavigate } from "react-router-dom";
import { ActiveContext } from "../../context/ActiveContext";

const Footer = () => {
  // const [activeItem, setActiveItem] = useState("home");
  const { activeMenu, setActiveMenu } = useContext(ActiveContext);
  const navigate = useNavigate();

  // useEffect(() => {
  //   console.log("Active item changed to:", activeMenu);
  // }, []);

  const handleItemClick = (item) => {
    setActiveMenu(item);
    navigate(`/${item}`);
    console.log(`item active is ${item}`);
  };

  // useEffect(() => {
  //   console.log("Component re-rendered");
  // });

  // useEffect(() => {
  //   console.log("Active item changed to:", activeItem);
  // }, [activeItem]); // Track activeItem changes

  return (
    <div className={`${styles.footer_bottom} ${styles.fixed_footer}`}>
      <div
        onClick={() => handleItemClick("home")}
        className={activeMenu === "home" ? styles.active : ""}
      >
        <img src="/images/home.png" alt="home" />
        <p>Home</p>
      </div>
      <div
        onClick={() => handleItemClick("search")}
        className={activeMenu === "search" ? styles.active : ""}
      >
        <img src="/images/search.png" alt="search" />
        <p>Search</p>
      </div>

      <div
        onClick={() => handleItemClick("wishlist")}
        className={activeMenu === "wishlist" ? styles.active : ""}
      >
        <img className="ms-1" src="/images/Heart.png" alt="heart" />
        <p>Wishlist</p>
      </div>

      <div
        onClick={() => handleItemClick("cart")}
        className={activeMenu === "cart" ? styles.active : ""}
      >
        <img src="/images/bag.png" alt="bag" />
        <p>Bag</p>
      </div>

      <div
        onClick={() => handleItemClick("profile")}
        className={activeMenu === "profile" ? styles.active : ""}
      >
        <img src="/images/profile.png" alt="profile" />
        <p>Profile</p>
      </div>
    </div>
  );
};

export default Footer;
