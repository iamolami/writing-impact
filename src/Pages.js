import React, { useEffect, useState } from "react";
import { BrowserRouter,  Route } from "react-router-dom";
import navigations from "./components/BreadCrumb/navigation";
import CustomRoutes from "./components/miscellaneous/CustomRoutes";

const Pages = ({ setSearchOpen }) => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [loader, setLoader] = useState(true);
  useEffect(() => {
    // setLoader(true);
    setTimeout(() => {
      setLoader(false);
    }, 3000);
  });
  return (
    <BrowserRouter>
      <CustomRoutes>
        {navigations.map(({ path, Component }, key) => (
          <Route
            exact
            path={path}
            key={key}
            element={
              <Component
                navbarOpen={navbarOpen}
                setLoader={setLoader}
                setNavbarOpen={setNavbarOpen}
                loader={loader}
                setSearchOpen={setSearchOpen}
              />
            }
          />
        ))}
      </CustomRoutes>
    </BrowserRouter>
  );
};

export default Pages;
