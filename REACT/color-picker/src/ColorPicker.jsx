import React, { useState } from "react";

function ColorPicker() {
  const [color, setColor] = useState("#ffffff");

  function renderColor(event) {
    setColor(event.target.value);
  }

  return (
    <div className="container">
      <h1>Color Picker</h1>
      <p>Selected Color: {color}</p>
      <div className="color-display" style={{ background: color }}></div>
      <p className="color-picker">
        Select a Color:
        <input type="color" value={color} onChange={renderColor} />
      </p>
    </div>
  );
}

export default ColorPicker;
