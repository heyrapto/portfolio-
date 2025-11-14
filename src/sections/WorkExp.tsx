import Resume from "./Resume.tsx";
import { motion } from "framer-motion";

const WorkExp = () => {
  const expData = [
    {
      company: "Active Freelancer",
      expTitle: "Fullstack && Blockchain Developer",
      period: "Jan 2023 - Present",
      location: "Remote",
      descriptions: [
        "Contributed to the development of a decentralized platform for secure and efficient payment solutions.",
        "Collaborated with cross-functional teams to develop front-end solutions for seamless transactions.",
        "Streamlined UI for secure and efficient payment platforms, improving conversion rates by 15%."
      ],
      technologies: ["React", "TypeScript", "Tailwind CSS", "Solidity", "Web3.js", "Next.js", "Node.js", "Express.js", "MongoDB", "PostgreSQL", "Prisma", "CI/CD"]
    },
    {
      company: "Qruzpay",
      expTitle: "Frontend Developer",
      period: "Jan 2023 - Present",
      location: "Remote",
      descriptions: [
        "Redesigned user interfaces to enhance payment experiences for over 10,000 users.",
        "Collaborated with cross-functional teams to develop front-end solutions for seamless transactions.",
        "Streamlined UI for secure and efficient payment platforms, improving conversion rates by 15%."
      ],
      technologies: ["React", "TypeScript", "Tailwind CSS"]
    },
    {
      company: "Chimly",
      expTitle: "Fullstack Developer",
      period: "Jan 2025 - Present",
      location: "Canada",
      descriptions: [
        "Developed full-stack solutions with modern JavaScript frameworks for enterprise clients.",
        "Designed and implemented RESTful APIs to support front-end applications.",
        "Optimized database queries and front-end performance, reducing load times by 40%."
      ],
      technologies: ["Node.js", "React", "MongoDB"]
    },
    {
      company: "Techies Colab and Upskill (TCU)",
      expTitle: "Frontend Developer Intern",
      period: "Jan 2024 - September 2024",
      location: "Remote",
      descriptions: [
        "Crafted modern designs to improve platform usability for university websites.",
        "Developed responsive front-end features to enhance student and faculty user experience.",
        "Optimized responsive layouts for better accessibility across desktop and mobile devices."
      ],
      technologies: ["JavaScript", "React", "API"]
    },
    {
      company: "Afrovivo",
      expTitle: "Frontend Developer",
      period: "Jun 2024 - August 2024",
      location: "Remote",
      descriptions: [
        "Built engaging interfaces for cultural content platform reaching 5,000+ monthly users.",
        "Developed a demo waitlist with user authentication and email integration.",
        "Collaborated with design team to implement intuitive user experience patterns."
      ],
      technologies: ["React", "Firebase", "Styled Components"]
    },
    {
      company: "Educhain",
      expTitle: "Blockchain and Frontend Developer",
      period: "Jan 2024 - Present",
      location: "Remote",
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
    <section className="py-24 w-full">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 w-full">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <h2 className="text-3xl font-bold mb-2">Professional Experience</h2>
          <div className="h-1 w-24 bg-gradient-to-r from-yellow-500 to-amber-500 my-6" />
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
                <h3 className="text-xl font-medium">{job.expTitle}</h3>
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
          className="mt-16 flex justify-center"
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