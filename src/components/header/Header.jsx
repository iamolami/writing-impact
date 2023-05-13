import React, { useEffect, useState } from "react";
// import logo from '../../assets/images/logo.png'
import navLinks from "../../data/navigation";
import { NavLink } from "react-router-dom";
import Navigation from './Navigation'

const Header = ({ setNavbarOpen, setSearchOpen, navbarOpen }) => {
  const [scrolled, setScrolled] = useState(false);
  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 200) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  });
  
  return (
    <div className="header" id={navbarOpen ? "igHeader" : "igHeaderOpen"}>
      {/* <div className={scrolled ? 'sticky' : 'header__topBar'}>
        <div className="header__topBar-box">
          <a href="mailto:writingimpact@gmail.com">writingimpact@gmail.com</a>
          <a href="tel:+2349152460899">+234 915 2460 899</a>
        </div>
        <div className="header__topBar-box">
          <div className="header__topBar-social-widget">
            <a href="/">
              <i class="bx bxl-facebook"></i>
            </a>
            <a href="/">
              <i class="bx bxl-linkedin"></i>
            </a>
            <a href="/">
              <i class="bx bxl-twitter"></i>
            </a>
            <a href="/">
              <i class="bx bxl-google"></i>
            </a>
          </div>
        </div>
      </div> */}
      <div className={`header__topBox ${scrolled ? 'mtop' : ''} ${navbarOpen ? 'h-viewport' : ''}`}>
        <div className="header__topBox-inner">
          <div className="header__topBox-wrapper">
            <a href="/" className="header__topBox-logo">
              WritingImpact
            </a>
          </div>
          <div className="header__topBox-wrapper">
            <ul className="header__topBox-nav">
              {navLinks.map((item) => (
                <li>
                  <NavLink
                    className="navLinks"
                    to={item.link}
                  >
                    {item.text}
                    <span className="material-symbols-outlined">
                      {item.arrow}
                    </span>
                  </NavLink>
                  <ul className="dropdown">
                    {item.dropdown?.map((dropdownItem) => (
                      <li>
                        <a href={dropdownItem.link}>{dropdownItem.name}</a>
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </div>
          <div className="header__topBox-wrapper">
            <div className="header__topBox-action">
              <button
                className="header__gsearch"
                onClick={() => setSearchOpen(true)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                  width="20"
                  height="20"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  ></path>
                </svg>
              </button>
              <div className="header__g-members">
                <a href="/auth" className="header__g-link">
                  Signin
                </a>
                <a href="/auth" className="header__g-subscribe">
                  Get Started
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* For Mobile Phones */}
        <div className="header__topBox-mobile">
          <div className="header__topBox-wrapper">
            <a href="/" className="header__topBox-logo">
              WritingImpact
            </a>
          </div>
          <div className="header__topBox-wrapper header__topBox-flexBox">
            <button
                className="header__gsearch"
                onClick={() => setSearchOpen(true)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                  width="20"
                  height="20"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  ></path>
                </svg>
              </button>
              <button className="header__topBox-burger" onClick={() => setNavbarOpen((prev) => !prev)}></button>
          </div>
        </div>
        <Navigation navbarOpen={navbarOpen} setNavbarOpen={setNavbarOpen} />
      </div>
    </div>
  );
};

export default Header;
