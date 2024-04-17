import React from "react";
import "./Footer.css";
import Logo from "../../assets/logo/footer-logo.png";
import Fb from "../../assets/icons/footer-fb.svg";
import Insta from "../../assets/icons/foot-insta.svg";
import Twit from "../../assets/icons/footer-twit.svg";
import Linkdin from "../../assets/icons/footer-linkdin.svg";

const Footer = () => {
  const iconsData = [
    { id: "1", icon: Fb },
    { id: "2", icon: Insta },
    { id: "3", icon: Twit },
    { id: "4", icon: Linkdin },
  ];

  const footerContent = [
    {
      id: "1",
      title: " Contact",
      datas: [
        "(629) 555-0129",
        "info@example.com",
        "6391 Elgin St.Celina, 10299",
      ],
    },
    {
        id: "1",
        title: " Page",
        datas: [
          "Web development",
          "Digital marketing",
          "Business Credit industry",
          "Finance industry"
        ],
      }, {
        id: "1",
        title: " Quick Links",
        datas: [
          "Terms and Conditions",
          "Privacy Policy",
          "FAQs",
          "Support Center"
        ],
      },
  ];
  return (
    <div className="footer-container">
      <div className="container">
        <div className="row ">
          <div className="col-lg-3 col-md-4 mb-3">
            <img src={Logo} alt="" />
            <p className="mt-4">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.
            </p>
            <div className="d-flex gap-3 mt-4 mb-5">
              {iconsData.map((items) => (
                <div key={items.id}>
                  <img src={items.icon} alt="" />
                </div>
              ))}
            </div>
          </div>
          {footerContent.map((items) => (
            <div className="col-lg-3 col-md-4 mb-4">
              <h3>{items.title}</h3>
              {items.datas.map((data) => ( 
              <p className="mt-4">{data}</p> ))}
             
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
