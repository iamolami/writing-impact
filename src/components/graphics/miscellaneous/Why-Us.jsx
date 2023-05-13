import React from "react";
import audience from "../../../assets/images/relationship.png";

const DisplayWhyUs = () => {
  return (
    <div className="text__whyUs section">
      <div className="container">
        <div className="text__whyUs-row">
          <div className="text__whyUs-col-md-8">
            <div className="text__whyUs-content">
              <div className="text__whyUs-main">
                <h3>Expert Assistance on Graphic Design Projects</h3>
              </div>
              <p className="text__whyUs-text">
                The content journey for every business is unique. 
                Writing Impact is one of the best graphic design services agency. 
                Choose Writing Impact for quick and efficient delivery of graphic designs as per your requirements.
              </p>
              <div className="text__whyUs-columns">
                <div className="text__whyUs-box-2">
                  <div className="text__whyUs-icon">
                    <span class="material-symbols-outlined">check</span>
                  </div>
                  <div className="text__whyUs-contentBox">
                    <h3>Unique Top-of-the-Line Designs</h3>
                  </div>
                </div>
                <div className="text__whyUs-box-2">
                  <div className="text__whyUs-icon">
                    <span class="material-symbols-outlined">check</span>
                  </div>
                  <div className="text__whyUs-contentBox">
                    <h3>Assured Quality Content</h3>
                  </div>
                </div>
                <div className="text__whyUs-box-2">
                  <div className="text__whyUs-icon">
                    <span class="material-symbols-outlined">check</span>
                  </div>
                  <div className="text__whyUs-contentBox">
                    <h3>Stay Updated at All Times</h3>
                  </div>
                </div>
              </div>
            </div>
            <a href="/" className="thm-btn" style={{ marginTop: "30px" }}>
              Get Started
            </a>
          </div>
          <div className="text__whyUs-col-md-8">
            <img src={audience} alt="Audience" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DisplayWhyUs;
