import Image from "next/image";
import React from "react";

const Testimonials = () => {
  return (
    <section className="flex items-center justify-center py-52 bg-blue-100 min-w-screen">
      <div className="max-w-6xl px-16 mx-16 bg-blue-100 md:px-16 xl:px-10">
        <div className="flex flex-col items-center lg:flex-row">
          <div className="flex flex-col items-center justify-center w-full h-full pr-8 mb-10 lg:mb-0 lg:w-1/2">
            <h2 className="text-center mt-2 text-5xl sm:text-4xl md:text-5xl lg:text-7xl/none antialiased bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-blue-700 to-blue-900  mb-8 font-black ">
              P2P Testimonials
            </h2>
          </div>
          <div className="w-full lg:w-1/2 space-y-4">
            {[
              {
                text: "Awesome product! & the customer service is exceptionally well.",
                name: "Ahmad Manzoor",
                title: "CEO PBI",
                imageSrc:
                  "https://p2pclouds.org/wp-content/uploads/2024/05/ahmad-manzoor-removebg-preview.png.webp",
              },
              {
                text: "I can't express enough, how amazing this company services.",
                name: "Zeeshan Ali",
                title: "Software Engineer",
                imageSrc:
                  "https://p2pclouds.org/wp-content/uploads/2024/04/Sir_Zeeshan-removebg-preview-1.png.webp",
              },
              {
                text: "I don't know what to say, as I'm the developer of this product.",
                name: "Danyal Moazzam",
                title: "Software Engineer",
                imageSrc: "/danyalm.png",
              },
            ].map((testimonial, index) => (
              <blockquote
                key={index}
                className="flex items-center px-6 justify-between p-6 bg-white rounded-lg shadow"
              >
                <div className="flex items-center space-x-4">
                  <svg
                    className="w-10 h-10 text-blue-500 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 100 125"
                  >
                    <path d="M30.7 42c0 6.1 12.6 7 12.6 22 0 11-7.9 19.2-18.9 19.2C12.7 83.1 5 72.6 5 61.5c0-19.2 18-44.6 29.2-44.6 2.8 0 7.9 2 7.9 5.4S30.7 31.6 30.7 42zM82.4 42c0 6.1 12.6 7 12.6 22 0 11-7.9 19.2-18.9 19.2-11.8 0-19.5-10.5-19.5-21.6 0-19.2 18-44.6 29.2-44.6 2.8 0 7.9 2 7.9 5.4S82.4 31.6 82.4 42z" />
                  </svg>
                  <div>
                    <p className="text-sm text-gray-600 sm:text-base lg:text-sm xl:text-base">
                      {testimonial.text}
                    </p>
                    <h3 className="mt-3 text-sm font-medium leading-5 text-gray-800 sm:text-base lg:text-sm">
                      {testimonial.name}
                      <span className="block text-sm text-gray-500">
                        {testimonial.title}
                      </span>
                    </h3>
                  </div>
                </div>
                <Image
                  className="flex-shrink-0 w-20  mx-auto h-20 bg-gray-300 rounded-full xl:w-24 xl:h-24"
                  width={65}
                  height={65}
                  src={testimonial.imageSrc}
                  alt=""
                />
              </blockquote>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
