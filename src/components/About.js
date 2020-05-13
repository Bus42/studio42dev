import React from "react";

const About = () => {
  return (
    <main>
      <div>
        <h1 className="center-align">About Me</h1>
        <div style={{display: "flex", flexFlow: "column", justifyContent: "center", alignItems: "center"}} >
          <div
            class="fb-page"
            data-tabs="timeline"
            data-href="https://www.facebook.com/pg/studio42dev/"
            data-width="380"
          ></div>
        </div>
      </div>
    </main>
  );
};

export default About;
