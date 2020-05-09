import React, { useEffect } from "react";
import M from "materialize-css";
import "./home.scss";
import responsive from "../../images/responsive.svg";
import keyboard from "../../images/keyboard.jpg";
import code from "../../images/code.jpg";
import react from "../../images/react.svg";
import macbook from "../../images/macbook.jpg";
import firebase_logo from "../../images/firebase.png";

// TODO: Convert strips to components with two props: header and text

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
      <div className="section white">
        <div className="home-grid-container_2">
          <div className="home-text_2">
            <div className="container">
              <h2>Built with React</h2>
              <br></br>
              <p>
                React is a framework created by Jordan Walke, a software
                engineer at Facebook, that allows for much faster loading and
                navigation of web pages than traditional (old school) websites
                and allows for the creation of reusable components to ensure a
                consistent look across all of the pages on your website or
                application.
              </p>
            </div>
          </div>
          <div className="home-image_2 valign-wrapper">
            <img
              style={{ maxWidth: "100%" }}
              src={react}
              alt="multiple size displays"
            />
          </div>
        </div>
      </div>
      <div className="parallax-container">
        <div className="parallax">
          <img src={macbook} alt="screen with lines of code" />
        </div>
      </div>
      <div className="section white">
        <div className="home-grid-container">
          <div className="home-text">
            <div className="container">
              <h2>Firebase Hosting</h2>
              <br></br>
              <p>
                Firebase provides cloud storage, real-time database,
                authentication, cloud functions, and much more. My custom-built
                applications are hosted on Firebase for unrivaled speed and
                security. All assets are served over HTTPS, protecting the
                integrity of your website and the security of your users.
              </p>
            </div>
          </div>
          <div className="home-image valign-wrapper">
            <img
              style={{ maxWidth: "100%" }}
              src={firebase_logo}
              alt="multiple size displays"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
