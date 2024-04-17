import React from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import Router from "../../Routes/Router";

const RouterWrapper = () => {
  return (
    <div>
      <Header />
      <Router />
      <Footer />
    </div>
  );
};

export default RouterWrapper;
