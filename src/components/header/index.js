import React from "react";
import Header from "./Header";
import Banner from "./Banner";

const DisplayHeader = ({
  setSearchOpen,
  navbarOpen,
  setNavbarOpen
}) => {
  return (
    <>
      <Header
        setSearchOpen={setSearchOpen}
        navbarOpen={navbarOpen}
        setNavbarOpen={setNavbarOpen}
      />
      <Banner />
    </>
  );
};

export default DisplayHeader;
