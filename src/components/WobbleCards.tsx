"use client";
import Image from "next/image";
import React from "react";
import { WobbleCard } from "@/components/ui/wobble-card";

export default function WobbleCardDemo() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full">
      <WobbleCard
        containerClassName="col-span-1 lg:col-span-2 h-full bg-blue-600 min-h-[500px] lg:min-h-[300px]"
        className=""
      >
        <div className="max-w-xs">
          <h2 className="lg:text-left text-center text-balance md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            We Follow Best Practices
          </h2>
          <div className="mt-4 lg:text-left text-center text-base/6 text-neutral-200">
            P2P stands out for its unmatchable and quality practices.
            <br />
            <ul className="list-disc mt-2 ml-4 text-left text-base/6 text-neutral-200">
              <li>Project On Time</li>
              <li>Modern Technology</li>
              <li>Latest Designs</li>
              <li>Code Maintainability</li>
              <li>Bug Fixing</li>
            </ul>
          </div>
        </div>
        <Image
          src="/p2p.jpg"
          width={400}
          height={400}
          alt="linear demo image"
          className="absolute w-44 h-44 lg:h-64 lg:w-64 right-[25%] lg:right-[5%] bottom-5 lg:bottom-16 object-contain rounded-2xl"
        />
      </WobbleCard>
      <WobbleCard containerClassName="col-span-1 min-h-[300px]">
        <h2 className="max-w-80 text-center lg:text-left text-balance text-3xl md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
          Build Your Dream
        </h2>
        <p className="mt-4 max-w-[26rem] lg:text-left text-center  text-neutral-200">
          5 Years Of Undefeated Success.With a rich legacy spanning 5 years, P2P
          Clouds has been at the forefront of driving industry innovation.Our
          seasoned expertise is grounded in half a decade of shaping businesses
          through cutting-edge solutions.
        </p>
      </WobbleCard>
      <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-blue-800 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
        <div className="max-w-sm">
          <h2 className="max-w-sm md:max-w-lg lg:text-left text-balance text-2xl -mt-7 lg:mt-7 text-center md:text-xl font-black lg:text-6xl tracking-[-0.015em] text-white">
            Our Journey, Our Story
          </h2>
          <p className="mt-4 max-w-[26rem] text-center lg:text-left text-neutral-200 lg:text-xl text-sm ">
            With a robust 5-year track record, P2P Clouds stands as a beacon of
            sustainability in the tech industry. Our journey is defined by a
            steadfast commitment to eco-conscious practices, ensuring that every
            solution we provide aligns with a greener tomorrow. Join us on the
            path to sustainable success, where innovation and environmental
            responsibility go hand in hand, shaping a future that’s both
            cutting-edge and conscientious.
          </p>
        </div>
        <Image
          src="/mab.jpg"
          width={400}
          height={400}
          alt="linear demo image"
          className="absolute w-44 h-44 lg:h-[80vh] lg:w-[80vh] right-[95px] md:-right-[40%] lg:right-[4%] bottom-5 lg:bottom-[5rem] object-contain lg:rounded-2xl"
        />
      </WobbleCard>
    </div>
  );
}
