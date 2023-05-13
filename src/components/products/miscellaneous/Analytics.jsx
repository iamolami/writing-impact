import React from 'react'
import analytics from '../../../assets/images/analytics.png'

const Analytics = () => {
    return (
        <div id='analytics' className='section products__wrapper bg-white'>
            <div className='container'>
                <div className="products__row">
                    <div className='products__col-md-8'>
                        <img src={analytics} alt='Digital Content Platform' loading='lazy' />
                    </div>
                    <div className='products__col-md-8'>
                        <div className='products__contentBox pl-100'>
                            <div className="products__contentBox-title">
                                <h3>Analytics</h3>
                            </div>
                            <p style={{ fontWeight: '600', fontSize: '16px' }}>
                                In God we Trust - All Others Bring Data
                            </p>
                            <p style={{ marginTop: '20px', fontSize: '13px' }}>
                                Quantitative analysis (supported by qualitative) is at the heart of our decision making. 
                                At WritingImpact, we do two things efficiently
                            </p>
                            <div className='products__flexBox'>
                                <div className='products__flexBox-box'>
                                    <div className='products__flexBox-icon'>
                                        <span class="material-symbols-outlined">check</span>
                                    </div>
                                    <div className='products__flexBox-content'>
                                        <h3>
                                            Based on market data audit and industry benchmarking, 
                                            we can suggest how to move the needlet
                                        </h3>
                                    </div>
                                </div>
                                <div className='products__flexBox-box'>
                                    <div className='products__flexBox-icon'>
                                        <span class="material-symbols-outlined">check</span>
                                    </div>
                                    <div className='products__flexBox-content'>
                                        <h3>
                                            Based on our experience, we can suggest what strategies 
                                            work best and how to get results quickly
                                        </h3>
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

export default Analytics