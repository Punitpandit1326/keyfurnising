import React, { useState } from "react";
import styles from "./notify.module.css";
import { SlArrowLeft } from "react-icons/sl";
import { useNavigate } from "react-router-dom";

const Notification = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("unread");
  const userData = [
    {
      image: "/Images/rounded-bag.png",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum.",
      date: "May 11, 2024",
    },
    {
      image: "/Images/rounded-bag.png",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum.",
      date: "A Min Ago",
    },
    {
      image: "/Images/rounded-bag.png",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum.",
      date: "August 10, 2024",
    },
    {
      image: "/Images/rounded-bag.png",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum.",
      date: "June 13, 2024",
    },
  ];
  const notification = [
    {
      image: "/Images/rounded-bag.png",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum.",
      date: "May 11, 2024",
    },
    {
      image: "/Images/rounded-bag.png",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum.",
      date: "A Min Ago",
    },
    {
      image: "/Images/rounded-bag.png",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum.",
      date: "May 12, 2024",
    },
    {
      image: "/Images/rounded-bag.png",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum.",
      date: "June 13, 2024",
    },
    {
      image: "/Images/rounded-bag.png",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum.",
      date: "June 13, 2024",
    },
    {
      image: "/Images/rounded-bag.png",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum.",
      date: "June 13, 2024",
    },
    {
      image: "/Images/rounded-bag.png",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum.",
      date: "June 14, 2024",
    },
    {
      image: "/Images/rounded-bag.png",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum.",
      date: "June 15, 2024",
    },
  ];

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <React.Fragment>
      <div className={styles.head_section}>
        <h6>
          {" "}
          <SlArrowLeft onClick={() => navigate(-1)} /> Notifications{" "}
        </h6>
        <p>Clear All</p>
      </div>

      <div className={`${styles.scrollable_content}`}>
        <div className={styles.status}>
          <p
            onClick={() => handleTabClick("unread")}
            style={{ color: activeTab === "unread" ? "black" : "silver" }}
          >
            Unread
          </p>
          <p
            onClick={() => handleTabClick("notifications")}
            style={{
              color: activeTab === "notifications" ? "black" : "silver",
            }}
          >
            All Notifications
          </p>
        </div>
        {activeTab === "unread" && (
          <div className={styles.main_section}>
            {userData.length < 1 ? (
              <div className={styles.empty_section}>
                <img src="/Images/empty.png" alt="No data available" />
                <p>
                  Oh No! There is no Notifications <br /> We will send you some
                  exciting notifications{" "}
                </p>
              </div>
            ) : (
              userData.map((user, index) => (
                <div className={styles.notify_sec} key={index}>
                  <img src={user.image} alt="User" />
                  <div>
                    <p>{user.desc}</p>
                    <span>{user.date}</span>
                  </div>
                </div>
              ))
            )}
          </div>
        )}

        {activeTab === "notifications" && (
          <div className={styles.main_section}>
            {notification.length < 1 ? (
              <div className={styles.empty_section}>
                <img src="/Images/empty.png" alt="No data available" />
                <p>
                  Oh No! There is no Notifications <br /> We will send you some
                  exciting notifications{" "}
                </p>
              </div>
            ) : (
                notification.map((user, index) => (
                <div className={styles.notify_sec} key={index}>
                  <img src={user.image} alt="User" />
                  <div>
                    <p>{user.desc}</p>
                    <span>{user.date}</span>
                  </div>
                </div>
              ))
            )}
          </div>
        )}
      </div>
    </React.Fragment>
  );
};

export default Notification;
