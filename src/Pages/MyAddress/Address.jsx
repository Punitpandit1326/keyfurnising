import React from "react";
import styles from "./add.module.css";
import { CgAddR } from "react-icons/cg";
import { GoHome } from "react-icons/go";
import { SlArrowLeft } from "react-icons/sl";
import { useNavigate } from "react-router-dom";
import { PiBriefcaseFill } from "react-icons/pi";
import { IoLocationSharp } from "react-icons/io5";
import { MdOutlineModeEdit, MdDeleteOutline } from "react-icons/md";
const Address = () => {
  const navigate = useNavigate();
  return (
    <React.Fragment>
      <div className={styles.head_section}>
        <h6>
          <SlArrowLeft onClick={() => navigate(-1)} /> My Address
        </h6>
        <span>
          <CgAddR className={styles.icon} />
        </span>
      </div>

      <div className={`${styles.scrollable_content}`}>
        <div className={styles.main_section}>
          <h6>Saved Address</h6>
          <div className={styles.box}>
            <GoHome />
            <h6>Home</h6>
            <p>
              Sorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              vulputate libero et.
            </p>
            <p>India 110044</p>
            <p>7503063585</p>
            <div className="d-flex gap-2 mt-2">
              <MdOutlineModeEdit />
              <MdDeleteOutline className="text-danger" />
            </div>
          </div>

          <div className={styles.box}>
            <IoLocationSharp />
            <h6>Other</h6>
            <p>
              Sorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              vulputate libero et.
            </p>
            <p>India 110044</p>
            <p>7503063585</p>
            <div className="d-flex gap-2 mt-2">
              <MdOutlineModeEdit />
              <MdDeleteOutline className="text-danger" />
            </div>
          </div>

          <div className={styles.box}>
            <PiBriefcaseFill />
            <h6>Office</h6>
            <p>
              Sorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              vulputate libero et.
            </p>
            <p>India 110044</p>
            <p>7503063585</p>
            <div className="d-flex gap-2 mt-2">
              <MdOutlineModeEdit />
              <MdDeleteOutline className="text-danger" />
            </div>
          </div>

          <div className={styles.box}>
            <PiBriefcaseFill />
            <h6>Office</h6>
            <p>
              Sorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              vulputate libero et.
            </p>
            <p>India 110044</p>
            <p>7503063585</p>
            <div className="d-flex gap-2 mt-2">
              <MdOutlineModeEdit />
              <MdDeleteOutline className="text-danger" />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Address;
