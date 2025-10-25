import React from "react";
import "../styles/HeroSection.css";

export default function HeroSection() {
  return (
    <section className="hero-section">
      <div className="hero-container">
        <div className="hero-images">
          <img src="/images/hero1.jpg" alt="Fleet 1" />
          <img src="/images/hero2.jpg" alt="Fleet 2" />
          <img src="/images/hero3.jpg" alt="Fleet 3" />
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