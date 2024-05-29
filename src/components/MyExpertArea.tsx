import React from "react";
import GridBlockHeader from "./GridBlockHeader";

const tools = [
  { name: "Javascript", logoUrl: "/" },
  { name: "Typescript", logoUrl: "/" },
  // { name: "Python", logoUrl: "/" },
  { name: "Next JS", logoUrl: "/" },
  { name: "React JS", logoUrl: "/" },
  // { name: "Native", logoUrl: "/" },
  { name: "Mongo DB", logoUrl: "/" },
  { name: "Express", logoUrl: "/" },
];

export default function MyExpertArea() {
  return (
    <div className="bg-white flex flex-col gap-2 text-zinc-800 rounded-xl shadow-[0_1px_5px_0px] shadow-zinc-300 min-h-72 p-5">
      <GridBlockHeader>My Expert Area</GridBlockHeader>
      <div className="grid flex-1 grid-cols-3 grid-rows-2 gap-3">
        {tools.map((tool) => (
          <div className="flex flex-col gap-1" key={tool.name}>
            <div className="bg-zinc-100 flex-1 rounded-lg aspect-video"></div>
            <h3 className="text-center text-sm text-zinc-600 font-semibold whitespace-nowrap">
              {tool.name}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
}
