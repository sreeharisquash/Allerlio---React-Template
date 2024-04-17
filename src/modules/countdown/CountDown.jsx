import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Countdown from "react-countdown";
import './CountDown.css'

function CountDown() {
  const targetDate = new Date("2024-03-31T00:00:00Z");
  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      return <span>We are live</span>;
    } else {
      return (
        <div>
          <h3>
            {days} : {hours} : {minutes} : {seconds}
          </h3>
        </div>
      );
    }
  };
  return (
    <div className="countdown">
      <Container>
        <h2>We are working on this page</h2>
        <h6 className="text-start">We will relaunch our website in</h6>
        <Countdown date={targetDate} renderer={renderer} />
        <div></div>
      </Container>
    </div>
  );
}

export default CountDown;
