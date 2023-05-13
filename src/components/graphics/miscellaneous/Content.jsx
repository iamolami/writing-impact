import React from "react";
import contentSection from "../../../data/graphics";

const DisplayContent = () => {
  return (
    <div className="text__wrapper section">
      <div className="container">
        <div className="thmtitle">
          <h3>Graphic Design Services You Can Choose</h3>
        </div>
        <div className="text__row">
          {contentSection.map((item) => (
            <div className="text__col-lg-4">
              <div className="text__col-lg-4-single">
                <div className="text__col-lg-4-img">
                  <img src={item.imgeURL} alt="Blog" />
                </div>
                <div className="text__col-lg-4-content">
                  <h3>{item.main}</h3>
                  <p>{item.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className='text__btn'>
            <a href="/" className="thm-btn">Get Started</a>
        </div>
      </div>
    </div>
  );
};

export default DisplayContent;
