import PropTypes from "prop-types";
import React, { useState } from "react";
import "./EditableContainer.css";

function EditableContainer({ initialText, onDelete }) {
  const [isEditing, setEditing] = useState(false);
  const [editedText, setEditedText] = useState(initialText);

  const handleEditClick = () => {
    setEditing(true);
  };

  const handleDeleteClick = () => {
    onDelete(); // Invoke the onDelete callback from the parent component
  };

  const handleTickClick = () => {
    setEditing(false);
    // Add logic here to handle the updated text (e.g., send it to the server, update state, etc.)
  };

  const handleInputChange = (e) => {
    setEditedText(e.target.value);
  };

  return (
    <div className="editable-container">
      {isEditing ? (
        <>
          <input
            type="text"
            value={editedText}
            onChange={handleInputChange}
            className="edit-input"
          />
          <button onClick={handleTickClick} className="tick-button">
            &#10004;
          </button>
        </>
      ) : (
        <>
          <p>{editedText}</p>
          <button onClick={handleEditClick} className="edit-button">
            &#9998;
          </button>
        </>
      )}
      <button onClick={handleDeleteClick} className="delete-button">
        &#128465;
      </button>
    </div>
  );
}

EditableContainer.propTypes = {
  initialText: PropTypes.string.isRequired,
};

EditableContainer.defaultProps = {
  initialText: "Editable Container Text",
};
export default EditableContainer;
