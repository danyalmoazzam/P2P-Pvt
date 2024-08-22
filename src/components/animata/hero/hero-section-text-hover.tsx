import React from "react";
import { Map } from "lucide-react";

import { cn } from "@/lib/utils";

interface ItemProps {
  emoji: string;
  position: string;
}

interface HeroCardProps {
  destinations?: ItemProps[];
  treasures?: ItemProps[];
  className?: string;
}

const HeroSectionTextHover: React.FC<HeroCardProps> = ({ className }) => {
  const destinations: ItemProps[] = [
    {
      emoji: "🪂",
      position:
        "-left-20 top-3 group-hover:-rotate-[10deg] group-hover:-translate-y-12 md:-left-28 md:-top-2 sm:-left-24",
    },
    {
      emoji: "🏖️",
      position:
        "-left-[72px] top-0 group-hover:-rotate-[20deg] group-hover:-translate-x-10 md:-left-[135px] md:-top-2 sm:-left-24 ",
    },
    {
      emoji: "🚁",
      position:
        "left-[150px] top-0 group-hover:rotate-[10deg] group-hover:-translate-y-10 md:left-[210px] md:-top-1 sm:left-[180px]",
    },
    {
      emoji: "🏯",
      position:
        "left-[105px] top-0 group-hover:rotate-[20deg] group-hover:translate-x-16 md:left-[190px] md:-top-2 sm:left-[150px]",
    },
  ];

  const treasures: ItemProps[] = [
    {
      emoji: "🦝",
      position:
        "-left-[100px] -top-7 -rotate-[30deg] group-hover:-translate-y-8 md:-left-40 md:-top-16 sm:-left-32",
    },
    {
      emoji: "🍜",
      position:
        "-left-[115px] -top-2 group-hover:-rotate-45 md:-left-44 md:-top-1 sm:-left-36",
    },
    {
      emoji: "🏝️",
      position:
        "left-32 -top-12 rotate-[30deg] md:left-[200px] md:-top-[70px] sm:left-[175px] sm:-top-12",
    },
    {
      emoji: "💎",
      position:
        "left-32 -top-2 group-hover:rotate-[45deg] md:left-[200px] md:-top-1 sm:left-[160px] ",
    },
  ];

  return (
    <div
      className={cn(
        "storybook-fix py-12å relative min-h-[100px] w-full md:min-h-[200px]",
        className
      )}
    >
      <div className="flex flex-col items-center justify-center gap-3">
        <div className="text-normal flex flex-col items-center justify-center p-5 font-bold sm:text-xl md:text-2xl">
          <div className="flex items-center justify-center gap-1">
            <div className="group relative flex items-center">
              <span className="text-7xl sm:text-4xl md:text-5xl lg:text-7xl/none tracking-tight font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-blue-700 to-blue-900 group-hover:text-sky-400">
                P2P Clouds
              </span>
              <div className="duration-400 absolute inset-0 cursor-pointer opacity-0 transition-opacity group-hover:opacity-100">
                {destinations.map((dest, index) => (
                  <span
                    key={index}
                    className={cn(
                      "pointer-events-none absolute transform text-lg transition-transform duration-500 group-hover:scale-110 sm:text-2xl md:text-4xl",
                      dest.position
                    )}
                  >
                    {dest.emoji}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSectionTextHover;
