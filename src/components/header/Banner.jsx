import React from "react";
import { NavLink } from "react-router-dom";
import Partner from "./Partner";
import banner from '../../assets/images/banner.png'

const Banner = () => {
  return (
    <div className="banner section">
      <div className="container">
        <div className="row banner__row">
          <div className="banner__col-md-8">
            <div className="banner__content">
              <h1>
                On-demand <span>Professional</span> <span>Content</span>{" "}
                Creation, at Scale
              </h1>
              <img
                src={banner}
                alt="banner"
            />
              <p className='banner__text'>
                A pool of over 10K writers and content creators with varied
                expertise levels at your <br /> service, to build content customized to
                your needs and across industries.
              </p>
              <NavLink to="/auth" className="thm-btn banner__btn">Request a quote <i class='bx bx-chevrons-right'></i></NavLink>
            </div>
          </div>
          <div className="banner__col-md-4">
            <img
              src={banner}
              alt="banner"
            />
          </div>
        </div>
      </div>
      {/* +++++++++++++++++++++ Trusted By Companies ++++++++++++++++++ */}
      <Partner />
    </div>
  );
};

export default Banner;
