import "./FooterStyle.css";

import React from "react";
import {
  FaHome,
  FaLinkedin,
  FaMailBulk,
  FaTwitter,
  FaGithub,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <FaHome size={20} style={{ color: "#fff", marginRight: "2rem" }} />
            <div>
              <p>Walmik Nagar</p>
              <p>Malpur-Dondaicha</p>
            </div>
          </div>
          {/* <div className="phone">
                <h4><FaPhone size={20} style={{color: "#fff", marginRight: "2rem"}}/>
                9172230125</h4>
                </div> */}
          <div className="email">
            <h4>
              <FaMailBulk
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              kolijaypal77@gmail.com
            </h4>
          </div>
        </div>
        <div className="right">
          <h4>About Me</h4>
          <p>I enjoy creating new project and leaning new technology</p>
          <div className="social">
            <a href="https://twitter.com/JaypalKoli07" target="_blank">
              <FaTwitter
                size={30}
                style={{ color: "#fff", marginRight: "1rem" }}
              />
            </a>
            <a href="https://www.linkedin.com/in/jaypal-koli/" target="_blank">
              <FaLinkedin
                size={30}
                style={{ color: "#fff", marginRight: "1rem" }}
              />
            </a>
            <a href="https://github.com/Jaypal07" target="_blank">
              <FaGithub
                size={30}
                style={{ color: "#fff", marginRight: "1rem" }}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
