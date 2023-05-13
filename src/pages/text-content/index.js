import React from 'react'
import Header from '../../components/header/Header'
import TextBanner from '../../components/text-content/Banner'
import Partner from '../../components/header/Partner'
import DisplayTextSections from '../../components/text-content/miscellaneous'

const DisplayText = ({ setSearchOpen, navbarOpen, setNavbarOpen}) => {
  return (
    <>
      <Header setNavbarOpen={setNavbarOpen} setSearchOpen={setSearchOpen} navbarOpen={navbarOpen} />
      <TextBanner/>
      <Partner />
      <DisplayTextSections />
    </>
  )
}

export default DisplayText
