import React from "react";
import { styles } from "../styles";
import { services } from "../myinformaton";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";

const About = () => {
  return (
    <div className="bg-hero-pattern">
      <motion.div>
        <p className={styles.sectionSubText}>About Me</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>
      <motion.p variants={fadeIn("", "", 0.1, 0.1)}></motion.p>Hello! My name is
      Mohamad Elgendy and I am a Full Stack Developer. I am highly passionate
      about anything related to programming and improving my skills. I am
      experienced in multiple languages and frameworks such as JavaScript,
      TypeScript, Java, C#, React.js, Node.js, and Three.js. I truly believe
      that with my skills and personality, I can mesh well with any team to
      build software that will last a lifetime!
    </div>
  );
};

export default About;
