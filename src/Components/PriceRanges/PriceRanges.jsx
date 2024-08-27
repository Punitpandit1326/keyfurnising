import React, { useState } from "react";
import "./ranges.css";

function PriceRanges() {
  const [minValue, setMinValue] = useState(0);
  const [maxValue, setMaxValue] = useState(10000);

  const handleMinChange = (event) => {
    const value = parseInt(event.target.value);
    if (value <= maxValue) {
      setMinValue(value);
    }
  };

  const handleMaxChange = (event) => {
    const value = parseInt(event.target.value);
    if (value >= minValue) {
      setMaxValue(value);
    }
  };

  return (
    <div>
      <div className="range-slider">
        <input
          type="range"
          min="100"
          max="10000"
          value={minValue}
          onChange={handleMinChange}
          className="thumb thumb--left"
          style={{
            zIndex: minValue > maxValue - 100 && "5",
          }}
        />
        <input
          type="range"
          min="100"
          max="10000"
          value={maxValue}
          onChange={handleMaxChange}
          className="thumb thumb--right"
        />
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "10px",
        }}
      >
        <div>
          <span>Minimum</span>
          <div className="max_box">
            <p>₹{minValue}</p>
          </div>
        </div>

        <div>
          <span>Maximum</span>
          <div className="min_box">
            <p>₹{maxValue}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PriceRanges;
