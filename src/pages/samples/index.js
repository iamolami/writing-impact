import React from 'react'
import Header from '../../components/header/Header'
import SampleBanner from '../../components/samples/Banner'
import DisplayContact from '../../components/miscellaneous/Contact'
import DisplayFooter from '../../components/miscellaneous/Footer'
import SampleSection from '../../components/samples/miscellaneous/SampleSection'

const DisplaySample = ({ setSearchOpen, navbarOpen, setNavbarOpen}) => {
  return (
    <>
      <Header setNavbarOpen={setNavbarOpen} setSearchOpen={setSearchOpen} navbarOpen={navbarOpen} />
      <SampleBanner/>
      <SampleSection />
      <DisplayContact />
      <DisplayFooter />
    </>
  )
}

export default DisplaySample
