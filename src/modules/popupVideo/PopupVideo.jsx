import React from "react";
import "./PopupVideo.css";
import Modal from "react-modal";

const PopupVideo = ({ isOpen, onClose }) => {
  // const modalStyles = {
  //   content: {
  //     maxWidth:'100%',
  //     display: "flex",
  //     marginTop: "auto",
  //     marginLeft: "auto",
  //     border: "none",
  //     padding: "20px",
  //   },
  // };
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      className="d-flex gap-4 popup-video"
          >
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/LFLzqkF5UME?si=K1yd7GDEP54bx3iS"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
      <button className="btn btn-primary " onClick={onClose}>
        Close
      </button>
    </Modal>
  );
};

export default PopupVideo;
