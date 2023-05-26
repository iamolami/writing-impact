import React from "react";
import ProductBanner from "../../components/products/Banner";
import Header from "../../components/header/Header";
import DisplayProduct from "../../components/products/miscellaneous";
import DisplayContact from "../../components/miscellaneous/Contact";
import DisplayFooter from "../../components/miscellaneous/Footer";
import DisplayPreloader from "../../components/preloader";

const DisplayProducts = ({
  setSearchOpen,
  navbarOpen,
  setNavbarOpen,
  loader,
}) => {
  return (
    <>
      {!loader ? (
        <React.Fragment>
          <Header
            setNavbarOpen={setNavbarOpen}
            setSearchOpen={setSearchOpen}
            navbarOpen={navbarOpen}
          />
          <ProductBanner />
          <DisplayProduct />
          <DisplayContact />
          <DisplayFooter />
        </React.Fragment>
      ) : (
        <DisplayPreloader />
      )}
    </>
  );
};

export default DisplayProducts;
