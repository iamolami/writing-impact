import React from "react";
import { NavLink } from "react-router-dom";

const MenuLists = ({ item, onToggle, active, setNavbarOpen }) => {
  return (
    <li className="menu__menuList">
      <NavLink
        className="menu__menuLink"
        to={item.link}
        onClick={() => setNavbarOpen(false)}
      >
        {item.text}
      </NavLink>
      <span className="material-symbols-outlined" onClick={onToggle}>
        {item.arrow}
      </span>
      <ul className={active ? "menu__openPanel" : "menu__closePanel"}>
        {item.dropdown?.map((dropdownItem) => (
          <li className="menu__dropdownList">
            <a
              href={dropdownItem.link}
              className="menu__menuDropdown"
              onClick={() => setNavbarOpen(false)}
            >
              {dropdownItem.name}
            </a>
          </li>
        ))}
      </ul>
    </li>
  );
};

export default MenuLists;
