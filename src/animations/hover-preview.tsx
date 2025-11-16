import { motion } from "framer-motion";

const HoverPreview = ({ image, isHovered }: { image?: string; isHovered: boolean }) => {
  if (!image) return null;

  return (
    <motion.img
      src={image}
      initial={{ opacity: 0, width: 0 }}
      animate={{
        opacity: isHovered ? 1 : 0,
        width: isHovered ? 350 : 0,
      }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      className="
        absolute
        right-[-120px] md:right-[-40px]
        top-1/1
        -translate-y-1/2
        rounded-lg
        shadow-xl
        pointer-events-none
        z-99999
      "
    />
  );
};

export default HoverPreview;