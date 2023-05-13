import React from "react";
import DisplayLogin from "./Login";

const Banner = () => {
  return (
    <div className="bannerAuth section">
      <div className="container">
        <div className="bannerAuth__row row">
          <div className="bannerAuth__col-md-8">
            <div className="bannerAuth__content">
              <h1>
                All your content needs are handled{" "}
                <span>efficiently and transparently</span>
              </h1>
              <p className="banner__text">
                Writing Impact is one of the leading content companies catering
                to the growing need for quality content in the international
                market. Content is the key that adds value to the users,
                engaging and communicating about your brand.
              </p>
            </div>
          </div>
          <div className="bannerAuth__col-md-4">
            <DisplayLogin />
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Banner;
