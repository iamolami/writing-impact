import React from "react";
import DisplayHeader from "../../components/header";
import DisplayMiscellaneous from "../../components/miscellaneous";
import DisplayPreloader from "../../components/preloader";

const HomePage = ({ setSearchOpen, navbarOpen, setNavbarOpen, loader }) => {
  return (
    <React.Fragment>
      {!loader ? (
        <React.Fragment>
          <DisplayHeader
            setSearchOpen={setSearchOpen}
            navbarOpen={navbarOpen}
            setNavbarOpen={setNavbarOpen}
          />
          <DisplayMiscellaneous />
        </React.Fragment>
      ) : (
        <DisplayPreloader />
      )}
    </React.Fragment>
  );
};

export default HomePage;
