import React from "react";

const Button = ({ label, icon, type, onClick }) => {
  const buttonClass = `button ${type}`;
  return (
    <button onClick={onClick} className={buttonClass}>
      {icon && <i className={`icon ${icon}`} > {`person`}</i>}
      {label}
    </button>
  );
};

export default Button;
