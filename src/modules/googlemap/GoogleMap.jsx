import React from "react";
import './GoogleMap.css'

const GoogleMap = () => {
  return (
    <div className="google-map-container">
    <div className="map-overlay"></div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14798864.584205708!2d-2.9023228681901827!3d63.077941223331216!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x461268458f4de5bf%3A0xa1b03b9db864d02b!2sNorway!5e0!3m2!1sen!2sin!4v1706781886078!5m2!1sen!2sin"
        style={{width:"100%" , border:"none"}}
        height="450"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
     </div>
  );
};

export default GoogleMap;
