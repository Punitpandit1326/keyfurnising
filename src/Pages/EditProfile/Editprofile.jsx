import React from "react";
import styles from "./edit.module.css";
import { SlArrowLeft } from "react-icons/sl";
import { Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Header from "../../Components/Header/Header";
import { MdOutlineCameraAlt } from "react-icons/md";

const Editprofile = () => {
  // const navigate = useNavigate();
  return (
    <React.Fragment>
      {/* <div onClick={() => navigate(-1)} className={styles.head_section}>
        <h6>
          <SlArrowLeft /> Edit Profile
        </h6>
      </div> */}

      <Header title="Edit Profile"/>

      <div className={styles.scrollable_content}>
        <div className={styles.user_info}>
          <img src="/Images/user.png" alt="user" />
          <div className={styles.add}> <MdOutlineCameraAlt className={styles.icon} /> Add </div>
        </div>

        <div className={styles.info_section}>
          <h6>Basic Info</h6>
          <p>Porem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.
          </p>
        </div>

        <div className={styles.form_sec}>
          <Form>
            <Form.Group className="mb-3" controlId="name">
              <Form.Label>Full Name </Form.Label>
              <Form.Control type="text" placeholder="Nishant Choudhary" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="number">
              <Form.Label>Phone Number </Form.Label>
              <Form.Control type="number" placeholder="7505089302" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email </Form.Label>
              <Form.Control type="email" placeholder="Nishu12364@gmail.com" />
            </Form.Group>

            <Button variant="primary"> Save Profile</Button>
          </Form>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Editprofile;
