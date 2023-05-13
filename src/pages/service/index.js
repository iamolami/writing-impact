import React from "react";
import ServiceBanner from "../../components/services/Banner";
import Header from "../../components/header/Header";
import DisplayService from "../../components/services/miscellaneous";
import DisplayContact from "../../components/miscellaneous/Contact";
import DisplayFooter from "../../components/miscellaneous/Footer";

const DisplayServices = ({
  setSearchOpen,
  navbarOpen,
  setNavbarOpen,
}) => {
  return (
    <>
      <Header
        setNavbarOpen={setNavbarOpen}
        setSearchOpen={setSearchOpen}
        navbarOpen={navbarOpen}
      />
      <ServiceBanner />
      <DisplayService />
      <DisplayContact />
      <DisplayFooter />
    </>
  );
};

export default DisplayServices;
