import React from 'react'
import { NavLink } from 'react-router-dom'

const GraphicsBanner = () => {
  return (
    <div className="bannerService section">
      <div className="container">
        <div className="bannerService__row row">
          <div className="bannerService__col-md-8">
            <div className="bannerService__content">
              <h1>Let the {" "}
                <span>Experts Visualize</span>{" "}
                the Art For You
              </h1>
              <img src='https://www.textmercato.com/assets/services/graphics/banner.png' alt="Products" loading='lazy' />
              <p className="banner__text">
                The graphic content requirement for every website is different. 
                The expert team of Writing Impact can quickly understand the 
                possibilities and implement artistic changes. Let the experts 
                assist you with professional design services for infographics, 
                ebook designs, images, and more to communicate visually with your target audience.
              </p>
              <NavLink to="/auth" className="thm-btn banner__btn">Request a quote <i class='bx bx-chevrons-right'></i></NavLink>
            </div>
          </div>
          <div className="bannerService__col-md-4">
            <img src='https://www.textmercato.com/assets/services/graphics/banner.png' alt="Products" loading='lazy' />
          </div>
        </div>
        <div></div>
      </div>
    </div>
  )
}

export default GraphicsBanner
