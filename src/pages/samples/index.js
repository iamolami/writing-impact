import React from "react";
import Header from "../../components/header/Header";
import SampleBanner from "../../components/samples/Banner";
import DisplayContact from "../../components/miscellaneous/Contact";
import DisplayFooter from "../../components/miscellaneous/Footer";
import SampleSection from "../../components/samples/miscellaneous/SampleSection";
import DisplayPreloader from "../../components/preloader";

const DisplaySample = ({
  setSearchOpen,
  navbarOpen,
  setNavbarOpen,
  loader,
}) => {
  return (
    <>
      {!loader ? (
        <>
          <Header
            setNavbarOpen={setNavbarOpen}
            setSearchOpen={setSearchOpen}
            navbarOpen={navbarOpen}
          />
          <SampleBanner />
          <SampleSection />
          <DisplayContact />
          <DisplayFooter />
        </>
      ) : (
        <DisplayPreloader />
      )}
    </>
  );
};

export default DisplaySample;
