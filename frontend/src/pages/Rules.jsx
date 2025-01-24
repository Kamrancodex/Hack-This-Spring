import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Rules.module.css";

const Rules = () => {
  return (
    <div className={styles.rulesContainer}>
      <div className={styles.glassContainer}>
        <h1 className={styles.mainTitle}>Hackathon Rules</h1>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>The Spirit of the Competition</h2>
          <p>
            Remember that hackathons are like marathons. Some people go to
            compete, but most people take part to better themselves and have
            fun. Whatever the reason is you're at a hackathon, make sure you're
            upholding the hacker spirit by collaborating with other teams,
            helping beginners, and having fun.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>The Rules of the Competition</h2>
          <ol className={styles.orderedList}>
            <li>There is no maximum or minimum team size.</li>
            <li>
              Teams should be made up exclusively of students (or recent
              graduates within one year of having graduated) who are not
              organizers, volunteers, judges, sponsors, or in any other
              privileged position at the event.
            </li>
            <li>
              All team members should be present at the event. Leaving the venue
              for some time to hack elsewhere is fine.
            </li>
            <li>
              Teams can of course gain advice and support from organizers,
              volunteers, sponsors, and others.
            </li>
            <li>All work on a project should be done at the hackathon.</li>
            <li>Teams can use an idea they had before the event.</li>
            <li>
              Teams can work on ideas that have already been done. Hacks do not
              have to be "innovative". If somebody wants to work on a common
              idea, they should be allowed to do so and should be judged on the
              quality of their hack.
            </li>
            <li>
              Teams can work on an idea that they have worked on before (as long
              as they do not re-use code).
            </li>
            <li>
              Teams can use libraries, frameworks, or open-source code in their
              projects.
            </li>
            <li>
              Adding new features to existing projects is allowed. Judges will
              only consider new functionality introduced or new features added
              during the hackathon in determining the winners.
            </li>
            <li>
              Teams must stop hacking once the time is up. However, teams are
              allowed to debug and make small fixes to their programs after time
              is up.
            </li>
            <li>
              Projects that violate the{" "}
              <NavLink to="/conduct" className={styles.link}>
                Code of Conduct
              </NavLink>{" "}
              are not allowed.
            </li>
            <li>
              Teams can be disqualified from the competition at the organizers'
              discretion for breaking the Competition Rules, the Code of
              Conduct, or other unsporting behavior.
            </li>
          </ol>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Demos</h2>
          <p>
            After hacking finishes, teams will show their projects to each other
            and to the judges. You are strongly encouraged to present a demo of
            what you have built. Pitches or presentations are discouraged. You
            are judged on what you built, so make sure to demo it!
          </p>
          <p>
            Even if your hack is broken or incomplete, presenting what you've
            done is still valuable. Demoing is not just about the competition
            but also about sharing what you learned.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Judging Criteria</h2>
          <p>
            Teams will be judged on these four criteria. Judges will weigh the
            criteria equally:
          </p>
          <ul className={styles.unorderedList}>
            <li>
              <strong>Technology:</strong> How technically impressive was the
              hack? Was the technical problem difficult? Did it use clever
              techniques or many different components?
            </li>
            <li>
              <strong>Design:</strong> Did the team put thought into the user
              experience? How well designed is the interface? Is it easy to use?
            </li>
            <li>
              <strong>Completion:</strong> Does the hack work? Did the team
              achieve everything they wanted?
            </li>
            <li>
              <strong>Learning:</strong> Did the team stretch themselves? Did
              they try to learn something new? Did they explore new technology?
            </li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Important Notes</h2>
          <p>
            Remember, hackathons are about building, learning, and having
            fun—not about pitching ideas, writing perfect code, or solving big
            problems. Focus on enjoying the process, and the skills you learn
            will help you in the future!
          </p>
        </section>

        <footer className={styles.footer}>
          <p>Happy Hacking from the Open Hub Community!</p>
        </footer>
      </div>
    </div>
  );
};

export default Rules;
