import React from "react";
import "@/styles/Footer.css"
import { FaFacebookF, FaInstagram, FaTiktok, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-wrapper">
        {/* Core Courses Section */}
        <div className="footer-section">
          <h1 className="footer-title">Core Courses</h1>
          <ul className="footer-list">
            <li className="footer-item">Programming Fundamentals</li>
            <li className="footer-item">Web2 Using NextJS</li>
            <li className="footer-item">Earn as You Learn</li>
          </ul>
        </div>

        {/* Advanced Courses Section */}
        <div className="footer-section">
          <h1 className="footer-title">Advanced Courses</h1>
          <ul className="footer-list">
            <li className="footer-item">Web 3 and Metaverse</li>
            <li className="footer-item">Cloud-Native Computing</li>
            <li className="footer-item">AI and Deep Learning</li>
            <li className="footer-item">Ambient Computing and IoT</li>
            <li className="footer-item">Genomics and Bioinformatics</li>
            <li className="footer-item">Network Programmability and Automation</li>
          </ul>
        </div>

        {/* Social Links Section */}
        <div className="footer-section">
          <h1 className="footer-title">Connect With Us</h1>
          <div className="footer-social">
            <div className="footer-icon facebook"> <FaFacebookF /> </div>
            <div className="footer-icon youtube"> <FaYoutube /> </div>
            <div className="footer-icon twitter"><FaTwitter /></div>
            <div className="footer-icon instagram"><FaInstagram /></div>
            <div className="footer-icon tiktok"><FaTiktok /></div>
          </div>
          <div className="footer-contact">
            <svg
              className="footer-mail-icon"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1024 1024"
            >
              <path d="M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-40 110.8V792H136V270.8l-27.6-21.5 39.3-50.5 42.8 33.3h643.1l42.8-33.3 39.3 50.5-27.7 21.5zM833.6 232L512 482 190.4 232l-42.8-33.3-39.3 50.5 27.6 21.5 341.6 265.6a55.99 55.99 0 0 0 68.7 0L888 270.8l27.6-21.5-39.3-50.5-42.7 33.2z"></path>
            </svg>
            <span>education@governorsindh.com</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
