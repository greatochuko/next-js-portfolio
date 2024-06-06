"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import MobileNav from "./MobileNav";

export const navLinks = [
  {
    title: "Home",
    href: "/",
    icon: (
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
    ),
  },
  {
    title: "About",
    href: "/about",
    icon: (
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
    ),
  },
  {
    title: "Works",
    href: "/works",
    icon: (
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
    ),
  },

  {
    title: "Blog",
    href: "/blog",
    icon: (
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
    ),
  },
  {
    title: "Contact",
    href: "/contact",
    icon: (
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
    ),
  },
];

export default function Header() {
  const pathname = usePathname();
  const [mobileNavIsOpen, setMobileNavIsOpen] = useState(false);

  return (
    <>
      <div className="bg-white shadow-[0_1px_5px_0px] sticky top-0 flex items-center justify-between p-2.5 gap-4 shadow-zinc-300 rounded-xl w-[90%] max-w-4xl lg:max-w-7xl mx-auto mt-6 z-10">
        <h1 className="text-2xl font-semibold text-zinc-700">
          Great<span className="text-blue-500">Folio</span>
        </h1>
        <ul className="lg:flex hidden gap-2 max-w-2xl justify-evenly text-zinc-500 font-semibold flex-1">
          {navLinks.map((navLink) => (
            <li>
              <Link
                href={navLink.href}
                className={`${
                  pathname === navLink.href ? "bg-zinc-100 text-zinc-800 " : ""
                } py-2 px-3 flex-center gap-2 focus-visible:ring ring-blue-400 hover:bg-zinc-100 rounded-md hover:text-zinc-800 group duration-300 block`}
              >
                {navLink.icon}
                {navLink.title}
              </Link>
            </li>
          ))}
        </ul>
        <Link
          href={"/contact"}
          className="py-[14px] px-8 hidden lg:flex-center gap-2 bg-zinc-800/90 hover:bg-zinc-900 duration-300 text-white rounded-lg"
        >
          Let's Talk
          <svg
            fill="#fff"
            viewBox="0 0 256 256"
            height={20}
            width={20}
            className="-rotate-45"
            id="Flat"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <path d="M235.93994,153.18652c-.01636.167-.04785.32862-.071.49366-.0315.22314-.05786.44628-.102.668-.03785.19141-.09107.37745-.13819.56543-.04761.1919-.09009.38428-.14721.57325-.05665.186-.12647.36523-.19141.54687-.0669.1875-.12891.37647-.20532.561-.07032.16992-.15308.332-.23072.49756-.08911.18994-.17382.38134-.27343.56689-.0835.15625-.179.3042-.269.45605-.10986.18457-.2146.3711-.3352.55127-.11011.16455-.23316.31934-.35132.478-.11523.15479-.22314.31348-.34692.46387-.22412.273-.46265.53271-.70948.78467-.02929.02978-.05371.0625-.08325.09228l-48,48a12.0001,12.0001,0,0,1-16.9707-16.9707L195.0293,164H128A108.12186,108.12186,0,0,1,20,56a12,12,0,0,1,24,0,84.09562,84.09562,0,0,0,84,84h67.0293l-27.51465-27.51465a12.0001,12.0001,0,0,1,16.9707-16.9707l48,48c.02954.02978.054.0625.08325.09228.24683.252.48536.51172.70948.78467.12378.15039.23169.30908.34692.46387.11816.15869.24121.31348.35132.478.1206.18017.22534.3667.3352.55127.09009.15185.18555.2998.269.45605.09961.18555.18408.37695.27319.56689.07788.16553.1604.32764.231.49708.07641.18505.13842.374.20532.56152.06518.18164.135.36084.19141.54639.05712.18945.0996.38183.14721.57373.04712.188.10034.374.13819.56543.04419.22168.07055.44482.102.668.02319.165.05468.32666.071.49366A12.042,12.042,0,0,1,235.93994,153.18652Z"></path>
            </g>
          </svg>
        </Link>
        <button className="lg:hidden" onClick={() => setMobileNavIsOpen(true)}>
          <svg
            viewBox="0 0 24 24"
            width={40}
            height={35}
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
                d="M5 7H19"
                stroke="#000000"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
              <path
                d="M5 12L19 12"
                stroke="#000000"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
              <path
                d="M5 17L19 17"
                stroke="#000000"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </g>
          </svg>
        </button>
      </div>
      <MobileNav
        closeMobileNav={() => setMobileNavIsOpen(false)}
        isOpen={mobileNavIsOpen}
        pathname={pathname}
      />
    </>
  );
}
