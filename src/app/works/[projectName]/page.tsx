import React from "react";
import projects from "@/data/projects.json";
import Image from "next/image";
import Link from "next/link";

export default function ProjectDetailPage({
  params,
}: {
  params: { projectName: string };
}) {
  const project = projects.find(
    (p) => p.linkAddress.split("/").at(-1) === params.projectName
  );

  if (!project) return;

  return (
    <div className="mt-6 w-[90%] max-w-4xl lg:max-w-7xl mx-auto bg-white p-4 sm:p-6 rounded-lg">
      <div className="max-w-4xl mx-auto flex flex-col gap-6">
        <div className="p-2 bg-zinc-100 rounded-lg">
          <div className="relative aspect-video">
            <Image src={project?.imageUrl} alt={project?.name} fill></Image>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-12 justify-between">
          <div className="flex flex-col gap-4 md:w-[30%]">
            <div className="flex gap-1 flex-col">
              <label className="text-zinc-500 font-semibold">Title:</label>
              <h3 className="text-2xl font-semibold text-zinc-700">
                {project.name}
              </h3>
            </div>
            <div className="flex gap-1 flex-col">
              <label className="text-zinc-500 font-semibold">
                Desctiption:
              </label>
              <h3 className="text-2xl font-semibold text-zinc-700">
                {project.description}
              </h3>
            </div>
            <div className="flex gap-1 flex-col">
              <label className="text-zinc-500 font-semibold">Category:</label>
              <h3 className="text-2xl font-semibold text-zinc-700">
                {project.category}
              </h3>
            </div>
            <Link
              href={project.webAddress}
              className="group flex-center gap-1 text-blue-500 w-fit hover:border-blue-500 border-b border-transparent font-semibold duration-300"
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
                    className="stroke-blue-500 duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </g>
              </svg>
            </Link>
            <Link
              href={project.githubLink}
              className="group flex-center gap-1 text-blue-500 w-fit hover:border-blue-500 border-b border-transparent font-semibold duration-300"
            >
              GitHub Repository
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
                    className="stroke-blue-500 duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </g>
              </svg>
            </Link>
          </div>
          <div className="flex-1 text-zinc-700">
            <h2 className="text-2xl font-semibold">Overview</h2>
            <p>{project.overview}</p>
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <h2 className="text-center text-3xl font-semibold text-zinc-700">
            Gallery
          </h2>
          <div className="grid gap-3 grid-cols-2 md:grid-cols-3 grid-rows-[repeat(5,_4rem)] sm:grid-rows-[repeat(6,_4rem)] md:grid-rows-[repeat(2,_10rem)] p-2 bg-zinc-100 rounded-sm">
            {project.images.slice(0, 3).map((image, i) => (
              <div
                key={i}
                className={`relative overflow-hidden group rounded-sm flex-center ${
                  i === 0
                    ? "row-span-3 sm:row-span-4 md:row-span-2 col-span-2"
                    : "md:row-span-1 row-span-2"
                }`}
              >
                <Image
                  src={image}
                  alt={project.name + "-image-" + i + 1}
                  key={image}
                  fill
                  className="group-hover:scale-110 duration-300 cursor-zoom-in object-cover "
                ></Image>
                {i !== 2 ? (
                  <div className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] p-2 bg-white shadow-md rounded-full w-10 h-10 flex-center text-blue-500 font-semibold text-lg cursor-zoom-in">
                    +
                  </div>
                ) : null}
                {i === 2 ? (
                  <div className="absolute top-0 left-0 w-full h-full bg-black/25 group-hover:bg-black/40 duration-300 flex-center text-white font-semibold text-lg cursor-zoom-in">
                    +{project.images.length - 3} more
                  </div>
                ) : null}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
