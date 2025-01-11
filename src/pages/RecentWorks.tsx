import { motion } from "framer-motion";
import SvgIcons from "./icons/SvgIcons";

const RecentWorks = () => {
  const tagsWrapperStyle = "my-[1rem] flex flex-wrap gap-y-3 w-full";
  const tagStyle =
    "py-1 px-2 rounded-lg bg-[#061417] text-white text-[0.65rem] font-bold overflow-nextline";

  const projects = [
    {
      title: "Bannerly",
      description:
        "I built a software that generates Fully customizable Social Banners for Freelancers.",
      tags: ["ReactJs", "JavaScript", "TailwindCSS", "Cloudinary", "API"],
      previewLink: "https://bannerly.vercel.app",
      githubLink: "https://github.com/heycaleszn/bannerly",
    },
    {
      title: "Baba AI",
      description:
        "I contributed in building Baba AI for my first ever Hackathon Win, this is a pidgin chat ai software .",
      tags: ["ReactJs", "API", "NodeJS", "Express", "TailwindCSS", "MongoDB"],
      previewLink: "https://baba-frontend-react-06ac.onrender.com/",
      githubLink: "https://github.com/code-clan-g3/baba-frontend-react",
    },
    {
      title: "Afrovivo Waitlist",
      description:
        "I built a Waitlist for a ghanian-based company.",
      tags: ["ReactJS", "JavaScript", "TailwindCSS"],
      previewLink: "https://afrovivo-waitlist-coral.vercel.app/",
      githubLink: "https://github.com/heycalebszn/afrovivo-waitlist",
    },
    {
      title: "Electric Keke",
      description:
        "I contributed to build an Electric Keke booking website.",
      tags: ["ReactJS", , "TailwindCSS", "Axios", "Map API", "API integration"],
      previewLink: "https://electric-keke-frontend.vercel.app/",
      githubLink: "https://github.com/heycalebszn/Kobodrop",
    },
    {
      title: "Rewrap",
      description:
        "I built an NPM package to simplify the installation of Vite + TailwindCSS",
      tags: ["NodeJS", "Chalk", "Execa", "Prompts"],
      previewLink: "https://www.npmjs.com/package/rewrap-vitejs-tailwind",
      githubLink: "https://github.com/heycalebszn/Rewrap-",
    
    }
    {
      title: "Nike",
      description:
        "I built a Nike Clone with a more modern feel.",
      tags: ["ReactJS", "JavaScript", "TailwindCSS", "Map"],
      previewLink: "https://szn-nikelanding.netlify.app",
      githubLink: "https://github.com/Techies-Collab-and-Upskill-Live-Project/Electric-keke-frontend-",
    },
    {
      title: "Virtual AR",
      description:
        "I built an online video-based modern landing page.",
      tags: ["ReactJS", "JavaScript", "TailwindCSS"],
      previewLink: "https://virtualar.netlify.app",
      githubLink: "https://github.com/heycalebszn/virtual",
    },
  ];

  return (
    <section>
      <div className="flex justify-center py-5">
        <div className="my_fixed_width">
          <h2 className="text-2xl font-bold font-clash">
            Some of my Works
            <span className="inline-block animate-bounce">👨‍🍳</span>
          </h2>
          <p className="text-sm text-[#808e91] font-rubik my-3">
            Here are some of the fun and recent projects I’ve worked on
          </p>
          <div className="grid place-items-center my-5 gap-6 sm:grid-cols-2 md:grid-cols-3 sm:gap-8 justify-between">
            {projects.map((project, index) => (
              <motion.div
                key={`project-${index}`}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.3)",
                  transition: { duration: 0.3 },
                }}
                whileTap={{
                  scale: 1.05,
                  boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.3)",
                  transition: { duration: 0.3 },
                }}
                className="min-h-[300px] my-2 flex items-center justify-center overflow-hidden px-7 bg-[#0a1c20] w-full md:px-8"
              >
                <div className="w-full">
                  <p className="text-xl text-white font-clash">
                    {project.title}
                  </p>
                  <p className="text-sm font-rubik text-[#808e91] leading-[1.4rem] mt-2">
                    {project.description}
                  </p>
                  <div className={tagsWrapperStyle}>
                    {project.tags
                      .map((tag, tagIndex) => (
                        <span
                          key={`tag-${index}-${tagIndex}`}
                          className={tagStyle}
                        >
                          {tag}
                        </span>
                      ))
                      .reduce((prev, curr) => (
                        <>
                          {prev}
                          <span key={`dot-${index}`} className="text-sm px-[0.7rem]">
                            •
                          </span>
                          {curr}
                        </>
                      ))}
                  </div>

                  <div className="flex justify-center items-center gap-3">
                    <a
                      href={project.previewLink}
                      className="bg-white rounded-md w-full mt-5 py-2 text-sm text-black space-x-3 justify-center text-center font-bold flex items-center hover:bg-gray-400"
                      rel="nofollow"
                      target="_blank"
                    >
                      <span>Preview</span>
                      <SvgIcons type="visibility" width="15" height="15" className="inline-block" />
                    </a>
                    {project.githubLink && (
                      <a
                        href={project.githubLink}
                        className="bg-white rounded-md w-[30%] mt-5 py-[0.59rem] text-sm text-black space-x-3 justify-center text-center font-bold flex items-center hover:bg-gray-400"
                        target="_blank"
                      >
                        <i className="!text-[1rem] fa-brands fa-github"></i>
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecentWorks;
