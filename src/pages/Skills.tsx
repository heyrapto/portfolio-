import { useState, useEffect, useRef } from 'react';

const Skills = () => {
  const skills = [
    "TailwindCSS",
    "JavaScript",
    "Solidity",
    "TypeScript",
    "ReactJS",
    "Next.js",
    "Express.js",
    "Node.js",
    "Git",
    "GitHub"
  ];
  
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const [entry] = entries;
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.disconnect();
      }
    }, {
      threshold: 0.2
    });
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div ref={sectionRef} className="bg-navy-900 py-8 px-4">
      <div className="max-w-3xl">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-white flex items-center">
            Skills<span className="text-2xl ml-2">👨‍💻</span>
          </h2>
          <p className="text-gray-400 mt-2">
            I've honed these skills through diverse projects and experiences.
          </p>
        </div>

        <div className="space-y-4">
          {skills.map((skill, index) => {
            const isEven = index % 2 === 0;
            
            return (
              <div 
                key={index} 
                className={`relative transition-all duration-700 transform ${isVisible ? 'translate-x-0 opacity-100' : (isEven ? '-translate-x-full' : 'translate-x-full') + ' opacity-0'}`}
                style={{ 
                  transitionDelay: `${index * 150}ms`
                }}
              >
                <div className={`bg-navy-800 text-white p-4 rounded-md ${isEven ? 'border-l-4' : 'border-r-4'} border-yellow-500`}>
                  <span className="text-xl">{skill}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

const style = document.createElement('style');
style.textContent = `
  .bg-navy-900 {
    background-color: #0f172a;
  }
  .bg-navy-800 {
    background-color: #1e293b;
  }
`;
document.head.appendChild(style);

export default Skills;