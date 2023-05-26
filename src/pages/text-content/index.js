import React from "react";
import Header from "../../components/header/Header";
import TextBanner from "../../components/text-content/Banner";
import Partner from "../../components/header/Partner";
import DisplayTextSections from "../../components/text-content/miscellaneous";
import DisplayPreloader from "../../components/preloader";

const DisplayText = ({ setSearchOpen, navbarOpen, setNavbarOpen, loader }) => {
  return (
    <>
      {!loader ? (
        <React.Fragment>
          <Header
            setNavbarOpen={setNavbarOpen}
            setSearchOpen={setSearchOpen}
            navbarOpen={navbarOpen}
          />
          <TextBanner />
          <Partner />
          <DisplayTextSections />
        </React.Fragment>
      ) : (
        <DisplayPreloader />
      )}
    </>
  );
};

export default DisplayText;
