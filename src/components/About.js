import React from "react";

function About() {
  return (
    <div id="about">
      <h2>About Me</h2>
      <p>I Made This</p>
      <img src={image} alt="I made this" />
    </div>
  );
}

export const image = "https://i.imgur.com/mV8PQxj.gif";

export default About;
