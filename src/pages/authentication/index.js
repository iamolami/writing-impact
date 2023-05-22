import React from 'react'
import Auth from '../../components/authentication'

const DisplayAuth = ({ setSearchOpen, navbarOpen, setNavbarOpen, location}) => {
  return (
    <>
      <Auth setNavbarOpen={setNavbarOpen} setSearchOpen={setSearchOpen} navbarOpen={navbarOpen}/>
    </>
  )
}

export default DisplayAuth
