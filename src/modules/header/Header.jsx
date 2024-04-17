import React, { useEffect, useState } from "react";
import "./Header.css";
import Search from "../../assets/icons/regularsearch-alt.svg";
import Items from "../../assets/icons/header-submenu.svg";
import Logo from "../../assets/logo/LOGO.png";
import MiniPhn from "../../assets/icons/miniPhn.svg";
import MiniMail from "../../assets/icons/miniMail.svg";
import MiniLoc from "../../assets/icons/miniLocation.svg";
import MiniFb from "../../assets/icons/miniFb.svg";
import MiniTwit from "../../assets/icons/miniTwit.svg";
import MiniInsta from "../../assets/icons/miniInsta.svg";
import SearchPopup from "../searchpopup/SearchPopup";
import { NavLink } from "react-router-dom";
import SideBar from "../sidebar/SideBar";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleSideBar = () => {
    setIsSideBarOpen(!isSideBarOpen);
  };

  const handlePopup = () => {
    setIsOpen(!isOpen);
  };

  const contactSectionData = [
    { id: "1", icon: MiniPhn, title: "(629) 555-0129" },
    { id: "2", icon: MiniMail, title: "info@example.com" },
    { id: "3", icon: MiniLoc, title: "6391 Elgin St. Celina, 10299" },
  ];

  const miniIcons = [
    { id: "1", icon: MiniFb },
    { id: "2", icon: MiniTwit },
    { id: "13", icon: MiniInsta },
  ];

  const navbarToggler = document.querySelector(".navbar-toggler");

  const closeHamburgerMenu = () => {
    if (window.innerWidth < 992) {
      navbarToggler.click();
    }
  };

  const searchAndItemsIcons = (
    <>
      <div className="d-flex align-items-center gap-4 icons-sec ">
        <img src={Search} alt="" onClick={handlePopup} />
        <img src={Items} alt="" onClick={handleSideBar} />
      </div>
      {isOpen && <SearchPopup isOpen={isOpen} />}
    </>
  );
  return (
    <>
      <div className="contact-section ">
        <div className="container">
          <div className="left-right-cont">
            <div className="left-section">
              {contactSectionData.map((items) => (
                <div className="mini-contents" key={items.id}>
                  <img src={items.icon} alt="" />
                  <p>{items.title}</p>
                </div>
              ))}
            </div>
            <div className="right-section">
              {miniIcons.map((items) => (
                <div className="icon-container" key={items.id}>
                  <img src={items.icon} alt="" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="sticky-top">
        <div className="background-cont">
          <div className="container">
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
              <div className="container-fluid">
                <div>
                  <img src={Logo} alt="" className="logo-cls" />
                </div>
                <div className="d-flex gap-4">
                  {windowWidth < 992 && searchAndItemsIcons}
                  <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarScroll"
                    aria-controls="navbarScroll"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <span className="navbar-toggler-icon"></span>
                  </button>
                </div>

                <div className="collapse navbar-collapse" id="navbarScroll">
                  <ul className="navbar-nav mx-auto my-2 my-lg-0 navbar-nav-scroll">
                    <li className="nav-item">
                      <NavLink
                        className="nav-link"
                        activeClassName="active"
                        aria-current="page"
                        to="/"
                        onClick={closeHamburgerMenu}
                      >
                        Home
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink
                        className="nav-link"
                        to="/about"
                        onClick={closeHamburgerMenu}
                      >
                        About
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink
                        className="nav-link"
                        to="/blog"
                        onClick={closeHamburgerMenu}
                      >
                        Blog
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink
                        className="nav-link"
                        to="/services"
                        onClick={closeHamburgerMenu}
                      >
                        Services
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink
                        className="nav-link"
                        to="/portfolio"
                        onClick={closeHamburgerMenu}
                      >
                        Portfolio
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink
                        className="nav-link"
                        to="/contact"
                        onClick={closeHamburgerMenu}
                      >
                        Contact
                      </NavLink>
                    </li>
                  </ul>
                  {windowWidth >= 992 ? searchAndItemsIcons : ""}
                </div>
              </div>
            </nav>
            {isSideBarOpen && <SideBar isSideBarOpen={isSideBarOpen} />}
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
