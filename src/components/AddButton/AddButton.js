import React from "react";
import "./AddButton.css"

const AddButon = ({ label, onClickButton }) => {

  const handleClickButton = () => {
    if (onClickButton) {
      onClickButton()
    }
  }

  return (
    <div className="add-button">
      <button onClick={handleClickButton}>{label}</button>
    </div>
  )
}

export default AddButon;
