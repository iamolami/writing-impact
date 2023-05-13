import React from "react";

const Transcriptions = () => {
    const content = [
        {text: 'Captions'},
        {text: 'Subtitles'},
        {text: 'Voice Over'}
    ]
  return (
    <div className="services__wrapper section">
      <div className="container">
        <div className="services__row">
          <div className="services__col-md-8">
            <div className="services__contentBox">
              <div className="services__contentBox-title">
                <h3>Transcriptions</h3>
              </div>
              <p style={{ fontWeight: "600", fontSize: "16px" }}>
                Do you have lectures, interviews, business meetings, 
                and other formats that need transcribing? Do not worry we have you covered.
              </p>
              <p style={{ marginTop: "20px", fontSize: "13px" }}>
                At Writing Impact, our team of experts have hands-on experience in delivering 
                transcription projects with a robust quality checking process within the agreed SLA. 
                The ability to design a team with a dedicated Account Manager for your project ensures right delivery at the right time.
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

export default Transcriptions;
