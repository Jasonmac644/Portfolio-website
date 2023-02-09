import React from "react";
import "./aboutme.css";
import testPdf from "../Content/Myresume.pdf";

const AboutMe = () => {
  return (
    <section id="Aboutme">
      <div id="intro-screen">
        <iframe
          src={testPdf}
          title="Resume"
          width="400"
          height="500"
        />
        <div className="banner" id="first-banner">Welcome to my website</div>
        <div className="banner" id="second-banner">by Jason Macdonald</div>
      </div>
    </section>
  );
};

export default AboutMe;
