import React from "react";
import "./UnderConstruction.css";
import UnderConstructionImg from "../../assets/images/underconstruction/underconstruction.webp";
import CommonButton from "../commonbutton/CommonButton";
import BreadCrumbs from "../breadcrumbs/BreadCrumbs";
import { Link } from "react-router-dom";
import CountDown from "../countdown/CountDown";

const UnderConstruction = () => {
  return (
    <div>
      <div className="underconstruction-breadcrumb">
        <BreadCrumbs />
      </div>

      <div className="container">
        <div className="construction-image-container">
          <div className="row">
            <div className="col-lg-6">
            <img src={UnderConstructionImg} alt="" className="img-fluid" />

            </div>
            <div className="col-lg-6 d-flex align-items-center mb-5">
              <CountDown/>
            </div>
          </div>
        </div>
        <Link to="/" className="d-flex justify-content-center mb-5">
          <CommonButton label="Get Back Home" bgColor="#D2042D" color="white" />
        </Link>
      </div>
    </div>
  );
};

export default UnderConstruction;
