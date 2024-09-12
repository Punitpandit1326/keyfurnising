import React from "react";
import styles from "./canvas.module.css";
import { Offcanvas } from "react-bootstrap";
import { BiSolidOffer } from "react-icons/bi";
import HeaderClose from "../../../Components/HeaderClose/HeaderClose";

const CheckCanvas = ({ show, closeModal }) => {
  return (
    <React.Fragment>
      <Offcanvas
        className={styles.drawer}
        placement="bottom"
        show={show}
        onHide={closeModal} // Use onHide instead of closeModal
        backdrop={true}
      >
        <div className={styles.child_section}>
          <Offcanvas.Header className={styles.header}>
            <HeaderClose title="Coupon" closeModal={closeModal} />
          </Offcanvas.Header>

          <Offcanvas.Body>
            <div className={`${styles.scrollable_content}`}>
              <div className={styles.box}>
                <h6>WELCOME200</h6>
                <p>Add items worth ₹500 to unlock</p>
                <div className={styles.off}>
                  <BiSolidOffer className="text-danger" /> Get Upto 50% OFF{" "}
                </div>
                <div className={styles.code}>
                  <h6>Apply Code</h6>
                </div>
              </div>

              <div className={styles.box}>
                <h6>WELCOME200</h6>
                <p>Add items worth ₹500 to unlock</p>
                <div className={styles.off}>
                  <BiSolidOffer className="text-danger" /> Get Upto 50% OFF{" "}
                </div>
                <div className={styles.code}>
                  <h6>Apply Code</h6>
                </div>
              </div>
            </div>
          </Offcanvas.Body>
        </div>
      </Offcanvas>
    </React.Fragment>
  );
};

export default CheckCanvas;
