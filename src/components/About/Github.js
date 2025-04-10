import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";

function Github() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        Days I <strong className="purple">Code</strong>
      </h1>
      <GitHubCalendar
        username="DeepakPaswan12"
        blockSize={15}
        blockMargin={5}
        color="#c084f5"
        fontSize={16}
      />
      {/* Profile Views Button */}
      <div style={{ marginTop: "20px" }}>
        <a
          href="https://github.com/DeepakPaswan12"
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: "none" }}
        >
          <img
            src="https://komarev.com/ghpvc/?username=DeepakPaswan12&style=flat-square&color=blue"
            alt="Profile Views"
          />
        </a>
      </div>
    </Row>
  );
}

export default Github;
