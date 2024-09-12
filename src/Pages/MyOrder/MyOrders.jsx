import React, { useState } from "react";
import styles from "./order.module.css";
import Header from "../../Components/Header/Header";
import { useNavigate } from "react-router-dom";

const MyOrders = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("Active");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <React.Fragment>
      <Header title="My Orders" />

      <div className={styles.scrollable_content}>

        <div className={styles.status}>
          <p
            onClick={() => handleTabClick("Active")}
            style={{
              color: activeTab === "Active" ? "#000" : "#e3e3e3",
            }}
          >
            Active
          </p>
          <p
            onClick={() => handleTabClick("Completed")}
            style={{
              color: activeTab === "Completed" ? "#000" : "#e3e3e3",
            }}
          >
            Completed
          </p>
          <p
            onClick={() => handleTabClick("Cancelled")}
            style={{
              color: activeTab === "Cancelled" ? "#000" : "#e3e3e3",
            }}
          >
            Cancelled
          </p>
        </div>

        <div className={styles.content}>
          {activeTab === "Active" && (
            <div className={styles.active_section}>
              <div
                onClick={() => navigate(`/orderhistory`)}
                className={styles.child_section}
              >
                <div className="d-flex gap-3">
                  <img src="/images/yellow-chair.png" alt="yellow-chair" />
                  <div className={styles.info}>
                    <h6>Frank Gehry wiggle Chair</h6>
                    <span>Upholstery Chair</span>
                    <p>₹1999</p>
                    <div className={styles.status_div}>Processing</div>
                  </div>
                </div>

                <div className={styles.star_secx}>
                  <img
                    className={`${styles.star}`}
                    src="/images/star.png"
                    alt="start"
                  />
                  <span>4.5</span>
                </div>
              </div>

              <hr />

              <div className={styles.child_section}>
                <div className="d-flex gap-3">
                  <img src="/images/yellow-chair.png" alt="yellow-chair" />
                  <div className={styles.info}>
                    <h6>Frank Gehry wiggle Chair</h6>
                    <span>Upholstery Chair</span>
                    <p>₹1999</p>
                    <div className={styles.status_div}>Processing</div>
                  </div>
                </div>
                <div className={styles.star_secx}>
                  <img
                    className={`${styles.star}`}
                    src="/images/star.png"
                    alt="start"
                  />
                  <span>4.5</span>
                </div>
              </div>

              <hr />

              <div className={styles.child_section}>
                <div className="d-flex gap-3">
                  <img src="/images/yellow-chair.png" alt="yellow-chair" />
                  <div className={styles.info}>
                    <h6>Frank Gehry wiggle Chair</h6>
                    <span>Upholstery Chair</span>
                    <p>₹1999</p>
                    <div className={styles.status_div}>Processing</div>
                  </div>
                </div>
                <div className={styles.star_secx}>
                  <img
                    className={`${styles.star}`}
                    src="/images/star.png"
                    alt="start"
                  />
                  <span>4.5</span>
                </div>
              </div>

              <hr />

              <div className={styles.child_section}>
                <div className="d-flex gap-3">
                  <img src="/images/yellow-chair.png" alt="yellow-chair" />
                  <div className={styles.info}>
                    <h6>Frank Gehry wiggle Chair</h6>
                    <span>Upholstery Chair</span>
                    <p>₹1999</p>
                    <div className={styles.status_div}>Processing</div>
                  </div>
                </div>
                <div className={styles.star_secx}>
                  <img
                    className={`${styles.star}`}
                    src="/images/star.png"
                    alt="start"
                  />
                  <span>4.5</span>
                </div>
              </div>
            </div>
          )}

          {activeTab === "Completed" && (
            <div className={styles.active_section}>
              <div className={styles.child_section}>
                <div className="d-flex gap-3">
                  <img src="/images/yellow-chair.png" alt="yellow-chair" />
                  <div className={styles.info}>
                    <h6>Frank Gehry wiggle Chair</h6>
                    <span>Upholstery Chair</span>
                    <p>₹1999</p>
                    <div className={styles.status_completed}>Completed</div>
                  </div>
                </div>

                <div className={styles.star_secx}>
                  <img
                    className={`${styles.star}`}
                    src="/images/star.png"
                    alt="start"
                  />
                  <span>4.5</span>
                </div>
              </div>

              <hr />

              <div className={styles.child_section}>
                <div className="d-flex gap-3">
                  <img src="/images/yellow-chair.png" alt="yellow-chair" />
                  <div className={styles.info}>
                    <h6>Frank Gehry wiggle Chair</h6>
                    <span>Upholstery Chair</span>
                    <p>₹1999</p>
                    <div className={styles.status_completed}>Completed</div>
                  </div>
                </div>

                <div className={styles.star_secx}>
                  <img
                    className={`${styles.star}`}
                    src="/images/star.png"
                    alt="start"
                  />
                  <span>4.5</span>
                </div>
              </div>

              <hr />
              <div className={styles.child_section}>
                <div className="d-flex gap-3">
                  <img src="/images/yellow-chair.png" alt="yellow-chair" />
                  <div className={styles.info}>
                    <h6>Frank Gehry wiggle Chair</h6>
                    <span>Upholstery Chair</span>
                    <p>₹1999</p>
                    <div className={styles.status_completed}>Completed</div>
                  </div>
                </div>

                <div className={styles.star_secx}>
                  <img
                    className={`${styles.star}`}
                    src="/images/star.png"
                    alt="start"
                  />
                  <span>4.5</span>
                </div>
              </div>
            </div>
          )}

          {activeTab === "Cancelled" && (
            <div className={styles.active_section}>
              <div className={styles.child_section} onClick={() => navigate(`/orderhistory`)}>
                <div className="d-flex gap-3">
                <img src="/images/yellow-chair.png" alt="yellow-chair" />
                <div className={styles.info}>
                  <h6>Frank Gehry wiggle Chair</h6>
                  <span>Upholstery Chair</span>
                  <p>₹1999</p>
                  <div className="d-flex gap-2">
                    <div className={styles.status_cancelled}>Cancelled</div>
                    <span>on 27 June 2024</span>
                </div>
           
                  </div>
                </div>
                <div className={styles.star_secx}>
                  <img
                    className={`${styles.star}`}
                    src="/images/star.png"
                    alt="start"
                  />
                  <span>4.5</span>
                </div>
              </div>

              <hr />

              <div className={styles.child_section} onClick={() => navigate(`/orderhistory`)}>
                <div className="d-flex gap-3">
                <img src="/images/yellow-chair.png" alt="yellow-chair" />
                <div className={styles.info}>
                  <h6>Frank Gehry wiggle Chair</h6>
                  <span>Upholstery Chair</span>
                  <p>₹1999</p>
                  <div className="d-flex gap-2">
                    <div className={styles.status_cancelled}>Cancelled</div>
                    <span>on 27 June 2024</span>
                </div>
           
                  </div>
                </div>
                <div className={styles.star_secx}>
                  <img
                    className={`${styles.star}`}
                    src="/images/star.png"
                    alt="start"
                  />
                  <span>4.5</span>
                </div>
              </div>

              <hr />
            </div>
          )}
        </div>
      </div>
    </React.Fragment>
  );
};

export default MyOrders;
