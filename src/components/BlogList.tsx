"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

type Article = {
  id: number;
  title: string;
  imageUrl: string;
  href: string;
  readTime: string;
  dateUpdated: string;
};

export default function BlogList({ blogposts }: { blogposts: Article[] }) {
  const searchParams = useSearchParams();

  const activePage = Number(searchParams.get("page")) || 1;
  const filteredBlogposts = blogposts.slice(
    (activePage - 1) * 6,
    activePage * 6
  );

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {filteredBlogposts.map((article) => (
        <Link
          href={article.href}
          className="aspect-[1.2] flex flex-col gap-2 group"
          key={article.id}
        >
          <div className="relative flex-1 rounded-md overflow-hidden">
            <Image
              src={article.imageUrl}
              fill
              alt={article.title}
              className="object-cover group-hover:scale-110 duration-300"
            ></Image>
          </div>
          <h3 className="text-xl font-semibold text-zinc-700 group-hover:text-blue-500 duration-300">
            {article.title}
          </h3>
          <p className="text-zinc-400 text-sm font-semibold">
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
