import React from "react";
import "../styles/HeroSection.css";
import hero1 from "../assets/hero1.jpg"
import hero2 from "../assets/hero2.jpg"
import hero3 from "../assets/hero3.jpg"

export default function HeroSection() {
  return (
    <section className="hero-section">
      <div className="hero-container">
        <div className="hero-images">
          <img src={hero1} alt="Fleet 1" />
          <img src={hero2} alt="Fleet 2" />
          <img src={hero3} alt="Fleet 3" />
        </div>

        <h1>Safety you can see. <br/> Performance you can measure.</h1>
        <p>
          Equip fleets with instant AI-powered risk detection and full-context coaching along with fuel <br/> 
          efficiency insights and proactive maintenance - on the only platform that recognizes and rewards <br/>
          safe driving. Cut incidents, engage drivers, and streamline operations to reduce costs, minimize <br/>
          downtime, and deliver measurable results.
        </p>
        <div className="hero-buttons">
          <button className="secondary-btn">Maximize Safety</button>
          <button className="secondary-btn">Drive Efficiency</button>
          <button className="secondary-btn">Elevate Performance</button>
        </div>
      </div>
    </section>
  );
}