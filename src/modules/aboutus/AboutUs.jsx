import React, { useState } from "react";
import "./AboutUs.css";
import BreadCrumbs from "../breadcrumbs/BreadCrumbs";
import MainImg from "../../assets/dummyimages/dummy-about-main.png";
import Img2 from "../../assets/dummyimages/dummy-joinus.png";
import CommonButton from "../commonbutton/CommonButton";
import TeamImg1 from "../../assets/dummyimages/dummy-abouteam.png";
import TeamImg2 from "../../assets/dummyimages/dummy-abouteam.png";
import TeamImg3 from "../../assets/dummyimages/dummy-abouteam.png";
import TeamImg4 from "../../assets/dummyimages/dummy-abouteam.png";

import { motion } from "framer-motion";

const AboutUs = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [clickedId, setClickedId] = useState(null);

  const handleClick = (id) => {
    setIsOpen((prevIsOpen) => ({
      ...prevIsOpen,
      [id]: !prevIsOpen[id],
    }));
    setClickedId((prevClickedId) => (prevClickedId === id ? null : id));
  };
  const dropData = [
    {
      id: "1",
      number: "30",
      exp: "Years of experience",
      para: "Vulputate dignissim suspendisse in est ante. Sed id semper risus in hendrerit gravida rutrum quisque. Massa vitae tortor.",
    },
    {
      id: "2",
      number: "90",
      exp: "Branches Worldwide",
      para: "Aliquet lectus proin nibh nisl condimentum. Sed faucibus turpis in eu. Convallis posuere morbi leo urna. egestas tellus Sit amet mauris.",
    },
    {
      id: "3",
      number: "55k",
      exp: "Happy Customers",
      para: "Senectus et netus et malesuada. Viverra mauris in aliquam sem fringilla ut. Elit sed vulputate mi sit amet mauris commodo quis. Commodo ullamcorper a",
    },
  ];

  const ourTeam = [
    {
      id: "1",
      img: TeamImg1,
      name: "Elizebeth Olsen",
      designation: "Developer",
    },
    { id: "2", img: TeamImg2, name: "Black Widow", designation: "Designer" },
    {
      id: "3",
      img: TeamImg3,
      name: "Katherine Pierce",
      designation: "Testing",
    },
    {
      id: "4",
      img: TeamImg4,
      name: "Elena Gilbert",
      designation: "Automation",
    },
  ];

  return (
    <div className="aboutus-container">
      <div className="aboutus-breadcrumb-container">
        <BreadCrumbs />
      </div>
      <div className="container">
        <div className="contents-cont">
          <h4 className="side-lining">SUCCESS & INNOVATION</h4>
          <h2>About Our Business Agency</h2>
          <div className="row pt-5">
            <div className="col-lg-7 mb-5">
              <img src={MainImg} alt="" className="img-fluid" />
            </div>
            <div className="col-lg-5 mb-5">
              {dropData.map((items) => (
                <motion.div
                  initial={{ opacity: 0, y: 20 }} 
                  animate={{ opacity: 1, y: 0 }} 
                  className={`experience-cont mb-4 ${
                    clickedId === items.id ? "clicked" : ""
                  }`}
                  onClick={() => handleClick(items.id)}
                  key={items.id}
                >
                  <h2 className="text-white">{items.number}</h2>
                  <div>
                    <h6 className="text-white">{items.exp}</h6>
                    {isOpen[items.id] ? (
                      <motion.p
                        initial={{ opacity: 0, y: 10 }} 
                        animate={{ opacity: 1, y: 0 }} 
                        className="text-white"
                      >
                        {items.para}
                      </motion.p>
                    ) : (
                      ""
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="data-transfer-cont">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 mb-5">
              <h4 className="lining">Join Us</h4>
              <h2>Data Transfer Joint Ventures Intiated</h2>
              <p className="mt-3 mb-3">
                Accumsan in nisl nisi scelerisque eu. Orci eu lobortis elementum
                nibh tellus molestie nunc non blandit. Amet luctus venenatis
                lectus magna fringilla urna porttitor rhoncus dolor.Odio
                facilisis mauris sit amet massa Est sit amet facilisis.
              </p>
              <CommonButton label="Know more" bgColor="#D2042D" color="white" />
            </div>
            <div className="col-lg-6">
              <img src={Img2} alt="" className="img-fluid" />
            </div>
          </div>
        </div>
      </div>
      <div className="our-team">
        <div className="container">
          <h4 className="side-lining">Our team</h4>
          <h2>Our Design Experts</h2>
          <div className="row pt-5">
            {ourTeam.map((items) => (
              <div className="col-lg-3 col-md-4 mb-5" key={items.id}>
                <img src={items.img} alt="" className="img-fluid" />
                <h4 className="mt-4">{items.name}</h4>
                <p>{items.designation}</p>
              </div>
            ))}
            <div className="d-flex justify-content-center">
              <CommonButton label="View more" bgColor="#D2042D" color="white" />
            </div>
          </div>
        </div>
      </div>
      <div className="mail-us">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-5">
              <h4 className="lining"> DROP US AN MAIL</h4>
              <h2>Have Great Idea In Mind? Let's Make It Outstanding</h2>
            </div>
            <div className="col-lg-6">
              <div className="about-input">
                <input
                  type="text"
                  className="input-cls"
                  placeholder="Enter Email"
                />
                <CommonButton label="submit" bgColor="#D2042D" color="white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
