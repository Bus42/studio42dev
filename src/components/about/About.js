import React, { useEffect } from "react";
import M from "materialize-css";
import "./about.scss";
import AboutCard from "./AboutCard";
import shades from "../../images/shades.png";
import FEL_cert from "../../images/certifications/FEL.png";
import JADS_cert from "../../images/certifications/JADS.png";
import LFE_cert from "../../images/certifications/LFE.png";
import RWD_cert from "../../images/certifications/RWD.png";

const cardinfo = [
  {
    title: "Hi, I'm Greg.",
    content: (
      <div>
        <img
          className="right"
          style={{ width: "90px" }}
          src={shades}
          alt="Me in shades and a ballcap"
        />
        <p>
          I'm a self-taught web developer based out of a tiny town on the
          Colorado Plains. I believe in simple, intuitive, and modern user
          interfaces.
        </p>
      </div>
    ),
  },
  {
    title: "My Mission",
    content:
      "My mission is to make accessible, fast, secure, and modern Progressive Web Applications that can be used by any person on any device.",
  },
  {
    title: "Responsive Web Design",
    content: (
      <img
        onClick={(e) => toggleFullscreen(e.target)}
        className="cert"
        src={RWD_cert}
        alt="Responsive Web Design certification from FreeCodeCamp"
      />
    ),
  },
  {
    title: "Front End Libraries",
    content: (
      <img
        onClick={(e) => toggleFullscreen(e.target)}
        className="cert"
        src={FEL_cert}
        alt="Front End Libraries certification from FreeCodeCamp"
      />
    ),
  },
  {
    title: "JavaScript Algorithms and Data Structures",
    content: (
      <img
        onClick={(e) => toggleFullscreen(e.target)}
        className="cert"
        src={JADS_cert}
        alt="JavaScript Data Structures and Alogorithms certification from FreeCodeCamp"
      />
    ),
  },
  {
    title: "Legacy Front End",
    content: (
      <img
        onClick={(e) => toggleFullscreen(e.target)}
        className="cert"
        src={LFE_cert}
        alt="Legacy Front End certification from FreeCodeCamp"
      />
    ),
  },
  {
    title: "Drop me a line",
    content: (
      <div id="contact_mini">
        <p>
          Send me a message so we can start talking about creating the perfect
          Progressive Web Application for your small business, band, civic
          group, or non-profit
        </p>
    <button className="btn grey darken-2 white-text text-darken-2 waves-effect waves-light right" ><i className="material-icons">send</i></button>
      </div>
    ),
  },
];

function toggleFullscreen(elem) {
  elem = elem || document.documentElement;

  if (
    !document.fullscreenElement &&
    !document.mozFullScreenElement &&
    !document.webkitFullscreenElement &&
    !document.msFullscreenElement
  ) {
    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    } else if (elem.msRequestFullscreen) {
      elem.msRequestFullscreen();
    } else if (elem.mozRequestFullScreen) {
      elem.mozRequestFullScreen();
    } else if (elem.webkitRequestFullscreen) {
      elem.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
    }
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen();
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    }
  }
}

const About = () => {
  useEffect(() => {
    const elems = document.querySelectorAll(".carousel");
    M.Carousel.init(elems);
    const abortcontroller = new AbortController();
    return function cleanup() {
      abortcontroller.abort();
    };
  });

  const next = () => {
    const cardCarousel = document.querySelector(".carousel");
    const cardCarouselInstance = M.Carousel.getInstance(cardCarousel);
    cardCarouselInstance.next();
  };

  const prev = () => {
    const cardCarousel = document.querySelector(".carousel");
    const cardCarouselInstance = M.Carousel.getInstance(cardCarousel);
    cardCarouselInstance.prev();
  };

  return (
    <div id="about">
      <div id="carousel" className="carousel">
        {cardinfo.map((card, index) => {
          return (
            <a
              id="carousel_anchor"
              href={`#${index}!`}
              className="carousel-item"
              key={index}
            >
              <AboutCard
                title={card.title}
                content={card.content}
                next={next}
                prev={prev}
                length={cardinfo.length}
                index={index}
              />
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default About;
