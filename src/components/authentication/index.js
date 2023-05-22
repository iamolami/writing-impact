import React from 'react'
import Header from '../header/Header'
import Banner from './Banner'
import Partner from '../header/Partner'
import DisplayProcess from '../miscellaneous/Process'
import DisplayTestimonies from '../miscellaneous/Testimonies'
import DisplayContact from '../miscellaneous/Contact'
import DisplayFooter from '../miscellaneous/Footer'

const Auth = ({ setSearchOpen, navbarOpen, setNavbarOpen, location}) => {
  return (
    <>
      <Header setNavbarOpen={setNavbarOpen} setSearchOpen={setSearchOpen} navbarOpen={navbarOpen}/>
      <Banner />
      <Partner />
      <DisplayProcess />
      <DisplayTestimonies />
      <DisplayContact />
      <DisplayFooter />
    </>
  )
}

export default Auth
