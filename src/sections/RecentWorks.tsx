import { Arrow } from "./svgs.tsx";
import { motion } from "framer-motion";
import { projects } from "../constants/constants.ts";

const RecentWorks = () => {
  return (
    <section className="relative pt-24 px-4 md:px-8 lg:px-16 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#130b1c] to-transparent opacity-40" />

      <div className="max-w-7xl mx-auto relative">
        <div
          className="text-left mb-5"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 tracking-tight">
            Projects
            <span className="inline-block ml-4 transform hover:scale-110 transition-transform">🚀</span>
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-yellow-500 to-amber-500 mb-6" />
          <p className="text-sm md:text-[20px] text-[#808e91]">
            Some of the latest projects I have worked on
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative bg-[#1a1a10]/80 backdrop-blur-lg rounded-lg overflow-hidden border border-[#ffffff10]"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/10 to-amber-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative p-8 flex flex-col h-full">
                <h3 className="text-white text-2xl font-bold mb-3">
                  {project.name}
                </h3>

                <p className="text-yellow-400 text-sm font-medium mb-4">
                  {project.lang}
                </p>

                <p className="text-[#FFFFFF99] text-sm flex-grow">{project.desc}</p>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 inline-flex items-center group/link"
                >
                  <motion.div
                    whileHover={{ x: 5 }}
                    className="flex items-center space-x-3 text-white hover:text-yellow-300 transition-colors"
                  >
                    <span className="text-sm font-medium">View Project</span>
                    <Arrow className="w-4 h-4 transform group-hover/link:translate-x-1 transition-transform" />
                  </motion.div>
                </a>

                <div className="h-[2px] w-full bg-gradient-to-r from-yellow-500/50 to-amber-500/50 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 absolute bottom-0 left-0" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecentWorks;