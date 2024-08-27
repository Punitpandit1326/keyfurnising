import React, { useState } from "react";

const ValueBox = () => {
  const [value, setValue] = useState(0);

  const handleIncrease = () => {
    setValue((prevValue) => prevValue + 1);
  };

  const handleDecrease = () => {
    setValue((prevValue) => (prevValue > 0 ? prevValue - 1 : 0));
  };
  
  return (
    <div style={{ display: "flex", alignItems: "center", marginTop: "-1px" }}>
      <h2
        onClick={handleDecrease}
        style={{
          marginRight: "10px",
          marginTop: "10px",
          fontSize: "1rem",
        }}
      >
        -
      </h2>
      <input
        type="text"
        value={value}
        readOnly
        style={{
          textAlign: "center",
          width: "22px",
          marginRight: "10px",
          border: "none",
          fontFamily: "Onest",
          fontSize: ".8rem"
        }}
      />
      <h2
        style={{ fontSize: "1rem", marginTop: "10px" }}
        onClick={handleIncrease}
      >
        +
      </h2>
    </div>
  );
};

export default ValueBox;
