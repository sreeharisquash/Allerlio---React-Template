import React, { useEffect, useState } from "react";
import "./SideBar.css";
import Logo from "../../assets/images/sidebar/images/sidebar-logo.png";
import CommonButton from "../commonbutton/CommonButton";
import MiniPhn from "../../assets/images/sidebar/icons/sidebar-phn.svg";
import MiniMail from "../../assets/images/sidebar/icons/sidebar-email.svg";
import MiniLoc from "../../assets/images/sidebar/icons/sidebar-loc.svg";
import CloseBtn from "../../assets/images/sidebar/icons/sidebar-close.svg";

const SideBar = ({ isSideBarOpen }) => {
  const [isSideBarOpened, setIsSideBarOpened] = useState(isSideBarOpen);

  useEffect(() => {
    setIsSideBarOpened(isSideBarOpen);
  }, [isSideBarOpen]);

  const handleClose = () => {
    setIsSideBarOpened(false);
  };

  const contactSectionData = [
    { id: "1", icon: MiniPhn, title: "(629) 555-0129" },
    { id: "2", icon: MiniMail, title: "info@example.com" },
    { id: "3", icon: MiniLoc, title: "6391 Elgin St. Celina, 10299" },
  ];
  return (
    <div className={`sidebar-container ${isSideBarOpened ? "" : "hide"}`}>
      <div className="d-flex justify-content-between align-items-start">
        <img src={Logo} alt="" />
        <img src={CloseBtn} alt="" className="closebtn" onClick={handleClose}/>
      </div>

      <h5 className="mt-4 mb-3">Get in touch</h5>
      <p className="mb-4">
        Blandit turpis cursus in hac habitasse platea dictumst quisque sagittis.
        Urna molestie at elementum eu facilisis sed.
      </p>
      <CommonButton label="Consultation" bgColor="#D2042D" color="white" />
      <div className="mt-5">
        <h5>contact info</h5>
        <div className="contact-contain pt-3">
          {contactSectionData.map((items) => (
            <div className="d-flex gap-3 align-items-baseline" key={items.id}>
              <img src={items.icon} alt="" />
              <p>{items.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SideBar;
