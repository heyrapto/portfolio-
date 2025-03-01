import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Layout, Server, GitBranch, Cpu, Lightbulb, MessageSquare, LineChart, ChevronRight } from "lucide-react";

// Define types for skills and categories
interface Skill {
  name: string;
  level: number;
  color: string;
}

interface SkillCategory {
  icon: React.ReactNode;
  skills: Skill[];
}

type CategoryKey = "all" | "Frontend" | "Backend" | "Blockchain" | "Tools" | "Soft Skills" | "Other";

// Define skills data with proper types
const skillsData: Record<Exclude<CategoryKey, "all">, SkillCategory> = {
  Frontend: {
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
    ],
  },
  Backend: {
    icon: <Server className="w-5 h-5" />,
    skills: [
      { name: "NodeJS", level: 82, color: "#339933" },
      { name: "ExpressJS", level: 78, color: "#000000" },
      { name: "RESTful APIs", level: 85, color: "#FF9900" },
      { name: "Authentication", level: 80, color: "#7046C3" },
    ],
  },
  Blockchain: {
    icon: <Cpu className="w-5 h-5" />,
    skills: [
      { name: "Solidity", level: 75, color: "#363636" },
      { name: "Web3.js", level: 70, color: "#F16822" },
      { name: "Smart Contracts", level: 65, color: "#5A67D8" },
    ],
  },
  Tools: {
    icon: <GitBranch className="w-5 h-5" />,
    skills: [
      { name: "Git/Github", level: 88, color: "#F05032" },
      { name: "VS Code", level: 90, color: "#007ACC" },
      { name: "NPM", level: 85, color: "#CB3837" },
      { name: "Webpack", level: 65, color: "#8DD6F9" },
    ],
  },
  "Soft Skills": {
    icon: <MessageSquare className="w-5 h-5" />,
    skills: [
      { name: "Communication", level: 95, color: "#38B2AC" },
      { name: "Teamwork", level: 90, color: "#4C51BF" },
      { name: "Problem Solving", level: 88, color: "#ED8936" },
      { name: "Time Management", level: 85, color: "#9F7AEA" },
    ],
  },
  Other: {
    icon: <Lightbulb className="w-5 h-5" />,
    skills: [
      { name: "SEO", level: 78, color: "#48BB78" },
      { name: "UI/UX Design", level: 75, color: "#F56565" },
      { name: "Agile/Scrum", level: 80, color: "#667EEA" },
      { name: "Performance Optimization", level: 82, color: "#F6AD55" },
    ],
  },
};

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState<CategoryKey>("all");
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  // Get all skills across categories
  const getAllSkills = (): Skill[] => {
    const allSkills: Skill[] = [];
    Object.values(skillsData).forEach((category: SkillCategory) => {
      category.skills.forEach((skill: Skill) => {
        allSkills.push(skill);
      });
    });
    return allSkills;
  };

  // Filter skills based on active category
  const getDisplayedSkills = (): Skill[] => {
    if (activeCategory === "all") {
      return getAllSkills();
    }
    return skillsData[activeCategory as Exclude<CategoryKey, "all">].skills;
  };

  // Animation variants for Framer Motion
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.4,
      },
    },
  };

  // Categories for filter buttons
  const categories: { id: CategoryKey; name: string; icon: React.ReactNode }[] = [
    { id: "all", name: "All Skills", icon: <LineChart className="w-4 h-4" /> },
    ...Object.entries(skillsData).map(([key, value]) => ({
      id: key as Exclude<CategoryKey, "all">,
      name: key,
      icon: value.icon,
    })),
  ];

  // Get vibrant yellow color values for the theme
  const yellowPrimary = "#FFDD00";
  const yellowSecondary = "#FFC700";
  const yellowTertiary = "#FFB100";
  const yellowGlow = "rgba(255, 221, 0, 0.15)";

  return (
    <section className="py-20 bg-[#0a0a0a] relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20 pointer-events-none">
        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-b from-yellow-400 to-transparent rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2 opacity-10"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-t from-yellow-500 to-transparent rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2 opacity-10"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <div className="inline-block mb-4">
            <div className="relative inline-flex items-center justify-center">
              <span className="absolute inset-0 rounded-full bg-gradient-to-r from-yellow-300 to-yellow-500 opacity-20 blur-lg"></span>
              <span className="relative bg-[#0a0a0a] border border-yellow-500/30 text-yellow-400 px-4 py-1 rounded-full text-sm font-medium">Technical Arsenal</span>
            </div>
          </div>
          <h2 className="text-4xl font-bold font-clash mb-3 text-white">
            Skills & Expertise
          </h2>
          <p className="text-gray-400 font-rubik max-w-2xl mx-auto">
            A comprehensive overview of my technical proficiency and professional capabilities
          </p>
        </motion.div>

        {/* Categories Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-12"
        >
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`group relative flex items-center px-5 py-2.5 rounded-lg text-sm font-medium transition-all duration-300 overflow-hidden ${
                  activeCategory === category.id
                    ? "text-black"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                {/* Background & Hover Effects */}
                <span className={`absolute inset-0 ${
                  activeCategory === category.id 
                    ? "bg-gradient-to-r from-yellow-400 to-yellow-500" 
                    : "bg-[#111111] border border-gray-800 group-hover:border-gray-700"
                } rounded-lg transition-all duration-300`}></span>
                
                {/* Content */}
                <span className="relative flex items-center gap-2">
                  <span className={`${activeCategory === category.id ? "text-black" : ""}`}>
                    {category.icon}
                  </span>
                  {category.name}
                  {activeCategory === category.id && 
                    <ChevronRight className="w-4 h-4 ml-1" />
                  }
                </span>
              </button>
            ))}
          </div>
        </motion.div>

        {/* Main Skills Display */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          key={activeCategory}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {getDisplayedSkills().map((skill, index) => (
            <motion.div
              key={`${skill.name}-${index}`}
              variants={itemVariants}
              className="group"
              onMouseEnter={() => setHoveredSkill(skill.name)}
              onMouseLeave={() => setHoveredSkill(null)}
            >
              <div className="relative p-6 rounded-lg h-full transition-all duration-300 bg-gradient-to-b from-[#111111] to-[#0d0d0d] border border-gray-800 overflow-hidden group-hover:border-yellow-500/50">
                {/* Background glow effect */}
                <div className={`absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-5 transition-opacity duration-500 ${
                  hoveredSkill === skill.name ? "from-yellow-300 to-yellow-600" : "from-gray-700 to-gray-900"
                }`}></div>
                
                {/* Skill bar background decoration */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gray-800/50"></div>
                
                {/* Animated progress bar */}
                <motion.div 
                  className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600"
                  initial={{ width: 0 }}
                  animate={{ width: `${skill.level}%` }}
                  transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                />
                
                {/* Content */}
                <div className="relative z-10">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-xl font-clash font-semibold text-white group-hover:text-yellow-400 transition-colors">{skill.name}</h3>
                    <div className="relative w-12 h-12 flex items-center justify-center">
                      <div className="absolute inset-0 rounded-full bg-gray-800 group-hover:bg-yellow-500/10 transition-colors"></div>
                      <span className="text-lg font-bold text-yellow-400">{skill.level}%</span>
                    </div>
                  </div>
                  
                  <div className="w-full bg-gray-800/50 rounded-full h-1.5 mb-6 overflow-hidden">
                    <motion.div 
                      className="h-full rounded-full bg-gradient-to-r from-yellow-400 to-yellow-600"
                      style={{ width: `${skill.level}%` }}
                      initial={{ width: 0, opacity: 0.5 }}
                      animate={{ 
                        width: `${skill.level}%`, 
                        opacity: hoveredSkill === skill.name ? 1 : 0.7 
                      }}
                      transition={{ duration: 0.8, ease: "easeOut" }}
                    />
                  </div>
                  
                  <div className="flex gap-2">
                    {Array.from({ length: 5 }).map((_, i) => {
                      const isFilled = (i + 1) * 20 <= skill.level;
                      const isPartiallyFilled = !isFilled && skill.level > i * 20;
                      const fillPercentage = isPartiallyFilled ? (skill.level - (i * 20)) / 20 * 100 : 0;
                      
                      return (
                        <div key={i} className="flex-1 h-1 rounded-full overflow-hidden bg-gray-800/70">
                          {isFilled && (
                            <div className="h-full w-full bg-yellow-500/70"></div>
                          )}
                          {isPartiallyFilled && (
                            <div className="h-full bg-yellow-500/70" style={{ width: `${fillPercentage}%` }}></div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Skills Experience Circle */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.7 }}
          className="mt-20 relative"
        >
          <div className="text-center mb-10">
            <h3 className="text-2xl font-bold font-clash mb-3 text-white inline-flex items-center">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-yellow-500">Knowledge Universe</span>
            </h3>
            <p className="text-gray-400 text-sm max-w-lg mx-auto">
              Explore my technical skills in an interactive visualization
            </p>
          </div>
          
          <div className="h-80 relative">
            <SkillOrbit skills={getAllSkills()} />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

interface SkillOrbitProps {
  skills: Skill[];
}

const SkillOrbit: React.FC<SkillOrbitProps> = ({ skills }) => {
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [autoRotate, setAutoRotate] = useState(true);
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  useEffect(() => {
    if (!autoRotate) return;
    
    const interval = setInterval(() => {
      setRotation(prev => ({
        x: (prev.x + 0.1) % 360,
        y: (prev.y + 0.2) % 360
      }));
    }, 30);
    
    return () => clearInterval(interval);
  }, [autoRotate]);

  const handleMouseEnter = () => setAutoRotate(false);
  const handleMouseLeave = () => setAutoRotate(true);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (autoRotate) return;
    
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    
    setRotation({
      x: (y / rect.height) * 30,
      y: -(x / rect.width) * 30
    });
  };

  // Shuffle and limit skills to prevent overcrowding
  const displaySkills = skills.slice(0, 24);

  return (
    <div 
      className="w-full h-full flex items-center justify-center overflow-hidden cursor-move"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
    >
      <div 
        className="relative w-64 h-64 transform-gpu"
        style={{
          transformStyle: "preserve-3d",
          transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
          transition: autoRotate ? "none" : "transform 0.1s ease-out"
        }}
      >
        {/* Central yellow core */}
        <div
          className="absolute left-1/2 top-1/2 w-16 h-16 rounded-full bg-gradient-to-br from-yellow-300 to-yellow-600 transform -translate-x-1/2 -translate-y-1/2"
          style={{
            boxShadow: "0 0 30px rgba(255, 221, 0, 0.5)",
            opacity: 0.8
          }}
        ></div>
        
        {/* Orbital rings */}
        <div 
          className="absolute left-1/2 top-1/2 w-full h-full rounded-full border border-yellow-500/20 transform -translate-x-1/2 -translate-y-1/2"
          style={{ transformStyle: "preserve-3d", transform: "rotateX(80deg)" }}
        ></div>
        <div 
          className="absolute left-1/2 top-1/2 w-full h-full rounded-full border border-yellow-500/10 transform -translate-x-1/2 -translate-y-1/2"
          style={{ transformStyle: "preserve-3d", transform: "rotateX(50deg)" }}
        ></div>
        
        {/* Skills */}
        {displaySkills.map((skill, i) => {
          const isHovered = hoveredSkill === skill.name;
          // Distribute skills in 3D space using spherical coordinates
          const phi = Math.acos(-1 + (2 * i) / displaySkills.length);
          const theta = Math.sqrt(displaySkills.length * Math.PI) * phi;
          
          // Calculate position based on spherical coordinates
          const radius = 140; // Distance from center
          const x = radius * Math.cos(theta) * Math.sin(phi);
          const y = radius * Math.sin(theta) * Math.sin(phi);
          const z = radius * Math.cos(phi);
          
          // Calculate size and opacity based on z position (depth)
          const zScale = (z + radius) / (radius * 2); // Normalize to 0-1
          const opacity = Math.max(0.2, Math.min(1, (z + radius) / (radius * 2)));
          const scale = 0.8 + zScale * 0.8; // Scale between 0.8 and 1.6
          
          return (
            <motion.div
              key={`orbit-${skill.name}-${i}`}
              className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap"
              style={{
                transformStyle: "preserve-3d",
                transform: `translateX(${x}px) translateY(${y}px) translateZ(${z}px) scale(${scale})`,
                backgroundColor: isHovered ? `${skill.color}33` : `${skill.color}22`,
                borderLeft: `2px solid ${skill.color}`,
                color: isHovered ? skill.color : '#fff',
                boxShadow: isHovered ? `0 0 8px ${skill.color}66` : 'none',
                opacity,
                zIndex: z > 0 ? 1 : 0
              }}
              animate={{
                backgroundColor: isHovered ? `${skill.color}33` : `${skill.color}11`,
                color: isHovered ? skill.color : '#fff',
                boxShadow: isHovered ? `0 0 12px ${skill.color}66` : 'none',
              }}
              onMouseEnter={() => setHoveredSkill(skill.name)}
              onMouseLeave={() => setHoveredSkill(null)}
              whileHover={{ scale: scale * 1.2 }}
            >
              {skill.name}
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;