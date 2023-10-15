import React from "react";
import "./intro.css";
import bg from "../../assets/intro.png";
import { Link } from "react-scroll";
import linkedin from "../../assets/linkedinlogo.png";
import instagram from "../../assets/instagramlogo.png";
import github from "../../assets/githublogo.png";

const Intro = () => {
  return (
    <section id="intro">
      <div className="introContent">
        <span className="hello">Hello,</span>
        <span className="introText">
          I'm <span className="introName">Vasu Singal</span>
          <br /> Website Designer
        </span>
        <p className="introPara">I am a skilled web designer..</p>
        <Link>
          <button className="btn">
            <b>Get CV</b>
          </button>
          <br />
          <button className="btn">
            <img src={linkedin} alt="linkedin" className="logos" />
          </button>
          <button className="btn">
            <img src={instagram} alt="instagram" className="logos" />
          </button>
          <button className="btn">
            <img src={github} alt="github" className="logos" />
          </button>
        </Link>
      </div>
      <img src={bg} alt="preview" className="bg" />
    </section>
  );
};

export default Intro;
