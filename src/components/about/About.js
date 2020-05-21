import React from "react";
import "./about.scss";

const About = () => {
  return (
    <div
      id="about"
      style={{
        display: "flex",
        flexFlow: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div className="card">
        <div
          className="fb-page"
          data-tabs="timeline"
          data-href="https://www.facebook.com/pg/studio42dev/"
          data-width="380"
        ></div>
      </div>
    </div>
  );
};

export default About;
