import React from 'react'
import { NavLink } from 'react-router-dom'
import sampleBannerImg from '../../assets/images/sampleBannerImg.png'

const SampleBanner = () => {
  return (
    <div className="bannerService section">
      <div className="container">
        <div className="bannerService__row row">
          <div className="bannerService__col-md-8">
            <div className="bannerService__content">
              <h1>
                Ready to Refer{" "}
                <span>Premium Content Samples</span>{" "}
                for Your Industry
              </h1>
              <img src={sampleBannerImg} alt="Products" loading='lazy' />
              <p className="banner__text">
                Check out our curated content sample repository for 
                Blogs, Website content, SEO Articles, Product Descriptions, 
                Translations, and much more. These are the actual copies of 
                content delivered to our clients. You can click and explore premium 
                content samples industry-wise or according to content type based on your business needs.
              </p>
              <NavLink to="/auth" className="thm-btn banner__btn">Download Samples <i class='bx bx-chevrons-right'></i></NavLink>
            </div>
          </div>
          <div className="bannerService__col-md-4">
            <img src={sampleBannerImg} alt="Products" loading='lazy' />
          </div>
        </div>
        <div></div>
      </div>
    </div>
  )
}

export default SampleBanner
