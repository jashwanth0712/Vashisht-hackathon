import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
      <Typewriter
      options={{
        strings: [
          "We Build",
          "We Learn",
          "We Enjoy",
          "We Try",
          "We join",
          // "APP Development",
          // "Deep Learning ",
          // "Machine Learning",
          // "Data science",
          // "Web Development",
          // "Block chain Development",
          // "Game Development",
          // "Computer vision",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 10,
        delay:1,
      }}
    />
  );
}

export default Type;
