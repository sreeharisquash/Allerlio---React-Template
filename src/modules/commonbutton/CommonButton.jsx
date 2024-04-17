import React from "react";
import "./CommonButton.css";
import BtnArrow from "../../assets/icons/chevron-right.svg";

const CommonButton = ({ label, color, bgColor }) => {
  const design = {
    label: label,
    color: color,
    backgroundColor: bgColor,
  };
  return (
    <button className="btn-cls" style={design}>
      {label} 
      <img src={BtnArrow} alt="" />
    </button>
  );
};

export default CommonButton;
