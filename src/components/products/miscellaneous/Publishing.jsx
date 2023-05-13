import React from 'react'
import publishing from '../../../assets/images/publishing.png'

const Publishing = () => {
    return (
        <div id='publishing' className='section products__wrapper'>
            <div className='container'>
                <div className="products__row">
                    <div className='products__col-md-8'>
                        <div className='products__contentBox'>
                            <div className="products__contentBox-title">
                                <h3>Publishing</h3>
                            </div>
                            <p style={{ fontWeight: '600', fontSize: '16px' }}>
                                The key to success campaigns is not only about producing content, 
                                but putting it up at 
                                the right time to reach the right audience on the right platform.
                            </p>
                            <p style={{ marginTop: '20px', fontSize: '13px' }}>
                                At Writing Impact, be it third party websites or your own webpage, social 
                                media handles or guest posts, our dedicated ‘Publishing Team’ can push the content quickly, 
                                so you are able to meet your customer leads, engagement, or other goals.
                            </p>
                            <div className='products__flexBox'>
                                <div className='products__flexBox-box'>
                                    <div className='products__flexBox-icon'>
                                        <span class="material-symbols-outlined">check</span>
                                    </div>
                                    <div className='products__flexBox-content'>
                                        <h3>Keep Focus</h3>
                                        <p>You keep focus on your core achievables while we get you ready to scale.</p>
                                    </div>
                                </div>
                                <div className='products__flexBox-box'>
                                    <div className='products__flexBox-icon'>
                                        <span class="material-symbols-outlined">check</span>
                                    </div>
                                    <div className='products__flexBox-content'>
                                        <h3>Project Management</h3>
                                        <p>End-to-end project management responsibility lies with Writing Impact.</p>
                                    </div>
                                </div>
                                <div className='products__flexBox-box'>
                                    <div className='products__flexBox-icon'>
                                        <span class="material-symbols-outlined">check</span>
                                    </div>
                                    <div className='products__flexBox-content'>
                                        <h3>One-Stop-Solution</h3>
                                        <p>
                                            One place for all your content requirements. A winning combination is about 
                                            doing it all efficiently and meeting your expected goals.
                                        </p>
                                    </div>
                                </div>
                                <div className='products__flexBox-box'>
                                    <div className='products__flexBox-icon'>
                                        <span class="material-symbols-outlined">check</span>
                                    </div>
                                    <div className='products__flexBox-content'>
                                        <h3>Integration</h3>
                                        <p>Publish directly on your WordPress site (Coming Soon!)</p>
                                    </div>
                                </div>
                            </div>
                            <a href='/' className='thm-btn' style={{ marginTop: '30px'}}>Learn More</a>
                        </div>
                    </div>
                    <div className='products__col-md-8'>
                        <img src={publishing} alt='Digital Content Platform' loading='lazy' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Publishing