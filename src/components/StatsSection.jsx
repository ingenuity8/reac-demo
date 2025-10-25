import React from "react";
import "../styles/StatsSection.css";
//import statsImage from "../images/stats1.PNG"; // ✅ ensure correct path

export default function StatsSection() {
  return (
    <section className="stats-section">
      {/* --- Top Section --- */}
      <p className="para-1">WAY MORE THAN A DASH CAM</p>
      <h1>
        Invest in improved road <br /> safety for your drivers & <br />
        everyone else on <br /> the road.
      </h1>
      <p className="para-2">
        Our mission? To transform road and fleet safety by using advanced <br /> 
        vision technology and intuitive, automated coaching to improve and <br />
        change driver behavior for the better. We strive to make the roads safer <br />
        for all, and your company more profitable along the way.
      </p>
      <button className="watch-video-btn">Watch Video</button>

      {/* --- Divider line --- */}
      <hr className="divider" />

      {/* --- Performance Section --- */}
      <div className="performance-section">
        <div className="performance-left">
          <p className="performance-subtitle">
            PERFORMANCE BY THE NUMBERS
          </p>

          <h2>
            Unmatched data confidence <br />
            drives unmatched fleet <br />
            performance.
          </h2>

          <div className="performance-stats">
            <div>
              <h3>~99%*</h3>
              <p>Accuracy of alerts</p>
            </div>
            <div>
              <h3>100%</h3>
              <p>Driving time analysis</p>
            </div>
            <div>
              <h3>125M+</h3>
              <p>DriverStars awarded</p>
            </div>
            <div>
              <h3>25B+</h3>
              <p>Driving miles analyzed</p>
            </div>
          </div>
        </div>

        <div className="performance-right">
          <img src="" alt="Driver smiling" />
        </div>
      </div>

       {/* --- See It In Action Section --- */}
      <div className="see-it-in-action">
        <p className="see-heading">See it in action</p>
        <div className="see-container">
          <div className="play-btn">
            <span className="play-icon">&#9658;</span>
          </div>
          <div className="see-text">
            <h3>Sharp technology for sharper focus.</h3>
            <p>
              Whether it’s fatigue or everyday distractions like checking a
              phone, our technology is designed to recognize signs of
              inattentive driving. When it detects lapses in focus, it gently
              prompts the driver with an audio alert — helping them stay engaged
              and reducing the risk of accidents.
            </p>
            <strong>The scenario</strong>
            <p>
              This video demonstrates a driving situation called the one-handed
              distraction.
            </p>
            <p>
              <strong>What happens next?</strong>
              <br />
              Driver instantly detected distraction and gave an audio alert, and
              the driver corrected the behavior.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}