import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Code, Database, Smartphone, Cloud } from "lucide-react";

const Services = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [visibleStates, setVisibleStates] = useState(Array(4).fill(false));
  const refs = useRef<(HTMLDivElement | null)[]>([]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  useEffect(() => {
    const observers = refs.current.map((ref, index) => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleStates((prev) => {
              const newState = [...prev];
              newState[index] = true;
              return newState;
            });
            observer.disconnect();
          }
        },
        { threshold: 0.1 }
      );

      if (ref) observer.observe(ref);
      return observer;
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  const services = [
    {
      title: "FRONTEND DEVELOPMENT",
      description:
        "Crafting responsive and interactive web applications using React, Next.js, and TypeScript. Focusing on modern UI/UX practices and optimal performance.",
      icon: Code,
    },
    {
      title: "BACKEND DEVELOPMENT",
      description:
        "Building robust server-side applications and APIs using Node.js, Python, and database technologies. Ensuring scalability and security.",
      icon: Database,
    },
    {
      title: "MOBILE DEVELOPMENT",
      description:
        "Creating native and cross-platform mobile applications with React Native and Flutter that deliver exceptional user experiences.",
      icon: Smartphone,
    },
    {
      title: "DEVOPS & CLOUD",
      description:
        "Implementing CI/CD pipelines, container orchestration, and cloud infrastructure to enable efficient deployment and scaling.",
      icon: Cloud,
    },
  ];

  return (
    <section className="relative bg-black py-16 overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-5xl font-bold text-white">
              Services <span className="text-3xl">🔥</span>
            </h2>
            
            {/* Purple gradient line */}
            <div className="w-60 h-1 bg-gradient-to-r from-purple-500 to-blue-500 my-10"></div>
            
            <p className="text-gray-400 text-2xl font-light max-w-2xl">
              Specialized in multiple domains of software and hardware engineering
            </p>
          </motion.div>
        </div>

        {/* Services Cards */}
        <motion.div
          className="space-y-10"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              ref={(el) => {
                refs.current[index] = el;
              }}
              variants={itemVariants}
              animate={visibleStates[index] ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <div className="rounded-lg p-10 bg-[#0E0E1A] border border-gray-800">
                <div className="mb-8">
                  <span className="text-purple-500">
                    {React.createElement(service.icon, { size: 36, strokeWidth: 1.5 })}
                  </span>
                  
                  {/* Purple line for current service */}
                  <div className="absolute right-10 top-10 w-40 h-1 bg-purple-500"></div>
                </div>
                
                <h3 className="text-white text-4xl font-bold mb-6">{service.title}</h3>
                
                <p className="text-gray-400 text-xl leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;