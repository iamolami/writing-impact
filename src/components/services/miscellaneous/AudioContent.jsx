import React from "react";

const AudioContent = () => {
    const content = [
        {text: 'Podcasts'},
        {text: 'Audiobooks'},
        {text: 'Editorial'},
        {text: 'Audio catalogues'},
        {text: 'Social media audio'},
        {text: 'Incorporate audio into written content'}
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
                <h3>Audio Content</h3>
              </div>
              <p style={{ fontWeight: "600", fontSize: "16px" }}>
                Audio is not a new phenomenon, it’s always been here, 
                historically through radio, voice notes, and other formats. 
                But, how has all this changed now?
              </p>
              <p style={{ marginTop: "20px", fontSize: "13px" }}>
                Podcasts, Audiobooks, Audio articles are now covering a variety of 
                areas but are not limited to pep talks, food, wellness, and more. 
                Think of it? Users consume information at their choice and convenience. 
                Audio content is great on the go content.
              </p>
              <div className="services__flexBox">
                <div className="services__flexBox-box">
                  <div className="services__flexBox-icon">
                    <span class="material-symbols-outlined">check</span>
                  </div>
                  <div className="services__flexBox-content">
                    <h3>Order Online</h3>
                    <p>
                      Choose from a variety of projects and get going in less
                      than 5 minutes{" "}
                    </p>
                  </div>
                </div>
                <div className="services__flexBox-box">
                  <div className="services__flexBox-icon">
                    <span class="material-symbols-outlined">check</span>
                  </div>
                  <div className="services__flexBox-content">
                    <h3>Dashboard View</h3>
                    <p>Track your order in real-time and provide feedback</p>
                  </div>
                </div>
                <div className="services__flexBox-box">
                  <div className="services__flexBox-icon">
                    <span class="material-symbols-outlined">check</span>
                  </div>
                  <div className="services__flexBox-content">
                    <h3>Approval Management</h3>
                    <p>Provide feedback and keep control 100 percent</p>
                  </div>
                </div>
                <div className="services__flexBox-box">
                  <div className="services__flexBox-icon">
                    <span class="material-symbols-outlined">check</span>
                  </div>
                  <div className="services__flexBox-content">
                    <h3>Single Invoice</h3>
                    <p>Multiple projects can be managed and paid together</p>
                  </div>
                </div>
              </div>
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

export default AudioContent;
