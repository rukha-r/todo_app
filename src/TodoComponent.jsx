import React from "react";
import { FiX } from "react-icons/fi";
import "./App.scss";

function TodoComponent({ id, text, darkMode, removeItem }) {
  return (
    <div
      className={
        darkMode ? "component-wrapper-dark" : "component-wrapper-light"
      }
    >
      <h4>{text}</h4>
      <FiX onClick={() => removeItem(id)} className="x" />
    </div>
  );
}

export default TodoComponent;
