import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Code, Layout, Server, Database, GitBranch, Cpu, Lightbulb, LineChart, MessageSquare } from "lucide-react";

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const skillsData = {
    "Frontend": {
      icon: <Layout className="w-5 h-5" />,
      skills: [
        { name: "HTML", level: 90, color: "#E34F26" },
        { name: "CSS", level: 85, color: "#1572B6" },
        { name: "JavaScript", level: 88, color: "#F7DF1E" },
        { name: "TypeScript", level: 80, color: "#3178C6" },
        { name: "React", level: 85, color: "#61DAFB" },
        { name: "TailwindCSS", level: 92, color: "#06B6D4" },
        { name: "Animations", level: 75, color: "#FF4D4D" },
        { name: "React Native", level: 70, color: "#61DAFB" },
      ]
    },
    "Backend": {
      icon: <Server className="w-5 h-5" />,
      skills: [
        { name: "NodeJS", level: 82, color: "#339933" },
        { name: "ExpressJS", level: 78, color: "#000000" },
        { name: "RESTful APIs", level: 85, color: "#FF9900" },
        { name: "Authentication", level: 80, color: "#7046C3" },
      ]
    },
    "Blockchain": {
      icon: <Cpu className="w-5 h-5" />,
      skills: [
        { name: "Solidity", level: 75, color: "#363636" },
        { name: "Web3.js", level: 70, color: "#F16822" },
        { name: "Smart Contracts", level: 65, color: "#5A67D8" },
      ]
    },
    "Tools": {
      icon: <GitBranch className="w-5 h-5" />,
      skills: [
        { name: "Git/Github", level: 88, color: "#F05032" },
        { name: "VS Code", level: 90, color: "#007ACC" },
        { name: "NPM", level: 85, color: "#CB3837" },
        { name: "Webpack", level: 65, color: "#8DD6F9" },
      ]
    },
    "Soft Skills": {
      icon: <MessageSquare className="w-5 h-5" />,
      skills: [
        { name: "Communication", level: 95, color: "#38B2AC" },
        { name: "Teamwork", level: 90, color: "#4C51BF" },
        { name: "Problem Solving", level: 88, color: "#ED8936" },
        { name: "Time Management", level: 85, color: "#9F7AEA" },
      ]
    },
    "Other": {
      icon: <Lightbulb className="w-5 h-5" />,
      skills: [
        { name: "SEO", level: 78, color: "#48BB78" },
        { name: "UI/UX Design", level: 75, color: "#F56565" },
        { name: "Agile/Scrum", level: 80, color: "#667EEA" },
        { name: "Performance Optimization", level: 82, color: "#F6AD55" },
      ]
    }
  };

  // Get all skills across categories
  const getAllSkills = () => {
    const allSkills = [];
    Object.values(skillsData).forEach(category => {
      category.skills.forEach(skill => {
        allSkills.push(skill);
      });
    });
    return allSkills;
  };

  const getDisplayedSkills = () => {
    if (activeCategory === "all") {
      return getAllSkills();
    }
    return skillsData[activeCategory]?.skills || [];
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.4
      }
    }
  };

  const categories = [
    { id: "all", name: "All Skills", icon: <LineChart className="w-4 h-4" /> },
    ...Object.entries(skillsData).map(([key, value]) => ({
      id: key,
      name: key,
      icon: value.icon
    }))
  ];

  return (
    <section className="py-16 bg-[#060f12]">
      <div className="max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <h2 className="text-3xl font-bold font-clash flex items-center">
            Technical Proficiency
            <span className="inline-block ml-2 animate-bounce">🤹</span>
          </h2>
          <p className="text-sm text-[#808e91] font-rubik mt-2 mb-8">
            A comprehensive overview of my technical skills and expertise.
          </p>
        </motion.div>

        {/* Category Filter */}
        <div className="mb-10 overflow-x-auto">
          <motion.div 
            className="flex space-x-2 min-w-max pb-2"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === category.id
                    ? "bg-[#1a2e33] text-white shadow-lg"
                    : "bg-[#0a1c20] text-[#a4b5ba] hover:bg-[#162429]"
                }`}
              >
                <span className="mr-2">{category.icon}</span>
                {category.name}
              </button>
            ))}
          </motion.div>
        </div>

        {/* Skills Grid */}
        <motion.div
          className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          key={activeCategory} // Re-run animation when category changes
        >
          {getDisplayedSkills().map((skill, index) => (
            <motion.div
              key={`${skill.name}-${index}`}
              variants={itemVariants}
              whileHover={{ 
                y: -5, 
                transition: { duration: 0.2 } 
              }}
              className="bg-[#0a1c20] rounded-lg p-5 border border-[#1a2e33] shadow-md hover:shadow-lg transition-all duration-300"
            >
              <p className="text-lg font-medium mb-3 font-clash">{skill.name}</p>
              
              <div className="w-full bg-[#162429] rounded-full h-2.5 mb-3">
                <motion.div 
                  className="h-2.5 rounded-full"
                  style={{ backgroundColor: skill.color }}
                  initial={{ width: 0 }}
                  animate={{ width: `${skill.level}%` }}
                  transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                />
              </div>
              
              <div className="flex justify-between text-xs text-[#808e91]">
                <span>Proficiency</span>
                <span>{skill.level}%</span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Skill Cloud - 3D Tags */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="mt-16 relative"
        >
          <h3 className="text-xl font-bold font-clash mb-6 text-center">Skills Cloud</h3>
          <SkillCloud skills={getAllSkills()} />
        </motion.div>
      </div>
    </section>
  );
};

// 3D Skills Cloud Component
const SkillCloud = ({ skills }) => {
  const [rotationX, setRotationX] = useState(0);
  const [rotationY, setRotationY] = useState(0);
  const [isAnimating, setIsAnimating] = useState(true);

  useEffect(() => {
    if (!isAnimating) return;
    
    const interval = setInterval(() => {
      setRotationX(prev => (prev + 0.3) % 360);
      setRotationY(prev => (prev + 0.5) % 360);
    }, 50);
    
    return () => clearInterval(interval);
  }, [isAnimating]);

  const handleMouseEnter = () => {
    setIsAnimating(false);
  };

  const handleMouseLeave = () => {
    setIsAnimating(true);
  };

  const handleMouseMove = (e) => {
    if (isAnimating) return;
    
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    // Calculate rotation based on mouse position relative to center
    const angleX = ((e.clientY - centerY) / (rect.height / 2)) * 15;
    const angleY = ((e.clientX - centerX) / (rect.width / 2)) * 15;
    
    setRotationX(angleX);
    setRotationY(angleY);
  };

  return (
    <div 
      className="h-64 relative perspective-skill-cloud"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
    >
      <div 
        className="w-full h-full relative transform-skill-cloud"
        style={{
          transform: `rotateX(${rotationX}deg) rotateY(${rotationY}deg)`,
          transformStyle: 'preserve-3d',
          transition: isAnimating ? 'none' : 'transform 0.1s ease-out'
        }}
      >
        {skills.map((skill, index) => {
          // Position tags in a spherical arrangement
          const phi = Math.acos(-1 + (2 * index) / skills.length);
          const theta = Math.sqrt(skills.length * Math.PI) * phi;
          
          const x = 100 * Math.cos(theta) * Math.sin(phi);
          const y = 100 * Math.sin(theta) * Math.sin(phi);
          const z = 100 * Math.cos(phi);
          
          // Scale opacity based on z position (items in front are more visible)
          const opacity = (z + 100) / 200;
          const scale = (z + 120) / 220; // Items in front are slightly larger
          
          return (
            <div
              key={`${skill.name}-${index}-cloud`}
              className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 px-3 py-1 rounded-full text-xs whitespace-nowrap"
              style={{
                transform: `translateX(${x}px) translateY(${y}px) translateZ(${z}px) scale(${scale})`,
                backgroundColor: `${skill.color}22`, // Semi-transparent background
                color: skill.color,
                border: `1px solid ${skill.color}`,
                opacity,
                textShadow: '0px 0px 3px rgba(0,0,0,0.5)',
                boxShadow: `0 0 8px ${skill.color}44`
              }}
            >
              {skill.name}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;