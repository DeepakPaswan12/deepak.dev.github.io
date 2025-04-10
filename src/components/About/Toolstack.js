import React from "react";
import { Col, Row } from "react-bootstrap";
import { SiVisualstudiocode } from "react-icons/si";
import { FaRobot } from "react-icons/fa"; // Placeholder for Cursor AI

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaRobot /> {/* Placeholder for Cursor AI */}
      </Col>
    </Row>
  );
}

export default Toolstack;
