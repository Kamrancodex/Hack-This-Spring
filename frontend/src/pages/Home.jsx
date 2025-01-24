import React, { useEffect } from "react";
import { initSmoothScroll } from "../utils/smoothScroll";
import Hero from "../components/Hero/Hero";

import styles from "./Home.module.css";
import Countdown from "../components/Countdown/Countdown";
import About from "../components/About/About";
import FAQ from "../components/FAQ/FAQ";

const Home = () => {
  useEffect(() => {
    initSmoothScroll();
  }, []);

  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <Hero />
        <Countdown />
        <About />
        <FAQ />
      </div>
    </div>
  );
};

export default Home;
