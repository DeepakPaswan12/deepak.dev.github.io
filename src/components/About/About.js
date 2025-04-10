import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";
import Toolstack from "./Toolstack";

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Know Who <strong className="purple">I'M</strong>
            </h1>
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={laptopImg} alt="about" className="img-fluid" />
          </Col>
        </Row>
        <h1 className="project-heading">
          Professional <strong className="purple">Skillset </strong>
        </h1>

        <Techstack />

        <h1 className="project-heading">
          <strong className="purple">Tools</strong> I use
        </h1>
        <Toolstack />

        <h1 className="project-heading">
          <strong className="purple">Achievements</strong>
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
          {/* GitHub Contributions */}
          <Col md={4} className="achievement">
            <img
              src="https://img.shields.io/badge/Contributions-87-brightgreen?style=for-the-badge"
              alt="GitHub Contributions"
              className="img-fluid"
            />
          </Col>
          {/* GitHub Repositories */}
          <Col md={4} className="achievement">
            <img
              src="https://img.shields.io/badge/Repositories-10-blue?style=for-the-badge"
              alt="GitHub Repositories"
              className="img-fluid"
            />
          </Col>
          {/* GitHub Followers */}
          <Col md={4} className="achievement">
            <img
              src="https://img.shields.io/badge/Followers-13-yellow?style=for-the-badge"
              alt="GitHub Followers"
              className="img-fluid"
            />
          </Col>
        </Row>
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
          {/* Total Issues */}
          <Col md={4} className="achievement">
            <img
              src="https://img.shields.io/badge/Issues-24-red?style=for-the-badge"
              alt="GitHub Issues"
              className="img-fluid"
            />
          </Col>
          {/* Total Commits */}
          <Col md={4} className="achievement">
            <img
              src="https://img.shields.io/badge/Commits-8-orange?style=for-the-badge"
              alt="GitHub Commits"
              className="img-fluid"
            />
          </Col>
          {/* Longest Streak */}
          <Col md={4} className="achievement">
            <img
              src="https://img.shields.io/badge/Longest%20Streak-3%20days-purple?style=for-the-badge"
              alt="Longest Streak"
              className="img-fluid"
            />
          </Col>
        </Row>

        <Github />
      </Container>
    </Container>
  );
}

export default About;