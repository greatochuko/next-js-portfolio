import React from "react";
import projects from "@/data/projects.json";
import Image from "next/image";
import Link from "next/link";
import ProjectGallery from "@/components/ProjectGallery";
import ProjectDetails from "@/components/ProjectDetails";

export default function ProjectDetailPage({
  params,
}: {
  params: { projectName: string };
}) {
  const projectIndex = projects.findIndex(
    (p) => p.linkAddress.split("/").at(-1) === params.projectName
  );

  const project = projects[projectIndex];

  return (
    <div className="mt-6 w-[90%] max-w-4xl lg:max-w-7xl mx-auto bg-white p-4 sm:p-6 rounded-lg">
      <div className="max-w-4xl mx-auto flex flex-col gap-10">
        <div className="p-2 bg-zinc-100 rounded-lg">
          <div className="relative aspect-video">
            <Image src={project?.imageUrl} alt={project?.name} fill></Image>
          </div>
        </div>

        <ProjectDetails project={project} />

        <ProjectGallery project={project} />

        <div className="flex gap-4 sm:gap-6">
          <Link
            href={
              projects[projectIndex - 1]
                ? projects[projectIndex - 1].linkAddress
                : projects[projects.length - 1].linkAddress
            }
            className="flex-1 text-center bg-blue-white border-[3px] hover:border-blue-500 active:border-blue-600 active:text-white text-zinc-600 hover:text-white font-semibold text-xl rounded-md p-4 hover:bg-blue-500 active:bg-blue-600 duration-300 focus-visible:ring ring-blue-400"
          >
            Previous
          </Link>
          <Link
            href={
              projects[projectIndex + 1]
                ? projects[projectIndex + 1].linkAddress
                : projects[0].linkAddress
            }
            className="flex-1 text-center bg-blue-white border-[3px] hover:border-blue-500 active:border-blue-600 active:text-white text-zinc-600 hover:text-white font-semibold text-xl rounded-md p-4 hover:bg-blue-500 active:bg-blue-600 duration-300 focus-visible:ring ring-blue-400"
          >
            Next
          </Link>
        </div>
      </div>
    </div>
  );
}
