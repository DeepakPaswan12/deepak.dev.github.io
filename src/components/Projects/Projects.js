import React from "react";
import { Container, Row, Col } from "react-bootstrap";
// import ProjectCards from "./ProjectCards"; // Comment this out if needed

function Projects() {
  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        {/* Comment out the project cards */}
        {/* <Row>
          <Col md={4}>
            <ProjectCards
              imgPath="path/to/image"
              title="Project Title"
              description="Project Description"
              ghLink="https://github.com"
              demoLink="https://demo.com"
            />
          </Col>
        </Row> */}
      </Container>
    </Container>
  );
}

export default Projects;
