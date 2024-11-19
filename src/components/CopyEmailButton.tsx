"use client";
import React, { useState } from "react";
import ToastNotification from "./ToastNotification";

export default function CopyEmailButton() {
  const [isCopied, setIsCopied] = useState(false);

  function copyEmail() {
    navigator.clipboard.writeText("greatochuko123@gmail.com");
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 3000);
  }

  return (
    <>
      <ToastNotification show={isCopied}>
        Email Copied Successfully!
      </ToastNotification>
      <button
        onClick={copyEmail}
        className={`focus-visible:ring bg-white ring-blue-400 flex-center gap-2 flex-1 py-3 md:py-4 text-sm sm:text-base rounded-md border font-semibold text-zinc-800 border-zinc-200 hover:bg-zinc-200 active:bg-zinc-300 hover:border-zinc-300 duration-300 ${
          isCopied ? "border-green-600" : ""
        }`}
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
              d="M6 11C6 8.17157 6 6.75736 6.87868 5.87868C7.75736 5 9.17157 5 12 5H15C17.8284 5 19.2426 5 20.1213 5.87868C21 6.75736 21 8.17157 21 11V16C21 18.8284 21 20.2426 20.1213 21.1213C19.2426 22 17.8284 22 15 22H12C9.17157 22 7.75736 22 6.87868 21.1213C6 20.2426 6 18.8284 6 16V11Z"
              stroke="#000"
              className={isCopied ? "stroke-green-600" : ""}
              strokeWidth="1.5"
            ></path>
            <path
              d="M6 19C4.34315 19 3 17.6569 3 16V10C3 6.22876 3 4.34315 4.17157 3.17157C5.34315 2 7.22876 2 11 2H15C16.6569 2 18 3.34315 18 5"
              stroke="#000"
              className={isCopied ? "stroke-green-600" : ""}
              strokeWidth="1.5"
            ></path>
          </g>
        </svg>
        {isCopied ? (
          <span className="text-green-600">Copied &#10003;</span>
        ) : (
          "Copy Email"
        )}
      </button>
    </>
  );
}
