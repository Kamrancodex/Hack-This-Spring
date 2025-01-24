import React from "react";
import styles from "./Conduct.module.css";

const Conduct = () => {
  return (
    <div className={styles.container}>
      <div className={styles.glassCard}>
        <h1 className={styles.mainTitle}>Code of Conduct</h1>

        <p className={styles.introduction}>
          We strive to create a welcoming and inclusive community for all
          members. We value respect, collaboration, and a positive learning
          environment. This code of conduct outlines our expectations for
          behavior within our community spaces, both online and offline.
        </p>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Expected Behavior</h2>
          <ul className={styles.list}>
            <li>
              Be respectful and considerate towards others, regardless of their
              background, experience level, or opinions.
            </li>
            <li>
              Foster an inclusive and welcoming environment where everyone feels
              comfortable and safe to participate.
            </li>
            <li>
              Engage in constructive and supportive discussions, offering
              feedback and advice in a helpful manner.
            </li>
            <li>
              Respect the privacy and confidentiality of fellow community
              members.
            </li>
            <li>
              Collaborate and share knowledge to promote learning and growth
              within the community.
            </li>
            <li>
              <strong>Be kind, helpful, and considerate.</strong>
            </li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Unacceptable Behavior</h2>
          <ul className={styles.list}>
            <li>
              Harassment, discrimination, or any form of offensive or
              disrespectful language or behavior.
            </li>
            <li>
              Personal attacks, insults, or derogatory comments directed at
              other community members.
            </li>
            <li>
              Trolling, spamming, or any other disruptive behavior that
              interferes with the positive community experience.
            </li>
            <li>
              Sharing or distributing inappropriate, offensive, or harmful
              content.
            </li>
            <li>Any behavior that violates applicable laws or regulations.</li>
            <li>Religious or political controversial discussions.</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Reporting Incident</h2>
          <p>
            If you witness or experience any behavior that violates our code of
            conduct, please report it to the community moderators or
            administrators immediately.
          </p>
          <p>You can reach out:</p>
          <ul className={styles.list}>
            <li>
              <a href="mailto:open8hub@gmail.com" className={styles.link}>
                Community Email
              </a>
            </li>
            <li>
              In-person communication with a designated community organizer.
            </li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Consequences</h2>
          <p>
            Violations of our code of conduct will not be tolerated.
            Consequences may include:
          </p>
          <ul className={styles.list}>
            <li>Private or public warning by community moderators.</li>
            <li>Temporary or permanent suspension of community privileges.</li>
            <li>Removal from community events or activities.</li>
            <li>
              Permanent expulsion from the community for severe misconduct.
            </li>
          </ul>
        </section>

        <div className={styles.footer}>
          <p>
            <strong>
              Remember, we are here to support and learn from each other. Let's
              work together to create a positive and inclusive environment where
              everyone can thrive.
            </strong>
          </p>
          <blockquote className={styles.quote}>
            <p>
              <em>
                This code of conduct applies to all members of the community.
              </em>
            </p>
          </blockquote>
        </div>
      </div>
      <div className={styles.backgroundAnimation}></div>
    </div>
  );
};

export default Conduct;
