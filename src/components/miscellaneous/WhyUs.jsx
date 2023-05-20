import React from 'react'

const DisplayWhyUs = () => {

    const content = [
        {
            main: 'Text',
            text: 'Over 10K approved writers are ready to share their expertise on your requirements. Be it Blogs, Articles, SEO, Social Media Posts, Emailers, Website Copy, or any other content.',
            icon: 'description'
        },
        {
            main: 'Graphics',
            text: 'A good graphic can explain simple or complex ideas in an easy-to-understand, recallable way. Use infographics, illustrations, images, and more to communicate with your customers.',
            icon: 'polyline'
        },
        {
            main: 'Translations',
            text: 'A majority of readers are more comfortable consuming content in their regional language. Our translation services in more than 50+ languages helps you connect better with your target audience.',
            icon: 'translate'
        },
        {
            main: 'Transcrption',
            text: 'Video to Text, Audio to Text! Let us know what your transcription needs are, and we can contribute positively.',
            icon: 'transcribe'
        },
        {
            main: 'Video',
            text: 'Over 10K approved writers are ready to share their expertise on your requirements. Be it Blogs, Articles, SEO, Social Media Posts, Emailers, Website Copy, or any other content.',
            icon: 'videocam'
        },
        {
            main: 'Audio',
            text: 'Over 10K approved writers are ready to share their expertise on your requirements. Be it Blogs, Articles, SEO, Social Media Posts, Emailers, Website Copy, or any other content.',
            icon: 'mic'
        }
    ]

    return (
        <div className='section whyUs'>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-3'>
                        <div className='thmtitle'>
                            <h4>Why Choose Us</h4>
                            <h3>
                                One-stop-solution for all your digital content requirements
                            </h3>
                            <p>
                                Be it Text, Graphics, Translations, or any other needs. We have you covered.
                            </p>
                        </div>
                        <a href="/" className="thm-btn">Read More <i class='bx bx-chevrons-right'></i></a>
                    </div>
                    <div className='col-md-7'>
                        <div className='whyUs__grid'>
                            {content.map((item, index) => (
                                <div key={index} className='whyUs__grid-box' style={{ gridArea: item.gridArea  }}>
                                    <span class="material-symbols-outlined">{item.icon}</span>
                                    <h3>{item.main}</h3>
                                    <p>
                                       { item.text }
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DisplayWhyUs