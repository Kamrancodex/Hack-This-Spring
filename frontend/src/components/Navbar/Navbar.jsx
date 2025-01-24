import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import icon1 from "../../assets/icon1.png";
import styles from "./Navbar.module.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className={styles.navbar}>
      <div className={styles.container}>
        <div className={styles.logoContainer}>
          <NavLink to="/">
            <img src={icon1} alt="Hackathon Logo" className={styles.logo} />
          </NavLink>
          <h1 className={styles.title}>HACK THIS SPRING</h1>
        </div>

        <nav className={`${styles.nav} ${isOpen ? styles.navActive : ""}`}>
          <NavLink
            to="/"
            className={({ isActive }) =>
              `${styles.link} ${isActive ? styles.activeLink : ""}`
            }
            onClick={toggleMenu}
          >
            Home
          </NavLink>
          <NavLink
            to="/rules"
            className={({ isActive }) =>
              `${styles.link} ${isActive ? styles.activeLink : ""}`
            }
            onClick={toggleMenu}
          >
            Rules
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `${styles.link} ${isActive ? styles.activeLink : ""}`
            }
            onClick={toggleMenu}
          >
            About
          </NavLink>
          <NavLink to="/register" onClick={toggleMenu}>
            <button className={styles.registerButton}>Register Now</button>
          </NavLink>
        </nav>

        <button className={styles.menuButton} onClick={toggleMenu}>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {isOpen ? (
              <path d="M18 6L6 18M6 6l12 12" />
            ) : (
              <>
                <path d="M3 12h18M3 6h18M3 18h18" />
              </>
            )}
          </svg>
        </button>
      </div>
    </header>
  );
}

export default Navbar;
