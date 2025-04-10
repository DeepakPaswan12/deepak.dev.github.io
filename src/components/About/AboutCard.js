import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hello Everyone! I am <span className="purple">Deepak Paswan</span> from{" "}
            <span className="purple">India</span>.
            <br />
            I am a passionate <span className="purple">Software Developer</span> who loves building
            impactful projects and contributing to <span className="purple">open-source</span>.
            <br />
            My goal is to create solutions that solve real-world problems and make a difference.
            <br />
            <br />
            Apart from coding, here are a few activities I enjoy:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Exploring New Technologies and Tools
            </li>
            <li className="about-activity">
              <ImPointRight /> Going to the Gym
            </li>
            <li className="about-activity">
              <ImPointRight /> Listening to Music
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)", marginTop: "20px" }}>
            "Strive to build things that inspire and empower others!"{" "}
          </p>
          <footer className="blockquote-footer">Deepak Paswan</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
