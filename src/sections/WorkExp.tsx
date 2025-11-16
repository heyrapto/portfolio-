import Resume from "./Resume.tsx";
import { motion } from "framer-motion";

const WorkExp = () => {
  const expData = [
    {
      company: "Buildorz",
      expTitle: "Frontend Engineer",
      period: "June 2025 - Present",
      location: "India - Remote",
      descriptions: [
        "Crafted clean, efficient and high-performance websites",
        "Utilized GSAP & Framer motion to make cool scroll based animations"
      ],
      technologies: ["React", "TypeScript", "Tailwind CSS", "Next.js", "React Router Framework", "Zustand", "React Query", "GSAP", "Framer Motion", "API Integrations"]
    },
    // {
    //   company: "Qruzpay",
    //   expTitle: "Frontend Developer",
    //   period: "Jan 2023 - Present",
    //   location: "Remote",
    //   descriptions: [
    //     "Redesigned user interfaces to enhance payment experiences for over 10,000 users.",
    //     "Collaborated with cross-functional teams to develop front-end solutions for seamless transactions.",
    //     "Streamlined UI for secure and efficient payment platforms, improving conversion rates by 15%."
    //   ],
    //   technologies: ["React", "TypeScript", "Tailwind CSS"]
    // },
    {
      company: "Chimly",
      expTitle: "Fullstack Engineer",
      period: "Jan 2025 - Present",
      location: "Canada - Remote",
      descriptions: [
        "Developed full-stack solutions with modern JavaScript frameworks for enterprise clients.",
        "Designed and implemented RESTful APIs to support front-end applications.",
        "Optimized database queries and front-end performance, reducing load times by 40%."
      ],
      technologies: ["Node.js", "Next.js", "MongoDB"]
    },
    {
      company: "Techies Colab and Upskill (TCU)",
      expTitle: "Frontend Engineer Intern",
      period: "Jan 2023 - September 2024",
      location: "Nigeria - Remote",
      descriptions: [
        "Crafted modern designs to improve platform usability for university websites.",
        "Developed responsive front-end features to enhance student and faculty user experience.",
        "Optimized responsive layouts for better accessibility across desktop and mobile devices."
      ],
      technologies: ["JavaScript", "React", "API"]
    },
    {
      company: "Educhain (Hackathon Group)",
      expTitle: "Blockchain and Frontend Engineer",
      period: "Sept 2023 - Present",
      location: "Nigeria - Remote",
      descriptions: [
        "Developed interfaces for secure blockchain applications in the education sector.",
        "Simplified complex blockchain processes through intuitive design for non-technical users.",
        "Enhanced accessibility of decentralized platforms with modern user interfaces."
      ],
      technologies: ["Solidity", "Web3.js", "React"]
    },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { 
        duration: 0.4,
      }
    }
  };

  return (
    <section className="md:pt-44 pt-24 w-full">
      <div className="max-w-7xl mx-auto px-4 md:px-0 lg:px-0 w-full">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3 tracking-tight">Experience</h2>
          <div className="h-1 w-24 bg-gradient-to-r from-yellow-500 to-amber-500 mb-6 mt-3" />
          <p className="text-sm md:text-[20px] text-[#808e91]">
            A chronological overview of my professional journey
          </p>
        </motion.div>

        <motion.div 
          className="space-y-12 w-full"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {expData.map((job) => (
            <motion.div 
              key={job.company} 
              variants={itemVariants}
              className="border-l-2 border-[#1a2e33] pl-6 relative w-full"
            >
              {/* Timeline dot */}
              <div className="absolute w-4 h-4 bg-[#0a1c20] border-2 border-yellow-400 rounded-full left-[-9px] top-1"></div>
              
              <div className="mb-2 flex flex-col md:flex-row md:items-baseline md:justify-between">
                <h3 className="text-[18px] font-semibold">{job.expTitle}</h3>
                <span className="text-sm text-[#60777c] font-medium">{job.period}</span>
              </div>
              
              <div className="mb-3 flex flex-col md:flex-row md:items-baseline md:justify-between">
                <p className="text-[#a4b5ba] font-medium">{job.company}</p>
                <span className="text-sm text-[#60777c]">{job.location}</span>
              </div>
              
              <ul className="list-disc ml-4 space-y-2 mb-4">
                {job.descriptions.map((desc, i) => (
                  <li key={i} className="text-sm text-[#c0c9cc] pl-1">
                    {desc}
                  </li>
                ))}
              </ul>
              
              <div className="flex flex-wrap gap-2 mt-3">
                {job.technologies.map((tech) => (
                  <span 
                    key={tech} 
                    className="bg-[#0a1c20] text-xs px-2 py-1 rounded-md text-[#9cb0b6] border border-[#1a2e33]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="my-16 flex justify-center"
        >
          <Resume
            pdfUrl="/pdf/CalebKalejaiyeMain.pdf"
            fileName="KalejaiyeCaleb.pdf"
            buttonText="Download Resume"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default WorkExp;