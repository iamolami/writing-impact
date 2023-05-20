import React from "react";

const Translations = () => {
    const content = [
        {text: 'Website Translation'},
        {text: 'Blog Translation'},
        {text: 'Subtitling'},
        {text: 'Chat Translation'},
        {text: 'Technical Translations'},
        {text: 'App Translations'}
    ]
  return (
    <div className="services__wrapper section">
      <div className="container">
        <div className="services__row">
          <div className="services__col-md-8">
            <div className="services__contentBox">
              <div className="services__contentBox-title">
                <h3>Translations</h3>
              </div>
              <p style={{ fontWeight: "600", fontSize: "16px" }}>
                It is 53% more likely that people who see content in their 
                native language are more comfortable transacting. Have you explored other languages yet?
              </p>
              <p style={{ marginTop: "20px", fontSize: "13px" }}>
                At Writing Impact, we believe that in today’s world localizing your 
                content across different regions gets you the edge and the additional users 
                who are comfortable transacting in their preferred language. Explore our network of 
                global translators to convert your content, make better impressions, and enhance engagement with your users.
              </p>
              <a href="/" className="thm-btn" style={{ marginTop: "30px" }}>
                Learn More
              </a>
            </div>
          </div>
          <div className="services__col-md-8">
            <div className="services__listing">
                <div className="services__listing-row">
                    {content.map((item) => (
                        <div className="services__listing-col-md-4">
                            <div className="services__listing-single">
                                <h3>{item.text}</h3>
                            </div>
                    </div>
                    ))}
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Translations;
