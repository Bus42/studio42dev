import React, { useEffect } from "react";
import M from "materialize-css";
import "./home.scss";

//grid images
import responsive from "../../images/responsive.svg";
import react from "../../images/react.svg";
import firebase_logo from "../../images/firebase.svg";

//parallax divs
import ParallaxStrip from "./ParallaxStrip";

const Home = () => {
  useEffect(() => {
    const elems = document.querySelectorAll(".parallax");
    M.Parallax.init(elems);
    const abortcontroller = new AbortController();
    return function cleanup() {
      abortcontroller.abort();
    }
  });

  return (
    <div id="home">
      <ParallaxStrip img="keyboard" alt="closeup of backlit keyboard" />
      <div className="section white">
        <div className="home-grid-container">
          <div className="home-text">
            <div className="container">
              <h2>Development for today's users</h2>
              <br></br>
              <p>
                I create websites and applications for every display size that
                can be downloaded to your users' Android or Apple devices.
              </p>
            </div>
          </div>
          <div className="home-image valign-wrapper">
            <img className="logo" src={responsive} alt="multiple size displays" />
          </div>
        </div>
      </div>
      <ParallaxStrip img="code" alt="screen with lines of React.js code" />
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
            <img className="logo smaller" src={react} alt="multiple size displays" />
          </div>
        </div>
      </div>
      <ParallaxStrip
        img="macbook"
        alt="macbook open with server code displayed"
      />
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
            <img className="logo" src={firebase_logo} alt="Google Firebase logo" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
