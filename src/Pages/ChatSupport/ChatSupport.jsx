import React, { useState } from "react";
import styles from "./support.module.css";
import Header from "../../Components/Header/Header";
import { FaPaperPlane } from "react-icons/fa";

const ChatSupport = () => {
  const [messages, setMessages] = useState([
    {
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      sender: "received",
      date: "20/8/2023",
    },
    {
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      sender: "user",
      date: "30/8/2023",
    },
  ]);
  const [input, setInput] = useState("");

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleSendMessage = (e) => {
    e.preventDefault();

    if (input.trim()) {
      setMessages([
        ...messages,
        { text: input, sender: "user", date: new Date().toLocaleDateString() },
      ]);
      setInput("");
    }
  };
  return (
    <React.Fragment>
      <Header title="Chat Support" />

      <div className={styles.scrollable_content}>
        <div className={styles.chatWindow}>
          {messages.map((message, index) => (
            <div key={index} className={styles.messageWrapper}>
              <div
                className={`${styles.message} ${
                  message.sender === "user"
                    ? styles.userMessage
                    : styles.receivedMessage
                }`}
              >
                {message.text}
              </div>
              <div
                className={`${styles.timestamp} ${
                  message.sender === "user"
                    ? styles.userTimestamp
                    : styles.receivedTimestamp
                }`}
              >
                {message.date}
              </div>
            </div>
          ))}
        </div>
        <form onSubmit={handleSendMessage} className={styles.inputArea}>
          <input
            type="text"
            value={input}
            onChange={handleInputChange}
            className={styles.input}
            placeholder="Message ..."
          />
          <button type="submit" className={styles.button}>
            <FaPaperPlane className={styles.icon} />
          </button>
        </form>
      </div>
    </React.Fragment>
  );
};

export default ChatSupport;
