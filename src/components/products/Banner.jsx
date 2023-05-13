import React from 'react'
import { NavLink } from 'react-router-dom'

const ProductBanner = () => {
  return (
    <div className="bannerProduct section">
      <div className="container">
        <div className="bannerProduct__row row">
          <div className="bannerProduct__col-md-8">
            <div className="bannerProduct__content">
              <h1>
                Professional{" "}
                <span>Content Providing Services</span>{" "}
                for Your Business
              </h1>
              <img src="https://www.textmercato.com/assets/content-hub-1.png" alt="Products" loading='lazy' />
              <p className="banner__text">
                Over 10,000 vetted writers are ready to fulfil your content requirements, 
                across industries and varied types of content.
              </p>
              <NavLink to="/auth" className="thm-btn banner__btn">Request a quote <i class='bx bx-chevrons-right'></i></NavLink>
            </div>
          </div>
          <div className="bannerProduct__col-md-4">
            <img src="https://www.textmercato.com/assets/content-hub-1.png" alt="Products" loading='lazy' />
          </div>
        </div>
        <div></div>
      </div>
    </div>
  )
}

export default ProductBanner
