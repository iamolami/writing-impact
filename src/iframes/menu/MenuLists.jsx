import React from "react";
import styles from "./style";
import { NavLink } from "react-router-dom";

const MenuLists = ({ item, onToggle, active }) => {
  return (
    <div>
      <li className="menuList" styles={styles.menuList}>
        <NavLink style={styles.menuLink} to={item.link}>
          {item.text}
        </NavLink>
        <span
          className="material-symbols-outlined"
          style={styles.menuIcons}
          onClick={onToggle}
        >
          {item.arrow}
        </span>
        <ul style={active ? styles.openPanel : styles.closePanel}>
          {item.dropdown?.map((dropdownItem) => (
            <li style={styles.menuList}>
              <a href={dropdownItem.link} style={styles.menuDropdown}>{dropdownItem.name}</a>
            </li>
          ))}
        </ul>
      </li>
    </div>
  );
};

export default MenuLists;
