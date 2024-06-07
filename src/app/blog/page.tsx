import React, { Suspense } from "react";
import BlogList from "@/components/BlogList";
import Paginator from "@/components/Paginator";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
};

export default async function BlogPage() {
  return (
    <div className="mt-6 w-[90%] max-w-4xl lg:max-w-7xl mx-auto bg-white p-4 sm:p-6 rounded-lg">
      <div className="flex flex-col gap-2 sm:gap-4 md:gap-6 mb-8">
        <h2 className="text-[min(5vw,_30px)]  font-semibold text-zinc-800">
          My Recent <span className="text-blue-500">Blogposts</span>
        </h2>
        <p className="text-sm sm:text-base md:text-lg text-zinc-500 font-[500]">
          Stay updated with the latest insights, tutorials, and tips on
          fullstack web development, featuring JavaScript, React, Next.js,
          MongoDB, and more.
        </p>
      </div>
      <Suspense>
        <BlogList />
        <Paginator />
      </Suspense>
    </div>
  );
}
