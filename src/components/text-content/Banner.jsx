import React from 'react'
import { NavLink } from 'react-router-dom'
import network from '../../assets/images/network.png'

const TextBanner = () => {
  return (
    <div className="bannerService section">
      <div className="container">
        <div className="bannerService__row row">
          <div className="bannerService__col-md-8">
            <div className="bannerService__content">
              <h1>
                <span>Largest Network</span> of{" "}
                Content Experts
              </h1>
              <img src={network} alt="Products" loading='lazy' />
              <p className="banner__text">
                Our team of expert writers can craft engaging content 
                for your business needs. Over 10,000 certified writers 
                with various backgrounds, skills, and article genres are 
                at your service.
              </p>
              <NavLink to="/auth" className="thm-btn banner__btn">Request a quote <i class='bx bx-chevrons-right'></i></NavLink>
            </div>
          </div>
          <div className="bannerService__col-md-4">
            <img src={network} alt="Products" loading='lazy' />
          </div>
        </div>
        <div></div>
      </div>
    </div>
  )
}

export default TextBanner
