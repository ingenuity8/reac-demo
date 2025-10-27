import React from "react";
import "../styles/FeaturesSection.css";
import Features1 from "../assets/Features1.webp"
import Features2 from "../assets/Features2.webp"
import Features3 from "../assets/Features3.webp"
import Features4 from "../assets/Features4.webp"
import Features5 from "../assets/Features5.webp"
import Features6 from "../assets/Features6.webp"

export default function FeaturesSection() {
  const sections = [
    {
      title: "CAPTURE & CLARITY",
      heading: "Capturing less than 100% of the situation makes 0% sense.",
      description:
        "Our cameras provide a complete view of the road and driver, ensuring every detail is visible and actionable for maximum safety insights.",
      img: Features1,
      reverse: false,
    },
    {
      title: "HELP ENHANCE DRIVER COACHING",
      heading: "Give drivers the freedom they want.",
      description:
        "With real-time alerts and event-based coaching, empower your drivers to stay safe while maintaining independence and confidence on the road.",
      img: Features2,
      reverse: true,
    },
    {
      title: "WELLNESS & SECURITY",
      heading: "Get your drivers home safe & happy.",
      description:
        "Detect fatigue, distractions, and risky behavior early to ensure drivers stay focused, alert, and get home safely after every shift.",
      img: Features3,
      reverse: false,
    },
    {
      title: "GREATER ENGAGEMENT",
      heading: "Motivate & retain your best drivers.",
      description:
        "Turn safe driving into a rewarding experience with automated recognition and feedback that encourages continuous improvement.",
      img: Features4,
      reverse: true,
    },
    {
      title: "COST & FLEET MANAGEMENT",
      heading: "Reduce costs and downtime with fuel and maintenance insights.",
      description:
        "Our analytics highlight inefficiencies, helping you optimize routes, reduce idling, and manage maintenance proactively to lower operational costs.",
      img: Features5,
      reverse: false,
    },
    {
      title: "STREAMLINE & COMPLIANCE",
      heading: "Minimize manual processes, maximize compliance.",
      description:
        "Get rid of paperwork and stay compliant effortlessly with automated reporting and intelligent data capture that simplifies fleet operations.",
      img: Features6,
      reverse: true,
    },
  ];

  return (
    <section className="visibility-section">
      {/* Top Content */}
      <div className="visibility-header">
        <h2>
          The visibility you need for <br /> peak safety & performance.
        </h2>
        <p>
          One platform to protect your drivers and profits—with AI-powered <br/>
           safety, coaching workflows, and fleet management.
        </p>
      </div>

      {/* Content Blocks */}
      <div className="visibility-grid">
        {sections.map((sec, index) => (
          <div
            key={index}
            className={`visibility-item ${
              sec.reverse ? "reverse" : ""
            }`}
          >
            <div className="visibility-text">
              <p className="section-title">{sec.title}</p>
              <h3>{sec.heading}</h3>
              <p className="section-desc">{sec.description}</p>
              <a href="#" className="learn-more">
                Learn More →
              </a>
            </div>
            <div className="visibility-image">
              <img src={sec.img} alt={sec.heading} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}