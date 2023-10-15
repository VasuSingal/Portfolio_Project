import React from "react";
import "./works.css";
import Port1 from "../../assets/port1.jpg";
import Port2 from "../../assets/port2.jpg";
import Port3 from "../../assets/port3.jpg";

const Works = () => {
  return (
    <section id="works">
      <h2 className="worksTitle">My Portfolio</h2>
      <span className="worksContent">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Enim ut tellus
        elementum sagittis vitae.
      </span>
      <div className="worksImgs">
        <img src={Port1} alt="" className="worksImg" />
        <img src={Port2} alt="" className="worksImg" />
        <img src={Port3} alt="" className="worksImg" />
      </div>
      <button className="worksBtn">See More</button>
    </section>
  );
};

export default Works;
