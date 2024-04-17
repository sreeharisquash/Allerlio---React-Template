import React from "react";
import "./Section4.css";
import ServicesComponent from "../servicesComponent/ServicesComponent";
import Service1Img1 from "../../assets/dummyimages/dummy-services.png";
import Service1Img2 from "../../assets/dummyimages/dummy-services.png";
import Service1Img3 from "../../assets/dummyimages/dummy-services.png";
import HoverIcon1 from '../../assets/images/services/icons/service-hov1.svg'
import HoverIcon2 from '../../assets/images/services/icons/service-hov2.svg'
import HoverIcon3 from '../../assets/images/services/icons/service-hov3.svg'
import { Link } from "react-router-dom";

const Section4 = () => {
  const servicesData = [
    {
      id: "1",
      image: Service1Img1,
      icon: HoverIcon1,
      title: "Web Design",
      para: "It is a long establishe fact that a reader will be distracted the readable hkljklkl content of a page layout",
    },
    {
      id: "2",
      image: Service1Img2,
      icon: HoverIcon2,
      title: "Pixel Digital",
      para: "It is a long establishe fact that a reader will be distracted the readable hkljklkl content of a page layout",
    },
    {
      id: "3",
      image: Service1Img3,
      icon : HoverIcon3,
      title: "Development",
      para: "It is a long establishe fact that a reader will be distracted the readable hkljklkl content of a page layout",
    },
  ];
  return (
    <div className="section4-container">
      <div className="container">
      <div className="row justify-content-center">
          <div className="col-lg-6">
        <div className="side-lining">
          <h4>Our Services</h4>
        </div>
        <h2 className="text-center mt-3">Igniting your digital presence</h2>
        </div>
            </div>
        <div className="mt-5">
          <div className="row pt-3">
            {servicesData.map((items) => (
              <div className="col-lg-4 mb-4" key={items.id}>
                <Link to="/service-detail">
                <ServicesComponent
                  image={items.image}
                  para={items.para}
                  title={items.title}
                  icon={items.icon}
                />
                </Link>
              </div>
            ))}
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section4;
