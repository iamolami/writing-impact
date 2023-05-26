import React from "react";
import Header from "../../components/header/Header";
import GraphicsBanner from "../../components/graphics/Banner";
import Partner from "../../components/header/Partner";
import DisplayGraphicsSections from "../../components/graphics/miscellaneous";
import DisplayPreloader from "../../components/preloader";

const DisplayGraphics = ({
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
          <GraphicsBanner />
          <Partner />
          <DisplayGraphicsSections />
        </>
      ) : (
        <DisplayPreloader />
      )}
    </>
  );
};

export default DisplayGraphics;
