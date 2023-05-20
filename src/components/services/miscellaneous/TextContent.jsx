import React from "react";

const DisplayTextContent = () => {
    const content = [
        {text: 'Blog'},
        {text: 'Copywriting'},
        {text: 'SEO Articles'},
        {text: 'Website Content'},
        {text: 'Ebooks'},
        {text: 'Product Descriptions'},
        {text: 'Social Media Content'},
        {text: 'Whitepapers'},
        {text: 'Newsletters'},
        {text: 'Buying & Selling Guide'},
        {text: 'Emails'},
        {text: 'Thought Leadership'}
    ]
  return (
    <div className="services__wrapper section">
      <div className="container">
        <div className="services__row">
          <div className="services__col-md-8">
            <div className="services__contentBox">
              <div className="services__contentBox-title">
                <h3>Text Content</h3>
              </div>
              <p style={{ fontWeight: "600", fontSize: "16px" }}>
                Over 30000 approved writers across various industries, 
                expertise, and content types at your service.
              </p>
              <p style={{ marginTop: "20px", fontSize: "14px" }}>
                At Writing Impact, our experience says the content consumers have a wide range of requirements. 
                Some want to read an informative blog, some prefer a Q&A platform or a discussion board to address their questions, 
                while others prefer an email newsletter update. 
                Did you know there are over 1000+ text content types? Let’s discuss what your client preferences are.
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

export default DisplayTextContent;
