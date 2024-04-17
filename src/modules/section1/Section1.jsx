import React from "react";
import "./Section1.css";
import MainImg from "../../assets/dummyimages/dummy-home.png";
import CommonButton from "../commonbutton/CommonButton";
import CallUs from "../../assets/images/section1/icons/call-us.svg";
import Arrows from "../../assets/icons/arrows-sec1.svg";

const Section1 = () => {
  return (
    <div className="section1-container">
      <div className="container">
        <dv className="row">
          <div className="col-lg-7 mb-5">
            <div className="hero-section-cont">
              <h1>Elevate your brand with our digital</h1>
              <p className="mt-3">
                Building a positive corporate culture involves promoting values,
                encouraging open communication, recognizing and rewarding
                employee contributions,
              </p>
              <div className="call-data-container mt-2">
                <div>
                  <CommonButton
                    label="Get Started"
                    bgColor="#D2042D"
                    color="white"
                  />
                </div>

                <div className="call-us">
                  <img src={CallUs} alt="" />
                  <div className="mt-3">
                    <span>Call us</span>
                    <p>(480) 555-0103</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-5 d-flex align-items-center">
            <div className="arrow-absol-cont pt-4">
              <img src={Arrows} alt="" className="arrows-cls" />
                <img src={MainImg} alt="" className="img-fluid main-img" />
            </div>
          </div>
        </dv>
      </div>
    </div>
  );
};

export default Section1;
