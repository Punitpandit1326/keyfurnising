import React from "react";
import styles from "./header.module.css";
import { SlArrowLeft } from "react-icons/sl";
import { useNavigate } from "react-router-dom";

const Header = ({ title, subtittle }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(-1);
  };

  return (
    <header className={styles.header}>
      <h6>
        <SlArrowLeft onClick={handleClick} /> {title}{" "}
      </h6>
    </header>
  );
};

export default Header;
