import React from 'react'
import ProductBanner from '../../components/products/Banner'
import Header from '../../components/header/Header'
import DisplayProduct from '../../components/products/miscellaneous'
import DisplayContact from '../../components/miscellaneous/Contact'
import DisplayFooter from '../../components/miscellaneous/Footer'

const DisplayProducts = ({ setSearchOpen, navbarOpen, setNavbarOpen, location}) => {
  return (
    <>
      <Header setNavbarOpen={setNavbarOpen} setSearchOpen={setSearchOpen} navbarOpen={navbarOpen}/>
      <ProductBanner />
      <DisplayProduct />
      <DisplayContact />
      <DisplayFooter />
    </>
  )
}

export default DisplayProducts
