import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function AboutBlock() {
  return (
    <div className="bg-white rounded-xl shadow-[0_1px_5px_0px] shadow-zinc-300 min-h-72 p-5 row-span-2 flex flex-col gap-8">
      <div className="w-full aspect-video xl:aspect-[1.2] rounded-md bg-zinc-100">
        <div className="w-full relative h-full">
          <Image
            src={"/profilePic-transparent.png"}
            fill
            alt="Picture of Great"
            className="object-contain"
          />
        </div>
      </div>
      <div className="flex gap-2 flex-col text-zinc-800">
        <h2 className="text-2xl font-semibold">Great Ogheneochuko 👋</h2>
        <p>
          A Passionate <strong>Full Stack Developer</strong> 🖥️ having a ton of
          Experiences with <strong>4+ projects built</strong>.
        </p>
      </div>
      <div className="flex gap-2">
        <button className="bg-blue-500 p-4 flex-1 rounded-md text-white font-semibold hover:bg-blue-600/95 active:bg-blue-600 duration-300">
          View Resume
        </button>
        <button className="flex-1 p-4 rounded-md border font-semibold text-zinc-800 border-zinc-200 hover:bg-zinc-200 active:bg-zinc-300 hover:border-zinc-300 duration-300">
          Copy Email
        </button>
      </div>
      <ul className="flex gap-3">
        <li>
          <Link
            href="/"
            className="p-2 rounded-md hover:bg-zinc-100 border border-zinc-200 duration-300"
          ></Link>
        </li>
        <li>
          <Link
            href="/"
            className="p-2 rounded-md hover:bg-zinc-100 border border-zinc-200 duration-300"
          ></Link>
        </li>
        <li>
          <Link
            href="/"
            className="p-2 rounded-md hover:bg-zinc-100 border border-zinc-200 duration-300"
          ></Link>
        </li>
        <li>
          <Link
            href="/"
            className="p-2 rounded-md hover:bg-zinc-100 border border-zinc-200 duration-300"
          ></Link>
        </li>
      </ul>
    </div>
  );
}
