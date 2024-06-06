import AboutBlock from "@/components/AboutBlock";
import ArticleCarousel from "@/components/ArticleCarousel";
import Link from "next/link";

import React from "react";

export default function page() {
  return (
    <div className="mt-6 w-[90%] max-w-4xl lg:max-w-7xl mx-auto">
      <div className="flex gap-6 lg:flex-row flex-col">
        <AboutBlock sticky side />
        <div className="bg-white flex-1 p-4 sm:p-6 rounded-lg shadow-[0_1px_5px_0px] shadow-zinc-300">
          <div className="flex flex-col gap-2 sm:gap-4 md:gap-6 mb-8">
            <div className="p-3 px-4 rounded-md bg-zinc-50 text-green-500 flex-center gap-2 w-fit">
              <div className="rounded-full bg-green-500 w-2 h-2 animate-ping-slow"></div>
              Available for hire
            </div>
            <h2 className="text-[min(5vw,_30px)]  font-semibold text-zinc-800">
              Hi, this is 👋{" "}
              <span className="text-blue-500">Great Ogheneochuko</span>
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-zinc-500 font-[500]">
              A passionate Fullstack Web Developer based in Nigeria with over a
              year of hands-on experience in building dynamic and responsive web
              applications. My journey in web development has allowed me to
              master a range of technologies, including JavaScript, React,
              Next.js, MongoDB, Express, Tailwind, and TypeScript.
              <br />
              <br />
              I thrive on solving complex problems and creating efficient,
              user-friendly solutions. My portfolio showcases projects that
              highlight my ability to design and implement robust web
              applications from the ground up.
              <br />
              <br />
              Currently, I am expanding my skill set to include Python, Django,
              and SQL to enhance my backend capabilities. Additionally, I'm
              exploring React Native and Flutter to venture into mobile
              development.
              <br />
              <br />I am always eager to learn new technologies and take on
              challenging projects. Let's{" "}
              <span className="text-blue-500">connect and build </span>{" "}
              something amazing together!
            </p>
            <div className="flex gap-6 text-zinc-700">
              <div className="flex flex-col gap-2">
                <p className="text-3xl font-bold">1+</p>
                <p className="font-semibold text-zinc-600">
                  Year of Experience
                </p>
              </div>
              <Link href="/works" className="flex flex-col gap-2 group">
                <p className="text-3xl font-bold group-hover:text-blue-500 duration-300">
                  3+
                </p>
                <p className="font-semibold text-zinc-600 group-hover:text-blue-500 duration-300">
                  Projects Completed
                </p>
              </Link>
            </div>
          </div>
          <ArticleCarousel />
        </div>
      </div>
    </div>
  );
}
