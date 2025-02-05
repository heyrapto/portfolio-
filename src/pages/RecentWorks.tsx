import { motion } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";
import { Afrovivo, Baba, Bannerly, Ecoride, MockTrade, MultiTrading, Nike, Portscan, Rewrap, Stacist, VirtualAR } from "../assets";

const RecentWorks = () => {
  const tagsWrapperStyle = "my-[1rem] flex flex-wrap gap-y-3 w-full";
  const tagStyle =
    "py-1 p-2 bg-[#ECFDF5] text-[#064E3B] text-[0.7rem] font-bold overflow-nextline mx-1 rounded-full cursor-pointer";

  const projects = [
    
    {
      title: "Afrovivo Waitlist",
      description:
        "I built a Waitlist for a ghanian-based company.",
      tags: ["ReactJS", "JavaScript", "TailwindCSS"],
      previewLink: "https://afrovivo-waitlist-coral.vercel.app/",
      githubLink: "https://github.com/heycalebszn/afrovivo-waitlist",
      image: Afrovivo,
    },
    {
      title: "Electric Keke",
      description:
        "I contributed to build an Electric Keke booking website.",
      tags: ["ReactJS", , "TailwindCSS", "Axios", "Map API", "API integration"],
      previewLink: "https://electric-keke-frontend.vercel.app/",
      githubLink: "https://github.com/heycalebszn/Kobodrop",
      image: Ecoride,
    },
    {
      title: "PortScan",
      description:
        "I built wrote a multi signature wallet contract.",
      tags: ["React", "Typescript", "NodeJS", "Express", "Gemini API", "Playwright"],
      previewLink: "https://port-scan-ten.vercel.app/",
      githubLink: "https://github.com/heycalebszn/PortScan",
      image: Portscan,
    
    },
    {
      title: "MockTrade",
      description:
        "I built a website to practice trading with mock funds.",
      tags: ["NextJS", "Typescript", "CoinGecko API", "Clerk Auth"],
      previewLink: "https://mock-trading.vercel.app/",
      githubLink: "https://github.com/heycalebszn/mock_trading",
      image: MockTrade,
    
    },
    {
      title: "Stacist",
      description:
        "I built a sleek ui landing page.",
      tags: ["React", "Typescript", "TailwindCSS", "Figma"],
      previewLink: "https://mock-trading.vercel.app/",
      githubLink: "https://github.com/heycalebszn/mock_trading",
      image: Stacist,
    
    },
    {
      title: "Rewrap",
      description:
        "I built an NPM package to simplify the installation of Vite + TailwindCSS",
      tags: ["NodeJS", "Chalk", "Execa", "Prompts"],
      previewLink: "https://www.npmjs.com/package/rewrap-vitejs-tailwind",
      githubLink: "https://github.com/heycalebszn/Rewrap-",
      image: Rewrap,
    
    },
    {
      title: "Bannerly",
      description:
        "I built a software that generates Fully customizable Social Banners for Freelancers.",
      tags: ["ReactJs", "JavaScript", "TailwindCSS", "Cloudinary", "API"],
      previewLink: "https://bannerly.vercel.app",
      githubLink: "https://github.com/heycaleszn/bannerly",
      image: Bannerly,
    },
    {
      title: "Baba AI",
      description:
        "I contributed in building Baba AI for my first ever Hackathon Win, this is a pidgin chat ai software .",
      tags: ["ReactJs", "API", "NodeJS", "Express", "TailwindCSS", "MongoDB"],
      previewLink: "https://baba-frontend-react-06ac.onrender.com/",
      githubLink: "https://github.com/code-clan-g3/baba-frontend-react",
      image:  Baba,
    },
    {
      title: "Multi Signature Wallet",
      description:
        "I built wrote a multi signature wallet contract.",
      tags: ["Solidity", "Typescript", "Remix", "EVM"],
      previewLink: "https://github.com/heycalebszn/Multi-Signature-Wallet",
      githubLink: "https://github.com/heycalebszn/Multi-Signature-Wallet",
      image: MultiTrading,
    
    },
    
    {
      title: "Nike",
      description:
        "I built a Nike Clone with a more modern feel.",
      tags: ["ReactJS", "JavaScript", "TailwindCSS", "Map"],
      previewLink: "https://szn-nikelanding.netlify.app",
      githubLink: "https://github.com/Techies-Collab-and-Upskill-Live-Project/Electric-keke-frontend-",
      image: Nike,
    },
    {
      title: "Virtual AR",
      description:
        "I built an online video-based modern landing page.",
      tags: ["ReactJS", "JavaScript", "TailwindCSS"],
      previewLink: "https://virtualar.netlify.app",
      githubLink: "https://github.com/heycalebszn/virtual",
      image: VirtualAR,
    },
  ];

  return (
    <section className="py-20 flex justify-center">
      <div className="my_fixed_width">
      <h2 className="text-2xl font-bold font-clash">
              Some of my Works
              <span className="inline-block animate-bounce">💼</span>
            </h2>
            <p className="text-sm text-[#808e91] font-rubik my-3">
              Here are some of the recent projects that I have worked on.
            </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#0a1c20] rounded-2xl p-6 backdrop-blur-sm justify-between flex flex-col"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-[150px] rounded-lg mb-4"
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
                  className="text-emerald-400 hover:text-emerald-300 transition-colors hover:scale-110 flex items-center gap-1 transition-ease-in-out duration:300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="text-emerald-400 hover:text-emerald-300 transition-colors">
                    Preview
                  </span>{" "}
                  <ArrowUpRight className="w-[20px]" />
                </a>
                <a
                  href={project.githubLink}
                  className="text-gray-400 hover:text-gray-300 transition-colors hover:scale-110 transition-ease-in-out duration:300" 
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
