import React, { useState } from "react";
import "./PortfolioDetail.css";
import BreadCrumbs from "../breadcrumbs/BreadCrumbs";
import MainImg from "../../assets/dummyimages/dummy-portdetail.png";
import PorblemImg from "../../assets/dummyimages/dummy-portdetprob.png";
import SolutionImg from "../../assets/dummyimages/dummy-portdetsol.png";

import TeamImg1 from "../../assets/dummyimages/dummy-team.png";
import TeamImg2 from "../../assets/dummyimages/dummy-team.png";
import TeamImg3 from "../../assets/dummyimages/dummy-team.png";

import PlusIcon from "../../assets/icons/plus-icon.svg";
import MinusIcon from "../../assets/icons/minus-icon.svg";
import InstaIcon from "../../assets/icons/insta-icon.svg";
import FbIcon from "../../assets/icons/fb-icon.svg";
import TwitIcon from "../../assets/icons/twit-icon.svg";

import Projects1 from "../../assets/dummyimages/dummy-relproj.png";
import Projects2 from "../../assets/dummyimages/dummy-relproj.png";
import MoreIcon from "../../assets/icons/blue-more-icon.svg";

import { AnimatePresence, motion } from "framer-motion";

const PortfolioDetail = () => {
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
  const projectInfo = [
    { id: "1", title: "Client", para: "abcd .company :" },
    { id: "2", title: "Location", para: "New York United States :" },
    { id: "3", title: "Project Date", para: "15 December ,2023 :" },
    { id: "4", title: "Category", para: "Designing :" },
    { id: "4", title: "Value", para: "$ 2 250 000 :" },
  ];

  const hashTags = [
    { id: "1", tag: "#design" },
    { id: "2", tag: "#web" },
    { id: "3", tag: "#development" },
    { id: "4", tag: "#figma" },
  ];

  const problemPoints = [
    { id: "1", data: "Listen to what they say about you" },
    { id: "2", data: "Randomised words which." },
    { id: "3", data: "Internet tend to repeat predefined chunks" },
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

  const portfolioData = [
    {
      id: "1",
      image: Projects1,
      title: "Business Solutions",
      para: "Lorem Ipsum is simply dummy text of the printing and typesetting",
    },
    {
      id: "2",
      image: Projects1,
      title: "Business Solutions",
      para: "Lorem Ipsum is simply dummy text of the printing and typesetting",
    },
    {
      id: "3",
      image: Projects2,
      title: "Business Solutions",
      para: "Lorem Ipsum is simply dummy text of the printing and typesetting",
    },
  ];
  return (
    <div className="portfolio-detail-container">
      <div className="portfolio-detail-breadcrumb">
        <BreadCrumbs />
      </div>
      <div className="portfolio-det-contents">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mb-4">
              <img src={MainImg} alt="" className="img-fluid" />
              <div className="d-flex gap-4 pt-5 mt-2 responsive-des">
                {hashTags.map((items) => (
                  <div className="tags-contain" key={items.id}>
                    {items.tag}
                  </div>
                ))}
              </div>
            </div>
            <div className="col-lg-4">
              <div className="project-info">
                <h4 className="text-black">Project Information</h4>
                <div className="blue-line mb-3"></div>
                {projectInfo.map((items) => (
                  <div key={items.id}>
                    <h5>{items.title}:</h5>
                    <p className="para-detail">{items.para}</p>
                    <div className="greyline mb-3"></div>
                  </div>
                ))}
              </div>
              <div className="d-flex justify-content-end mt-3">
                <div className="follow-btn">Follow</div>
              </div>
            </div>
            <div className="my-5">
              <h2>Project Description</h2>
              <p className="mt-3 mb-3">
                Pellentesque vehicula eros neque, maximus mattis est sagittis
                Nulla facilisi. In sed pretium dynamically target high-payoff
                intellectual capital for customized technologies objectively
                integrate emerging core competencies before process-centric
                communities dramatically evisculate holistic innovation rather
                than client-centric data.Pellentesque vehicula eros neque,
                maximus mattis est sagittis Nulla facilisi. In sed pretium
                dynamically target high-payoff intellectual capital for
                customized technologies objectively integrate emerging core
                competencies before process-centric communities dramatically
                evisculate holistic innovation rather than client-centric data.
              </p>
            </div>
            <div className="row">
              <div className="col-lg-9">
                <h2>Problem:</h2>
                <p className="mt-3">
                  Pellentesque vehicula eros neque, maximus mattis est sagittis
                  Nulla facilisi. In sed pretium dynamically target high-payoff
                  intellectual capital for customized technologies objectively
                  integrate emerging core competencies before process-centric
                  communities dramatically evisculate holistic innovation rather
                  than client-centric data.Pellentesque vehicula eros neque,
                  maximus mattis est sagittis Nulla facilisi. In sed pretium
                  dynamically target high-payoff intellectual capital for
                  customized technologies objectively integrate emerging core
                  competencies before process-centric communities dramatically
                  evisculate holistic innovation rather than client-centric
                  data.
                </p>
                <div className="mt-4">
                  {problemPoints.map((items) => (
                    <div className="points">
                      <p>{items.data}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="col-lg-3 mb-4">
                <img src={PorblemImg} alt="" className="img-fluid" />
              </div>
            </div>
            <div className="row mt-5">
              <div className="col-lg-4 mb-4">
                <img src={SolutionImg} alt="" className="img-fluid" />
              </div>
              <div className="col-lg-8 d-flex flex-column justify-content-center">
                <h2>Solution:</h2>
                <p className="mt-3">
                  Pellentesque vehicula eros neque, maximus mattis est sagittis
                  Nulla facilisi. In sed pretium dynamically target high-payoff
                  intellectual capital for customized technologies objectively
                  integrate emerging core competencies before process-centric
                  communities dramatically evisculate holistic innovation rather
                  than client-centric data.PellentesquePellentesque vehicula
                  eros neque, maximus mattis est sagittis Nulla facilisi. In sed
                  pretium dynamically target high-payoff intellectual capital
                  for customized technologies objectively integrate emerging
                  data.
                </p>
                <div className="mt-4">
                  {problemPoints.map((items) => (
                    <div className="points">
                      <p>{items.data}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="team-sec-contain">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-6">
                <div className="side-lining">
                  <h4>Our Team</h4>
                </div>
                <h2 className="text-center">
                  Digital solutions for modern problems
                </h2>
              </div>

              <div className="team-container pt-5">
                <div className="row justify-content-center">
                  {teamData.map((items) => {
                    const itemId = items.id;
                    const { isPlusIcon, showInstaIcon } = iconsState[
                      itemId
                    ] || { isPlusIcon: true, showInstaIcon: false };

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
                                <img
                                  src={FbIcon}
                                  alt=""
                                  className="insta-icon"
                                />
                                <img
                                  src={InstaIcon}
                                  alt=""
                                  className="insta-icon"
                                />
                                <img
                                  src={TwitIcon}
                                  alt=""
                                  className="insta-icon"
                                />
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
        <div className="projects-sec">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-6">
                <h4 className="side-lining">Related Project</h4>
                <h2 className="text-center">Related projects of our team</h2>
              </div>
            </div>
            <div className="tab-data">
              <div className="row pt-5 ">
                {portfolioData.map((items) => (
                  <div className="col-lg-4 col-md-6 mb-4 d-flex justify-content-center">
                    <div className="image-contain">
                      <div className="more-icon">
                        <img src={MoreIcon} alt="" />
                      </div>
                      <div class="overlay"></div>
                      <div className="hover-contents">
                        <h5 className="text-start">{items.title}</h5>
                        <p className="text-start">{items.para}</p>
                      </div>
                      <img src={items.image} alt="" className="img-fluid" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioDetail;
