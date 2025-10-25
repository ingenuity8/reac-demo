import React from "react";
import "../styles/VideoSection.css";

export default function VideoSection() {
  return (
    <section className="video-section">
      <div className="video-container">
        <iframe
          src="https://www.youtube.com/embed/dQw4w9WgXcQ"
          title="Demo Video"
          allowFullScreen
        ></iframe>
      </div>
    </section>
  );
}