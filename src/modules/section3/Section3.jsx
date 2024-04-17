import React, { useState } from "react";
import "./Section3.css";
import MainImg from "../../assets/dummyimages/dummy-play-2.png";
import DataIcon1 from "../../assets/images/section3/icons/whychooseus-icon-1.svg";
import DataIcon2 from "../../assets/images/section3/icons/whychooseus-icon-2.svg";
import CommonButton from "../commonbutton/CommonButton";
import ITServiceIcon from "../../assets/images/section3/icons/manageit.svg";
import ConsultantIcon from "../../assets/images/section3/icons/consultant.svg";
import PlayBtn from '../../assets/images/section3/images/play-btn.svg'
import PopupVideo from "../popupVideo/PopupVideo";

const Section3 = () => {
  const [isVideoPopupOn, setisVideoPopupOn] = useState(false);

  const openVideoPopup = () => {
    setisVideoPopupOn(true);
  };

  const closeVideoPopup = () => {
    setisVideoPopupOn(false);
  }; 
  const dataIcons = [
    { id: "1", icon: DataIcon1, title: "Best Awarded Company" },
    { id: "2", icon: DataIcon2, title: "5k+ Full Times Employees " },
  ];
  return (
    <div className="section3-container">
      <div className="container">
        <div className="row">
          <div className="col-lg-5" style={{marginBottom:'5rem'}}>
          <div className="tilted-bg">
            <div className="absol-contents">
              <div className="it-service">
                <img src={ITServiceIcon} alt="" className="it-service-cls" />
                <p>Manage IT Service</p>
              </div>
              <img src={MainImg} alt="" className="img-fluid main-screen" />
              <img src={PlayBtn} alt="" className="play-btn" onClick={openVideoPopup}/>
              <PopupVideo isOpen={isVideoPopupOn} onClose={closeVideoPopup}/>
              <div className="consultant">
                <img src={ConsultantIcon} alt="" className="consultant-icon" />
                <p>Professional Consultant</p>
              </div>
            </div>
          </div>
          </div>

          <div className="col-lg-6 aligning-right">
            <h4 className="lining">why chose us</h4>
            <h2>Unlocking your brand's true potential</h2>
            <p className="mt-4">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. Lorem
              gdfh Ipsum is simply dummy text.Eget gravida cum sociis natoque
              penatibus. Velit looking euismod in pellentesque massa placerat
              duis. Orci porta non pulvinar neque laoreet suspendisse interdum.
            </p>
            <div className="icon-contain-sec my-4">
              {dataIcons.map((items) => (
                <div className="d-flex gap-3 align-items-center data-icons">
                  <img src={items.icon} alt="" />
                  <h4>{items.title}</h4>
                </div>
              ))}
            </div>
            <CommonButton
              label="Discover More"
              bgColor="#D2042D"
              color="white"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section3;
