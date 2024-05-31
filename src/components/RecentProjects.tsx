import Link from "next/link";
import React from "react";
import GridBlockHeader from "./GridBlockHeader";
import Image from "next/image";

export default function RecentProjects() {
  return (
    <div className="bg-white aspect-[4/5] lg:aspect-auto rounded-xl sm:text-lg shadow-[0_1px_5px_0px] shadow-zinc-300 min-h-72 p-6 row-span-2 flex flex-col gap-6 lg:gap-4">
      <GridBlockHeader linkText="All Projects" linkAddress="/works">
        Recent Projects
      </GridBlockHeader>

      <Link
        href={"/works/shopparel"}
        className="bg-zinc-100 p-6 pb-0 relative flex-1 group rounded-lg overflow-hidden group"
      >
        <Image
          src={"/shopparel.png"}
          alt="picture of shopparel website"
          className="object-cover group-hover:scale-105 duration-300"
          fill
          sizes="(max-width:900px)"
        ></Image>
        <div className="absolute bottom-0 left-0 w-full h-[50%] p-4 flex items-end pb-3 bg-gradient-to-b from-transparent to-black/70 lg:opacity-0 group-hover:opacity-100 duration-300 text-white ">
          Shopparel
        </div>
      </Link>
      <Link
        href={"/works/pikxr"}
        className="bg-zinc-100 p-6 pb-0 relative flex-1 group rounded-lg overflow-hidden group"
      >
        <Image
          src={"/pikxr.png"}
          alt="picture of shopparel website"
          className="object-cover group-hover:scale-105 duration-300"
          fill
          sizes="(max-width:900px)"
        ></Image>
        <div className="absolute bottom-0 left-0 w-full h-[50%] p-4 flex items-end pb-3 bg-gradient-to-b from-transparent to-black/70 lg:opacity-0 group-hover:opacity-100 duration-300 text-white ">
          Pikxr
        </div>
      </Link>
    </div>
  );
}
