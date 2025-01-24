// components/About/About.jsx
import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./About.module.css";

const About = () => {
  return (
    <div className={styles.aboutContainer}>
      <div className={styles.glassContainer}>
        <h1 className={styles.mainTitle}>
          Welcome to <span className={styles.highlight}>Hack This Spring</span>!
        </h1>

        <p className={styles.mainSubtitle}>
          Organized by{" "}
          <span className={styles.highlight}>Open Hub Community</span>, this is
          our first ever hackathon! Join us to collaborate, innovate, and bring
          your ideas to life.
        </p>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>About Open Hub Community</h2>
          <p>
            <strong>Open Hub Community</strong> is dedicated to fostering
            open-source collaboration, enhancing coding skills, and bridging the
            gap between academic knowledge and real-world applications. We host
            workshops, hackathons, and tech talks to build an inclusive
            environment for developers and learners.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>🌟 What We're All About</h2>
          <ul className={styles.featureList}>
            <li>
              Educational Workshops: From Git basics to advanced coding
              sessions.
            </li>
            <li>
              Hackathons: Encouraging creative problem-solving and teamwork.
            </li>
            <li>Tech Talks: Insights from industry experts.</li>
            <li>Open Source: Driving contributions to community projects.</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>💬 How to Join Us</h2>
          <p>
            Become a part of our journey by joining the OpenHub GitHub
            Organization.{" "}
            <a
              href="https://github.com/Open-Hub-Community/Support/issues/new?assignees=&labels=invite+me+to+the+community&projects=&template=invitation.yml&title=Please+invite+me+to+the+Open+Hub+Community+Organization"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
            >
              Click here
            </a>{" "}
            to request an invitation.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>📜 Code of Conduct</h2>
          <p>
            We value a welcoming and inclusive environment. Please review our{" "}
            <NavLink to="/conduct" className={styles.link}>
              Code of Conduct
            </NavLink>
            .
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>📚 Stay Connected</h2>
          <ul className={styles.contactList}>
            <li>
              <span className={styles.contactLabel}>Email:</span>
              <a href="mailto:open8hub@gmail.com" className={styles.link}>
                hello@openhub.com
              </a>
            </li>
            <li>
              <span className={styles.contactLabel}>GitHub:</span>
              <a
                href="https://github.com/Open-Hub-Community"
                className={styles.link}
              >
                OpenHub Organization
              </a>
            </li>
            <li>
              <span className={styles.contactLabel}>Twitter:</span>
              <a href="https://x.com/open8hub" className={styles.link}>
                @OpenHub
              </a>
            </li>
            <li>
              <span className={styles.contactLabel}>LinkedIn:</span>
              <a
                href="https://www.linkedin.com/company/open8hub"
                className={styles.link}
              >
                OpenHub LinkedIn
              </a>
            </li>
          </ul>
        </section>

        <footer className={styles.footer}>
          <p>
            We're thrilled to have you with us. Let's make this hackathon
            unforgettable!
          </p>
        </footer>
      </div>
    </div>
  );
};

export default About;
