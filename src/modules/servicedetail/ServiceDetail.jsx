import React, { useState } from "react";
import "./ServiceDetail.css";
import BreadCrumbs from "../breadcrumbs/BreadCrumbs";
import Img1 from "../../assets/dummyimages/dummy-servicedetail.png";
import Img2 from "../../assets/dummyimages/dummy-servicedetail2.png";
import Img3 from "../../assets/dummyimages/dummy-servicedetail4.png";
import Img4 from "../../assets/dummyimages/dummy-servicedetail5.png";
import Icon1 from "../../assets/images/sevicedetail/icons/tabler_moneybag.svg";
import Icon2 from "../../assets/images/sevicedetail/icons/mdi_stars-outline.svg";
import Icon3 from "../../assets/images/sevicedetail/icons/tabler_pig-money.svg";
import "react-vertical-timeline-component/style.min.css";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { GiArchiveResearch } from "react-icons/gi";
import { PiPottedPlant } from "react-icons/pi";
import { GiWideArrowDunk } from "react-icons/gi";
import { PiStrategyFill } from "react-icons/pi";
import { MdDesignServices } from "react-icons/md";
import { SiTestcafe } from "react-icons/si";
import ProjectsImg1 from "../../assets/dummyimages/dummy-portfolio.png";
import ProjectsImg2 from "../../assets/dummyimages/dummy-portfolio.png";
import ProjectsImg3 from "../../assets/dummyimages/dummy-portfolio.png";
import ProjectsImg4 from "../../assets/dummyimages/dummy-portfolio.png";
import ProjectsImg5 from "../../assets/dummyimages/dummy-portfolio.png";
import ProjectsImg6 from "../../assets/dummyimages/dummy-portfolio.png";
import MoreIcon from "../../assets/images/sevicedetail/icons/more-icon.svg";

import TeamImg1 from "../../assets/dummyimages/dummy-team.png";
import TeamImg2 from "../../assets/dummyimages/dummy-team.png";
import TeamImg3 from "../../assets/dummyimages/dummy-team.png";

import PlusIcon from "../../assets/icons/plus-icon.svg";
import MinusIcon from "../../assets/icons/minus-icon.svg";
import InstaIcon from "../../assets/icons/insta-icon.svg";
import FbIcon from "../../assets/icons/fb-icon.svg";
import TwitIcon from "../../assets/icons/twit-icon.svg";

import { AnimatePresence, motion } from "framer-motion";

