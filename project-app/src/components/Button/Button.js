import React from "react";
import "./button.css";

const Button = ({ label, icon, type, onClick }) => {
  return (
    <button onClick={onClick} className={`button ${type}`}>
      {icon && <i className={`icon ${icon}`}> {`person`}</i>}
      {label}
    </button>
  );
};

export default Button;
