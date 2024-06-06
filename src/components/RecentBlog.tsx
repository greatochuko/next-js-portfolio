import Link from "next/link";
import React from "react";
import GridBlockHeader from "./GridBlockHeader";
import Image from "next/image";
import getBlogposts from "@/utils/services";
import { Blogpost } from "./BlogList";

export default async function RecentBlog() {
  const blogposts: Blogpost[] = await getBlogposts();
  const blogpost = blogposts[blogposts.length - 1];

  return (
    <div className="bg-white rounded-xl shadow-[0_1px_5px_0px] sm:text-lg shadow-zinc-300 min-h-72 p-6 flex flex-col gap-4">
      <GridBlockHeader linkText="All Blogposts" linkAddress="/blog">
        Recent Blog
      </GridBlockHeader>
      {/* <Link
        href={blogpost?.href}
        className="bg-zinc-100 focus-visible:ring ring-blue-400 aspect-video p-6 pb-0 relative flex-1 group rounded-lg overflow-hidden"
      >
        <Image
          src={blogpost?.imageUrl}
          alt={blogpost?.title}
          className="object-cover group-hover:scale-105 duration-300"
          fill
          sizes="(max-width:900px)"
        />
        <div className="absolute bottom-0 left-0 w-full h-[50%] p-4 flex items-end pb-3 bg-gradient-to-b from-transparent to-black/80 duration-300 text-white">
          {blogpost?.title}
        </div>
      </Link> */}
    </div>
  );
}
