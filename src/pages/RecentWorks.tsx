import { motion } from "framer-motion";
import SvgIcons from "../assets/icons/SvgIcons";
import { ArrowUpRight, Github } from "lucide-react";
import { SS } from "../assets";

const RecentWorks = () => {
  const tagsWrapperStyle = "my-[1rem] flex flex-wrap gap-y-3 w-full";
  const tagStyle =
    "py-1 pr-2 rounded-lg bg-[#061417] text-white text-[0.7rem] font-bold overflow-nextline";

  const projects = [
    {
      title: "Bannerly",
      description:
        "I built a software that generates Fully customizable Social Banners for Freelancers.",
      tags: ["ReactJs", "JavaScript", "TailwindCSS", "Cloudinary", "API"],
      previewLink: "https://bannerly.vercel.app",
      githubLink: "https://github.com/heycaleszn/bannerly",
      image: SS,
    },
    {
      title: "Baba AI",
      description:
        "I contributed in building Baba AI for my first ever Hackathon Win, this is a pidgin chat ai software .",
      tags: ["ReactJs", "API", "NodeJS", "Express", "TailwindCSS", "MongoDB"],
      previewLink: "https://baba-frontend-react-06ac.onrender.com/",
      githubLink: "https://github.com/code-clan-g3/baba-frontend-react",
      image:  SS,
    },
    {
      title: "Afrovivo Waitlist",
      description:
        "I built a Waitlist for a ghanian-based company.",
      tags: ["ReactJS", "JavaScript", "TailwindCSS"],
      previewLink: "https://afrovivo-waitlist-coral.vercel.app/",
      githubLink: "https://github.com/heycalebszn/afrovivo-waitlist",
      image: SS,
    },
    {
      title: "Electric Keke",
      description:
        "I contributed to build an Electric Keke booking website.",
      tags: ["ReactJS", , "TailwindCSS", "Axios", "Map API", "API integration"],
      previewLink: "https://electric-keke-frontend.vercel.app/",
      githubLink: "https://github.com/heycalebszn/Kobodrop",
      image: SS,
    },
    {
      title: "Rewrap",
      description:
        "I built an NPM package to simplify the installation of Vite + TailwindCSS",
      tags: ["NodeJS", "Chalk", "Execa", "Prompts"],
      previewLink: "https://www.npmjs.com/package/rewrap-vitejs-tailwind",
      githubLink: "https://github.com/heycalebszn/Rewrap-",
      image: SS,
    
    },
    {
      title: "Multi Signature Wallet",
      description:
        "I built wrote a multi signature wallet contract.",
      tags: ["Solidity", "Typescript", "Remix", "EVM"],
      previewLink: "https://www.npmjs.com/package/rewrap-vitejs-tailwind",
      githubLink: "https://github.com/heycalebszn/Rewrap-",
      image: SS,
    
    },
    {
      title: "Nike",
      description:
        "I built a Nike Clone with a more modern feel.",
      tags: ["ReactJS", "JavaScript", "TailwindCSS", "Map"],
      previewLink: "https://szn-nikelanding.netlify.app",
      githubLink: "https://github.com/Techies-Collab-and-Upskill-Live-Project/Electric-keke-frontend-",
      image: SS,
    },
    {
      title: "Virtual AR",
      description:
        "I built an online video-based modern landing page.",
      tags: ["ReactJS", "JavaScript", "TailwindCSS"],
      previewLink: "https://virtualar.netlify.app",
      githubLink: "https://github.com/heycalebszn/virtual",
      image: SS,
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-black to-primary-900">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-secondary-400 to-primary-400"
        >
          Recent Works
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-gradient-to-br from-primary-800/30 to-primary-900/30 rounded-2xl p-6 backdrop-blur-sm border border-gray-500 justify-between flex flex-col"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-[20px] font-bold mb-2 text-white">{project.title}</h3>
              <p className="text-gray-400 mb-4 text-[1rem]">{project.description}</p>
              <div className={tagsWrapperStyle}>
                {project.tags.map((tag, tagIndex) => (
                  <span key={tagIndex} className={tagStyle}>
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center mt-4">
                <a
                  href={project.previewLink}
                  className="text-secondary-400 hover:text-secondary-300 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ArrowUpRight />
                </a>
                <a
                  href={project.githubLink}
                  className="text-secondary-400 hover:text-secondary-300 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecentWorks;
