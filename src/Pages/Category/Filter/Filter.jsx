import React from "react";
import styles from "./filter.module.css";
import { Offcanvas } from "react-bootstrap";
import HeaderClose from "../../../Components/HeaderClose/HeaderClose";
import { HiOutlineGlobeAsiaAustralia } from "react-icons/hi2";
import { MdOutlineCurtainsClosed } from "react-icons/md";
import { FaCouch } from "react-icons/fa";
import PriceRanges from "../../../Components/PriceRanges/PriceRanges";
import Colors from "../../../Components/Colors/Colors";

const Filter = ({ show, closeModal }) => {
  const categories = [
    { name: "Upholstery Curtains", icon: <MdOutlineCurtainsClosed /> },
    { name: "Upholstery Furniture", icon: <FaCouch /> },
    { name: "Furniture", icon: <HiOutlineGlobeAsiaAustralia /> },
  ];

  return (
    <React.Fragment>
      <Offcanvas
        className={styles.drawer}
        placement="bottom"
        show={show}
        onHide={closeModal}
        backdrop={true}
      >
        <div className={styles.child_section}>
          <Offcanvas.Header className={styles.header}>
            <HeaderClose title="Filters" closeModal={closeModal} />
          </Offcanvas.Header>

          <Offcanvas.Body>
            <div className={`${styles.scrollable_content}`}>
              <h6>Categories</h6>
              <div className={styles.category_section}>
                {categories.map((category, index) => (
                  <div key={index} className={styles.categoryItem}>
                    <span className={styles.categoryIcon}>{category.icon}</span>
                    <span className={styles.categoryName}>{category.name}</span>
                  </div>
                ))}
              </div>
              <hr />
              <div className={styles.ranges}>
                <h6>Price</h6>
                <PriceRanges />
              </div>
              <hr />
              <div className={styles.color}>
                <h6>Colors</h6>
                <Colors />
              </div>
            </div>

            <div className={styles.btn_section}>
              <button>Clear All</button>
              <button>Show 92 Products</button>
            </div>
          </Offcanvas.Body>
        </div>

      </Offcanvas>
    </React.Fragment>
  );
};

export default Filter;
