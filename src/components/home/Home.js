import React, { useEffect } from "react";
import M from "materialize-css";
import "./home.scss";

//grid images
import responsive from "../../images/responsive.svg";
import react from "../../images/react.svg";
import firebase_logo from "../../images/firebase.svg";

//parallax divs
import keyboard from "../../images/keyboard.jpg";
import code from "../../images/code.jpg";
import macbook from "../../images/macbook.jpg";

// TODO: Convert strips to components with two props: header and text

const Home = () => {
  useEffect(() => {
    const elems = document.querySelectorAll(".parallax");
    M.Parallax.init(elems);
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
              <h2>Development for today's users</h2>
              <br></br>
              <p>
                I create websites and applications for every display size that can be downloaded to your users' Android or Apple
                devices.
              </p>
            </div>
          </div>
          <div className="home-image valign-wrapper">
            <img
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
              <h2>Built with Firebase</h2>
              <br></br>
              <p>
                Firebase provides cloud storage, real-time database,
                authentication, hosting, and much more. My custom-built
                applications are hosted on Firebase for unrivaled speed and
                security. All assets are served over HTTPS, protecting the
                integrity of your website and the security of your users.
              </p>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
            }}
            className="home-image valign-wrapper"
          >
            <img
              src={firebase_logo}
              alt="Google Firebase logo"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
