import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <div className="bg-white shadow-[0_1px_5px_0px] sticky top-0 flex items-center justify-between p-2.5 gap-4 shadow-zinc-300  rounded-xl w-[90%] max-w-[1280px] mx-auto mt-5">
      <h1 className="text-xl font-semibold text-zinc-700">
        Great<span className="text-blue-500">folio</span>
      </h1>
      <ul className="flex gap-4 max-w-2xl justify-evenly text-zinc-500 font-semibold flex-1">
        <li>
          <Link
            href={"/"}
            className="py-2 px-3 flex-center gap-2 hover:bg-zinc-100 rounded-md hover:text-zinc-800 group duration-300 block"
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
                  d="M22 12.2039V13.725C22 17.6258 22 19.5763 20.8284 20.7881C19.6569 22 17.7712 22 14 22H10C6.22876 22 4.34315 22 3.17157 20.7881C2 19.5763 2 17.6258 2 13.725V12.2039C2 9.91549 2 8.77128 2.5192 7.82274C3.0384 6.87421 3.98695 6.28551 5.88403 5.10813L7.88403 3.86687C9.88939 2.62229 10.8921 2 12 2C13.1079 2 14.1106 2.62229 16.116 3.86687L18.116 5.10812C20.0131 6.28551 20.9616 6.87421 21.4808 7.82274"
                  stroke="#1C274C"
                  strokeWidth="1.8"
                  className="stroke-zinc-500 group-hover:stroke-zinc-700"
                  strokeLinecap="round"
                ></path>
                <path
                  d="M15 18H9"
                  stroke="#1C274C"
                  strokeWidth="1.8"
                  className="stroke-zinc-500 group-hover:stroke-zinc-700"
                  strokeLinecap="round"
                ></path>
              </g>
            </svg>
            Home
          </Link>
        </li>
        <li>
          <Link
            href={"/about"}
            className="py-2 px-3 flex-center gap-2 hover:bg-zinc-100 rounded-md hover:text-zinc-800 group duration-300 block"
          >
            <svg
              viewBox="0 0 24 24"
              height={22}
              width={22}
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
                <g clipPath="url(#clip0_429_11217)">
                  <path
                    d="M4 18C4 15.7908 5.79086 14 8 14H16C18.2091 14 20 15.7908 20 18V18C20 19.1045 19.1046 20 18 20H6C4.89543 20 4 19.1045 4 18V18Z"
                    stroke="#000"
                    strokeWidth="2"
                    strokeLinejoin="round"
                    className="stroke-zinc-500 group-hover:stroke-zinc-700"
                  ></path>
                  <circle
                    cx="12"
                    cy="6.99997"
                    r="3"
                    stroke="#000"
                    strokeWidth="2"
                    className="stroke-zinc-500 group-hover:stroke-zinc-700"
                  ></circle>
                </g>
                <defs>
                  <clipPath id="clip0_429_11217">
                    <rect width="24" height="24" fill="white"></rect>
                  </clipPath>
                </defs>
              </g>
            </svg>
            About
          </Link>
        </li>
        <li>
          <Link
            href={"/works"}
            className="py-2 px-3 flex-center gap-2 hover:bg-zinc-100 rounded-md hover:text-zinc-800 group duration-300 block"
          >
            <svg
              viewBox="0 0 512 512"
              height={22}
              width={22}
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              fill="#000000"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <title>project</title>
                <g
                  id="Page-1"
                  stroke="none"
                  strokeWidth="1"
                  fill="none"
                  fillRule="evenodd"
                >
                  <g
                    id="Combined-Shape"
                    fill="#000000"
                    transform="translate(64.000000, 34.346667)"
                    className="fill-zinc-500 group-hover:fill-zinc-700"
                  >
                    <path d="M192,7.10542736e-15 L384,110.851252 L384,332.553755 L192,443.405007 L1.42108547e-14,332.553755 L1.42108547e-14,110.851252 L192,7.10542736e-15 Z M42.666,157.654 L42.6666667,307.920144 L170.666,381.82 L170.666,231.555 L42.666,157.654 Z M341.333,157.655 L213.333,231.555 L213.333,381.82 L341.333333,307.920144 L341.333,157.655 Z M192,49.267223 L66.1333333,121.936377 L192,194.605531 L317.866667,121.936377 L192,49.267223 Z"></path>
                  </g>
                </g>
              </g>
            </svg>
            Works
          </Link>
        </li>
        <li>
          <Link
            href={"/blog"}
            className="py-2 px-3 flex-center gap-2 hover:bg-zinc-100 rounded-md hover:text-zinc-800 group duration-300 block"
          >
            <svg
              fill="#000000"
              viewBox="0 0 24 24"
              height={20}
              width={20}
              className="fill-zinc-500 group-hover:fill-zinc-700"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path d="M17.093,1.293l-11.2,11.2a.99.99,0,0,0-.242.391l-1.6,4.8A1,1,0,0,0,5,19a1.014,1.014,0,0,0,.316-.051l4.8-1.6a1.006,1.006,0,0,0,.391-.242l11.2-11.2a1,1,0,0,0,0-1.414l-3.2-3.2A1,1,0,0,0,17.093,1.293ZM9.26,15.526l-2.679.893.893-2.679L17.8,3.414,19.586,5.2ZM3,21H20a1,1,0,0,1,0,2H3a1,1,0,0,1,0-2Z"></path>
              </g>
            </svg>
            Blog
          </Link>
        </li>
        <li>
          <Link
            href={"/contact"}
            className="py-2 px-3 flex-center gap-2 hover:bg-zinc-100 rounded-md hover:text-zinc-800 group duration-300 block"
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
                  d="M8 11H8.01M12 11H12.01M16 11H16.01M21 20L17.6757 18.3378C17.4237 18.2118 17.2977 18.1488 17.1656 18.1044C17.0484 18.065 16.9277 18.0365 16.8052 18.0193C16.6672 18 16.5263 18 16.2446 18H6.2C5.07989 18 4.51984 18 4.09202 17.782C3.71569 17.5903 3.40973 17.2843 3.21799 16.908C3 16.4802 3 15.9201 3 14.8V7.2C3 6.07989 3 5.51984 3.21799 5.09202C3.40973 4.71569 3.71569 4.40973 4.09202 4.21799C4.51984 4 5.0799 4 6.2 4H17.8C18.9201 4 19.4802 4 19.908 4.21799C20.2843 4.40973 20.5903 4.71569 20.782 5.09202C21 5.51984 21 6.0799 21 7.2V20Z"
                  stroke="#000000"
                  className="stroke-zinc-500 group-hover:stroke-zinc-700"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </g>
            </svg>
            Contact
          </Link>
        </li>
      </ul>
      <Link
        href={"/contact"}
        className="block py-3 px-8 bg-zinc-800/90 hover:bg-zinc-900 duration-300 text-white rounded-lg"
      >
        Let's Talk
      </Link>
    </div>
  );
}
