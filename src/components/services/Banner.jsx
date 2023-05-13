import React from 'react'
import { NavLink } from 'react-router-dom'

const ServiceBanner = () => {
  return (
    <div className="bannerService section">
      <div className="container">
        <div className="bannerService__row row">
          <div className="bannerService__col-md-8">
            <div className="bannerService__content">
              <h1>
                Create{" "}
                <span>Goal-oriented Content</span>{" "}
                with Inputs from Experts
              </h1>
              <img src="https://www.textmercato.com/assets/Content-Builder-Dashboard.png" alt="Products" loading='lazy' />
              <p className="bannerService__text">
                Content comes in various shapes, sizes, and formats be it text, 
                graphics, languages, or video. Your target audience today expects 
                you to communicate in a variety of ways. TextMercato is here to 
                make that process faster, better, and cost-efficient for you.
              </p>
              <NavLink to="/auth" className="thm-btn banner__btn">Request a quote <i class='bx bx-chevrons-right'></i></NavLink>
            </div>
          </div>
          <div className="bannerService__col-md-4">
            <img src="https://www.textmercato.com/assets/Content-Builder-Dashboard.png" alt="Products" loading='lazy' />
          </div>
        </div>
        <div></div>
      </div>
    </div>
  )
}

export default ServiceBanner
