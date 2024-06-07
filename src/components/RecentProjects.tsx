import Link from "next/link";
import React from "react";
import GridBlockHeader from "./GridBlockHeader";
import Image from "next/image";
import projects from "@/data/projects.json";

export default async function RecentProjects() {
  return (
    <div className="bg-white rounded-xl sm:text-lg shadow-[0_1px_5px_0px] shadow-zinc-300 min-h-72 p-4 sm:p-6 row-span-2 flex flex-col gap-6 lg:gap-4">
      <GridBlockHeader linkText="All Projects" linkAddress="/works">
        Recent Projects
      </GridBlockHeader>

      {projects.slice(0, 3).map((project) => (
        <Link
          key={project.name}
          href={project.linkAddress}
          className="rounded-md bg-zinc-100 focus-visible:ring ring-blue-400 p-2 group"
        >
          <div className="overflow-hidden rounded-md relative aspect-video">
            <Image
              src={project.imageUrl}
              alt={project.name}
              className="object-cover group-hover:scale-105 duration-300"
              fill
              sizes="(max-width:900px)"
            ></Image>
            <div className="absolute bottom-0 left-0 w-full h-[50%] p-4 flex items-end pb-3 bg-gradient-to-b from-transparent to-black/80 group-hover:opacity-100 duration-300 text-white ">
              {project.name}
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
