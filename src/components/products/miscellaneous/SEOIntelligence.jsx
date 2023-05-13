import React from 'react'
import SEOIntelligence from '../../../assets/images/seoIntelligence.png'

const DigitalPlatform = () => {
    return (
        <div id='seo-intelligence' className='section products__wrapper'>
            <div className='container'>
                <div className="products__row">
                    <div className='products__col-md-8'>
                        <div className='products__contentBox'>
                            <div className="products__contentBox-title">
                                <h3>SEO Intelligence</h3>
                            </div>
                            <p style={{ fontWeight: '600', fontSize: '16px' }}>
                                Excelling at anything is not just about a seamless execution, 
                                but also supported by a well-researched and tailored strategy.
                            </p>
                            <p style={{ marginTop: '20px', fontSize: '13px' }}>
                                At Writing Impact, our SEO team will conduct an in-depth audit between your current situation and your desired goals. 
                                This will help understand the gaps, and devise a step-by-step course of action with defined timelines.
                            </p>
                            <div className='products__flexBox'>
                                <div className='products__flexBox-box'>
                                    <div className='products__flexBox-icon'>
                                        <span class="material-symbols-outlined">check</span>
                                    </div>
                                    <div className='products__flexBox-content'>
                                        <h3>Your Goal</h3>
                                        <p>What are your priorities in the next three, six, nine months, or end of year?</p>
                                    </div>
                                </div>
                                <div className='products__flexBox-box'>
                                    <div className='products__flexBox-icon'>
                                        <span class="material-symbols-outlined">check</span>
                                    </div>
                                    <div className='products__flexBox-content'>
                                        <h3>Audit</h3>
                                        <p>Knowing where you are today helps us understand how to chalk the future path ahead.</p>
                                    </div>
                                </div>
                                <div className='products__flexBox-box'>
                                    <div className='products__flexBox-icon'>
                                        <span class="material-symbols-outlined">check</span>
                                    </div>
                                    <div className='products__flexBox-content'>
                                        <h3>Project Management</h3>
                                        <p>End-to-end delivery management by the SPOC.</p>
                                    </div>
                                </div>
                                <div className='products__flexBox-box'>
                                    <div className='products__flexBox-icon'>
                                        <span class="material-symbols-outlined">check</span>
                                    </div>
                                    <div className='products__flexBox-content'>
                                        <h3>Proposal</h3>
                                        <p>This is a document containing all the metrics driven action items.</p>
                                    </div>
                                </div>
                            </div>
                            <a href='/' className='thm-btn' style={{ marginTop: '30px'}}>Learn More</a>
                        </div>
                    </div>
                    <div className='products__col-md-8'>
                        <img src={SEOIntelligence} alt='Digital Content Platform' loading='lazy' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DigitalPlatform