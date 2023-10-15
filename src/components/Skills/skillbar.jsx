import React from "react";
import "./skillbar.css";

const SkillBar = (props) => {
  return (
    <div className="skillBar">
      <img src={props.img} alt="" className="skillBarImg" />
      <div className="skillBarText">
        <h2>{props.heading}</h2>
        <p>{props.content}</p>
      </div>
    </div>
  );
};

export default SkillBar;
