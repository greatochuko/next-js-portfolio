import Link from "next/link";
import React from "react";
import GridBlockHeader from "./GridBlockHeader";

export default function RecentBlog() {
  return (
    <div className="bg-white rounded-xl shadow-[0_1px_5px_0px] shadow-zinc-300 min-h-80 p-5 flex flex-col gap-4">
      <GridBlockHeader linkText="All Blogposts &rarr;" linkAddress="/blog">
        Recent Blog
      </GridBlockHeader>
      <Link
        href={"/"}
        className="bg-zinc-100 p-6 pb-0 relative flex-1 group rounded-lg overflow-hidden"
      >
        <div className="absolute bottom-0 left-0 w-full h-[50%] p-4 flex items-end pb-3 bg-gradient-to-b from-transparent to-black/50 duration-300 text-white">
          Caching in Next JS
        </div>
      </Link>
    </div>
  );
}
