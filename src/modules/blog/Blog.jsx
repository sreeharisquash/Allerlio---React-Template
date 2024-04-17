import React, { useState } from "react";
import "./Blog.css";
import BreadCrumbs from "../breadcrumbs/BreadCrumbs";
import BlogImg1 from "../../assets/dummyimages/dummy-blog.png";
import BlogImg2 from "../../assets/dummyimages/dummy-blog.png";
import BlogImg3 from "../../assets/dummyimages/dummy-blog.png";
import BlogImg4 from "../../assets/dummyimages/dummy-blog.png";

import CategoryImg1 from "../../assets/dummyimages/dummy-solution.png";
import CategoryImg2 from "../../assets/dummyimages/dummy-solution.png";
import CategoryImg3 from "../../assets/dummyimages/dummy-solution.png";
import CategoryImg4 from "../../assets/dummyimages/dummy-solution.png";

import TeamImg1 from "../../assets/dummyimages/dummy-team.png";
import TeamImg2 from "../../assets/dummyimages/dummy-team.png";
import TeamImg3 from "../../assets/dummyimages/dummy-team.png";

import PlusIcon from "../../assets/icons/plus-icon.svg";
import MinusIcon from "../../assets/icons/minus-icon.svg";
import InstaIcon from "../../assets/icons/insta-icon.svg";
import FbIcon from "../../assets/icons/fb-icon.svg";
import TwitIcon from "../../assets/icons/twit-icon.svg";
import { Link } from "react-router-dom";

import { AnimatePresence, motion } from "framer-motion";

const Blog = () => {
  
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

  const blogData = [
    {
      id: "1",
      image: BlogImg1,
      title: "How does writing influence your personal brand?",
      para: "It is a long established fact that a reader kll will be distracted by the readable It is a long established fact that a reader kll will be distracted by the readable contentjk contentjk ",
    },
    {
      id: "2",
      image: BlogImg2,
      title: "How does writing influence your personal brand?",
      para: "It is a long established fact that a reader kll will be distracted by the readable It is a long established fact that a reader kll will be distracted by the readable contentjk contentjk ",
    },
    {
      id: "3",
      image: BlogImg3,
      title: "How does writing influence your personal brand?",
      para: "It is a long established fact that a reader kll will be distracted by the readable It is a long established fact that a reader kll will be distracted by the readable contentjk contentjk ",
    },
    {
      id: "4",
      image: BlogImg4,
      title: "How does writing influence your personal brand?",
      para: "It is a long established fact that a reader kll will be distracted by the readable It is a long established fact that a reader kll will be distracted by the readable contentjk contentjk ",
    },
  ];

  const blogData2 = [
    {
      id: "1",
      image: BlogImg1,
      title: "How does writing influence your personal brand?",
      para: "It is a long established fact that a reader kll will be distracted by the readable It is a long established fact that a reader kll will be distracted by the readable contentjk contentjk ",
    },
    {
      id: "2",
      image: BlogImg2,
      title: "How does writing influence your personal brand?",
      para: "It is a long established fact that a reader kll will be distracted by the readable It is a long established fact that a reader kll will be distracted by the readable contentjk contentjk ",
    },
    {
      id: "3",
      image: BlogImg3,
      title: "How does writing influence your personal brand?",
      para: "It is a long established fact that a reader kll will be distracted by the readable It is a long established fact that a reader kll will be distracted by the readable contentjk contentjk ",
    },
  ];

  const categoryData = [
    { id: "1", image: CategoryImg1, button: "Marketing" },
    { id: "2", image: CategoryImg2, button: "Developing" },
    { id: "3", image: CategoryImg3, button: "Designing" },
    { id: "4", image: CategoryImg4, button: "Testing" },
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

  return (
    <div className="blog-container">
      <div className="blog-breadcrumb-container">
        <BreadCrumbs />
      </div>
      <div className="blog-contents">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <h4 className="side-lining text-center">Our Team</h4>
              <h2 className="text-center">
                Digital solutions for modern problems
              </h2>
            </div>
          </div>
          <div className="blog-data">
            <div className="row pt-5">
              {blogData.map((items) => (
                <div className="col-lg-6 mb-5" key={items.id}>
                  <div className="image-relative">
                    <img src={items.image} alt="" className="img-fluid" />
                    <div className="blog-detail-contain">
                      <div className="date-and-month">
                        <div className="text-center">22</div>
                        <div className="text-center">May</div>
                      </div>

                      <div className="d-flex gap-4 align-items-center bg-white px-2 response-data">
                        <div className="blog-user">Admin</div>
                        <div className="comments">Comments</div>
                      </div>
                    </div>
                  </div>
                  <div className="pt-5 mt-2">
                    <h4 className="text-black">{items.title}</h4>
                    <p>{items.para}</p>
                    <Link to="/blog-detail">
                      <div className="read-more">Read More</div>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="section-sec">
            <div className="row justify-content-center">
              <div className="col-lg-6">
                <h4 className="side-lining text-center">Our Team</h4>
                <h2 className="text-center">
                  Digital solutions for modern problems
                </h2>
              </div>
            </div>
            <div className="row pt-5">
              {categoryData.map((items) => (
                <div className="col-lg-3 category-tab-img mb-4" key={items.id}>
                  <img src={items.image} alt="" className="img-fluid" />
                  <div className="category-tab">{items.button}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="team-sec-contain">
            <div className="row justify-content-center">
              <div className="col-lg-6">
                <div className="side-lining">
                  <h4>Our Team</h4>
                </div>
                <h2 className="text-center">
                  Digital solutions for modern problems
                </h2>
              </div>
              {/* <div className="team-container pt-5">
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
                            <img
                              src={PlusIcon}
                              alt=""
                              className="plus-icon"
                              style={{ marginBottom: "2rem" }}
                              onClick={() => handlePlusIconClick(itemId)}
                            />
                          ) : (
                            <img
                              src={MinusIcon}
                              alt=""
                              className="minus-icon"
                              style={{ marginBottom: "2rem" }}
                              onClick={() => handleMinusIconClick(itemId)}
                            />
                          )}

                          {showInstaIcon && (
                            <>
                              <img src={FbIcon} alt="" className="insta-icon" />
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
                            </>
                          )}
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
              </div> */}
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
          <div className="section-sec">
            <div className="row justify-content-center">
              <div className="col-lg-6">
                <h4 className="side-lining text-center">Related Blogs</h4>
                <h2 className="text-center">Related blogs For you</h2>
              </div>
            </div>
            <div className="row pt-5">
              {blogData2.map((items) => (
                <div className="col-lg-4 mb-5" key={items.id}>
                  <div className="image-relative">
                    <img src={items.image} alt="" className="img-fluid" />
                    <div className="blog-detail-contain">
                      <div className="date-and-month2">
                        <div className="text-center">22</div>
                        <div className="text-center">May</div>
                      </div>

                      <div className="d-flex gap-2 align-items-center bg-white px-2 response-data">
                        <div className="blog-user">Admin</div>
                        <div className="comments">Comments</div>
                      </div>
                    </div>
                  </div>
                  <div className="pt-5 mt-2">
                    <h4 className="text-black">{items.title}</h4>
                    <p>{items.para}</p>
                    <Link to="/blog-detail">
                      <div className="read-more">Read More</div>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
