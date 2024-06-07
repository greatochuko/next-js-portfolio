import { Project } from "@/app/works/page";
import Image from "next/image";
import React from "react";

export default function ProjectGallery({ project }: { project: Project }) {
  return (
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
  );
}
