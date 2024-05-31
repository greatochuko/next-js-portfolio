import Link from "next/link";
import React from "react";
import GridBlockHeader from "./GridBlockHeader";
import Image from "next/image";

export default function RecentBlog() {
  return (
    <div className="bg-white rounded-xl shadow-[0_1px_5px_0px] sm:text-lg shadow-zinc-300 min-h-72 p-6 flex flex-col gap-4">
      <GridBlockHeader linkText="All Blogposts" linkAddress="/blog">
        Recent Blog
      </GridBlockHeader>
      <Link
        href={"/blog/getting-started-with-next-js"}
        className="bg-zinc-100 aspect-video p-6 pb-0 relative flex-1 group rounded-lg overflow-hidden"
      >
        <Image
          src={"/getting-started-with-nextjs.jpg"}
          alt="picture of shopparel website"
          className="object-cover group-hover:scale-105 duration-300"
          fill
          sizes="(max-width:900px)"
        />
        <div className="absolute bottom-0 left-0 w-full h-[50%] p-4 flex items-end pb-3 bg-gradient-to-b from-transparent to-black/80 duration-300 text-white">
          Getting started with Next JS
        </div>
      </Link>
    </div>
  );
}
