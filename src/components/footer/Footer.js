import React from "react";
import "./footer.scss";

const Footer = () => {
  return (
    <div id="footer" className="footer-grid-container">
      <div className="footer-gutter_left"></div>
      <div className="footer-gutter_right"></div>
      <div className="footer-center">
        <div className="footer-center_bottom"></div>
        <div className="footer-center_top"></div>
        <div className="footer-center_main">
          <p className="center-align white-text text-darken-2">Footer</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
