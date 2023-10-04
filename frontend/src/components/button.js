import "./button.css";
import React from "react";

const Button = ({ label, onClick, className }) => {
  return (
    <button className={`custom-button ${className}`} onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;
