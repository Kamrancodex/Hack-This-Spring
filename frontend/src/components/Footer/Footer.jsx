import React from "react";
import { NavLink } from "react-router-dom";
import { FaGithub, FaLinkedin, FaInstagram, FaTwitter } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.topSection}>
          <div className={styles.logoSection}>
            <h3>HACK THIS SPRING</h3>
            <p>Transform your passion into action</p>
            <div className={styles.social}>
              <a
                href="https://github.com/Open-Hub-Community"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/company/open8hub"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin />
              </a>
              {/* <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram />
              </a>*/}
              <a
                href="https://x.com/account/access"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter />
              </a>
            </div>
          </div>

          <div className={styles.linksSection}>
            <div className={styles.linkGroup}>
              <h4>Quick Links</h4>
              <NavLink to="/">Home</NavLink>
              <NavLink to="/about">About</NavLink>
              <NavLink to="/rules">Rules</NavLink>
              <NavLink to="/register">Register</NavLink>
            </div>

            <div className={styles.linkGroup}>
              <h4>Contact</h4>
              <a href="mailto:contact@hackthisspring.com">
                <MdEmail /> contact@hackthisspring.com
              </a>
              <p>Gcet Safapora Ganderbal</p>
            </div>
          </div>
        </div>

        <div className={styles.bottomSection}>
          <div className={styles.copyright}>
            © 2024 Hack This Spring. All rights reserved.
          </div>
          <div className={styles.legal}>
            <NavLink to="/conduct">Code of Conduct</NavLink>
            <span>|</span>
            <NavLink to="/privacy">Privacy Policy</NavLink>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
