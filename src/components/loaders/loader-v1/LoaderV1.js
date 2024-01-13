import PropTypes from "prop-types";
import React from "react";
import "./LoaderV1.css";

const LoaderV1 = ({ onToggleChange }) => {
  return (
    <div className="container">
      <span className="loader">HM Series</span>
    </div>
  );
};

LoaderV1.propTypes = {
  title: PropTypes.string,
  onToggleChange: PropTypes.func,
};

LoaderV1.defaultProps = {
  title: "",
  onToggleChange: (value) => {
    console.log(value);
  },
};

export default LoaderV1;
