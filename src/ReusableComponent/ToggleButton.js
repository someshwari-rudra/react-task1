import React, { useState } from "react";

const ToggleButton = ({ label, checkedItems, handleChange }) => {
  const labelArray = label.split(" ");
  const newLabel = labelArray.join("");
  return (
    <div className="m-2">
      <label className="switch">
        <input
          type="checkbox"
          className="toggleButton"
          name={newLabel}
          checked={
            checkedItems[label] === undefined ? false : checkedItems[label]
          }
          onChange={(e) => handleChange(e, label)}
        />
        <span className="slider" />
      </label>
      <small className="label m-2">{label}</small>
    </div>
  );
};

export default ToggleButton;
