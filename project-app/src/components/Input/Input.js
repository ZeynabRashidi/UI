import React from "react";
import "./Input.css";

const Input = ({ value, className, placeholder, icon, type, onChange }) => {
  return (
    <div>
      <div className="input-container">
        <div className="input-wrapper">
          {icon && <i className={`icon ${icon}`}> {`search`}</i>}
          <input
            type={type}
            className={className}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
          />
        </div>
      </div>
    </div>
  );
};
export default Input;
