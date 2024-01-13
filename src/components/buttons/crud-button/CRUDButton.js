import PropTypes from "prop-types";
import React from "react";
import "./CRUDButton.css";
function CRUDButton({ option }) {
  return (
    <div className="crud-buttons">
      {option === "create" && (
        <button className="crud-button">
          <span className="icon">➕</span> Create
        </button>
      )}
      {option === "read" && (
        <button className="crud-button">
          <span className="icon">📖</span> Read
        </button>
      )}
      {option === "update" && (
        <button className="crud-button">
          <span className="icon">✏️</span> Update
        </button>
      )}
      {option === "delete" && (
        <button className="crud-button">
          <span className="icon">🗑️</span> Delete
        </button>
      )}
    </div>
  );
}
CRUDButton.propTypes = {
  option: PropTypes.string.isRequired,
};

CRUDButton.defaultProps = {
  option: "create",
};
export default CRUDButton;
