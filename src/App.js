import React, { useState } from "react";
import "./styles/App.css";
import Custom from "./iframes/Custom";
import CustomIframe from "./iframes/CustomFrame";
import { HelmetProvider } from "react-helmet-async";
import Pages from "./Pages"

function App() {
  const [search, setSearchOpen] = useState(false);

  return (
    <>
        <Pages setSearchOpen={setSearchOpen} />
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
