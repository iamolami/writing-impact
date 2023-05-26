import React from "react";
import Auth from "../../components/authentication";
import DisplayPreloader from "../../components/preloader";

const DisplayAuth = ({
  setSearchOpen,
  navbarOpen,
  setNavbarOpen,
  location,
  loader,
}) => {
  return (
    <>
      {!loader ? (
        <>
          <Auth
            setNavbarOpen={setNavbarOpen}
            setSearchOpen={setSearchOpen}
            navbarOpen={navbarOpen}
          />
        </>
      ) : (
        <DisplayPreloader />
      )}
    </>
  );
};

export default DisplayAuth;
