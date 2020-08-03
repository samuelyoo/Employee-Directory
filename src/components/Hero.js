import React from "react";
import Background from "../images/img.jpg"

function Hero(props) {
  return (
    <div className="hero text-right" style={{ backgroundImage: `url(${Background})` }}>
      {props.children}
    </div>
  );
}

export default Hero;
