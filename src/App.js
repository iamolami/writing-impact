import React, { useState } from "react";
import "./styles/App.css";
import Custom from "./iframes/Custom";
import CustomIframe from "./iframes/CustomFrame";
import { HelmetProvider } from "react-helmet-async";
import Pages from "./Pages";
import DisplayChatPage from "./components/chats";
import { ThemeContext } from "./components/context/ThemeContext";

function App() {
  const [search, setSearchOpen] = useState(false);
   // Detecting the default theme
   const isBrowserDefaulDark = () => window.matchMedia('(prefers-color-scheme: dark)').matches;

   const getDefaultTheme = () => {
     const localStorageTheme = localStorage.getItem('default-theme');
     const browserDefault = isBrowserDefaulDark() ? 'dark' : 'light';
     return localStorageTheme || browserDefault;
   };
 
   const [theme, setTheme] = useState(getDefaultTheme());
  
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className={`theme-${theme}`}>
        <main className="body">
          <Pages setSearchOpen={setSearchOpen} />
          <HelmetProvider>
            <CustomIframe
              title="A search iframe for Writing Impact"
              search={search}
            >
              <Custom setSearchOpen={setSearchOpen} />
            </CustomIframe>
          </HelmetProvider>
          <DisplayChatPage />
        </main>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
