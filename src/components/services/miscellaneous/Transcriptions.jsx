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
              <p style={{ fontWeight: "600", fontSize: "15px" }}>
                Do you have lectures, interviews, business meetings, 
                and other formats that need transcribing? Do not worry we have you covered.
              </p>
              <p style={{ marginTop: "20px", fontSize: "14px" }}>
                At Writing Impact, our team of experts have hands-on experience in delivering 
                transcription projects with a robust quality checking process within the agreed SLA. 
                The ability to design a team with a dedicated Account Manager for your project ensures right delivery at the right time.
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

export default Transcriptions;
