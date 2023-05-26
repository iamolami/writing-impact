import React from "react";
import ServiceBanner from "../../components/services/Banner";
import Header from "../../components/header/Header";
import DisplayService from "../../components/services/miscellaneous";
import DisplayContact from "../../components/miscellaneous/Contact";
import DisplayFooter from "../../components/miscellaneous/Footer";
import DisplayPreloader from "../../components/preloader";

const DisplayServices = ({
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
          <ServiceBanner />
          <DisplayService />
          <DisplayContact />
          <DisplayFooter />
        </React.Fragment>
      ) : (
        <DisplayPreloader />
      )}
    </>
  );
};

export default DisplayServices;
