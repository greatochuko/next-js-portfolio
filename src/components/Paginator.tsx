import { useRouter, useSearchParams } from "next/navigation";
import React from "react";

export default function Paginator({
  pages,
  activePage,
}: {
  pages: number[];
  activePage: number;
}) {
  const searchParams = useSearchParams();
  const router = useRouter();
  function changePage(pageNum: number) {
    const params = new URLSearchParams(searchParams.toString());
    params.set("page", pageNum.toString());
    router.push("?" + params.toString());
  }

  return (
    <div className="flex gap-2 mx-auto w-fit mt-8">
      <button className="flex-center w-10 aspect-square rounded-md border-[3px] hover:bg-zinc-100 hover:border-zinc-200 active:bg-zinc-200 duration-300 group">
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
      {pages.map((page) => (
        <button
          key={page}
          onClick={() => changePage(page + 1)}
          className={`flex-center w-10 aspect-square rounded-md border-[3px] active:bg-zinc-200 duration-300 group ${
            page === activePage
              ? "text-blue-500 border-blue-500 hover:border-blue-500 font-bold"
              : " hover:bg-zinc-100 hover:border-zinc-200"
          }`}
        >
          {page + 1}
        </button>
      ))}
      <button className="flex-center w-10 aspect-square rounded-md border-[3px] hover:bg-zinc-100 hover:border-zinc-200 active:bg-zinc-200 duration-300 group">
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
  );
}
