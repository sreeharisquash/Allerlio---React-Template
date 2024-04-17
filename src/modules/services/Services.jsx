import React from "react";
import "./Services.css";
import BreadCrumbs from "../breadcrumbs/BreadCrumbs";
import CountUp from "react-countup";
import ServiceIcon from "../../assets/images/section2/icons/sevices-icon.svg";
import ExpIcon from "../../assets/images/section2/icons/experience-icon.svg";
import CommonButton from "../commonbutton/CommonButton";
import MainImg from "../../assets/dummyimages/dummy-servicesmain.png";
import Icon1 from "../../assets/images/services/icons/service-icon1.svg";
import Icon2 from "../../assets/images/services/icons/service-icon2.svg";
import Icon3 from "../../assets/images/services/icons/service-icon3.svg";
import Icon4 from "../../assets/images/services/icons/service-icon4.svg";
import ServicesComponent from "../servicesComponent/ServicesComponent";
import Service1Img1 from "../../assets/dummyimages/dummy-services.png";
import Service1Img2 from "../../assets/dummyimages/dummy-services.png"
import Service1Img3 from "../../assets/dummyimages/dummy-services.png"
import HoverIcon1 from "../../assets/images/services/icons/service-hov1.svg";
import HoverIcon2 from "../../assets/images/services/icons/service-hov2.svg";
import HoverIcon3 from "../../assets/images/services/icons/service-hov3.svg";
import { Link } from "react-router-dom";

const Services = () => {
  const countData = [
    { id: "1", icon: ServiceIcon, title: "250", para: "Services we provide" },
    { id: "2", icon: ExpIcon, title: "15", para: "Years of experience" },
  ];

  const processData = [
    {
      id: "1",
      no: "01",
      title: "Planning",
      para: "High level overviews. approaches lverall value proposition. Organically grow the holistic world view of disruptive.",
    },
    {
      id: "2",
      no: "02",
      title: "Development",
      para: "High level overviews. approaches lverall value proposition. Organically grow the holistic world view of disruptive.",
    },
    {
      id: "3",
      no: "03",
      title: "Realese",
      para: "High level overviews. approaches lverall value proposition. Organically grow the holistic world view of disruptive.",
    },
  ];

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
      icon: HoverIcon3,
      title: "Development",
      para: "It is a long establishe fact that a reader will be distracted the readable hkljklkl content of a page layout",
    },
    {
      id: "4",
      image: Service1Img1,
      icon: HoverIcon1,
      title: "Web Design",
      para: "It is a long establishe fact that a reader will be distracted the readable hkljklkl content of a page layout",
    },
    {
      id: "5",
      image: Service1Img2,
      icon: HoverIcon2,
      title: "Pixel Digital",
      para: "It is a long establishe fact that a reader will be distracted the readable hkljklkl content of a page layout",
    },
    {
      id: "6",
      image: Service1Img3,
      icon: HoverIcon3,
      title: "Development",
      para: "It is a long establishe fact that a reader will be distracted the readable hkljklkl content of a page layout",
    },
  ];
  return (
    <div className="services-container">
      <div className="services-breadcrumb">
        <BreadCrumbs />
      </div>
      <div className="container">
        <div className="service-contents">
          <div className="row">
            <div className="col-lg-7 mb-5   ">
              <h4 className="lining">Our History</h4>
              <h2>We help you grow your company to the highest</h2>
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
            <div className="col-lg-5 d-flex align-items-center">
              <div className="relative-container-icons">
                <img src={Icon1} alt="" className="icon-1" />
                <img src={Icon2} alt="" className="icon-2" />
                <img src={Icon3} alt="" className="icon-3" />
                <img src={Icon4} alt="" className="icon-4" />
                <img src={MainImg} alt="" className="img-fluid" />
              </div>
            </div>
          </div>
          <div className="our-process">
            <h4 className="side-lining">Our Process</h4>
            <h2 className="text-center">Steps we follow</h2>
            <div className="row pt-5">
              {processData.map((items) => (
                <div className="col-lg-4 mb-4" key={items.id}>
                  <div className="contain-process">
                    <div className="number-contain">{items.no}</div>
                    <h3 className="mt-4 mb-4">{items.title}</h3>
                    <p>{items.para}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="our-services">
            <h4 className="side-lining">Our Services</h4>
            <h2 className="text-center">Igniting your digital presence</h2>
            <div className="row pt-5">
              {servicesData.map((items) => (
                <div className="col-lg-4 mb-4" key={items.id}>
                  <Link to="/service-detail">
                    <ServicesComponent
                      image={items.image}
                      title={items.title}
                      para={items.para}
                      icon={items.icon}
                    />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
