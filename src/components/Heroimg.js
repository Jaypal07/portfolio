import "../components/HeroimgStyle.css"
import React from 'react'
import IntroImg from "../assets/intro.jpg"
import { Link } from "react-router-dom"


const Heroimg = () => {
  return (
    <div className="hero">
        <div className="mask">
            <img className="intro-img" src={IntroImg} alt="IntoImage"/>
        </div>
        <div className="content">
            <p>
              Hi, I'M JAYPAL KOLI  
            </p>
            <h1>
              Web Developer.   
            </h1>
            <div>
                <Link to="/project" className="btn">
                    Projects
                </Link>
                <Link to="/contact" className="btn btn-light">
                    Contact
                </Link>

            </div>
        </div>
    </div>
  )
}

export default Heroimg;