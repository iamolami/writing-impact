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
                <h3>Why Writing Impact Is the Ultimate Choice</h3>
              </div>
              <p className="text__whyUs-text">
                Writing Impact's content writers understand that the information
                on your website may make or break a sale for you. Our writers
                have solid research abilities and a firm grasp of language for
                any type of content writing. Choose Writing Impact for your
                business to get quality content writing with compelling
                material.
              </p>
              <div className="text__whyUs-columns">
                <div className="text__whyUs-box-2">
                  <div className="text__whyUs-icon">
                    <span class="material-symbols-outlined">check</span>
                  </div>
                  <div className="text__whyUs-contentBox">
                    <h3>Create a close relationship with your audience</h3>
                  </div>
                </div>
                <div className="text__whyUs-box-2">
                  <div className="text__whyUs-icon">
                    <span class="material-symbols-outlined">check</span>
                  </div>
                  <div className="text__whyUs-contentBox">
                    <h3>Make a successful online brand identity</h3>
                  </div>
                </div>
                <div className="text__whyUs-box-2">
                  <div className="text__whyUs-icon">
                    <span class="material-symbols-outlined">check</span>
                  </div>
                  <div className="text__whyUs-contentBox">
                    <h3>Share accurate information</h3>
                  </div>
                </div>
                <div className="text__whyUs-box-2">
                  <div className="text__whyUs-icon">
                    <span class="material-symbols-outlined">check</span>
                  </div>
                  <div className="text__whyUs-contentBox">
                    <h3>100% original content</h3>
                  </div>
                </div>
                <div className="text__whyUs-box-2">
                  <div className="text__whyUs-icon">
                    <span class="material-symbols-outlined">check</span>
                  </div>
                  <div className="text__whyUs-contentBox">
                    <h3>Generate expected traffic</h3>
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
