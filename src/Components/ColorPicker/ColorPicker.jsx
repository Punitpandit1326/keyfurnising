import React, { useState } from 'react';
import { SketchPicker } from 'react-color';

const ColorPicker = () => {
  const [color, setColor] = useState('#914F1E');
  const [displayColorPicker, setDisplayColorPicker] = useState(false);

  const handleClick = () => {
    setDisplayColorPicker(!displayColorPicker);
  };

  const handleClose = () => {
    setDisplayColorPicker(false);
  };

  const handleChangeComplete = (color) => {
    setColor(color.hex);
  };

  return (
    <div>
      <div
        onClick={handleClick}
        style={{
          marginTop: '12px',
          borderRadius: "50%",
          width: '15px',
          height: '15px',
          backgroundColor: color,
          cursor: 'pointer'
        }}
      />
      {displayColorPicker ? (
        <div style={{ position: 'absolute', zIndex: 2 }}>
          <div style={{ position: 'fixed', top: 0, right: 0, bottom: 0, left: 0 }} onClick={handleClose} />
          <SketchPicker
            color={color}
            onChangeComplete={handleChangeComplete}
          />
        </div>
      ) : null}
    </div>
  );
};

export default ColorPicker;