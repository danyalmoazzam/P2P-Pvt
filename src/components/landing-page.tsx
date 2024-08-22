"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { HeroHighlight, Highlight } from "@/components/ui/hero-highlight";
import GetStartedButton from "./animata/button/get-started-button";
import Image from "next/image";
import BlurryBlob from "./animata/background/blurry-blob";
import TextBorderAnimation from "./animata/text/text-border-animation";
import AnimatedBorderTrail from "./animata/container/animated-border-trail";
import { Cover } from "./ui/cover";
import { FeaturesSectionDemo } from "./FeatureSection";
import WobbleCardDemo from "./WobbleCards";
import Footer from "./Footer";

import { FadeUpStagger } from "./core/default/fadeup";
import Testimonials from "./Testimonials";
import RevealImageList from "./animata/list/reveal-image";
import { HeroHighlightDemo } from "./ui/Highlight";
import StatusButton from "./animata/button/status-button";
import { MovB } from "./ui/moving-border";

export default function Hero() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link className="flex items-center justify-center" href="/">
          <Image
            className="mt-8"
            width={65}
            height={65}
            alt="p2p-logo"
            src="https://669019a824005d1e41dfcccb--deft-youtiao-93eb07.netlify.app/assets/Logo-DsDxTyTB.png"
          />
        </Link>
        <nav className="ml-auto z-10 text-md font-normal mt-6 flex gap-4 sm:gap-6">
          <Link
            className="hover:underline hover:text-sky-800 underline-offset-4"
            href="#"
          >
            Services
          </Link>
          <Link
            className="hover:underline hover:text-sky-800 underline-offset-4"
            href="#"
          >
            Work
          </Link>
          <Link
            className="hover:underline hover:text-sky-800 underline-offset-4"
            href="#"
          >
            About
          </Link>
          <Link
            className="hover:underline hover:text-sky-800 underline-offset-4"
            href="#"
          >
            Contact
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <BlurryBlob
          className="rounded-xl opacity-30"
          firstBlobColor="bg-sky-400"
          secondBlobColor="bg-gray-400"
        />
        <section className="w-full py-14 md:py-24 lg:-mt-6 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center lg:space-y-4 space-y-6 text-center">
              <div className="lg:space-y-2 space-y-4 mb-4 relative">
                <Image
                  className="hidden lg:block absolute lg:opacity-70 lg:top-0 lg:left-50 -rotate-6 lg:mt-[12.5rem] lg:ml-[46.5rem] "
                  src="/arrow.svg"
                  width={65}
                  height={65}
                  alt="arrow"
                />
                <FadeUpStagger />

                <TextBorderAnimation
                  text="Enable Brand Revolution"
                  className="text-4xl hidden lg:block lg:w-full lg:text-transparent lg:left-[1px] lg:z-20 lg:text-center lg:top-[80px] lg:absolute sm:text-4xl md:text-5xl lg:text-7xl/none tracking-tight font-extrabold"
                />

                <div className="mx-auto max-w-[700px] text-gray-500 md:text-xl my-14 dark:text-gray-400">
                  Experience the Future of Business management with{" "}
                  <span>
                    <Cover className="font-black ">P2P Clouds</Cover>
                  </span>
                  Collaboration, Innovative and Revolutionizing Product
                  solutions for a seamless Digital Journey and Solutions.
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
            </div>
          </div>
        </section>
        <section className="w-full px-4 py-9 md:py-24 lg:py-32 bg-blue-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <div>
              <h1 className="text-center mt-2 text-5xl sm:text-4xl md:text-5xl lg:text-7xl/none antialiased bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-blue-700 to-blue-900  mb-8 font-black ">
                P2P Services
              </h1>
            </div>
            <FeaturesSectionDemo />
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <h1 className="text-center text-6xl mt-2 sm:text-4xl md:text-5xl lg:text-7xl/none antialiased bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-blue-700 to-blue-900 mb-12 font-black ">
            P2P Story
          </h1>
          <div className="container px-4 md:px-6">
            <WobbleCardDemo />
          </div>
        </section>
        <div className="relative">
          <hr className="h-[2px]  my-8 w-[90%] left-[1rem] absolute lg:left-[3.8rem] bg-blue-300 border-0 dark:bg-blue-700"></hr>
          <div className="w-full py-12 md:py-24 lg:py-32 dark:bg-gray-800">
            <h1 className="text-center mt-2 text-5xl sm:text-4xl md:text-5xl lg:text-7xl/none antialiased bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-blue-700 to-blue-900  mb-8 font-black ">
              P2P Works
            </h1>
            <RevealImageList />
          </div>
        </div>
        <hr className="h-px my-8 top-[105rem] w-[90%] absolute left-[3.8rem] bg-blue-300 border-0 dark:bg-blue-700"></hr>
        <section className="py-9 md:py-[4rem] lg:py-[4rem] bg-blue-100">
          <Testimonials />
        </section>
        <section className="w-full py-12 md:py-24 lg:py-24">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-4xl mb-3 font-black tracking-tighte sm:text-5xl">
                  Ready to Connect with Us?
                </h2>
                <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Join thousands of satisfied customers and take your business
                  to the next level.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-6">
                <form className="flex space-x-2">
                  <Input
                    className="max-w-lg flex-1 placeholder:text-gray-400 placeholder:font-medium"
                    placeholder="Enter your email"
                    type="email"
                    required
                  />
                  <StatusButton />
                </form>
                <p className="text-xs leading-5 -mb-16 text-gray-500 dark:text-gray-400">
                  By subscribing, you agree to our Terms of Service and Privacy
                  Policy.
                  <br />
                  P2P Clouds Pvt.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <div className="pb-3 bg-blue-100">
        <Footer />
      </div>
    </div>
  );
}

function BarChartIcon(props: { className?: string }) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="12" y1="20" x2="12" y2="10" />
      <line x1="18" y1="20" x2="18" y2="4" />
      <line x1="6" y1="20" x2="6" y2="16" />
    </svg>
  );
}

function LockIcon(props: { className?: string }) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
  );
}

function MountainIcon(props: { className?: string }) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  );
}

function RefreshCwIcon(props: { className?: string }) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 2v6h6" />
      <path d="M21 12A9 9 0 0 0 6 5.3L3 8" />
      <path d="M21 22v-6h-6" />
      <path d="M3 12a9 9 0 0 0 15 6.7l3-2.7" />
    </svg>
  );
}
