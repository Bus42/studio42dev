import React from "react";
import "./footer.scss";

const Footer = () => {
  return (
    <footer className="page-footer grey darken-3">
      <div className="container">
        <div className="row">
          <div className="col l6 s12">
            <h5 className="white-text">Studio42 Web Development</h5>

            <p className="white-text text-darken-2">
              <a href="mailto:greg@studio42dev.com" target="mailtogreg">
                <button
                  className="btn waves-effect waves-light grey darken-3 white-text text-darken-2"
                  style={{ margin: "0 1em 1em 0" }}
                >
                  <i className="material-icons">mail</i>
                </button>
              </a>
              Contact me today to discuss a tailored solution for your business.
            </p>
          </div>
          <div className="col l4 offset-l2 s12">
            <h5 className="white-text">Links</h5>
            <ul>
              <li>
                <a
                  className="grey-text text-lighten-3"
                  href="https://firebase.google.com/?authuser=0"
                  target="blank"
                >
                  Firebase
                </a>
              </li>
              <li>
                <a
                  className="grey-text text-lighten-3"
                  href="https://reactjs.org/"
                  target="blank"
                >
                  React
                </a>
              </li>
              <li>
                <a
                  className="grey-text text-lighten-3"
                  href="https://materializecss.com/"
                  target="blank"
                >
                  MaterializeCSS
                </a>
              </li>
              <li>
                <a
                  className="grey-text text-lighten-3"
                  href="https://www.freecodecamp.org/"
                  target="blank"
                >
                  FreeCodeCamp
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-copyright">
        <div className="container">
          © 2020 Studio42Dev
          <button
            className="btn waves-effect waves-light grey darken-3 white-text text-darken-2 right"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              });
            }}
          >
            <i className="material-icons left">arrow_upward</i>Back to top
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
