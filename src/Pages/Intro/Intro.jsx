import React from "react";
import styles from "./intro.module.css";
import { Link, useNavigate } from "react-router-dom";

const Intro = () => {
  const navigate = useNavigate();
  const next = () => {
    navigate(`/login`);
  };
  return (
    <React.Fragment>
      <div className={styles.main_section}>
        <img height={380} src="/images/group_img.png" alt="key" />

        <div className={styles.child_section}>
          {/* <img src="/images/key-2.png" alt="key" /> */}
          <h6>Key Furnishings</h6>
          <h6>
            Find your perfect Upholstery Furniture's for your perfect homes{" "}
          </h6>
          <div className={styles.btn_section}>
            <button onClick={next}>Get Started</button>
            <button>
              <img src="/images/Google.png" alt="Google" /> Continue with google
            </button>
            <button>
              {" "}
              <img src="/images/Facebook.png" alt="Google" /> Continue with
              Facebook
            </button>

            <Link to={"/login"}>Any Trouble with login ?</Link>
            <p>
              By signing up , you agree to our <span>Terms</span>. See how we
              use your data in our <span>Privacy Policy</span>. We Never Post to
              Facebook
            </p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Intro;
