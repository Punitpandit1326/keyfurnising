import React from "react";
import styles from "./header.module.css";
import { IoMdClose } from "react-icons/io";

const HeaderClose = ({ title, closeModal }) => {


  return (
    <header className={styles.header}>
      <h6><IoMdClose onClick={closeModal} /> {title}</h6>
      
    </header>
  );
};

export default HeaderClose;
