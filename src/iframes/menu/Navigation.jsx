import React, { useState } from "react";
import styles from "./style";
import navLinks from "../../data/navigation";
import MenuLists from "./MenuLists";

const Navigation = () => {
  const [clicked, setClicked] = useState("0");
  const handleToggle = (index) => {
    if (clicked === index) {
      return setClicked("0");
    }
    setClicked(index);
  };
  return (
    <React.Fragment>
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
        />
        <link rel="stylesheet" href="http://localhost:3000/styles/App.css" />
      </head>
      <div className='menu' style={styles.navigation}>
        <nav className="menu">
          <ul className="menuUl" style={styles.menuUl}>
            {navLinks.map((item, index) => (
              <MenuLists
                onToggle={() => handleToggle(index)}
                active={clicked === index}
                key={index}
                item={item} 
              />
            ))}
          </ul>
          <div style={styles.menuActions}>
            <button style={styles.menuBtn}>Get Started</button>
            <a href="/" style={styles.menuSignIn}>
              signin
            </a>
          </div>
        </nav>
      </div>
    </React.Fragment>
  );
};

export default Navigation;
