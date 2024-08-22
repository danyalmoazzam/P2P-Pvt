"use client";

import Image from "next/image";
import Spotlight, {
  SpotlightCard,
} from "@/components/core/default/spotlight-card";

export default function SpotlightPage() {
  return (
    <>
      <main className="relative h-[550px] flex flex-col justify-center bg-blue-100 overflow-hidden">
        <div className="w-full max-w-6xl mx-auto px-4 md:px-6 py-24">
          <Spotlight className="max-w-sm mx-auto grid gap-6 lg:grid-cols-3 items-start lg:max-w-none group">
            {/* Card #1 */}
            <SpotlightCard>
              <div className="relative h-full bg-slate-900 p-6 pb-8 rounded-[inherit] z-20 overflow-hidden">
                {/* Radial gradient */}
                <div
                  className="absolute bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2 pointer-events-none -z-10 w-1/2 aspect-square"
                  aria-hidden="true"
                >
                  <div className="absolute inset-0 translate-z-0 bg-slate-800 rounded-full blur-[80px]"></div>
                </div>
                <div className="flex flex-col h-full items-center text-center">
                  {/* Image */}
                  <div className="relative inline-flex">
                    <div
                      className="w-[40%] h-[40%] absolute inset-0 m-auto -translate-y-[10%] blur-3xl -z-10 rounded-full bg-indigo-600"
                      aria-hidden="true"
                    ></div>
                    <Image
                      className="inline-flex"
                      src="https://p2pclouds.org/wp-content/uploads/2024/04/nexskill-100x100.png"
                      width={200}
                      height={200}
                      alt="Card 01"
                    />
                  </div>
                  {/* Text */}
                  <div className="grow mb-5">
                    <h2 className="text-xl text-slate-200 font-bold mb-1">
                      LMS Application
                    </h2>
                    <p className="text-sm text-slate-500">
                      P2P Clouds making product, like NexSkill LMS. It is a
                      perfect for businesses because it makes learning super
                      simple.
                    </p>
                  </div>
                  <a
                    className="inline-flex justify-center items-center whitespace-nowrap rounded-lg bg-slate-800 hover:bg-slate-900 border border-slate-700 px-3 py-1.5 text-sm font-medium text-slate-300 focus-visible:outline-none focus-visible:ring focus-visible:ring-blue-300 dark:focus-visible:ring-slate-600 transition-colors duration-150"
                    href="#0"
                  >
                    <svg
                      className="fill-slate-500 mr-2"
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="14"
                    >
                      <path d="M12.82 8.116A.5.5 0 0 0 12 8.5V10h-.185a3 3 0 0 1-2.258-1.025l-.4-.457-1.328 1.519.223.255A5 5 0 0 0 11.815 12H12v1.5a.5.5 0 0 0 .82.384l3-2.5a.5.5 0 0 0 0-.768l-3-2.5ZM12.82.116A.5.5 0 0 0 12 .5V2h-.185a5 5 0 0 0-3.763 1.708L3.443 8.975A3 3 0 0 1 1.185 10H1a1 1 0 1 0 0 2h.185a5 5 0 0 0 3.763-1.708l4.609-5.267A3 3 0 0 1 11.815 4H12v1.5a.5.5 0 0 0 .82.384l3-2.5a.5.5 0 0 0 0-.768l-3-2.5ZM1 4h.185a3 3 0 0 1 2.258 1.025l.4.457 1.328-1.52-.223-.254A5 5 0 0 0 1.185 2H1a1 1 0 0 0 0 2Z" />
                    </svg>
                    <span>Learn More!</span>
                  </a>
                </div>
              </div>
            </SpotlightCard>
            {/* Card #2 */}
            <SpotlightCard>
              <div className="relative h-full bg-slate-900 p-6 pb-8 rounded-[inherit] z-20 overflow-hidden">
                {/* Radial gradient */}
                <div
                  className="absolute bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2 pointer-events-none -z-10 w-1/2 aspect-square"
                  aria-hidden="true"
                >
                  <div className="absolute inset-0 translate-z-0 bg-slate-800 rounded-full blur-[80px]"></div>
                </div>
                <div className="flex flex-col h-full items-center text-center">
                  {/* Image */}
                  <div className="relative inline-flex">
                    <div
                      className="w-[40%] h-[40%] absolute inset-0 m-auto -translate-y-[10%] blur-3xl -z-10 rounded-full bg-blue-600"
                      aria-hidden="true"
                    ></div>
                    <Image
                      className="inline-flex rounded-full mb-1"
                      src="https://p2pclouds.org/wp-content/uploads/2024/04/Navy-blue-Crm-100x100.png.webp"
                      width={200}
                      height={200}
                      alt="Card 02"
                    />
                  </div>
                  {/* Text */}
                  <div className="grow mb-5">
                    <h2 className="text-xl text-slate-200 font-bold mb-1">
                      CRM
                    </h2>
                    <p className="text-sm text-slate-500">
                      CRM simplifies customer management for you. Easily
                      organize client data and stay Learn More!ed with
                      hassle-free communication tools.
                    </p>
                  </div>
                  <a
                    className="inline-flex justify-center items-center whitespace-nowrap rounded-lg bg-slate-800 hover:bg-slate-900 border border-slate-700 px-3 py-1.5 text-sm font-medium text-slate-300 focus-visible:outline-none focus-visible:ring focus-visible:ring-blue-300 dark:focus-visible:ring-slate-600 transition-colors duration-150"
                    href="#0"
                  >
                    <svg
                      className="fill-slate-500 mr-2"
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="14"
                    >
                      <path d="M12.82 8.116A.5.5 0 0 0 12 8.5V10h-.185a3 3 0 0 1-2.258-1.025l-.4-.457-1.328 1.519.223.255A5 5 0 0 0 11.815 12H12v1.5a.5.5 0 0 0 .82.384l3-2.5a.5.5 0 0 0 0-.768l-3-2.5ZM12.82.116A.5.5 0 0 0 12 .5V2h-.185a5 5 0 0 0-3.763 1.708L3.443 8.975A3 3 0 0 1 1.185 10H1a1 1 0 1 0 0 2h.185a5 5 0 0 0 3.763-1.708l4.609-5.267A3 3 0 0 1 11.815 4H12v1.5a.5.5 0 0 0 .82.384l3-2.5a.5.5 0 0 0 0-.768l-3-2.5ZM1 4h.185a3 3 0 0 1 2.258 1.025l.4.457 1.328-1.52-.223-.254A5 5 0 0 0 1.185 2H1a1 1 0 0 0 0 2Z" />
                    </svg>
                    <span>Learn More!</span>
                  </a>
                </div>
              </div>
            </SpotlightCard>
            {/* Card #3 */}
            <SpotlightCard>
              <div className="relative h-full bg-slate-900 p-6 pb-8 rounded-[inherit] z-20 overflow-hidden">
                {/* Radial gradient */}
                <div
                  className="absolute bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2 pointer-events-none -z-10 w-1/2 aspect-square"
                  aria-hidden="true"
                >
                  <div className="absolute inset-0 translate-z-0 bg-slate-800 rounded-full blur-[80px]"></div>
                </div>
                <div className="flex flex-col h-full items-center text-center">
                  {/* Image */}
                  <div className="relative inline-flex">
                    <div
                      className="w-[40%] h-[40%] absolute inset-0 m-auto -translate-y-[10%] blur-3xl -z-10 rounded-full bg-blue-600"
                      aria-hidden="true"
                    ></div>
                    <Image
                      className="inline-flexrounded-full"
                      src="https://p2pclouds.org/wp-content/uploads/2024/04/ms_1-removebg-preview.png.webp"
                      width={150}
                      height={150}
                      alt="Card 03"
                    />
                  </div>
                  {/* Text */}
                  <div className="grow mb-5">
                    <h2 className="text-xl text-slate-200 font-bold mb-1">
                      MS Future
                    </h2>
                    <p className="text-sm text-slate-500">
                      MS Future, the newest offering from P2P Clouds. This
                      innovative app allows users to invest in listed flats and
                      receive profitable returns.
                    </p>
                  </div>
                  <a
                    className="inline-flex justify-center items-center whitespace-nowrap rounded-lg bg-slate-800 hover:bg-slate-900 border border-slate-700 px-3 py-1.5 text-sm font-medium text-slate-300 focus-visible:outline-none focus-visible:ring focus-visible:ring-blue-300 dark:focus-visible:ring-slate-600 transition-colors duration-150"
                    href="#0"
                  >
                    <svg
                      className="fill-slate-500 mr-2"
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="14"
                    >
                      <path d="M12.82 8.116A.5.5 0 0 0 12 8.5V10h-.185a3 3 0 0 1-2.258-1.025l-.4-.457-1.328 1.519.223.255A5 5 0 0 0 11.815 12H12v1.5a.5.5 0 0 0 .82.384l3-2.5a.5.5 0 0 0 0-.768l-3-2.5ZM12.82.116A.5.5 0 0 0 12 .5V2h-.185a5 5 0 0 0-3.763 1.708L3.443 8.975A3 3 0 0 1 1.185 10H1a1 1 0 1 0 0 2h.185a5 5 0 0 0 3.763-1.708l4.609-5.267A3 3 0 0 1 11.815 4H12v1.5a.5.5 0 0 0 .82.384l3-2.5a.5.5 0 0 0 0-.768l-3-2.5ZM1 4h.185a3 3 0 0 1 2.258 1.025l.4.457 1.328-1.52-.223-.254A5 5 0 0 0 1.185 2H1a1 1 0 0 0 0 2Z" />
                    </svg>
                    <span>Learn More!</span>
                  </a>
                </div>
              </div>
            </SpotlightCard>
          </Spotlight>
        </div>
      </main>
    </>
  );
}
