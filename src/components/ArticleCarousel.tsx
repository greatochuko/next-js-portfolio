"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import articles from "@/data/articles.json";

export default function ArticleCarousel() {
  const [num, setNum] = useState(0);

  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-between gap-2 items-center text-zinc-800 mt-6">
        <h2 className="text-lg sm:text-[22px] font-semibold ">
          Articles and Publications
        </h2>
        <div className="flex-center gap-3 sm:gap-4">
          <button
            onClick={() => setNum((curr) => curr - 1)}
            disabled={num <= 0}
            className="rounded-md border-[3px] disabled:bg-zinc-200 border-zinc-200 p-1 sm:p-[6px] hover:bg-zinc-100 group duration-300 active:bg-zinc-200 focus-visible:ring ring-blue-400"
          >
            <svg
              viewBox="0 0 24 24"
              height={20}
              width={20}
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  d="M6 12H18M6 12L11 7M6 12L11 17"
                  stroke="#000000"
                  className="stroke-zinc-700 group-hover:stroke-zinc-800 group-disabled:stroke-zinc-400"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </g>
            </svg>
          </button>
          <button
            onClick={() => setNum((curr) => curr + 1)}
            disabled={num >= articles.length / 2 - 1}
            className="rounded-md border-[3px] disabled:bg-zinc-200 border-zinc-200 p-1 sm:p-[6px] hover:bg-zinc-100 group duration-300 active:bg-zinc-200 focus-visible:ring ring-blue-400"
          >
            <svg
              viewBox="0 0 24 24"
              height={20}
              width={20}
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  d="M6 12H18M18 12L13 7M18 12L13 17"
                  stroke="#000000"
                  className="stroke-zinc-700 group-hover:stroke-zinc-800 group-disabled:stroke-zinc-400"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </g>
            </svg>
          </button>
        </div>
      </div>
      <div className="overflow-x-hidden ">
        <div
          className="flex min-w-full gap-3 sm:gap-6 duration-300"
          style={{
            transform: `translateX(${-(200 / articles.length) * num}%)`,
            width: `${(articles.length / 2) * 100}%`,
          }}
        >
          {articles.map((article) => (
            <Link href={article.href} className="w-[50%]" key={article.id}>
              <div className="relative rounded-md overflow-hidden aspect-video">
                <Image
                  src={article.imageUrl}
                  fill
                  alt={article.title}
                  className="object-cover group-hover:scale-110 duration-300"
                ></Image>
              </div>
              <h3 className="text-sm sm:text-lg font-semibold text-zinc-700 group-hover:text-blue-500 duration-300">
                {article.title}
              </h3>
              <p className="text-zinc-500 text-xs sm:text-sm">
                {article.readTime} .{" "}
                {new Date(article.dateUpdated)
                  .toDateString()
                  .split(" ")
                  .slice(1)
                  .join(" ")}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
