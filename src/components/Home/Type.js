import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Software Developer 💻",
          "Freelancer 🌟",
          "Open Source Contributor 🌍",
          "Tech Enthusiast 🚀",
          "Lifelong Learner 📚",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 30,
        delay: 75,
      }}
    />
  );
}

export default Type;
