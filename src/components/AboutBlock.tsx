import React from "react";
import Link from "next/link";
import Image from "next/image";

const socialLinks = [
  {
    name: "twitter",
    icon: (
      <svg
        fill="#333"
        className="group-hover:fill-blue-500 duration-300 group-focus-visible:fill-blue-500 "
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        height={18}
        width={18}
      >
        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
        <g
          id="SVGRepo_tracerCarrier"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></g>
        <g id="SVGRepo_iconCarrier">
          <g id="7935ec95c421cee6d86eb22ecd12f847">
            <path d="M459.186,151.787c0.203,4.501,0.305,9.023,0.305,13.565 c0,138.542-105.461,298.285-298.274,298.285c-59.209,0-114.322-17.357-160.716-47.104c8.212,0.973,16.546,1.47,25.012,1.47 c49.121,0,94.318-16.759,130.209-44.884c-45.887-0.841-84.596-31.154-97.938-72.804c6.408,1.227,12.968,1.886,19.73,1.886 c9.55,0,18.816-1.287,27.617-3.68c-47.955-9.633-84.1-52.001-84.1-102.795c0-0.446,0-0.882,0.011-1.318 c14.133,7.847,30.294,12.562,47.488,13.109c-28.134-18.796-46.637-50.885-46.637-87.262c0-19.212,5.16-37.218,14.193-52.7 c51.707,63.426,128.941,105.156,216.072,109.536c-1.784-7.675-2.718-15.674-2.718-23.896c0-57.891,46.941-104.832,104.832-104.832 c30.173,0,57.404,12.734,76.525,33.102c23.887-4.694,46.313-13.423,66.569-25.438c-7.827,24.485-24.434,45.025-46.089,58.002 c21.209-2.535,41.426-8.171,60.222-16.505C497.448,118.542,479.666,137.004,459.186,151.787z"></path>
          </g>
        </g>
      </svg>
    ),
    href: "https://twitter.com/greatochuko4",
  },
  {
    name: "github",
    icon: (
      <svg
        viewBox="0 0 20 20"
        height={18}
        width={18}
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        fill="#333"
        className="group-hover:fill-blue-500 duration-300 group-focus-visible:fill-blue-500 "
      >
        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
        <g
          id="SVGRepo_tracerCarrier"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></g>
        <g id="SVGRepo_iconCarrier">
          <title>github [#142]</title> <desc>Created with Sketch.</desc>
          <defs> </defs>
          <g
            id="Page-1"
            stroke="none"
            strokeWidth="1"
            fill="none"
            fillRule="evenodd"
          >
            <g
              id="Dribbble-Light-Preview"
              transform="translate(-140.000000, -7559.000000)"
              fill="#333"
              className="group-hover:fill-blue-500 duration-300 group-focus-visible:fill-blue-500 "
            >
              <g id="icons" transform="translate(56.000000, 160.000000)">
                <path
                  d="M94,7399 C99.523,7399 104,7403.59 104,7409.253 C104,7413.782 101.138,7417.624 97.167,7418.981 C96.66,7419.082 96.48,7418.762 96.48,7418.489 C96.48,7418.151 96.492,7417.047 96.492,7415.675 C96.492,7414.719 96.172,7414.095 95.813,7413.777 C98.04,7413.523 100.38,7412.656 100.38,7408.718 C100.38,7407.598 99.992,7406.684 99.35,7405.966 C99.454,7405.707 99.797,7404.664 99.252,7403.252 C99.252,7403.252 98.414,7402.977 96.505,7404.303 C95.706,7404.076 94.85,7403.962 94,7403.958 C93.15,7403.962 92.295,7404.076 91.497,7404.303 C89.586,7402.977 88.746,7403.252 88.746,7403.252 C88.203,7404.664 88.546,7405.707 88.649,7405.966 C88.01,7406.684 87.619,7407.598 87.619,7408.718 C87.619,7412.646 89.954,7413.526 92.175,7413.785 C91.889,7414.041 91.63,7414.493 91.54,7415.156 C90.97,7415.418 89.522,7415.871 88.63,7414.304 C88.63,7414.304 88.101,7413.319 87.097,7413.247 C87.097,7413.247 86.122,7413.234 87.029,7413.87 C87.029,7413.87 87.684,7414.185 88.139,7415.37 C88.139,7415.37 88.726,7417.2 91.508,7416.58 C91.513,7417.437 91.522,7418.245 91.522,7418.489 C91.522,7418.76 91.338,7419.077 90.839,7418.982 C86.865,7417.627 84,7413.783 84,7409.253 C84,7403.59 88.478,7399 94,7399"
                  id="github-[#142]"
                ></path>
              </g>
            </g>
          </g>
        </g>
      </svg>
    ),
    href: "https://github.com/greatochuko",
  },
  {
    name: "linkedin",
    icon: (
      <svg
        viewBox="0 0 20 20"
        height={18}
        width={18}
        version="1.1"
        fill="#333"
        className="group-hover:fill-blue-500 duration-300 group-focus-visible:fill-blue-500 "
      >
        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
        <g
          id="SVGRepo_tracerCarrier"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></g>
        <g id="SVGRepo_iconCarrier">
          <title>linkedin [#161]</title> <desc>Created with Sketch.</desc>
          <defs> </defs>
          <g
            id="Page-1"
            stroke="none"
            strokeWidth="1"
            fill="none"
            fillRule="evenodd"
          >
            <g
              id="Dribbble-Light-Preview"
              transform="translate(-180.000000, -7479.000000)"
              fill="#333"
              className="group-hover:fill-blue-500 duration-300 group-focus-visible:fill-blue-500 "
            >
              <g id="icons" transform="translate(56.000000, 160.000000)">
                <path
                  d="M144,7339 L140,7339 L140,7332.001 C140,7330.081 139.153,7329.01 137.634,7329.01 C135.981,7329.01 135,7330.126 135,7332.001 L135,7339 L131,7339 L131,7326 L135,7326 L135,7327.462 C135,7327.462 136.255,7325.26 139.083,7325.26 C141.912,7325.26 144,7326.986 144,7330.558 L144,7339 L144,7339 Z M126.442,7323.921 C125.093,7323.921 124,7322.819 124,7321.46 C124,7320.102 125.093,7319 126.442,7319 C127.79,7319 128.883,7320.102 128.883,7321.46 C128.884,7322.819 127.79,7323.921 126.442,7323.921 L126.442,7323.921 Z M124,7339 L129,7339 L129,7326 L124,7326 L124,7339 Z"
                  id="linkedin-[#161]"
                ></path>
              </g>
            </g>
          </g>
        </g>
      </svg>
    ),
    href: "https://linkedin.com/in/greatochuko",
  },
  {
    name: "email",
    icon: (
      <svg
        fill="#000000"
        className="group-hover:fill-blue-500 duration-300 group-focus-visible:fill-blue-500 "
        viewBox="0 0 24 24"
        height={18}
        width={18}
        role="img"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
        <g
          id="SVGRepo_tracerCarrier"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></g>
        <g id="SVGRepo_iconCarrier">
          <title>Gmail icon</title>

          <path d="M24 4.5v15c0 .85-.65 1.5-1.5 1.5H21V7.387l-9 6.463-9-6.463V21H1.5C.649 21 0 20.35 0 19.5v-15c0-.425.162-.8.431-1.068C.7 3.16 1.076 3 1.5 3H2l10 7.25L22 3h.5c.425 0 .8.162 1.069.432.27.268.431.643.431 1.068z"></path>
        </g>
      </svg>
    ),
    href: "mailto:greatochuko123@gmail.com",
  },
];

export default function AboutBlock({ sticky }: { sticky?: boolean }) {
  return (
    <div
      className={`bg-white rounded-xl shadow-[0_1px_5px_0px] shadow-zinc-300 min-h-72 p-6 row-span-2 flex flex-col gap-8 ${
        sticky ? "sticky top-24 h-fit" : ""
      }`}
    >
      <div className="w-full aspect-video lg:aspect-[1.2] rounded-md bg-zinc-100">
        <div className="w-full relative h-full">
          <Image
            src={"/profilePic-transparent.png"}
            fill
            sizes="(max-width:900px)"
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
        <button className="flex-center gap-2 bg-blue-500 flex-1 py-4 text-sm sm:text-base sm:flex-none sm:px-8 lg:px-0 lg:flex-1 rounded-md text-white font-semibold hover:bg-blue-600/95 active:bg-blue-600 duration-300">
          <svg
            fill="#fff"
            viewBox="0 0 846.66 846.66"
            height={20}
            width={20}
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <defs>
                <style type="text/css"> .fil0 </style>
              </defs>
              <g id="Layer_x0020_1">
                <path
                  className="fil0"
                  d="M94.63 9.1l483.79 0c4.99,0.04 9.19,1.59 12.96,4.56l171.53 121.21c5.9,3.65 9.84,10.18 9.84,17.63l0 664.35c0,11.44 -9.28,20.71 -20.71,20.71l-657.41 0c-11.44,0 -20.72,-9.27 -20.72,-20.71l0 -787.04c0,-11.44 9.28,-20.71 20.72,-20.71zm137.12 519.85c-27.24,0 -27.24,-41.42 0,-41.42l383.16 0c27.25,0 27.25,41.42 0,41.42l-383.16 0zm0 205.05c-27.24,0 -27.24,-41.42 0,-41.42l383.16 0c27.25,0 27.25,41.42 0,41.42l-383.16 0zm0 -102.52c-27.24,0 -27.24,-41.43 0,-41.43l383.16 0c27.25,0 27.25,41.43 0,41.43l-383.16 0zm131.55 -328.81c30.97,23.15 49.31,59.43 49.31,98.21 0,11.44 -9.27,20.71 -20.71,20.71l-203.63 0c-11.44,0 -20.72,-9.27 -20.72,-20.71 0,-38.78 18.35,-75.06 49.31,-98.21 -10.99,-15.01 -17.49,-33.53 -17.49,-53.56 0,-50.09 40.62,-90.71 90.71,-90.71 50.1,0 90.71,40.62 90.71,90.71 0,20.03 -6.49,38.55 -17.49,53.56zm-113.46 27.76c-18.9,10.8 -32.7,28.69 -38.21,49.74l156.91 0c-5.51,-21.05 -19.31,-38.94 -38.22,-49.74 -12.12,6.01 -25.79,9.39 -40.24,9.39 -14.45,0 -28.11,-3.38 -40.24,-9.39zm40.24 -130.6c-27.22,0 -49.28,22.06 -49.28,49.28 0,27.23 22.06,49.29 49.28,49.29 27.22,0 49.29,-22.06 49.29,-49.29 0,-27.22 -22.06,-49.28 -49.29,-49.28zm441.25 -26.62l-152.91 0c-11.43,0 -20.71,-9.28 -20.71,-20.71l0 -101.98 -442.37 0 0 745.62 615.99 0 0 -622.93zm-132.2 -103.45l0 62.03 87.78 0 -87.78 -62.03z"
                ></path>
              </g>
            </g>
          </svg>
          View Resume
        </button>
        <button className="flex-center gap-2 flex-1 py-4 text-sm sm:text-base sm:flex-none sm:px-8 lg:px-0 lg:flex-1 rounded-md border font-semibold text-zinc-800 border-zinc-200 hover:bg-zinc-200 active:bg-zinc-300 hover:border-zinc-300 duration-300">
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
                strokeWidth="1.5"
              ></path>
              <path
                d="M6 19C4.34315 19 3 17.6569 3 16V10C3 6.22876 3 4.34315 4.17157 3.17157C5.34315 2 7.22876 2 11 2H15C16.6569 2 18 3.34315 18 5"
                stroke="#000"
                strokeWidth="1.5"
              ></path>
            </g>
          </svg>
          Copy Email
        </button>
      </div>
      <ul className="flex gap-3">
        {socialLinks.map((link) => (
          <li key={link.name}>
            <Link
              href={link.href}
              target="_blank"
              className="group border-[3px] rounded-md hover:border-blue-500 duration-300 p-2 block focus-visible:border-blue-500"
            >
              {link.icon}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
