import React, { useState, useEffect } from "react";
import styles from "./search.module.css";
import { IoMdClose } from "react-icons/io";

const Search = () => {
  const [value, setValue] = useState("");
  const [searchHistory, setSearchHistory] = useState([]);

  // Load search history from localStorage when the component mounts
  useEffect(() => {
    const savedHistory =
      JSON.parse(localStorage.getItem("searchHistory")) || [];
    setSearchHistory(savedHistory);
  }, []);

  // Update localStorage whenever searchHistory changes
  useEffect(() => {
    localStorage.setItem("searchHistory", JSON.stringify(searchHistory));
  }, [searchHistory]);

  const handleInputChange = (e) => {
    setValue(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (
      e.key === "Enter" &&
      value.trim() !== "" &&
      !searchHistory.includes(value)
    ) {
      setSearchHistory([...searchHistory, value]);
      setValue("");
    }
  };

  const handleDeleteClick = (index) => {
    const updatedHistory = searchHistory.filter((_, i) => i !== index);
    setSearchHistory(updatedHistory);
  };

  return (
    <React.Fragment>
      <div className={styles.main}>
        <h6>Search</h6>
        <div>
          <input
            type="text"
            placeholder="Type Keywords"
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
            value={value}
          />
          <p>Recent Search</p>
          <hr />
          <div className={styles.scrollable_content}>
            {searchHistory.map((entry, index) => (
              <div key={index} className={styles.search_entry}>
               <span>{entry}</span>
                <span>
                  {" "}
                  <IoMdClose
                    onClick={() => handleDeleteClick(index)}
                    className={styles.delete_button}
                  />
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Search;
