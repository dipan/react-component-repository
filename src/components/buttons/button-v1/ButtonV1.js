import PropTypes from "prop-types";
import React from "react";
import "./ButtonV1.css";
function ButtonV1({ title }) {
  return (
    <div className="button-container">
      <a href="#" className="rounded-button">
        {title}
      </a>
    </div>
  );
}
ButtonV1.propTypes = {
  title: PropTypes.string.isRequired,
};

ButtonV1.defaultProps = {
  title: "Click Me",
};
export default ButtonV1;
