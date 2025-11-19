import { motion } from "framer-motion";

const skills = [
  "Javascript",
  "Typescript",
  "Dart",
  "Solidity",
  "React.js",
  "Next.js",
  "Node.js",
  "Express.js",
  "TailwindCSS",
  "React Router Framework",
  "GSAP/Framer Motion",
  "Git"
];

const Skills = () => {

  return (
    <section className="overflow-hidden md:pt-44 pt-24 px-4 md:px-8 lg:px-16 w-full">
      <div className="flex flex-col gap-[60px] lg:flex-row lg:gap-[36px] lg:justify-start max-w-7xl mx-auto">
        {/* Skills */}
        <div className="flex flex-col w-full">
          <div>
            <h2 className="flex items-center font-clashBold text-white font-semibold leading-[24.6px] text-2xl md:text-3xl lg:leading-[49.2px]">
              Skills <small className="animate-bounce">👨‍💻</small>
            </h2>
            <div className="h-1 w-12 bg-gradient-to-r from-yellow-500 to-amber-500 mb-6 mt-3" />
            <p className="font-medium font-clash text-[18px] md:text-[20px] text-[#808e91] leading-[22.5px] lg:leading-[30px] lg:tracking-wide">
              I've honed these skills through diverse projects and experiences.
            </p>
          </div>
          <div className="mt-[31px] grid grid-cols-2 gap-x-3 gap-y-[18.67px] md:grid-cols-2 md:gap-x-3 lg:mt-[36px] lg:gap-[20px] w-full">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 0.96 }}
                initial={{ opacity: 0, x: index % 2 === 0 ? -150 : 150 }}
                transition={{ duration: 0.6 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                className={`${index % 2 === 0 ? 'bg-gradient-to-r' : 'bg-gradient-to-l'} max-w-full lg:max-w-full to-[#FFD700] from-[#FFA500] ${index % 2 === 0 ? 'pr-0.5 pt-0.5' : 'pb-0.5 pl-0.5'}`}
              >
                <div className={`bg-[#332200] px-[20px] py-[23px] h-[80px] lg:h-[100px] lg:max-w-full lg:w-full lg:px-[32px] lg:py-[35px] overflow-hidden `}>
                  <p className="text-white font-medium font-clash lg:text-[20px] lg:leading-[30.75px]">
                    {skill}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;