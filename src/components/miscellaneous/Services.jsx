import React from 'react'
import Separator from './Separator'

const Services = () => {
  return (
    <div className='service'>
      <div className="section">
        <div className="container">
            <div className="service__title">
                <h4>What We Do</h4>
                <Separator />
                <h3 className='service__title-h3'>Our content marketing and content writing service</h3>
                <p className='service__text'>
                    The recipe for your success not only lies in the creation of 
                    top-quality content but also in a stellar content strategy. 
                    A copy customized to your goals and a strong distribution to 
                    reach the right audience is your gateway to success and this 
                    is why we have created the perfect content solution for you.
                </p>
            </div>
            <div className="service__flex">
                <div className="service__box">
                    <span class="material-symbols-outlined">web</span>
                    <h3>Blog content</h3>
                    <p>
                        Great content is the heart and soul of any website but planning for 
                        and creating great content isn't easy. That's where we come in
                    </p>
                </div>
                <div className="service__box">
                    <i class='bx bxl-wordpress'></i>
                    <h3>Content optimization</h3>
                    <p>
                        Our SEO optimized content writing services include keyword 
                        research, competitive analysis, content strategy, content 
                        optimisation, and more.
                    </p>
                </div>
                <div className="service__box">
                    <span class="material-symbols-outlined">shopping_cart</span>
                    <h3>SEO content strategies</h3>
                    <p>
                        Based on keyword trends and competitive analysis, our editorial team will prepare a comprehensive 
                        SEO content strategy and content calendar that includes potential content ideas.
                    </p>
                </div>
                <div className="service__box">
                <span class="material-symbols-outlined">newspaper</span>
                    <h3>Product descriptions</h3>
                    <p>
                        Product descriptions describe what each product has 
                        to offer to potential consumers. Successful product 
                        descriptions should convince shoppers why they should
                        buy the product.
                    </p>
                </div>
                <div className="service__box">
                <span class="material-symbols-outlined">page_info</span>
                    <h3>Landing pages and funnels</h3>
                    <p>
                        By understanding your business goals and target audience,
                        we engineer our copy to resonate with your ideal customer.
                    </p>
                </div>
                <div className="service__box">
                <span class="material-symbols-outlined">description</span>
                    <h3>White papers</h3>
                    <p>
                        An authoritative, detailed and well-written white paper can educate your 
                        audience and show them that your services are the best solution.
                    </p>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Services
