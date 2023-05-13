import React from 'react'

const DisplayUsers = () => {

    return (
        <section className='section users'>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-3'>
                        <div className='thmtitle'>
                            <h4>Our Services</h4>
                            <h3>
                                Who is it for?
                            </h3>
                            <p>
                                Every Business Needs Great Content
                            </p>
                        </div>
                        <img src='https://www.textmercato.com/assets/images/homepage/1-Copy.png' alt='user' />
                    </div>
                    <div className='col-md-7'>
                        <div className="users__grid">
                            <div className="users__grid-box">
                            <span class="material-symbols-outlined">corporate_fare</span>
                                <h3>Enterprises</h3>
                                <p>
                                    Large enterprise businesses in need of a turn-key content marketing 
                                    solution. Add a dedicated expert writing 
                                    team from Scripted to research, produce, and publish premium content.
                                </p>
                                <a href='https://www.textmercato.com/business/enterprises/' target='_blank' rel='noopener noreferrer'>
                                    <button className='users__btn' style={{ marginTop: '15px' }}>
                                        <i class='bx bx-right-arrow-alt'></i>
                                    </button>
                                </a>
                            </div>
                            <div className="users__grid-box">
                                <span class="material-symbols-outlined">account_balance</span>
                                <h3>Agencies</h3>
                                <p>
                                    A fully-supported flexible content marketing solution for digital and creative 
                                    marketing agencies. We will match you with 
                                    highly-vetted writers to best support the content needs of each of your clients.
                                </p>
                                <a href='https://www.textmercato.com/business/enterprises/' target='_blank' rel='noopener noreferrer'>
                                    <button className='users__btn' style={{ marginTop: '15px' }}>
                                        <i class='bx bx-right-arrow-alt'></i>
                                    </button>
                                </a>
                            </div>
                            <div className="users__grid-box">
                                <span className="material-symbols-outlined">campaign</span>
                                <h3>Media Publishers</h3>
                                <p>
                                    Producing consistent, quality content on your publishing or media 
                                    site means managing a lot of moving parts including multiple deadlines, assignments, 
                                    and payments for freelancers. Scripted can handle it all.
                                </p>
                                <a href='https://www.textmercato.com/business/enterprises/' target='_blank' rel='noopener noreferrer'>
                                    <button className='users__btn' style={{ marginTop: '15px' }}>
                                        <i class='bx bx-right-arrow-alt'></i>
                                    </button>
                                </a>
                            </div>
                            <div className="users__grid-box">
                            <span className="material-symbols-outlined">person</span>
                                <h3>Individuals</h3>
                                <p>
                                    Connect instantly with highly-vetted writers across 50+ industries. 
                                    Manage your entire content production in one easy-to-use platform. 
                                    Never worry about content again.
                                </p>
                                <a href='https://www.textmercato.com/business/enterprises/' target='_blank' rel='noopener noreferrer'>
                                    <button className='users__btn' style={{ marginTop: '15px' }}>
                                        <i class='bx bx-right-arrow-alt'></i>
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default DisplayUsers