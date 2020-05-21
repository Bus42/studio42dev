import React, { useEffect } from "react";
import M from "materialize-css";
import "./about.scss";
import AboutCard from "./AboutCard";

const cardinfo = [
  {
    title: "Hi! I'm Greg.",
    content:
      "I'm a self-taught web developer based out of a tiny town on the Colorado Plains. I'm also a bit of a minimalist. I don't believe that a website needs flashy graphics or needs to be overloaded with animations to stand out from the crowd.",
  },
  {
    title: "I like React",
    content: "content",
  },
  {
    title: "Card 3",
    content: "content",
  },
  {
    title: "Card 4",
    content: "content",
  },
];

const About = () => {
  useEffect(() => {
    const elems = document.querySelectorAll(".carousel");
    M.Carousel.init(elems);
    const abortcontroller = new AbortController();
    return function cleanup() {
      abortcontroller.abort();
    };
  });
  return (
    <div id="about" className="carousel">
      {cardinfo.map((card, index) => {
        return (
          <a href={`#${index}!`} className="carousel-item" key={index}>
            <AboutCard title={card.title} content={card.content} />
          </a>
        );
      })}
    </div>
  );
};

export default About;
