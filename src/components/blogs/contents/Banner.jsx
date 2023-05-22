import React from "react";
import seo from '../../../assets/images/blog-img-01.jpg'

const Banner = () => {
  return (
        <article className="blogs__row">
          <div className="blogs__col-md-9">
            <img
              src={seo}
              alt="Blog"
              className="blogs__image"
            />
          </div>
          <div className="blogs__col-md-3">
            <a href="/">
              <div className="blogs__content">
                <div className="blogs__content-tags">
                  <span>Content Writing</span>
                </div>
                <h2 className="blogs__content-main">
                  How to hire a competent content writer for your enterprise
                </h2>
                <p className="blogs__break">
                  In the current era of technology and the internet, content
                  marketing has become vital to any business's marketing
                  strategy. Whether through blog posts, social media updates, or
                  website copy, quality content can help any business connect
                  with the audience, develop trust, and drive sales.
                </p>
                <footer className="blogs__content-footer">
                  <time
                    class="blogs__content-time"
                    datetime="2023-04-13"
                  >
                    Apr 13, 2023
                  </time>
                  <span className="blogs__content-length">
                    4 min read
                  </span>
                </footer>
              </div>
            </a>
          </div>
        </article>
  );
};

export default Banner;
