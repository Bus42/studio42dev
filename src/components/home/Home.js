import React, { useEffect } from "react";
import M from "materialize-css";
import "./home.scss";
import responsive from "../../images/responsive.svg";
import keyboard from "../../images/keyboard.jpg";
import code from "../../images/code.jpg";

const Home = () => {
  useEffect(() => {
    const elems = document.querySelectorAll(".parallax");
    M.Parallax.init(elems, { responsiveThreshold: 500 });
  });
  return (
    <div id="home">
      <div className="parallax-container">
        <div className="parallax">
          <img src={keyboard} alt="laptop keyboard closeup" />
        </div>
      </div>
      <div className="section white">
        <div className="home-grid-container">
          <div className="home-text">
            <div className="container">
              <h2>Progressive Web Application development for today's users</h2>
              <br></br>
              <p>
                At Studio42, I design websites for every display size and create
                applications that can be downloaded to your Android or Apple
                device just like a native app to keep your users engaged.
              </p>
            </div>
          </div>
          <div className="home-image valign-wrapper">
            <img
              style={{ maxWidth: "100%" }}
              src={responsive}
              alt="multiple size displays"
            />
          </div>
        </div>
      </div>
      <div className="parallax-container">
        <div className="parallax">
          <img src={code} alt="screen with lines of code" />
        </div>
      </div>
    </div>
  );
};

export default Home;
