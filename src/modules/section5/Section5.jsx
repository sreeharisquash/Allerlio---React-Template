import React, { useState } from "react";
import "./Section5.css";
import TeamImg1 from "../../assets/dummyimages/dummy-team.png";
import TeamImg2 from "../../assets/dummyimages/dummy-team.png";
import TeamImg3 from "../../assets/dummyimages/dummy-team.png";

import PlusIcon from "../../assets/icons/plus-icon.svg";
import MinusIcon from "../../assets/icons/minus-icon.svg";
import InstaIcon from "../../assets/icons/insta-icon.svg";
import FbIcon from "../../assets/icons/fb-icon.svg";
import TwitIcon from "../../assets/icons/twit-icon.svg";

import { AnimatePresence, motion } from "framer-motion";

const Section5 = () => {
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
  return (
    <div className="section5-container">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="side-lining">
              <h4>Our Team</h4>
            </div>
            <h2 className="text-center mt-3">
              Digital solutions for modern problems
            </h2>
          </div>
        </div>
        <div className="team-container pt-5">
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
                          <img src={InstaIcon} alt="" className="insta-icon" />
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
  );
};

export default Section5;
