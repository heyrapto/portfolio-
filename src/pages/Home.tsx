import { motion } from "framer-motion";
import { FbIcon, IgIcon, InIcon, TwIcon } from "./svgs.tsx";

const Hero = () => {    
  return (
    <>
      <section className="max-w-[1440px] mx-auto px-[38px] pt-[100px] md:px-[26px] lg:pt-[120px] lg:pl-[80px] lg:pr-[40px]">
        <div className="flex flex-col items-start flex-1 md:flex md:flex-row md:gap-10 md:items-center lg:flex lg:flex-row lg:items-center lg:gap-x-12 lg:justify-between">
          <div>
            <div className="gradientText">
              <h1>
                10x Software Developer<span>.</span>
              </h1>
            </div>
            <p className="gradientText font-medium font-pop text-[15px] text-[#FFFFFF99] max-w-[353px] mt-[45px] md:mt-8 lg:mt-1 md:max-w-[639px] md:text-[18px] leading-md:[27px]">
              I like to craft solid and scalable products with great
              user experiences.
            </p>
            <div
              id="intro"
              className="text-[#F0FEFF] font-pop flex-shrink-0 text-[.9em] leading-[1.5] font-medium mt-[40px] flex flex-col gap-8 md:flex md:flex-col md:gap-[20px] md:mt-[45px] lg:flex lg:flex-row lg:items-start lg:gap-[12px]"
            >
              <p className="max-w-[360px]">
                I&#39;m Caleb Kalejaiye, with 3+ Years of experience. Started coding in 2021, specializing in web development, blockchain development, LLM, and indie hacking.
              </p>
              <p className="max-w-[319px]">
                Self-taught programmer with proven experience in building live projects and
                Active open-source contributor.
              </p>
            </div>
            <div className="mt-[35px] md:mt-[65px] flex justify-start items-center  gap-[26px] md:gap-[40px]">
              <motion.a
                href="https://www.facebook.com/heyrapto"
                target="_blank"
                rel="noreferrer"
                whileTap={{ scale: 1.1 }}
                whileHover={{ scale: 0.99 }}
                className="h-auto w-auto"
              >
                <FbIcon
                  fill="#FFCC00"
                  className={`w-[30px] h-[30px] rounded-full border-[#FFCC00] border-solid border-[2px] p-0.5  transition-all duration-500 hover:bg-white`}
                />
              </motion.a>
              <motion.a
                href="https://x.com/heyrapto"
                target="_blank"
                rel="noreferrer"
                whileTap={{ scale: 1.1 }}
                whileHover={{ scale: 0.99 }}
                className={`h-auto w-auto`}
              >
                <TwIcon
                  fill={`#FFCC00`}
                  className={`w-[30px] h-[30px] rounded-full border-[#FFCC00] border-solid border-[2px] p-1  transition-all duration-500 hover:bg-white`}
                />
              </motion.a>
              <motion.a
                href="https://www.instagram.com/caleb.kale"
                target="_blank"
                rel="noreferrer"
                whileTap={{ scale: 1.1 }}
                whileHover={{ scale: 0.99 }}
                className={`h-auto w-auto`}
              >
                <IgIcon
                  fill={`#FFCC00`}
                  className={`w-[30px] h-[30px] rounded-full border-[#FFCC00] border-solid border-[2px] p-0.5  transition-all duration-500 hover:bg-white`}
                />
              </motion.a>
              <motion.a
                href="https://ng.linkedin.com/in/caleb"
                target="_blank"
                rel="noreferrer"
                whileTap={{ scale: 1.1 }}
                whileHover={{ scale: 0.99 }}
                className={`h-auto w-auto`}
              >
                <InIcon
                  fill={`#FFCC00`}
                  className={`w-[30px] h-[30px] rounded-full border-[#FFCC00] border-solid border-[2px] p-0.5  transition-all duration-700 hover:bg-white`}
                />
              </motion.a>
            </div>
          </div>
          <div className="mt-[2.5rem]">
            <div className="relative flex flex-col justify-center w-max">
              <div className={`w-full`}>
                <img
                  src="/images/rapto_avatar.jpg_small"
                  alt="hero image"
                  width={400}
                  height={400}
                  className="absolute w-full h-full bottom-3 right-4 md:bottom-5 md:right-6 lg:bottom-5 lg:right-6"
                  draggable={false}
                />
              </div>
              <motion.div
                className={`shrink-0 w-[300px] h-[300px] lg:min-w-[400px] lg:min-h-[400px] border-[3px] border-[#FFCC00]`}
              ></motion.div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;