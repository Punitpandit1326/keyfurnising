import React from "react";
import { Form } from "react-bootstrap";
import styles from "./return.module.css";
import Header from "../../Components/Header/Header";
import { useNavigate } from "react-router-dom";

const ProductReturn = () => {
  const navigate = useNavigate();
  return (
    <React.Fragment>
      <Header title="Product Return" />

      <div className={styles.scrollable_content}>
        <h6>Product</h6>

        <div className={styles.card_section}>
          <img src="/images/sofa-yellow.png" alt="sofa" />
          <div>
            <h6>Frank Gehry wiggle Chair </h6>
            <span className="text-decoration-none">Upholstery Chair</span>
            <div className="d-flex gap-2 pt-2">
              <p>
                <span> ₹ 2999 </span>₹ 1999
              </p>
              <div className={styles.offer}>50%</div>
            </div>
            <div className={styles.star_secx}>
              <img
                className={`${styles.star}`}
                src="/images/star.png"
                alt="start"
              />
              <span className="text-decoration-none">4.5</span>
            </div>
          </div>
        </div>
        <hr />

        <div className={styles.product_section}>
          <h6>Why do you want to return this product ?</h6>
          <Form.Select aria-label="Default select example">
            <option>Select Option</option>
            <option value="1">One</option>
            <option value="2">Two</option>
          </Form.Select>

          <Form.Group className="mb-3" controlId="formBasicDescription">
            <Form.Label>Describe your Issue</Form.Label>
            <Form.Control
              as="textarea"
              rows={10}
              cols={60}
              placeholder="Type Something.."
            />
          </Form.Group>
        </div>

        <button onClick={() => navigate(`/productreturn`)}>Continue</button>
      </div>
    </React.Fragment>
  );
};

export default ProductReturn;
