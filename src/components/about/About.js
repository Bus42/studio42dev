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
    title: "FreeCodeCamp",
    content: "I have earned Front",
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
              style={{ width: "350px" }}
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
