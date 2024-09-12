"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import blogposts from "@/data/articles.json";

export type Blogpost = {
  id: number;
  title: string;
  imageUrl: string;
  href: string;
  readTime: string;
  dateUpdated: string;
};

export default function BlogList() {
  const searchParams = useSearchParams();

  const activePage = Number(searchParams.get("page")) || 1;
  const filteredBlogposts = blogposts.slice(
    (activePage - 1) * 6,
    activePage * 6
  );

  return (
    <div className="gap-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
      {filteredBlogposts.map((article) => (
        <Link
          target="_blank"
          href={article.href}
          className="flex flex-col gap-2 group"
          key={article.id}
        >
          <div className="relative flex-1 rounded-md overflow-hidden aspect-[1.75]">
            <Image
              src={article.imageUrl}
              fill
              alt={article.title}
              className="group-hover:scale-110 duration-300 object-cover"
            ></Image>
          </div>
          <h3 className="group-hover:text-blue-500 font-semibold text-xl text-zinc-700 duration-300">
            {article.title}
          </h3>
          <p className="font-semibold text-sm text-zinc-400">
            {article.readTime} read &#183;{" "}
            {new Date(article.dateUpdated)
              .toDateString()
              .split(" ")
              .slice(1)
              .join(" ")}
          </p>
        </Link>
      ))}
    </div>
  );
}
