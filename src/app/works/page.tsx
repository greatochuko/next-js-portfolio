import Image from "next/image";
import Link from "next/link";
import React from "react";

const projects = [
  {
    name: "Shopparel",
    subtitle: "Social Media Website",
    linkAddress: "/works/shopparel",
    webAddress: "https://shopparel.vercel.app",
    imageUrl: "/shopparel.png",
    category: "Web Application",
  },
  {
    name: "Pikxr",
    subtitle: "Fashion E-commerce Website",
    linkAddress: "/works/pikxr",
    webAddress: "https://pikxr.onrender.com",
    imageUrl: "/pikxr.png",
    category: "Web Application",
  },
];

export type Project = {
  name: string;
  subtitle: string;
  linkAddress: string;
  webAddress: string;
  imageUrl: string;
  category: string;
};

export default function WorksPage() {
  return (
    <div className="mt-6 w-[90%] max-w-4xl lg:max-w-7xl mx-auto bg-white p-4 sm:p-6">
      <div className="flex flex-col gap-2 sm:gap-4 md:gap-6 mb-8">
        <h2 className="text-[min(5vw,_30px)]  font-semibold text-zinc-800">
          Check Out My Latest <span className="text-blue-500">Projects</span>
        </h2>
        <p className="text-sm sm:text-base md:text-lg text-zinc-500 font-[500]">
          I&apos;m here to help if you&apos;re looking for a fullstack web / mobile
          developer to bring your idea to life or a development partner to
          elevate your business to the next level.
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {projects.map((project) => (
          <div
            key={project.name}
            className="p-3 sm:p-4 bg-zinc-100 rounded-lg flex flex-col gap-6"
          >
            <div className="flex-1 relative aspect-video overflow-hidden">
              <Image
                src={project.imageUrl}
                alt={`picture of ${project.name}`}
                className="object-cover object-top hover:scale-105 duration-300"
                fill
                sizes="(max-width:900px)"
              ></Image>
            </div>
            <div className="flex flex-col gap-1 text-zinc-600">
              <div className="flex justify-between items-start gap-2">
                <Link
                  href={project.linkAddress}
                  className="text-base sm:text-lg font-semibold border-b border-b-transparent hover:border-b-blue-500 hover:text-blue-500 duration-300"
                >
                  {project.name}-{project.subtitle}
                </Link>
                <Link
                  href={project.webAddress}
                  className="flex-center group hover:text-blue-500 p-1 duration-300 text-sm whitespace-nowrap"
                >
                  View Live
                  <svg
                    viewBox="0 0 24 24"
                    height={20}
                    width={20}
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      <path
                        d="M7 17L17 7M17 7H8M17 7V16"
                        stroke="#000000"
                        className="stroke-zinc-600 group-hover:stroke-blue-500 duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </g>
                  </svg>
                </Link>
              </div>
              <p className="text-sm text-zinc-500">{project.category}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
