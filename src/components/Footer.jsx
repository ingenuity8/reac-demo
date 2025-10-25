import React from "react";
import "../styles/Footer.css";
// import { FaLinkedinIn, FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
//import logo from "../assets/netradyne-logo.png"; // Add your logo here

export default function Footer() {
  return (
    <footer className="footer">
      {/* Legal Disclaimer */}
      <div className="legal-section">
        <h4>Legal Disclaimers</h4>
        <p>* Individual results and operational use may vary.</p>
        <p>
          * Safe driver coaching features may vary across different Netradyne
          devices and integrations.
        </p>
        <p>
          * Netradyne® must receive written approval to share client data.
        </p>
        <p>
          Product may be the Netradyne proprietary and may not be an exact
          representation of a product.
        </p>
      </div>

      {/* Footer Main Content */}
      <div className="footer-main">
        <div className="footer-logo">
          <img src="" alt="Netradyne Logo" />
        </div>

        <div className="footer-columns">
          <div>
            <h3>Solutions</h3>
            <ul>
              <li>Fleet Safety</li>
              <li>Compliance</li>
              <li>Fleet Management</li>
              <li>Integrations</li>
              <li>Insurance</li>
            </ul>
          </div>

          <div>
            <h3>Industries</h3>
            <ul>
              <li>Concrete</li>
              <li>Construction</li>
              <li>Delivery Vehicles</li>
              <li>Field Services</li>
              <li>Food & Beverage</li>
              <li>Oil & Gas</li>
              <li>Passenger Transit</li>
              <li>School Transportation</li>
              <li>Trucking & Logistics</li>
              <li>Waste</li>
              <li>Wholesale-Retail</li>
            </ul>
          </div>

          <div>
            <h3>Features</h3>
            <ul>
              <li>Driver Self Coaching</li>
              <li>Managed Coaching</li>
              <li>GreenZone Score</li>
              <li>Video Access</li>
              <li>GPS Tracking</li>
              <li>Vehicle Alerts</li>
            </ul>

            <h3 className="sub-header">Products</h3>
            <ul>
              <li>Fleet Camera System</li>
              <li>Driver Drowsiness with DMS Sensor</li>
              <li>Driveri Hub-X</li>
            </ul>
          </div>

          <div>
            <h3>Resources</h3>
            <ul>
              <li>Customer Stories</li>
              <li>Case Studies</li>
              <li>Reports</li>
              <li>Guides</li>
              <li>Webinars</li>
              <li>Video Library</li>
            </ul>

            <h3 className="sub-header">Company</h3>
            <ul>
              <li>About</li>
              <li>Careers</li>
              <li>News & Press</li>
              <li>Contact</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Social Icons */}
      {/* <div className="social-icons">
        <FaLinkedinIn />
        <FaFacebookF />
        <FaInstagram />
        <FaYoutube />
      </div> */}

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <p>All Rights Reserved © {new Date().getFullYear()} © Netradyne</p>
        <div className="footer-links">
          <a href="#">Privacy</a>
          <a href="#">Cookies</a>
          <a href="#">Security</a>
          <a href="#">United States</a>
        </div>
      </div>
    </footer>
  );
}