import React, { useState } from "react";
import { Form } from "react-bootstrap";
import styles from "./address.module.css";
import Header from "../../Components/Header/Header";
import { useNavigate } from "react-router-dom";

const AddAddress = () => {
  const navigate = useNavigate()
  const [selected, setSelected] = useState("Home");

  const handleSelection = (selection) => {
    setSelected(selection);
  };

  return (
    <React.Fragment>
      <Header title="Add Address" />
      <div className={`${styles.scrollable_content}`}>
        <h6>Enter Complete Address</h6>
        <hr />
        <div className="mt-2">
          <label className="pb-2">Save address as</label>
          <div className={styles.buttonGroup}>
            <button
              onClick={() => handleSelection("Home")}
              className={`${styles.addressButton} ${
                selected === "Home" ? styles.selected : ""
              }`}
            >
              Home
            </button>
            <button
              onClick={() => handleSelection("Work")}
              className={`${styles.addressButton} ${
                selected === "Work" ? styles.selected : ""
              }`}
            >
              Work
            </button>
            <button
              onClick={() => handleSelection("Other")}
              className={`${styles.addressButton} ${
                selected === "Other" ? styles.selected : ""
              }`}
            >
              Other
            </button>
          </div>
        </div>

        {/* ---------form-section----------- */}

        <div className={styles.form_section}>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>Receiver's Name</Form.Label>
              <Form.Control type="text" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicContact">
              <Form.Label>Receiver's Contact</Form.Label>
              <Form.Control type="number" inputMode="numeric" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicflat">
              <Form.Label>Flat / House no / Floor / Building</Form.Label>
              <Form.Control type="text" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicArea">
              <Form.Label>Area / Sector / Locality </Form.Label>
              <Form.Control type="text" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicLandmark">
              <Form.Label> Nearby Landmark</Form.Label>
              <Form.Control type="text" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicCity">
              <Form.Label> City</Form.Label>
              <Form.Control type="text" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicState">
              <Form.Label> State</Form.Label>
              <Form.Control type="text" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPincode">
              <Form.Label> Pincode</Form.Label>
              <Form.Control type="number" inputMode="numeric" />
            </Form.Group>
          </Form>

          <button onClick={() => navigate(`/coupon`)}> Add Address</button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default AddAddress;
