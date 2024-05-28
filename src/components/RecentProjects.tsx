import Link from "next/link";
import React from "react";
import GridBlockHeader from "./GridBlockHeader";

export default function RecentProjects() {
  return (
    <div className="bg-white rounded-xl shadow-[0_1px_5px_0px] shadow-zinc-300 min-h-80 p-5 row-span-2 flex flex-col gap-4">
      <GridBlockHeader linkText="All Projects &rarr;" linkAddress="/works">
        Recent Projects
      </GridBlockHeader>

      <Link
        href={"/"}
        className="bg-zinc-100 p-6 pb-0 relative flex-1 group rounded-lg overflow-hidden"
      >
        <div className="absolute bottom-0 left-0 w-full h-[50%] p-4 flex items-end pb-3 bg-gradient-to-b from-transparent to-black/40 opacity-0 group-hover:opacity-100 duration-300 text-white">
          Shopparel
        </div>
      </Link>
      <Link
        href={"/"}
        className="bg-zinc-100 p-6 pb-0 relative flex-1 group rounded-lg overflow-hidden"
      >
        <div className="absolute bottom-0 left-0 w-full h-[50%] p-4 flex items-end pb-3 bg-gradient-to-b from-transparent to-black/40 opacity-0 group-hover:opacity-100 duration-300 text-white">
          Pikxr
        </div>
      </Link>
    </div>
  );
}
