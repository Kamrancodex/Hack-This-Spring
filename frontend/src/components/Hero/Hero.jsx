import React, { useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import gsap from "gsap";
import ParticleBackground from "./ParticleBackground";
import styles from "./Hero.module.css";

const Hero = () => {
  const bannerContentRef = useRef(null);

  useEffect(() => {
    gsap.set(bannerContentRef.current.children, {
      opacity: 0,
      y: 100,
    });

    gsap.to(bannerContentRef.current.children, {
      opacity: 1,
      y: 0,
      duration: 1,
      stagger: 0.2,
      ease: "power2.out",
    });
  }, []);

  return (
    <header className={styles.banner}>
      <ParticleBackground />
      <div ref={bannerContentRef} className={styles.bannerContent}>
        <h1 className={styles.title}>
          HACK THIS SPRING
          <div className={styles.titleGlow}></div>
        </h1>
        <p className={styles.subtitle}>
          Ready to code? Excited for challenges? ⭐ HACK-THIS-SPRING is where
          beginners transform passion into action. 🚀 Join us for an
          electrifying 48-hour hackathon you don't want to miss!
        </p>
        <NavLink to="/register" className={styles.ctaButton}>
          Register Now
        </NavLink>
      </div>
    </header>
  );
};

export default Hero;
