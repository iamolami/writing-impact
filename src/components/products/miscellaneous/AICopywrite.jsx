import React from 'react'
import AICopywrite from '../../../assets/images/AICopywrite.png'

const AICopywriter = () => {
    return (
        <div id='ai-copywriter' className='section products__wrapper bg-white'>
            <div className='container'>
                <div className="products__row">
                    <div className='products__col-md-8'>
                        <img src={AICopywrite} alt='Digital Content Platform' loading='lazy' />
                    </div>
                    <div className='products__col-md-8'>
                        <div className='products__contentBox pl-100'>
                            <div className="products__contentBox-title">
                                <h3>AI Copywriter</h3>
                            </div>
                            <p style={{ fontWeight: '600', fontSize: '16px' }}>
                                Do you need content quickly and at scale? Then, our AI writer maybe the solution you are looking for.
                            </p>
                            <p style={{ marginTop: '20px', fontSize: '13px' }}>
                                At Writing Impact, our proprietary ‘Language Generation Technology’ can help address your content needs efficiently. 
                                This helps you scale on numbers, while prioritizing your SEO needs and requirements.
                            </p>
                            <div className='products__flexBox'>
                                <div className='products__flexBox-box'>
                                    <div className='products__flexBox-icon'>
                                        <span class="material-symbols-outlined">check</span>
                                    </div>
                                    <div className='products__flexBox-content'>
                                        <h3>Quality Management</h3>
                                        <p>A layer of quality management ensures 100 percent adherence to brief and brand guidelines.</p>
                                    </div>
                                </div>
                                <div className='products__flexBox-box'>
                                    <div className='products__flexBox-icon'>
                                        <span class="material-symbols-outlined">check</span>
                                    </div>
                                    <div className='products__flexBox-content'>
                                        <h3>Scale Quickly</h3>
                                        <p>Do you have 1000’s of descriptions to be delivered quickly? We are ready!</p>
                                    </div>
                                </div>
                                <div className='products__flexBox-box'>
                                    <div className='products__flexBox-icon'>
                                        <span class="material-symbols-outlined">check</span>
                                    </div>
                                    <div className='products__flexBox-content'>
                                        <h3>Super-efficient</h3>
                                        <p>10X faster, 5X cost-efficient. Your needs can be handled quickly and efficiently.</p>
                                    </div>
                                </div>
                                <div className='products__flexBox-box'>
                                    <div className='products__flexBox-icon'>
                                        <span class="material-symbols-outlined">check</span>
                                    </div>
                                    <div className='products__flexBox-content'>
                                        <h3>SEO and User Optimized</h3>
                                        <p>Not only about efficiency but also value-add to the users is addressed.</p>
                                    </div>
                                </div>
                            </div>
                            <a href='/' className='thm-btn' style={{ marginTop: '30px'}}>Learn More</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AICopywriter