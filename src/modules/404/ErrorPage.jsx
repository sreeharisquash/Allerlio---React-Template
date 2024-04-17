import React from "react";
import "./ErrorPage.css";
import { Link } from "react-router-dom";
import CommonButton from "../commonbutton/CommonButton";
import ErrorImg from '../../assets/images/404page/404errorimg.png'

const ErrorPage = () => {
  return (
    <div className="errorpage-container">
      <div className="error-breadcrumb">
        <div className="bread-crumbs">
          <h1 className="text-white">404 ERROR</h1>
          <div className="d-flex gap-2 align-items-baseline">
            <Link to="/" className="navigate-link">
              Home
            </Link>{" "}
            <h4 className="text-white"> / </h4>{" "}
            <span className="orange-cls">404 ERROR</span>
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-center">
        <img src={ErrorImg} alt="" />
      </div>
        <Link to='/' className="d-flex justify-content-center pb-5">
          <CommonButton label="Get Back Home" bgColor="#D2042D" color="white" />
        </Link>
      </div>
  );
};

export default ErrorPage;
