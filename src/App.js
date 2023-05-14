import React, { useState } from "react";
import "./styles/App.css";
import Custom from "./iframes/Custom";
import CustomIframe from "./iframes/CustomFrame";
import { HelmetProvider } from "react-helmet-async";
// import Pages from "./Pages";
import { BrowserRouter, Route } from "react-router-dom";
import CustomRoutes from "./components/miscellaneous/CustomRoutes";
import HomePage from "./pages/home";
import DisplayProducts from "./pages/products";
import DisplayServices from "./pages/service";
import DisplayText from "./pages/text-content";
import DisplayGraphics from "./pages/graphics";
import DisplayAuth from "./pages/authentication";



function App() {
  const [search, setSearchOpen] = useState(false);
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [loader, setLoader] = useState(true);

  return (
    <>
      <BrowserRouter>
      <CustomRoutes>
          <Route
            exact
            path="/"
            element={
              <HomePage
                navbarOpen={navbarOpen}
                setLoader={setLoader}
                setNavbarOpen={setNavbarOpen}
                loader={loader}
                setSearchOpen={setSearchOpen}
              />
            }
          />
          <Route
            path="/products"
            element={
              <DisplayProducts
                navbarOpen={navbarOpen}
                setLoader={setLoader}
                setNavbarOpen={setNavbarOpen}
                loader={loader}
                setSearchOpen={setSearchOpen}
              />
            }
          />
          <Route
            path="/services"
            element={
              <DisplayServices
                navbarOpen={navbarOpen}
                setLoader={setLoader}
                setNavbarOpen={setNavbarOpen}
                loader={loader}
                setSearchOpen={setSearchOpen}
              />
            }
          />
          <Route
            path="/services/text-content"
            element={
              <DisplayText
                navbarOpen={navbarOpen}
                setLoader={setLoader}
                setNavbarOpen={setNavbarOpen}
                loader={loader}
                setSearchOpen={setSearchOpen}
              />
            }
          />
          <Route
            path="/services/graphics"
            element={
              <DisplayGraphics
                navbarOpen={navbarOpen}
                setLoader={setLoader}
                setNavbarOpen={setNavbarOpen}
                loader={loader}
                setSearchOpen={setSearchOpen}
              />
            }
          />
          <Route
            path="/auth"
            element={
              <DisplayAuth
                navbarOpen={navbarOpen}
                setLoader={setLoader}
                setNavbarOpen={setNavbarOpen}
                loader={loader}
                setSearchOpen={setSearchOpen}
              />
            }
          />
      </CustomRoutes>
    </BrowserRouter>
        <HelmetProvider>
          <CustomIframe
            title="A search iframe for Writing Impact"
            search={search}
          >
            <Custom setSearchOpen={setSearchOpen} />
          </CustomIframe>
        </HelmetProvider>
    </>
  );
}

export default App;
