import React from "react";
import GridBlockHeader from "./GridBlockHeader";
import Image from "next/image";

const tools = [
  { name: "Javascript", logoUrl: "/javascript-logo.png" },
  { name: "Typescript", logoUrl: "/typescript-logo.png" },
  // { name: "Python", logoUrl: "/" },
  { name: "Next JS", logoUrl: "/nextjs-logo.png" },
  { name: "React JS", logoUrl: "/react-logo.png" },
  // { name: "Native", logoUrl: "/" },
  { name: "Mongo DB", logoUrl: "/mongodb-logo.png" },
  { name: "Express", logoUrl: "/express-logo.png" },
];

export default function MyExpertArea() {
  return (
    <div className="bg-white flex flex-col gap-2 text-zinc-800 rounded-xl shadow-[0_1px_5px_0px] shadow-zinc-300 min-h-72 p-4 sm:p-6">
      <GridBlockHeader>My Expert Area</GridBlockHeader>
      <div className="grid flex-1 grid-cols-3 grid-rows-2 gap-3">
        {tools.map((tool) => (
          <div className="flex flex-col gap-1" key={tool.name}>
            <div className="bg-zinc-100 flex-1 flex-center rounded-lg aspect-video ">
              <div className="relative h-[50%] w-full">
                <Image
                  src={tool.logoUrl}
                  alt={tool.name + " logo"}
                  fill
                  sizes="(max-width: 300px)"
                  className="object-contain"
                />
              </div>
            </div>
            <h3 className="text-center text-sm sm:text-base text-zinc-600 font-semibold whitespace-nowrap">
              {tool.name}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
}
