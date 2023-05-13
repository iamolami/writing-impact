import React from "react";

const GraphicsContent = () => {
    const content = [
        {text: 'Emailer Design'},
        {text: 'Website & App Banners'},
        {text: 'Posters'},
        {text: 'Infographics'},
        {text: 'Blog Images'},
        {text: 'Logo Design'},
        {text: 'Presentation Design'},
        {text: 'Whitepaper Design'},
        {text: 'Ads / GDN Banners'},
        {text: 'Newsletter Design'},
        {text: 'Ebook Design'},
        {text: 'GIFs'}
    ]
  return (
    <div className="services__wrapper section bg-white">
      <div className="container">
        <div className="services__row">
          <div className="services__col-md-8">
            <div className="services__contentBox">
              <div className="services__contentBox-title">
                <h3>Graphics Content</h3>
              </div>
              <p style={{ fontWeight: "600", fontSize: "16px" }}>
                “A picture is worth a thousand words”
                Cliche = yes! True = yes!!
                Pictures tend to simplify the verbose nature of the textual content.
              </p>
              <p style={{ marginTop: "20px", fontSize: "13px" }}>
                At Writing Impact, we believe that the graphical representation is one of the leading 
                means of communication. Users comprehend information in various forms - text, graphical, images etc,. 
                and graphics are a great way to form a visual memory and ease of understanding.
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

export default GraphicsContent;
