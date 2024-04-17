import React from "react";
import "./ServicesComponent.css";
import CommonButton from "../commonbutton/CommonButton";

const ServicesComponent = ({ image, title, para, icon }) => {
  return (
    <div className="service-container">
      <div class="card">
        <div className="img-container">
          <img src={image} class="card-img-top" alt="" />
          <div className="overlay">
            <img src={icon} alt="" />
          </div>
        </div>
        <div class="card-body">
          <h3 class="card-title">{title}</h3>
          <div className="underlining"></div>
          <p class="card-text">{para}</p>
          <div className="d-flex justify-content-center mb-3">
            <CommonButton label="Read more" bgColor="#D2042D" color="white" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesComponent;
