import TextBorderAnimation from "@/components/animata/text/text-border-animation";
import { Cover } from "@/components/ui/cover";
import { MovB } from "@/components/ui/moving-border";
import { motion } from "framer-motion";
import Image from "next/image";

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
        className="text-9xl text-center lg:mb-1 mb-4 sm:text-4xl md:text-5xl lg:text-7xl/none tracking-tighter font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-blue-700 to-blue-900"
        variants={FADE_UP_ANIMATION_VARIANTS}
      >
        P2P Clouds
      </motion.h1>
      <motion.h1 variants={FADE_UP_ANIMATION_VARIANTS}>
        <TextBorderAnimation
          text="Enable Brand Revolution"
          className="text-4xl hidden lg:block lg:w-full  underline underline-offset-[13px] decoration-blue-500/20  lg:text-center  sm:text-4xl md:text-5xl lg:text-7xl/none tracking-tight font-extrabold"
        />
      </motion.h1>

      <motion.div
        className="flex flex-col items-center mt-2   lg:space-y-4 space-y-6 text-center"
        variants={FADE_UP_ANIMATION_VARIANTS}
      >
        <div className="lg:space-y-2 space-y-4 mb-4 relative">
          <Image
            className="hidden lg:block absolute lg:opacity-70 lg:top-0 lg:left-50 -rotate-[7deg] lg:mt-[1.8rem] lg:ml-[42.8rem] "
            src="/arrow.svg"
            width={65}
            height={65}
            alt="arrow"
          />

          <div className="mx-auto max-w-[700px] text-gray-500 md:text-xl my-14 dark:text-gray-400">
            Experience the Future of Business management with{" "}
            <span>
              <Cover className="font-black ">P2P Clouds</Cover>
            </span>
            Collaboration, Innovative and Revolutionizing Product solutions for
            a seamless Digital Journey and Solutions.
          </div>
        </div>
        <div className="space-x-4">
          <MovB
            borderRadius="2rem"
            className="bg-white font-bold transition-all duration-300 hover:bg-blue-700 hover:text-gray-100 font-md dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800"
          >
            Get Started
          </MovB>
        </div>
      </motion.div>
    </motion.div>
  );
}
