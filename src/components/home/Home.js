import React from "react";
import "./home.scss";
import responsive from "../../images/responsive.svg";

const Home = () => {
  return (
    <div id="home">
      <h1 className="center-align">Progressive Web Application Development</h1>
      <p className="center-align">
        I design and build websites optimized for today's mobile user.
      </p>
      <div className="strip with-opacity">
        <div className="home-grid-container">
          <div className="home-text hide-on-med-and-down"></div>
          <div className="home-image">
            <img
              style={{maxWidth:"100%"}}
              src={responsive}
              alt="multiple size displays"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
