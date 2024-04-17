import React, { useState } from "react";
import "./Portfolio.css";
import BreadCrumbs from "../breadcrumbs/BreadCrumbs";
import FilterImg1 from "../../assets/dummyimages/dummy-port.png";
import FilterImg2 from "../../assets/dummyimages/dummy-port.png";
import FilterImg3 from "../../assets/dummyimages/dummy-port.png";
import FilterImg4 from "../../assets/dummyimages/dummy-port.png";
import FilterImg5 from "../../assets/dummyimages/dummy-port.png";
import FilterImg6 from "../../assets/dummyimages/dummy-port.png";
import MoreIcon from "../../assets/icons/blue-more-icon.svg";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Portfolio = () => {
  const filterTab = [
    { id: "1", title: "All Projects" },
    { id: "2", title: "Marketing" },
    { id: "3", title: "Development" },
    { id: "4", title: "Designing" },
    { id: "5", title: "Optimization" },
    { id: "6", title: "Consulting" },
  ];

  const portfolioData = [
    {
      id: "1",
      image: FilterImg1,
      title: "Marketing",
      para: "Lorem Ipsum is simply dummy text of the printing and typesetting",
    },
    {
      id: "2",
      image: FilterImg2,
      title: "Development",
      para: "Lorem Ipsum is simply dummy text of the printing and typesetting",
    },
    {
      id: "3",
      image: FilterImg3,
      title: "Designing",
      para: "Lorem Ipsum is simply dummy text of the printing and typesetting",
    },
    {
      id: "4",
      image: FilterImg4,
      title: "Business Solutions",
      para: "Lorem Ipsum is simply dummy text of the printing and typesetting",
    },
    {
      id: "5",
      image: FilterImg5,
      title: "Marketing",
      para: "Lorem Ipsum is simply dummy text of the printing and typesetting",
    },
    {
      id: "6",
      image: FilterImg6,
      title: "Designing",
      para: "Lorem Ipsum is simply dummy text of the printing and typesetting",
    },
  ];

  const [activeFilter, setActiveFilter] = useState("All Projects");

  const filteredData =
    activeFilter === "All Projects"
      ? portfolioData
      : portfolioData.filter((item) => item.title === activeFilter);

  const handleFilterClick = (title) => {
    setActiveFilter(title);
  };

  return (
    <div className="portfolio-container">
      <div className="portfolio-breadcrumb">
        <BreadCrumbs />
      </div>
      <div className="contents-sec">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <h4 className="side-lining">Why we are the best</h4>
              <h2>Why we are best in designing</h2>
            </div>
          </div>
          <div className="tabs-container">
            {filterTab.map((items) => (
              <div
                key={items.id}
                className={`tabs ${
                  activeFilter === items.title ? "active" : ""
                }`}
                onClick={() => handleFilterClick(items.title)}
              >
                {items.title}
              </div>
            ))}
          </div>
          <div className="tab-data">
            <div className="row pt-5">
              {filteredData.map((items) => (
                <div className="col-lg-4 col-md-6 mb-4" key={items.id}>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="image-contain"
                  >
                    <div className="more-icon">
                      <Link to="/portfolio-detail">
                        <img src={MoreIcon} alt="" />
                      </Link>
                    </div>
                    <div class="overlay"></div>
                    <div className="hover-contents">
                      <h5 className="text-start">{items.title}</h5>
                      <p className="text-start">{items.para}</p>
                    </div>
                    <img src={items.image} alt="" className="img-fluid" />
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
