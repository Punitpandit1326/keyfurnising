import React, { useRef, useState } from "react";
import styles from "./otp.module.css";
import { Link, useNavigate } from "react-router-dom";
const Otp = () => {
  const inputRefs = [useRef(), useRef(), useRef(), useRef()];
  const [otp, setOtp] = useState(["", "", "", ""]);

  const navigate = useNavigate();
  const next = () => {
    navigate(`/home`);
  };

  const handleInputChange = (index, value) => {
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value !== "" && index < otp.length - 1) {
      inputRefs[index + 1].current.focus();
    } else if (value === "" && index > 0) {
      inputRefs[index - 1].current.focus();
    }
  };

  return (
    <React.Fragment>
      <div className={styles.main_section}>
        <img  src="/images/group_img.png" alt="key" />

        <div className={styles.child_section}>
          <h6>Key Furnish ngs</h6>
          <h6>We’ve sent you a OTP code on your number 75030xxxxx</h6>
          <div className={styles.btn_section}>
            <div className="form-group mb-3">
              <div className={styles.otp_input_container}>
                <label>Enter Otp</label>
                <div>
                  {otp.map((digit, index) => (
                    <input
                      key={index}
                      ref={inputRefs[index]}
                      type="text"
                      maxLength="1"
                      value={digit}
                      onChange={(e) => handleInputChange(index, e.target.value)}
                    />
                  ))}
                </div>
              </div>
            </div>
            <button onClick={next}>Verify Otp</button>
            <Link to={"/any-trouble-page"}>Any Trouble with login ?</Link>
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

export default Otp;
