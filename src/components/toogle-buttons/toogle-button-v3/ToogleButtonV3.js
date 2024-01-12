import React, { useState } from "react";
import PropTypes from "prop-types";
import "./ToogleButtonV3.css";

const ToogleButtonV3 = ({ checked, title, onToggleChange }) => {
  const [isChecked, setChecked] = useState(checked || false);
  const handleToggleChange = () => {
    setChecked(!isChecked);
    onToggleChange(!isChecked);
  };

  return (
    <>
      <div className="toggle-container">
        <span>{title}</span>
        <label className="switch switch-left-right">
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

ToogleButtonV3.propTypes = {
  title: PropTypes.string,
  onToggleChange: PropTypes.func,
};

ToogleButtonV3.defaultProps = {
  title: "",
  onToggleChange: (value) => {
    console.log(value);
  },
};

export default ToogleButtonV3;
