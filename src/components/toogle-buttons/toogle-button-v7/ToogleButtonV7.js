import React, { useState } from "react";
import PropTypes from "prop-types";
import "./ToogleButtonV7.css";

const ToogleButtonV7 = ({ checked, title, onToggleChange }) => {
  const [isChecked, setChecked] = useState(checked || false);
  const handleToggleChange = () => {
    setChecked(!isChecked);
    onToggleChange(!isChecked);
  };

  return (
    <>
      <div className="toggle-container">
        <span>{title}</span>
        <label className="switch switch-light">
          <input
            className="switch-input"
            type="checkbox"
            checked={isChecked}
            onChange={handleToggleChange}
          />
          <span className="switch-label" data-on="On" data-off="Off"></span>
          <span className="switch-handle"></span>
        </label>
      </div>
    </>
  );
};

ToogleButtonV7.propTypes = {
  title: PropTypes.string,
  onToggleChange: PropTypes.func,
};

ToogleButtonV7.defaultProps = {
  title: "",
  onToggleChange: (value) => {
    console.log(value);
  },
};

export default ToogleButtonV7;
