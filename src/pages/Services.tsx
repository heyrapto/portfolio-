import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const Services = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [visibleStates, setVisibleStates] = useState(Array(7).fill(false));
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
      title: "WEB DEVELOPMENT",
      description:
        "I design and build beautiful websites with React, NextJS, TailwindCSS, Typescript, and JavaScript. I also develop backend API's with Node/ExpressJS.",
      icon: "💻",
    },
    {
      title: "BLOCKCHAIN",
      description:
        "I write Smart Contracts that matches the needs of many web3 companies.",
      icon: "🔗",
    },
    {
      title: "VERSION CONTROL",
      description:
        "Using version control systems like Git/GitHub to collaborate with other developers and manage code changes effectively.",
      icon: "📊",
    },
    {
      title: "CONTINUOUS LEARNING",
      description:
        "Staying updated with the latest frontend technologies, trends, and best practices to deliver modern and innovative solutions.",
      icon: "🧠",
    },
    {
      title: "RESPONSIVE DESIGN",
      description:
        "Building websites and applications that work seamlessly on various devices and screen sizes, from desktop to smartphones.",
      icon: "📱",
    },
    {
      title: "API INTEGRATIONS",
      description:
        "Integrating backend services and APIs to the frontend securely to fetch and display data in real time.",
      icon: "🔄",
    },
    {
      title: "CROSS-BROWSER COMPATIBILITY",
      description:
        "Building Websites that works on every type of browser Safari, Chrome, Firefox, Brave etc.",
      icon: "🌐",
    },
  ];

  return (
    <section className="relative py-24 bg-gradient-to-b from-[#0a1c20] to-[#0f272c] overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-500/0 via-yellow-400 to-yellow-500/0"></div>
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-yellow-500/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-yellow-500/10 rounded-full blur-3xl"></div>

      <div className="flex justify-center">
        <div className="my_fixed_width max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                Services I Offer
                <span className="ml-2 inline-block animate-bounce">🔥</span>
              </h2>
              <div className="w-24 h-1 bg-yellow-400 mx-auto my-4 rounded-full"></div>
              <p className="text-[#a0b0b4] max-w-2xl mx-auto">
                These are some of the services I offer as a software developer,
                crafted with precision and expertise.
              </p>
            </motion.div>
          </div>

          <motion.div
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 sm:gap-8"
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
                className="relative"
                variants={itemVariants}
                animate={
                  visibleStates[index]
                    ? { scale: 1, opacity: 1, y: 0 }
                    : { scale: 0.95, opacity: 0, y: 20 }
                }
                transition={{
                  duration: 0.5,
                  type: "spring",
                  stiffness: 100,
                }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div
                  className={`h-full rounded-lg p-6 bg-gradient-to-br from-[#121f23] to-[#0a1c20] border border-yellow-500/10 shadow-lg relative z-10 overflow-hidden transition-all duration-300 ${
                    hoveredIndex === index ? "shadow-yellow-400/20" : ""
                  }`}
                >
                  {/* Yellow accent corner */}
                  <div className="absolute -top-10 -right-10 w-20 h-20 bg-yellow-400/20 rounded-full blur-xl"></div>
                  <div className="absolute -top-1 -left-1 w-12 h-12 rounded-br-xl bg-yellow-400/10"></div>
                  <div className="flex items-start mb-4">
                    <span className="text-xl p-3 bg-yellow-400/10 rounded-lg mr-4">
                      {service.icon}
                    </span>
                    <h3 className="text-white font-bold text-lg tracking-wide">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-[#FFFFFF99] text-sm leading-relaxed pl-14">
                    {service.description}
                  </p>
                  {/* Bottom accent */}
                  <div
                    className={`h-1 w-16 bg-yellow-400 absolute bottom-0 left-6 rounded-t-lg transition-all duration-500 ${
                      hoveredIndex === index ? "w-32" : ""
                    }`}
                  ></div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;