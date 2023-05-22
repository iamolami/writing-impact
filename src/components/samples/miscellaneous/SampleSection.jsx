import React from "react";

const SampleSection = () => {
  return (
    <div className="sample section">
      <div className="container">
        <div className="thmtitle">
          <h3>Content Samples crafted by WritingImpact</h3>
        </div>
        <div className="sample__row">
          <div className="sample__col-md-6">
            <select name="main" id="main" className="sample__select">
              <option value="all">All</option>
              <option value="Blogs &amp; Articles Content Development">
                Blogs &amp; Articles Content Development
              </option>
              <option value="Website Content Development">
                Website Content Development
              </option>
              <option value="Email Content">Email Content</option>
              <option value="SEO Blog Content">SEO Blog Content</option>
              <option value="Branded Content">Branded Content</option>
              <option value="Product or Service Buying Guides">
                Product or Service Buying Guides
              </option>
              <option value="Landing Page">Landing Page</option>
              <option value="Product Descriptions">Product Descriptions</option>
              <option value="Category Landing Page">
                Category Landing Page
              </option>
              <option value="SEO Articles">SEO Articles</option>
              <option value="Social Media Content">Social Media Content</option>
              <option value="Copywriting">Copywriting</option>
              <option value="Press Releases">Press Releases</option>
              <option value="Thought Leadership">Thought Leadership</option>
              <option value="Quiz">Quiz</option>
              <option value="E-Books">E-Books</option>
              <option value="Newsletters">Newsletters</option>
              <option value="Guest Post Content Development">
                Guest Post Content Development
              </option>
              <option value="Market or Industry Report">
                Market or Industry Report
              </option>
              <option value=""></option>
            </select>
          </div>
          <div className="sample__col-md-6">
            <select name="industry" id="industry" className="sample__select">
              <option value="all">All</option>
              <option value="Automobile">Automobile</option>
              <option value="Tech">Tech</option>
              <option value="Travel">Travel</option>
              <option value="Fashion">Fashion</option>
              <option value="Electronics">Electronics</option>
              <option value="Furniture">Furniture</option>
              <option value="Jewelry">Jewelry</option>
              <option value="Cosmetics">Cosmetics</option>
              <option value="Healthcare">Healthcare</option>
              <option value="E Commerce">E Commerce</option>
              <option value=""></option>
              <option value="Technology">Technology</option>
              <option value="Ecommerce">Ecommerce</option>
              <option value="Venture capital">Venture capital</option>
              <option value="HR Services">HR Services</option>
              <option value="Internet Services">Internet Services</option>
              <option value="Legal">Legal</option>
              <option value="Insurance &amp; FIntech">
                Insurance &amp; FIntech
              </option>
              <option value="Real Estate">Real Estate</option>
              <option value="Co Working Space">Co Working Space</option>
              <option value="SaaS">SaaS</option>
              <option value="EdTech">EdTech</option>
              <option value="Baby &amp; Maternity">Baby &amp; Maternity</option>
              <option value="Fintech">Fintech</option>
              <option value="Non-Profit">Non-Profit</option>
              <option value="HR">HR</option>
              <option value="Marketing">Marketing</option>
            </select>
          </div>
        </div>
        <div>
            <ul className="sample__item">
                <li className="sample__list">
                    <div className="sample__col-md-9">
                        <a href="/sample" className="sample__link">
                            Blog and Post Guides Content
                        </a>
                    </div>
                    <div className="sample__col-md-3" style={{ textAlign: 'right' }}>
                        <a href="/" className="thm-btn sample__btn">Download <span class="material-symbols-outlined">download</span></a>
                    </div>
                </li>
                <li className="sample__list">
                    <div className="sample__col-md-9">
                        <a href="/sample" className="sample__link">
                            Blog and Post Guides Content
                        </a>
                    </div>
                    <div className="sample__col-md-3" style={{ textAlign: 'right' }}>
                        <a href="/" className="thm-btn sample__btn">Download <span class="material-symbols-outlined">download</span></a>
                    </div>
                </li>
                <li className="sample__list">
                    <div className="sample__col-md-9">
                        <a href="/sample" className="sample__link">
                            Blog and Post Guides Content
                        </a>
                    </div>
                    <div className="sample__col-md-3" style={{ textAlign: 'right' }}>
                        <a href="/" className="thm-btn sample__btn">Download <span class="material-symbols-outlined">download</span></a>
                    </div>
                </li>
            </ul>
        </div>
      </div>
    </div>
  );
};

export default SampleSection;
