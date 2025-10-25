import React from "react";
import "../styles/Navbar.css";

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <div className="logo">
          <img src="/logo.svg" alt="Logo" />
          <span>netradyne</span>
        </div>

        {/* Links */}
        <nav className="nav-links">
          <a href="#">Solutions</a>
          <a href="#">Industries</a>
          <a href="#">Resources</a>
          <a href="#">Company</a>
        </nav>

        {/* Right Section */}
        <div className="nav-actions">
          <button className="icon-btn">
            <i className="fas fa-globe"></i>
          </button>
          <button className="signin-btn">Sign In</button>
          <button className="demo-btn">Book Demo</button>
        </div>
      </div>
    </header>
  );
}