import React from "react";

export default function ToastNotification({
  children,
  show,
}: {
  children: React.ReactNode;
  show: boolean;
}) {
  return (
    <div
      className={`flex fixed p-3 right-10 top-0 duration-300 ease-out border w-68 border-green-500 z-30 text-sm font-normal items-center gap-4 bg-green-50 text-zinc-700 rounded-md ${
        show ? "translate-y-4" : "-translate-y-[120%]"
      }`}
    >
      <div className="aspect-square flex-center p-1 bg-[#29ab87] rounded-full">
        <svg
          viewBox="0 0 24 24"
          height={12}
          width={12}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          strokeWidth={2}
          stroke="white"
        >
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={200}
          ></g>
          <g id="SVGRepo_iconCarrier">
            {" "}
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M21.5821 5.54289C21.9726 5.93342 21.9726 6.56658 21.5821 6.95711L10.2526 18.2867C9.86452 18.6747 9.23627 18.6775 8.84475 18.293L2.29929 11.8644C1.90527 11.4774 1.89956 10.8443 2.28655 10.4503C2.67354 10.0562 3.30668 10.0505 3.70071 10.4375L9.53911 16.1717L20.1679 5.54289C20.5584 5.15237 21.1916 5.15237 21.5821 5.54289Z"
              fill="#fff"
            ></path>{" "}
          </g>
        </svg>
      </div>
      <p className="flex-1">{children}</p>
      <button className="group p-1">
        <svg
          viewBox="0 0 24 24"
          height={24}
          width={24}
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
            <g id="Menu / Close_SM">
              {" "}
              <path
                id="Vector"
                d="M16 16L12 12M12 12L8 8M12 12L16 8M12 12L8 16"
                stroke="#000"
                className="stroke-zinc-400 group-hover:stroke-red-400 duration-300"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>{" "}
            </g>{" "}
          </g>
        </svg>
      </button>
    </div>
  );
}
