import React from 'react'
import accounts from '../../../assets/images/manageAccounts.png'

const ManageAccounts = () => {
    return (
        <div id='managed-account' className='section products__wrapper bg-white'>
            <div className='container'>
                <div className="products__row">
                    <div className='products__col-md-8'>
                        <img src={accounts} alt='Digital Content Platform' loading='lazy' />
                    </div>
                    <div className='products__col-md-8'>
                        <div className='products__contentBox pl-100'>
                            <div className="products__contentBox-title">
                                <h3>Managed Accounts</h3>
                            </div>
                            <p style={{ fontWeight: '600', fontSize: '16px' }}>
                                Large projects need a Single Point of Contact (SPOC) or an 
                                Account Manager so that you have someone to get things delivered on-time, as per your brief.
                            </p>
                            <p style={{ marginTop: '20px', fontSize: '13px' }}>
                                At Writing Impact, our ‘Managed Accounts’ section gives you access to a SPOC / Account Manager who is responsible 
                                for an end-to-end execution of your project. 
                                Complete management of the delivery quality and timelines lies with us, so you can focus on your core business.
                            </p>
                            <div className='products__flexBox'>
                                <div className='products__flexBox-box'>
                                    <div className='products__flexBox-icon'>
                                        <span class="material-symbols-outlined">check</span>
                                    </div>
                                    <div className='products__flexBox-content'>
                                        <h3>Your Own SPOC</h3>
                                        <p>A Single Point of Contact for all your content requirements</p>
                                    </div>
                                </div>
                                <div className='products__flexBox-box'>
                                    <div className='products__flexBox-icon'>
                                        <span class="material-symbols-outlined">check</span>
                                    </div>
                                    <div className='products__flexBox-content'>
                                        <h3>Frequent Updates</h3>
                                        <p>Constant communication regarding your project progress</p>
                                    </div>
                                </div>
                                <div className='products__flexBox-box'>
                                    <div className='products__flexBox-icon'>
                                        <span class="material-symbols-outlined">check</span>
                                    </div>
                                    <div className='products__flexBox-content'>
                                        <h3>Project Management</h3>
                                        <p>End-to-end delivery management by the SPOC</p>
                                    </div>
                                </div>
                                <div className='products__flexBox-box'>
                                    <div className='products__flexBox-icon'>
                                        <span class="material-symbols-outlined">check</span>
                                    </div>
                                    <div className='products__flexBox-content'>
                                        <h3>Hassle-free experience</h3>
                                        <p>We manage your content while you focus on your core business goals</p>
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

export default ManageAccounts