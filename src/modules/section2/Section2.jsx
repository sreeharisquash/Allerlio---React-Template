import React, { useState } from "react";
import "./Section2.css";
import ServiceIcon from "../../assets/images/section2/icons/sevices-icon.svg";
import ExpIcon from "../../assets/images/section2/icons/experience-icon.svg";
import CommonButton from "../commonbutton/CommonButton";
import PlayScreen from "../../assets/dummyimages/dummy-playbtn.png";
import CountUp from "react-countup";
import PopupVideo from "../popupVideo/PopupVideo";
import PlayBtn from "../../assets/images/section2/images/section2-playbtn.svg";
import Screen from "../../assets/dummyimages/dummy-2.png";
import VectorImg from "../../assets/images/section2/icons/section2-vector.svg";

const Section2 = () => {
  const [isVideoPopupOn, setisVideoPopupOn] = useState(false);

  const openVideoPopup = () => {
    setisVideoPopupOn(true);
  };

  const closeVideoPopup = () => {
    setisVideoPopupOn(false);
  };

  const countData = [
    { id: "1", icon: ServiceIcon, title: "250", para: "Services we provide" },
    { id: "2", icon: ExpIcon, title: "15", para: "Years of experience" },
  ];
  return (
    <div className="section2-container">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 mb-5">
            <h4 className="lining">About Us</h4>
            <h2>Elevate your brand to new heights</h2>
            <p className="mt-4">
              Blandit turpis cursus in hac habitasse platea dictumst quisque
              sagittis. Urna molestie at elementum eu facilisis sed. Nisl
              suscipit adipiscing bibendum est ultricies integer quis auctor
              elit.
            </p>
            <div className="count-data-container mt-4">
              {countData.map((items) => (
                <div
                  className="d-flex gap-4 align-items-center align-img-cls"
                  key={items.id}
                >
                  <img src={items.icon} alt="" />
                  <div>
                    <h3>
                      <CountUp
                        start={0}
                        end={items.title}
                        duration={4.75}
                      ></CountUp>
                      +
                    </h3>
                    <p>{items.para}</p>
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-4 mb-4">
              Libero enim sed faucibus turpis. Cras tincidunt lobortis feugiat
              vivamus at augue eget arcu dictum. Sed felis eget velit aliquet
              sagittis. Porttitor leo a diam sollicitudin tempor id eu nisl.
            </p>
            <CommonButton label="Read More" bgColor="#D2042D" color="white" />
          </div>
          <div className="col-lg-5">
            <div className="absolute-screen">
              <img src={Screen} alt="" className="screen-1 img-fluid" />
              <img src={VectorImg} alt="" className="vector-img" />
              <div className="btn-screen">
                <img src={PlayScreen} alt="" className="img-fluid screen-2" />
                <img
                  src={PlayBtn}
                  alt=""
                  className="sec2-playbtn"
                  onClick={openVideoPopup}
                />
              </div>
              <div className="video-popup-container">
                <PopupVideo isOpen={isVideoPopupOn} onClose={closeVideoPopup} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section2;
