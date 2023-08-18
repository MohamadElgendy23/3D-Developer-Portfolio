import { styles } from "../styles";
import { services as myInfo } from "../myinformaton";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";

const InformationCard = () => {};

const About = () => {
  return (
    <div className="bg-hero-pattern">
      <motion.div>
        <p className={`${styles.sectionSubText} text-violet-500`}>About Me</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>
      <motion.p variants={fadeIn("", "", 0.1, 0.1)}>
        Hello! My name is{" "}
        <span className="text-violet-500">Mohamad Elgendy</span> and I am a Full
        Stack Developer. I am highly passionate about anything related to
        programming and improving my skills. I am experienced in multiple
        popular languages and frameworks such as JavaScript, TypeScript, Java,
        C#, React.js, Node.js, and Three.js. I truly believe that with my skills
        and personality, I can mesh well with any team to build software that
        will last a lifetime!
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {myInfo.map((info, index) => {
          <InformationCard key={index}>{info}</InformationCard>;
        })}
      </div>
    </div>
  );
};

export default About;
