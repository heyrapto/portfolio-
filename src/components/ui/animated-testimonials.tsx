import { motion } from "framer-motion";
import { useState, useEffect } from "react";

type Testimonial = {
  quote: string;
  name: string;
  designation: string;
  src: string;
};

export const AnimatedTestimonials = ({
  testimonials,
  autoplay = false,
}: {
  testimonials: Testimonial[];
  autoplay?: boolean;
}) => {
  const [active, setActive] = useState(0);

  const handleNext = () => {
    setActive((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    if (autoplay) {
      const interval = setInterval(handleNext, 5000);
      return () => clearInterval(interval);
    }
  }, [autoplay]);

  if (!testimonials[active]) {
    return null; // or render a fallback UI
  }

  return (
    <div className="relative">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2, ease: "easeInOut" }}
      >
        <h3 className="text-2xl font-bold dark:text-white text-black">
          {testimonials[active].name}
        </h3>
        <p className="text-sm text-gray-500 dark:text-neutral-500">
          {testimonials[active].designation}
        </p>
        <motion.p className="text-lg text-gray-500 mt-8 dark:text-neutral-300">
          {testimonials[active].quote.split(" ").map((word, index) => (
            <motion.span
              key={index}
              initial={{
                filter: "blur(10px)",
                opacity: 0,
                y: 5,
              }}
              animate={{
                filter: "blur(0px)",
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.2,
                delay: index * 0.05,
              }}
            >
              {word}{" "}
            </motion.span>
          ))}
        </motion.p>
      </motion.div>
      <div className="absolute top-1/2 transform -translate-y-1/2 left-0">
        <button onClick={handlePrev} className="p-2 bg-gray-700 rounded-full">
          Prev
        </button>
      </div>
      <div className="absolute top-1/2 transform -translate-y-1/2 right-0">
        <button onClick={handleNext} className="p-2 bg-gray-700 rounded-full">
          Next
        </button>
      </div>
    </div>
  );
};