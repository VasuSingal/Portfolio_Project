import React from "react";
import "./skills.css";
import uiux from "../../assets/uiux.png";
import SkillBar from "./skillbar";

const Skills = () => {
  return (
    <section id="skills">
      <span className="skillTitle">What I Do</span>
      <br />
      <span className="skillDescription">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam.
      </span>
      <div className="skillBars">
        <SkillBar
          img={uiux}
          heading="UI/UX Design"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        />
        <SkillBar
          img={uiux}
          heading="UI/UX Design"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        />
        <SkillBar
          img={uiux}
          heading="UI/UX Design"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        />
      </div>
    </section>
  );
};

export default Skills;
