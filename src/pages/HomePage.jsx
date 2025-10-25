import React from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import VideoSection from "../components/VideoSection";
import StatsSection from "../components/StatsSection";
import FeaturesSection from "../components/FeaturesSection";
import GlobalSection from "../components/GlobalSection";
import Footer from "../components/Footer";
import "../styles/HomePage.css";

export default function HomePage() {
  return (
    <div className="homepage">
      <Navbar />
      <HeroSection />
      <VideoSection />
      <StatsSection />
      <FeaturesSection />
      <GlobalSection />
      <Footer />
    </div>
  );
}
