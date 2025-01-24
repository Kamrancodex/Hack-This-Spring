
import React from "react";
import styles from "./About.module.css";

const About = () => {
  return (
    <section className={styles.about}>
      <div className={styles.glassContainer}>
        <h2 className={styles.title}>
          About the Hackathon
          <span className={styles.titleFill}>About the Hackathon</span>
        </h2>
        <p className={styles.description}>
          HACK THIS SPRING is a beginner-friendly hackathon organized by the
          OpenHub Community. This in-person event will be held at Gcet Safapora
          Ganderbal. Join us for 48 hours of coding, learning, and collaboration
          with like-minded individuals!
        </p>
      </div>
    </section>
  );
};

export default About;
