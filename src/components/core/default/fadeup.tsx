import { motion } from "framer-motion";

export function FadeUpStagger() {
  const FADE_UP_ANIMATION_VARIANTS = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0, transition: { type: "spring" } },
  };
  return (
    <motion.div
      initial="hidden"
      animate="show"
      viewport={{ once: true }}
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren: 0.15,
          },
        },
      }}
    >
      <motion.h1
        className="text-8xl lg:mb-1 mb-4 sm:text-4xl md:text-5xl lg:text-7xl/none tracking-tight font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-blue-700 to-blue-900"
        variants={FADE_UP_ANIMATION_VARIANTS}
      >
        P2P Clouds
      </motion.h1>

      <motion.h1
        className="text-5xl text-black/90 sm:text-4xl md:text-5xl lg:text-7xl/none tracking-tight font-extrabold lg:underline lg:decoration-[6px] lg:underline-offset-[20px] decoration-blue-100 decoration-none"
        variants={FADE_UP_ANIMATION_VARIANTS}
      >
        Enable Brand Revolution
      </motion.h1>
    </motion.div>
  );
}
