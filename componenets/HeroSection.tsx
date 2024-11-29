import React from "react";
import "@/styles/HeroSection.css"; // Import the custom CSS file


const HeroSection = () => {
  return (
    <div className="hero-container">
      
      {/* bg images */}
      <div className="bg">
        <img src="/images/bg.png" alt="bg" width={1300} />
      </div>

      {/* Text Content */}
      <div className="hero-content">
        <h1 className="hero-title">Governor Sindh</h1>
        <h1 className="hero-subtitle">Kamran Khan Tessori</h1>
        <h1 className="hero-highlight">
          Certified Cloud<br />Applied Generative AI<br />Engineer (GenEng)
        </h1>
        <p className="hero-earnings">Earn up to $5,000 / month</p>
        <p className="hero-admissions">Now admissions are open in Hyderabad</p>

        {/* Call-to-action and Statistics */}
        <div className="hero-actions">
          <a href="/apply" className="apply-button">
            APPLY NOW
          </a>
          <div className="application-stats">
            <div className="stats-number">562,143</div>
            <div className="stats-label">Accepted Applications</div>
          </div>
        </div>
      </div>

      {/* Image Section */}
      <div className="hero-image">
        <img
          src="/images/dp.png"
          alt="Governor Kamran Khan Tessori"
          className="hero-img"
          
        />
      </div>
    </div>
  );
};

export default HeroSection;
