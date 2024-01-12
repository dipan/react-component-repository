import React, { useState } from "react";
import PropTypes from "prop-types";
import "./ToogleButtonV2.css";

const ToogleButtonV2 = ({ checked, title, onToggleChange }) => {
  const [isChecked, setChecked] = useState(checked || false);

  const handleToggleChange = () => {
    setChecked(!isChecked);
    onToggleChange(!isChecked);
  };

  return (
    <div className="toggle-container">
      <h2>{title}</h2>
      <label className="toggle-switch">
        <input
          type="checkbox"
          checked={isChecked}
          onChange={handleToggleChange}
        />
        <span className="slider"></span>
      </label>
      <p>{isChecked ? "Toggle is ON" : "Toggle is OFF"}</p>
    </div>
  );
};

ToogleButtonV2.propTypes = {
  title: PropTypes.string,
  onToggleChange: PropTypes.func,
};

ToogleButtonV2.defaultProps = {
  title: "",
  onToggleChange: (value) => {
    console.log(value);
  },
};

export default ToogleButtonV2;
