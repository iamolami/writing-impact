import React from "react";
import DisplayWhyUs from "./WhyUs";
import DisplayUsers from "./Users";
import DisplayProcess from "./Process";
import DisplayTestimonies from "./Testimonies";
import DisplayBlog from "./Blog";
import DisplayContact from "./Contact";
import DisplayFooter from "./Footer";
// import DisplayCourses from "./Courses";
// import courses from "../../data/courses";
// import DisplayContentLoader from '../skeleton/ContentLoader'
import Services from "./Services";

const DisplayMiscellaneous = () => {
  

  
  return (
    <>
      <Services />
      <DisplayWhyUs />
      <DisplayUsers />
      <DisplayProcess />
      {/* <DisplayCourses courses={courses} /> */}
      <DisplayTestimonies />
      <DisplayBlog />
      <DisplayContact />
      <DisplayFooter />
    </>
  );
};

export default DisplayMiscellaneous;
