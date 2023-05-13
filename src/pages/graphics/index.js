import React from 'react'
import Header from '../../components/header/Header'
import GraphicsBanner from '../../components/graphics/Banner'
import Partner from '../../components/header/Partner'
import DisplayGraphicsSections from '../../components/graphics/miscellaneous'

const DisplayGraphics = ({ setSearchOpen, navbarOpen, setNavbarOpen}) => {
  return (
    <>
      <Header setNavbarOpen={setNavbarOpen} setSearchOpen={setSearchOpen} navbarOpen={navbarOpen}/>
      <GraphicsBanner />
      <Partner />
      <DisplayGraphicsSections />
    </>
  )
}

export default DisplayGraphics
