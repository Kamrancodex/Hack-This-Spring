import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./FAQ.module.css";

const faqData = [
  {
    question: "What is a hackathon? Will there be actual hacking?",
    answer:
      "A hackathon is an event where students 'hack' together and create an app, website, game, etc. in 24-48 hours. There will be no malicious 'hacking'.",
  },
  {
    question: "Who can participate?",
    answer:
      "Anyone who is passionate about coding and is a beginner can join! This event is designed to be beginner-friendly and welcoming to all skill levels.",
  },
  {
    question: "What should I bring?",
    answer:
      "Bring your laptop, charger, and a zest for coding! We'll provide the space, internet, food, and a supportive environment for your creativity.",
  },
  {
    question: "Is there a participation fee?",
    answer:
      "No, this event is completely free! Food will be provided for the duration of the event. We will also have swag and prizes!",
  },
  {
    question: "Where is the event?",
    answer: "The event is located in the Gcet Safapora Ganderbal.",
  },
];

const FAQItem = ({ question, answer, isOpen, onClick }) => {
  return (
    <motion.div
      className={styles.faqItem}
      initial={false}
      animate={{
        backgroundColor: isOpen ? "rgba(79, 144, 255, 0.1)" : "transparent",
      }}
      transition={{ duration: 0.3 }}
    >
      <button
        className={`${styles.questionButton} ${isOpen ? styles.active : ""}`}
        onClick={onClick}
      >
        <span>{question}</span>
        <motion.span
          className={styles.icon}
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.3 }}
        >
          +
        </motion.span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className={styles.answer}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <p>{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className={styles.faqSection}>
      <div className={styles.container}>
        <h2 className={styles.title}>Frequently Asked Questions</h2>
        <motion.div
          className={styles.faqGrid}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          {faqData.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
