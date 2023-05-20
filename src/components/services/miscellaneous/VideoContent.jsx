import React from "react";

const VideoContent = () => {
    const content = [
        {text: 'Explainer Videos'},
        {text: 'How-To Videos'},
        {text: 'Educational Videos'},
        {text: 'Product Videos'},
        {text: 'Testimonial Videos'},
        {text: 'Social Videos'},
        {text: 'Video Ads'},
        {text: 'Company Story Videos'},
        {text: 'Tutorials'}
    ]
  return (
    <div className="services__wrapper section bg-white">
      <div className="container">
        <div className="services__row">
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
          <div className="services__col-md-8">
            <div className="services__contentBox pl-100">
              <div className="services__contentBox-title">
                <h3>Video Contents</h3>
              </div>
              <p style={{ fontWeight: "600", fontSize: "16px" }}>
                  “54% of consumers want video content from their brands”, Hubspot.
                    {" "}
                  So, what are you waiting for?
              </p>
              <p style={{ marginTop: "20px", fontSize: "13px" }}>
                At Writing Impact, it’s not just about creating video content, but the What, 
                When, Where, and Why questions need to be answered. For example, Boeing is not 
                selling planes via video content, but it creates an identity and understanding of their brands. 
                The key is to understand the reasons, the limitations and the goal of the video content in relation to your brand.
              </p>
              <a href="/" className="thm-btn" style={{ marginTop: "30px" }}>
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoContent;
