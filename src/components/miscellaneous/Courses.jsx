import React from 'react'
import Separator from './Separator'

const DisplayCourses = ({ courses }) => {
  return (
    <section className='section courses'>
      <div className="container">
        <div className="thmtitle">
            <h3>Courses to get started with</h3>
            <Separator />
            <p>
                Start your content writing journey with Writing Impact. 
                Learn from our qualified and competent content creators, 
                translators,<br /> transcription experts, video wizards, and more.
            </p>
        </div>
        <div className="courses__grid">
            {courses.map((item, index) => (
                <div className="courses__grid-box" key={index}>
                <a href="/">
                    <img src={item.imageURL} className='courses__img' alt="Courses" loading='lazy' />
                </a>
                <div className="courses__content">
                    <div className="courses__content-tags">
                        <span>{item.tags}</span>
                        <span>#4,500</span>
                    </div>
                    <h3 className='courses__content-main'>{item.main}</h3>
                    <p className='courses__content-text'>{item.text}</p>
                    <footer className="courses__content-footer">
                        <span class="courses__content-time">
                            {item.date}
                        </span>
                        <span className="courses__content-length">{item.length}</span>
                  </footer>
                </div>
            </div>
            ))}
        </div>
        <a href="/">
            <button className="thm-btn mt-1">View All Courses</button>
        </a>
      </div>
    </section>
  )
}

export default DisplayCourses
