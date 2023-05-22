import React from 'react'
import Banner from '../contents/Banner'
import DisplaySection from '../contents/Section'
import DisplayBlog from '../contents/Blogs'

const DisplayBlogs = () => {
  return (
    <div className='blogs  section'>
      <div className='container'>
        <div className='blogs__wrapper'>
          <Banner />
          <DisplaySection />
          <DisplayBlog />
        </div>
      </div>  
    </div>
  )
}

export default DisplayBlogs
