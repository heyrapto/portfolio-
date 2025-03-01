import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const Services = () => {
    const [visibleStates, setVisibleStates] = useState(Array(6).fill(false)); // Track visibility of each service
    const refs = useRef<(HTMLDivElement | null)[]>([]); // Refs for each service block
    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1.05 
        }
    };

    useEffect(() => {
        const observers = refs.current.map((ref, index) => {
            const observer = new IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting) {
                        setVisibleStates(prev => {
                            const newState = [...prev];
                            newState[index] = true; // Mark block as visible
                            return newState;
                        });
                        observer.disconnect(); // Stop observing once visible
                    }
                },
                { threshold: 0.1 } // Trigger when 10% of block is in view
            );

            if (ref) observer.observe(ref); // Observe the ref if available
            return observer;
        });

        return () => {
            observers.forEach(observer => observer.disconnect()); // Clean up on unmount
        };
    }, []);

    return (
      <section>
        <div className="flex justify-center py-24">
          <div className="my_fixed_width">
            <h2 className="text-2xl font-bold">
              Services i Offer
              <span className="inline-block animate-bounce">🔥</span>
            </h2>
            <p className="text-sm text-[#808e91] my-3">
              These are some of the services I offer as a software
              developer.
            </p>
            <div className="grid place-items-center my-5 gap-6 sm:grid-cols-2 md:grid-cols-3 sm:gap-8">
              {[
                {
                  title: "WEB DEVELOPMENT",
                  description:
                    "I design and build beautiful websites with React, NextJS, TailwindCSS, Typescript, and JavaScript. I also develop backend API's with Node/ExpressJS.",
                  className: "block_left",
                },
                {
                  title: "BLOCKCHAIN",
                  description:
                    "I write Smart Contracts that matches the needs of many web3 companies.",
                  className: "block_left",
                },
                {
                  title: "VERSION CONTROL",
                  description:
                    "Using version control systems like Git/GitHub to collaborate with other developers and manage code changes effectively.",
                  className: "block_right",
                },
                {
                  title: "CONTINUOUS LEARNING",
                  description:
                    "Staying updated with the latest frontend technologies, trends, and best practices to deliver modern and innovative solutions.",
                  className: "block_left",
                },
                {
                  title: "RESPONSIVE DESIGN",
                  description:
                    "Building websites and applications that work seamlessly on various devices and screen sizes, from desktop to smartphones.",
                  className: "block_right",
                },
                {
                  title: "API INTEGRATIONS",
                  description:
                    "Integrating backend services and APIs to the frontend securely to fetch and display data in real time.",
                  className: "block_left",
                },
                {
                  title: "Cross-Browser Compatability",
                  description:
                    "Building Websites that works on every type of browser Safari, Chrome, Firefox, Brave etc.",
                  className: "block_right",
                },
                {
                  title: "Version Control & Collaboration",
                  description:
                    "I worked with tools like Git and Github for version control and ease of collaborating on projects.",
                  className: "block_left",
                },
              ].map((service, index) => (
                <motion.div
                  key={index}
                  ref={(el) => {
                    refs.current[index] = el;
                  }} 
                  className={`w-full h-[240px] flex items-center justify-center relative overflow-hidden px-7 font-clash bg-[#0a1c20] ${service.className}`}
                  variants={itemVariants}
                  initial="hidden"
                  animate={visibleStates[index] ? "visible" : "hidden"}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.2,
                    type: "spring",
                    stiffness: 300,
                  }} 
                >
                  <div>
                    <h3 className="text-white text-xl mb-4 tracking-wide">
                      {service.title}
                    </h3>
                    <p className="text-[#FFFFFF99] text-sm leading-relaxed">{service.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
};

export default Services;