const ServiceDetail = () => {
  const [iconsState, setIconsState] = useState({});

  const handlePlusIconClick = (itemId) => {
    setIconsState((prevIconsState) => ({
      ...prevIconsState,
      [itemId]: {
        ...prevIconsState[itemId],
        isPlusIcon: false,
        showInstaIcon: true,
      },
    }));
  };

  const handleMinusIconClick = (itemId) => {
    setIconsState((prevIconsState) => ({
      ...prevIconsState,
      [itemId]: {
        ...prevIconsState[itemId],
        isPlusIcon: true,
        showInstaIcon: false,
      },
    }));
  };

  const dotContents = [
    { id: "1", title: "Unique, custom website design services " },
    { id: "2", title: "Easy navigation & fast loading speed" },
    { id: "3", title: "Search engine optimization" },
    { id: "4", title: "Quality backlinks" },
  ];

  const detailmages = [
    { id: "1", image: Img1 },
    { id: "2", image: Img2, cls: "smaller-cls" },
    { id: "3", image: Img3, cls: "smaller-cls" },
    { id: "4", image: Img4 },
  ];

  const bestData = [
    {
      id: "1",
      title: "100% Money guarantee",
      icon: Icon1,

      para: "High level overviews. approaches lverall value proposition. Organically grow the holistic world view of disruptive.",
    },
    {
      id: "2",
      title: "Free Trial Available",
      icon: Icon2,
      para: "High level overviews. approaches lverall value proposition. Organically grow the holistic world view of disruptive.",
    },
    {
      id: "3",
      title: "100% Cost Savings ",
      icon: Icon3,
      para: "High level overviews. approaches lverall value proposition. Organically grow the holistic world view of disruptive.",
    },
  ];

  const timelineData = [
    {
      id: "1",
      title: "Research",
      icon: <GiArchiveResearch />,
      date: "2008 - 2012",

      para: "Grab free access to get connected to our informative & friendly assistants for 7 days!Grab free access to get connected to our informative & friendly assistants for 7 days!",
    },
    {
      id: "2",
      title: "Planning",
      icon: <PiPottedPlant />,
      date: "2012 - 2016",

      para: "Not satisfied with your employee’s performance? We offer a complete refund to you.Not satisfied with your employee’s performance? We offer a complete refund to you.",
    },
    {
      id: "3",
      title: "Ideas",
      icon: <GiWideArrowDunk />,
      date: "2018 - 2022",
      para: "Grab free access to get connected to our informative & friendly assistants for 7 days!Grab free access to get connected to our informative & friendly assistants for 7 days!",
    },
    {
      id: "4",
      title: "statergy",
      icon: <PiStrategyFill />,
      date: "2018 - 2022",
      para: "Not satisfied with your employee’s performance? We offer a complete refund to you.Not satisfied with your employee’s performance? We offer a complete refund to you.",
    },
    {
      id: "5",
      title: "Design",
      icon: <MdDesignServices />,
      date: "2018 - 2022",
      para: "Grab free access to get connected to our informative & friendly assistants for 7 days!Grab free access to get connected to our informative & friendly assistants for 7 days!",
    },
    {
      id: "6",
      title: "Test",
      icon: <SiTestcafe />,
      date: "2018 - 2022",
      para: "Not satisfied with your employee’s performance? We offer a complete refund to you.Not satisfied with your employee’s performance? We offer a complete refund to you.",
    },
  ];

  const teamData = [
    {
      id: "1",
      image: TeamImg1,
      name: "Annette Black",
      designation: "Medical Assistant",
    },
    {
      id: "2",
      image: TeamImg2,
      name: "Wade Warren",
      designation: "Head of Engineering",
    },
    {
      id: "3",
      image: TeamImg3,
      name: "Wade Warren",
      designation: "Administrator",
    },
  ];
  const projectImg = [
    { id: "1", image: ProjectsImg1 },
    { id: "2", image: ProjectsImg2 },
    { id: "3", image: ProjectsImg3 },
    { id: "4", image: ProjectsImg4 },
    { id: "5", image: ProjectsImg5 },
    { id: "6", image: ProjectsImg6 },
  ];
  return (
    <div className="servicedetail-container">
      <div className="servicedetail-breadcrumb">
        <BreadCrumbs />
      </div>
      <div className="detail-sec1">
        <div className="container" style={{ overflow: "hidden" }}>
          <div className="row">
            <div className="col-lg-6">
              <h4 className="lining">UI/UX designing</h4>
              <h2>How to Create a Best website design with us</h2>
              <p className="mt-4 mb-4">
                Blandit turpis cursus in hac habitasse platea dictumst quisque
                sagittis. Urna molestie at elementum eu facilisis sed. Nisl
                suscipit adipiscing bibendum est ultricies integer quis auctor
                elit.
              </p>
              <p>
                Libero enim sed faucibus turpis. Cras tincidunt lobortis feugiat
                vivamus at augue eget arcu dictum. Sed felis eget velit aliquet
                sagittis. Porttitor leo a diam sollicitudin tempor id eu nisl.
              </p>
              <div className="mt-4">
                {dotContents.map((items) => (
                  <div key={items.id}>
                    <p className="dot-cls">{items.title}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="col-lg-6">
              <div className="row justify-content-center align-items-center">
                {detailmages.map((items) => (
                  <div className="col-lg-6">
                    <div className="img-contain" key={items.id}>
                      <img
                        src={items.image}
                        alt=""
                        className={`${items.cls} img-fluid`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="best-section">
            <div className="row justify-content-center">
              <div className="col-lg-6">
                <h4 className="side-lining text-center">Why we are the best</h4>
                <h2 className="text-center">
                  Why we are the best in the designing
                </h2>
              </div>
            </div>
            <div className="row pt-5">
              {bestData.map((items) => (
                <div className="col-lg-4 mb-5" key={items.id}>
                  <div className="best-container">
                    <img src={items.icon} alt="" />
                    <h4 className="mt-5 mb-4">{items.title}</h4>
                    <p>{items.para}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="our-process">
            <div className="row justify-content-center">
              <div className="col-lg-5">
                <h4 className="side-lining text-center">Our process</h4>
                <h2 className="text-center">What do we do in UI/UX</h2>
              </div>
            </div>
          </div>
          <div className="timeline pt-5">
            <div>
              <VerticalTimeline lineColor="#D2042D">
                {timelineData.map((items) => (
                  <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    iconStyle={{ background: "#1E266E", color: "#fff" }}
                    icon={items.icon}
                    //   date={items.date}
                  >
                    <h5>{items.title}</h5>
                    <p>{items.para}</p>
                  </VerticalTimelineElement>
                ))}
              </VerticalTimeline>
            </div>
          </div>
          <div className="projects">
            <div className="row justify-content-center">
              <div className="col-lg-6">
                <h4 className="side-lining text-center">Our Projects</h4>
                <h2 className="text-center">
                  Some of the projects which we made
                </h2>
              </div>
            </div>

            <div className="row pt-5">
              {projectImg.map((items) => (
                <div className="col-lg-4 col-md-6 mb-4 d-flex justify-content-center">
                  <div className="image-contain">
                    <div className="more-icon">
                      <img src={MoreIcon} alt="" />
                    </div>
                    <div class="overlay"></div>
                    <div className="hover-contents">
                      <h5 className="text-start">Business Solutions</h5>
                      <p className="text-start">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting
                      </p>
                    </div>
                    <img src={items.image} alt="" className="img-fluid" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="our-team">
            <div className="row justify-content-center">
              {teamData.map((items) => {
                const itemId = items.id;
                const { isPlusIcon, showInstaIcon } = iconsState[itemId] || {
                  isPlusIcon: true,
                  showInstaIcon: false,
                };

                return (
                  <div className="col-lg-4 contain-items " key={itemId}>
                    <div className="icons-inside">
                      {isPlusIcon ? (
                        <motion.img
                          src={PlusIcon}
                          alt=""
                          className="plus-icon"
                          style={{ marginBottom: "2rem" }}
                          onClick={() => handlePlusIconClick(itemId)}
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                        />
                      ) : (
                        <motion.img
                          src={MinusIcon}
                          alt=""
                          className="minus-icon"
                          style={{ marginBottom: "2rem" }}
                          onClick={() => handleMinusIconClick(itemId)}
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                        />
                      )}
                      <AnimatePresence>
                        {showInstaIcon && (
                          <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            className="d-flex flex-column gap-3"
                          >
                            <img src={FbIcon} alt="" className="insta-icon" />
                            <img
                              src={InstaIcon}
                              alt=""
                              className="insta-icon"
                            />
                            <img src={TwitIcon} alt="" className="insta-icon" />
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                    <img src={items.image} alt="" className="img-fluid" />
                    <div className="name-designation">
                      <h6>{items.name}</h6>
                      <p className="text-center">{items.designation}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;
