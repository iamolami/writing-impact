import React, { useState } from "react";
import navLinks from "../../data/navigation";
import MenuLists from "./MenuLists";

const Navigation = ({ navbarOpen, setNavbarOpen }) => {
  const [clicked, setClicked] = useState("0");
  const handleToggle = (index) => {
    if (clicked === index) {
      return setClicked("0");
    }
    setClicked(index);
  };
  return (
    <nav className={ navbarOpen ? "menu" : "menu__close"}>
      <ul className="menu__menuUl">
        {navLinks.map((item, index) => (
          <MenuLists
            onToggle={() => handleToggle(index)}
            active={clicked === index}
            key={index}
            item={item}
            setNavbarOpen={setNavbarOpen}
          />
        ))}
      </ul>
      <div className="menu__menuActions">
        <button className="menu__menuBtn">Get Started</button>
        <a href="/auth" className="menu__menuBtn">
          signin
        </a>
      </div>
    </nav>
  );
};

export default Navigation;
