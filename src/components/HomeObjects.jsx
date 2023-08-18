import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const HomeObjects = () => {
  return (
    <>
      <section className="relative w-full mx-auto">
        <div
          className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7x1 mx-auto flex flex-row items-start`}
        >
          <div className="flex flex-col justify-center items-center mt-5">
            <div>
              <h1 className={`${styles.heroHeadText} text-white-100`}>
                Hello, I am <span className="text-[#915eff]">Mohamad</span>
              </h1>
              <p className={`${styles.heroSubText} mt-2 text-white-100`}>
                I am an aspiring{" "}
                <span className="text-[#915eff]">Full Stack Developer</span>{" "}
                skilled in both the frontend and backend. Lets team up and
                revolutionize the future!
              </p>
            </div>
          </div>
        </div>
      </section>
      <ComputersCanvas />

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="/about">
          <div className="w-[35px] h-[64px] rounded-full border-4 border-yellow-300 flex justify-center items-center pt-2 hover: cursor-pointer animate-bounce"></div>
        </a>
      </div>
    </>
  );
};

export default HomeObjects;
