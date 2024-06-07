import React from "react";
import GridBlockHeader from "./GridBlockHeader";

const services = [
  {
    title: "Frontend",
    icon: (
      <svg
        viewBox="0 0 20 20"
        className="fill-blue-500 sm:w-20 sm:h-20 h-14 w-14"
        xmlns="http://www.w3.org/2000/svg"
        fill="#333"
      >
        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
        <g
          id="SVGRepo_tracerCarrier"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></g>
        <g id="SVGRepo_iconCarrier">
          <rect x="0" fill="none" width="20" height="20"></rect>
          <g>
            <path d="M4 16v-2H2v2H1v-5h1v2h2v-2h1v5H4zM7 16v-4H5.6v-1h3.7v1H8v4H7zM10 16v-5h1l1.4 3.4h.1L14 11h1v5h-1v-3.1h-.1l-1.1 2.5h-.6l-1.1-2.5H11V16h-1zM19 16h-3v-5h1v4h2v1zM9.4 4.2L7.1 6.5l2.3 2.3-.6 1.2-3.5-3.5L8.8 3l.6 1.2zm1.2 4.6l2.3-2.3-2.3-2.3.6-1.2 3.5 3.5-3.5 3.5-.6-1.2z"></path>
          </g>
        </g>
      </svg>
    ),
  },
  {
    title: "Backend",
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="sm:w-20 sm:h-20 h-14 w-14"
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
          {" "}
          <path
            d="M10 3.75C10.4142 3.75 10.75 3.41421 10.75 3C10.75 2.58579 10.4142 2.25 10 2.25V3.75ZM14 2.25C13.5858 2.25 13.25 2.58579 13.25 3C13.25 3.41421 13.5858 3.75 14 3.75V2.25ZM13 21.75C13.4142 21.75 13.75 21.4142 13.75 21C13.75 20.5858 13.4142 20.25 13 20.25V21.75ZM3.17157 19.8284L3.7019 19.2981H3.7019L3.17157 19.8284ZM20.8284 4.17157L20.2981 4.7019V4.7019L20.8284 4.17157ZM21.25 13C21.25 13.4142 21.5858 13.75 22 13.75C22.4142 13.75 22.75 13.4142 22.75 13H21.25ZM14 12.75C14.4142 12.75 14.75 12.4142 14.75 12C14.75 11.5858 14.4142 11.25 14 11.25V12.75ZM18 11.25C17.5858 11.25 17.25 11.5858 17.25 12C17.25 12.4142 17.5858 12.75 18 12.75V11.25ZM2.75 13V12H1.25V13H2.75ZM2.75 12V11H1.25V12H2.75ZM13 20.25H10V21.75H13V20.25ZM21.25 11V12H22.75V11H21.25ZM1.25 13C1.25 14.8644 1.24841 16.3382 1.40313 17.489C1.56076 18.6614 1.89288 19.6104 2.64124 20.3588L3.7019 19.2981C3.27869 18.8749 3.02502 18.2952 2.88976 17.2892C2.75159 16.2615 2.75 14.9068 2.75 13H1.25ZM10 20.25C8.09318 20.25 6.73851 20.2484 5.71085 20.1102C4.70476 19.975 4.12511 19.7213 3.7019 19.2981L2.64124 20.3588C3.38961 21.1071 4.33855 21.4392 5.51098 21.5969C6.66182 21.7516 8.13558 21.75 10 21.75V20.25ZM14 3.75C15.9068 3.75 17.2615 3.75159 18.2892 3.88976C19.2952 4.02502 19.8749 4.27869 20.2981 4.7019L21.3588 3.64124C20.6104 2.89288 19.6614 2.56076 18.489 2.40313C17.3382 2.24841 15.8644 2.25 14 2.25V3.75ZM22.75 11C22.75 9.13558 22.7516 7.66182 22.5969 6.51098C22.4392 5.33855 22.1071 4.38961 21.3588 3.64124L20.2981 4.7019C20.7213 5.12511 20.975 5.70476 21.1102 6.71085C21.2484 7.73851 21.25 9.09318 21.25 11H22.75ZM10 2.25C8.13558 2.25 6.66182 2.24841 5.51098 2.40313C4.33856 2.56076 3.38961 2.89288 2.64124 3.64124L3.7019 4.7019C4.12511 4.27869 4.70476 4.02502 5.71085 3.88976C6.73851 3.75159 8.09318 3.75 10 3.75V2.25ZM2.75 11C2.75 9.09318 2.75159 7.73851 2.88976 6.71085C3.02502 5.70476 3.27869 5.12511 3.7019 4.7019L2.64124 3.64124C1.89288 4.38961 1.56076 5.33855 1.40313 6.51098C1.24841 7.66182 1.25 9.13558 1.25 11H2.75ZM21.25 12V13H22.75V12H21.25ZM2 12.75H14V11.25H2V12.75ZM18 12.75H22V11.25H18V12.75Z"
            fill="#1C274C"
            className="fill-blue-500"
          ></path>{" "}
          <path
            d="M13.5 7.5L18 7.5"
            stroke="#1C274C"
            className="stroke-blue-500"
            strokeWidth="1.5"
            strokeLinecap="round"
          ></path>{" "}
          <path
            d="M6 17.5L6 15.5"
            stroke="#1C274C"
            className="stroke-blue-500"
            strokeWidth="1.5"
            strokeLinecap="round"
          ></path>{" "}
          <path
            d="M6 8.5L6 6.5"
            stroke="#1C274C"
            className="stroke-blue-500"
            strokeWidth="1.5"
            strokeLinecap="round"
          ></path>{" "}
          <path
            d="M9 17.5L9 15.5"
            stroke="#1C274C"
            className="stroke-blue-500"
            strokeWidth="1.5"
            strokeLinecap="round"
          ></path>{" "}
          <path
            d="M9 8.5L9 6.5"
            stroke="#1C274C"
            className="stroke-blue-500"
            strokeWidth="1.5"
            strokeLinecap="round"
          ></path>{" "}
          <path
            d="M19.3333 16.8852C19.5419 16.8072 19.7662 16.7647 20 16.7647C20.2291 16.7647 20.4493 16.8055 20.6543 16.8806M16.7907 17.8533C16.6966 17.8338 16.5994 17.8235 16.5 17.8235C15.6716 17.8235 15 18.5346 15 19.4118C15 20.2889 15.6716 21 16.5 21H20C21.1046 21 22 20.0519 22 18.8824C22 17.9554 21.4375 17.1676 20.6543 16.8806M16.7907 17.8533C16.7105 17.6242 16.6667 17.3763 16.6667 17.1176C16.6667 15.9481 17.5621 15 18.6667 15C19.6956 15 20.543 15.8226 20.6543 16.8806M16.7907 17.8533C16.9882 17.8944 17.1718 17.9765 17.3333 18.091"
            stroke="#1C274C"
            className="stroke-blue-500"
            strokeWidth="1.5"
            strokeLinecap="round"
          ></path>{" "}
        </g>
      </svg>
    ),
  },
  {
    title: "Mobile",
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="sm:w-20 sm:h-20 h-14 w-14"
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
          {" "}
          <path
            d="M8.92993 2L8.95993 3.53003C8.97993 4.34003 9.64993 5 10.4599 5H13.4799C14.3099 5 14.9799 4.32 14.9799 3.5V2"
            stroke="#292D32"
            className="stroke-blue-500"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>{" "}
          <path
            d="M17 17L15 19L17 21"
            stroke="#292D32"
            className="stroke-blue-500"
            strokeWidth="1.5"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>{" "}
          <path
            d="M20 17L22 19L20 21"
            stroke="#292D32"
            className="stroke-blue-500"
            strokeWidth="1.5"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>{" "}
          <path
            d="M13 22H8C4.5 22 3 20 3 17V7C3 4 4.5 2 8 2H16C19.5 2 21 4 21 7V14"
            stroke="#292D32"
            className="stroke-blue-500"
            strokeWidth="1.5"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>{" "}
        </g>
      </svg>
    ),
  },
  {
    title: "Freelance",
    icon: (
      <svg
        viewBox="0 0 192 192"
        className="sm:w-20 sm:h-20 h-14 w-14"
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
          <path d="M0 0h192v192H0z" fill="none"></path>
          <path
            d="M121.1 170h34.75V67.04H90.21v-7.72s0-9.01 9.01-9.01h21.88V22H99.22s-43.76 0-43.76 37.32v7.72h-19.3v28.31h19.3v74.64h34.75V95.36h30.89V170Z"
            stroke="#000000"
            className="stroke-blue-500"
            strokeLinejoin="round"
            strokeWidth="12px"
            fill="none"
          ></path>
        </g>
      </svg>
    ),
  },
];

export default function ServicesBlock() {
  return (
    <div className="bg-white rounded-xl shadow-[0_1px_5px_0px] shadow-zinc-300 min-h-72 p-4 sm:p-6 col-span-2 flex flex-col gap-2">
      <GridBlockHeader>Services I Offer</GridBlockHeader>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 flex-1">
        {services.map((service) => (
          <div
            key={service.title}
            className="p-4 rounded-xl bg-blue-50 flex flex-col gap-2 justify-between"
          >
            <div className="aspect-[1.2] flex-1 sm:aspect-video lg:aspect-square bg-white rounded-lg flex-center">
              {service.icon}
            </div>
            <p className="text-center font-semibold text-zinc-700">
              {service.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
