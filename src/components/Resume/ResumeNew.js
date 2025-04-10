import React from "react";
import { Container, Row } from "react-bootstrap";
import Particle from "../Particle";

function ResumeNew() {
  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <p style={{ color: "white", textAlign: "center" }}>
            Resume functionality has been removed.
          </p>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;
