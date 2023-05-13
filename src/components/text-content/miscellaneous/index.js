import React from 'react'
import DisplayContent from './Content'
import DisplayWhyUs from './Why-Us'
import DisplayProcess from '../../miscellaneous/Process'
import DisplayTestimonies from '../../miscellaneous/Testimonies'
import DisplayFAQs from './FAQs'
import DisplayContact from '../../miscellaneous/Contact'
import DisplayFooter from '../../miscellaneous/Footer'

const DisplayTextSections = () => {
  return (
    <div className='text'>
      <DisplayContent />
      <DisplayWhyUs />
      <DisplayProcess />
      <DisplayTestimonies />
      <DisplayFAQs />
      <DisplayContact />
      <DisplayFooter />
    </div>
  )
}

export default DisplayTextSections
