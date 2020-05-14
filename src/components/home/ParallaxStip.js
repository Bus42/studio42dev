import React, { useState, useEffect } from "react";

const ParallaxStrip = (props) => {
  useEffect(() => {
    window.addEventListener("resize", handleResize);
  });

  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);
  const handleResize = () => {
    setViewportWidth(window.innerWidth);
  };
  return (
    <div className="parallax-container">
      <div className="parallax">
        <img
          src={
            viewportWidth < 512
              ? require(`../../images/parallax_images/${props.img}/${props.img}_512.jpg`)
              : viewportWidth < 1024
              ? require(`../../images/parallax_images/${props.img}/${props.img}_1024.jpg`)
              : viewportWidth < 1920
              ? require(`../../images/parallax_images/${props.img}/${props.img}_1920.jpg`)
              : viewportWidth < 3840
              ? require(`../../images/parallax_images/${props.img}/${props.img}_3840.jpg`)
              : require(`../../images/parallax_images/${props.img}/${props.img}.jpg`)
          }
          alt={props.alt}
        />
      </div>
    </div>
  );
};

export default ParallaxStrip;
