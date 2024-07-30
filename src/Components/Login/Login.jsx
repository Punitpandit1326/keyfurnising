import React from "react";
import styles from "./login.module.css";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <React.Fragment>
      <div className={styles.main_section}>
        <img src="/images/group_img.png" alt="key" />

        <div className={styles.child_section}>
          <img src="/images/key-2.png" alt="key" />
          <h6>Key Furnish  ngs</h6>
          <h6>
            Find your perfect Upholstery Furniture's for your perfect homes{" "}
          </h6>
          <div className={styles.btn_section}>
            <input type="text" placeholder="Enter phone number" />
            <button>Get Started</button>
            <Link to={""}>Any Trouble with login ?</Link>
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

export default Login;
