import React, { useRef } from "react";
import styles from "./review.module.css";
import Header from "../../Components/Header/Header";
import StarRating from "../../Components/Star/StarRating";
import { MdOutlineAddPhotoAlternate } from "react-icons/md";
import { Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Review = () => {
  const navigate = useNavigate()
  const fileInputRef = useRef(null);

  const handleClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  return (
    <React.Fragment>
      <Header title="Write a Review" />

      <div className={`${styles.scrollable_content}`}>
        <h6>How would you rate it</h6>
        <StarRating/>

        {/* --------box-section------- */}

        <div className={styles.box_section}>
          <div>
            <label htmlFor="upload" onClick={handleClick}>
              Share a Video or Photo
            </label>

            <div className={styles.upload_box} onClick={handleClick}>
              <MdOutlineAddPhotoAlternate size={26} />
            </div>

            <input
              type="file"
              id="upload"
              ref={fileInputRef}
              style={{ display: "none" }}
            />
          </div>

          <div className={styles.form_section}>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicReview">
                <Form.Label>Title your review</Form.Label>
                <Form.Control type="text" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicDescription">
                <Form.Label>Description</Form.Label>
                <Form.Control as="textarea" rows={4} cols={50} />
              </Form.Group>
              <button onClick={() => navigate(`/help`)}>Submit</button>
            </Form>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Review;
