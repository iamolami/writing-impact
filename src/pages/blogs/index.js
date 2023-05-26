import React from "react";
import Header from "../../components/header/Header";
import DisplayContact from "../../components/miscellaneous/Contact";
import DisplayFooter from "../../components/miscellaneous/Footer";
import DisplayBlogs from "../../components/blogs/miscellaneous";
import DisplayPreloader from "../../components/preloader";

const DisplayBlogPage = ({
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
          <DisplayBlogs />
          <DisplayContact />
          <DisplayFooter />
        </>
      ) : (
        <DisplayPreloader />
      )}
    </>
  );
};

export default DisplayBlogPage;
