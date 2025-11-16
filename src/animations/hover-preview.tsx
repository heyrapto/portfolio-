import { motion } from "framer-motion";

const HoverPreview = ({ image, isHovered }: { image?: string; isHovered: boolean }) => {
  return (
    <motion.div
      initial={{ opacity: 0, width: 0 }}
      animate={{
        opacity: isHovered ? 1 : 0,
        width: isHovered ? 350 : 0,
      }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      className="
        absolute
        right-[-120px] md:right-[-40px]
        top-1/2
        -translate-y-1/2
        rounded-lg
        shadow-xl
        pointer-events-none
        z-[99999]
        overflow-hidden
      "
    >
      {image ? (
        <img 
          src={image} 
          alt="Project preview"
          className="w-full h-full object-cover rounded-lg"
        />
      ) : (
        <div className="
          w-full h-[200px]
          bg-gradient-to-br from-[#1a1a10] to-[#2a2a20]
          border border-yellow-500/30
          flex flex-col items-center justify-center
          gap-2
          rounded-lg
        ">
          <svg 
            className="w-12 h-12 text-yellow-500/50" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={1.5} 
              d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" 
            />
          </svg>
          <span className="text-yellow-500/70 text-xs font-medium">
            No Preview Available
          </span>
        </div>
      )}
    </motion.div>
  );
};

export default HoverPreview;