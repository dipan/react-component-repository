import PropTypes from "prop-types";
import React, { useState } from "react";
import "./PasswordInput.css";

function PasswordInput() {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleEyeClick = () => {
    setShowPassword(!showPassword);
  };

  const handleEyeMouseDown = () => {
    setShowPassword(true);
    window.addEventListener("mouseup", handleEyeMouseUp);
    console.log("Mouse Down");
  };

  const handleEyeMouseUp = () => {
    console.log("Mouse Up");
    window.removeEventListener("mouseup", handleEyeMouseUp);
    setShowPassword(false);
  };

  return (
    <div className="password-input-container">
      <input
        type={showPassword ? "text" : "password"}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Enter your password"
        className="password-input"
      />
      <div className="eye-icon" onClick={handleEyeClick}>
        {showPassword ? "😵" : "😯"}
      </div>
      <div
        className="eye-icon"
        onMouseDown={handleEyeMouseDown}
        onMouseUp={handleEyeMouseUp}
      >
        {showPassword ? "👁️‍🗨️" : "👁️"}
      </div>
    </div>
  );
}

PasswordInput.propTypes = {
  initialText: PropTypes.string.isRequired,
};

PasswordInput.defaultProps = {
  initialText: "Editable Container Text",
};
export default PasswordInput;
