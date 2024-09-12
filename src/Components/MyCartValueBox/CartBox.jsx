import React, { useState } from "react";

const CartBox = () => {
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
          fontSize: "1.5rem",
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
          marginTop: '-5px',
          fontFamily: "Onest",
          fontSize: ".9rem"
        }}
      />
      <h2
        style={{ fontSize: "1.5rem", marginTop: "12px" }}
        onClick={handleIncrease}
      >
        +
      </h2>
    </div>
  );
};

export default CartBox;
