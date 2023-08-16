import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className="relative w-full mx-auto">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7x1 mx-auto flex flex-row items-start`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div>
            <h1 className={`${styles.heroHeadText} text-amber-400`}>
              Hello, I am <span className="text-[#915eff]">Mohamad</span>
            </h1>
            <p className={`${styles.heroSubText} mt-2 text-amber-400`}>
              I am an aspiring{" "}
              <span className="text-[#915eff]">Full Stack Developer</span>{" "}
              skilled in both the frontend and backend. Lets team up and
              revolutionize the future!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
