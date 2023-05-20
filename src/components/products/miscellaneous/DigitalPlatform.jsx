import React from 'react'
import digital from '../../../assets/images/digitalPlatform.png'

const DigitalPlatform = () => {
    return (
        <div id='digital-platform' className='section products__wrapper'>
            <div className='container'>
                <div className="products__row">
                    <div className='products__col-md-8'>
                        <div className='products__contentBox'>
                            <div className="products__contentBox-title">
                                <h3>Digital Content Platform</h3>
                            </div>
                            <p style={{ fontWeight: '600', fontSize: '15px' }}>
                                When managing projects (small or large) across different types of content, 
                                manual process can slow down your entire content creation journey and compromise 
                                your goals.
                            </p>
                            <p style={{ marginTop: '20px', fontSize: '14px' }}>
                                At Writing Impact, we give you access to our Digital Content Platform. It enables you to scale, 
                                control, and track all your projects on a single dashboard. It further allows you to communicate 
                                with us for varied requirements and genres. 
                                More importantly, an integrated platform with an end-to-end solution, management of the projects, share ratings, and even make your payments to give you a seamless experience.
                            </p>
                            <div className='products__flexBox'>
                                <div className='products__flexBox-box'>
                                    <div className='products__flexBox-icon'>
                                        <span class="material-symbols-outlined">check</span>
                                    </div>
                                    <div className='products__flexBox-content'>
                                        <h3>Order Online</h3>
                                        <p>Choose from a variety of projects and get going in less than 5 minutes </p>
                                    </div>
                                </div>
                                <div className='products__flexBox-box'>
                                    <div className='products__flexBox-icon'>
                                        <span class="material-symbols-outlined">check</span>
                                    </div>
                                    <div className='products__flexBox-content'>
                                        <h3>Dashboard View</h3>
                                        <p>Track your order in real-time and provide feedback</p>
                                    </div>
                                </div>
                                <div className='products__flexBox-box'>
                                    <div className='products__flexBox-icon'>
                                        <span class="material-symbols-outlined">check</span>
                                    </div>
                                    <div className='products__flexBox-content'>
                                        <h3>Approval Management</h3>
                                        <p>Provide feedback and keep control 100 percent</p>
                                    </div>
                                </div>
                                <div className='products__flexBox-box'>
                                    <div className='products__flexBox-icon'>
                                        <span class="material-symbols-outlined">check</span>
                                    </div>
                                    <div className='products__flexBox-content'>
                                        <h3>Single Invoice</h3>
                                        <p>Multiple projects can be managed and paid together</p>
                                    </div>
                                </div>
                            </div>
                            <a href='/' className='thm-btn' style={{ marginTop: '30px'}}>Learn More</a>
                        </div>
                    </div>
                    <div className='products__col-md-8'>
                        <img src={digital} alt='Digital Content Platform' loading='lazy' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DigitalPlatform