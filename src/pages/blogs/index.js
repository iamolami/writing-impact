import React from "react";
import Header from "../../components/header/Header";
import DisplayContact from "../../components/miscellaneous/Contact";
import DisplayFooter from "../../components/miscellaneous/Footer";
import DisplayBlogs from "../../components/blogs/miscellaneous";

const DisplayBlogPage = ({
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
      <DisplayBlogs />
      <DisplayContact />
      <DisplayFooter />
    </>
  );
};

export default DisplayBlogPage;
