import { Link } from "react-router-dom";
import "./AboutContentStyle.css";
import img1 from "../assets/intro.jpg";
import img2 from "../assets/About.jpg";

import React from "react";

const AboutContent = () => {
  return (
    <div className="about">
      <div className="left">
        <h1>Who Am I?</h1>
        <p>Im a web developer. I create responsive and secure websites.</p>
        <Link to="/contact">
          <button className="btn">Contact</button>
        </Link>
      </div>

      <div className="right">
        <div className="img-container">
          <div className="img-stack bottom">
            <img src={img1} className="img" alt="img" />
          </div>
          <div className="img-stack top">
            <img src={img2} className="img" alt="img" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutContent;
