import Image from "next/image";
import React from "react";

export default function FullscreenImagePreview({
  currentIndex,
  setCurrentIndex,
  images,
}: {
  currentIndex: number | null;
  setCurrentIndex: React.Dispatch<React.SetStateAction<number | null>>;
  images: string[];
}) {
  function showNextImage() {
    if ((currentIndex as number) >= images.length - 1) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex((curr) => (curr as number) + 1);
    }
  }

  function showPreviousImage() {
    if ((currentIndex as number) <= 0) {
      setCurrentIndex(images.length - 1);
    } else {
      setCurrentIndex((curr) => (curr as number) - 1);
    }
  }

  return (
    <div
      className={`w-full h-full fixed bg-black/80 z-20 top-0 left-0 transition-all flex-center ${
        currentIndex !== null
          ? "visible opacity-100 duration-300"
          : "invisible opacity-0"
      }`}
      onClick={() => setCurrentIndex(null)}
    >
      <div
        className="relative w-[90%] max-w-4xl overflow-hidden aspect-[1.5]"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={() => setCurrentIndex(null)}
          className="top-0 left-[50%] absolute bg-black/40 shadow-md p-4 rounded-full -translate-x-[50%] -translate-y-[150%] lg:-translate-y-[120%]"
        >
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
                  stroke="#fff"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>{" "}
              </g>{" "}
            </g>
          </svg>
        </button>
        <div className="top-0 left-0 absolute flex w-fit h-full">
          {images.map((image) => (
            <div
              className="relative flex-1 h-full duration-300 aspect-[1.5]"
              style={{
                transform: `translateX(-${
                  currentIndex ? currentIndex * 100 : 0
                }%)`,
              }}
            >
              <Image
                src={image}
                fill
                alt=""
                className={`object-contain duration-300 ${
                  currentIndex === images.indexOf(image) ? "" : "scale-[80%]"
                }`}
              ></Image>
            </div>
          ))}
        </div>
        <button
          onClick={showPreviousImage}
          className="top-[50%] left-0 absolute bg-black/50 hover:bg-black/70 px-1 sm:px-3 py-3 sm:py-6 rounded-r-lg -translate-y-[50%] duration-300 group"
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
                className="group-hover:stroke-white group-disabled:stroke-zinc-400 stroke-zinc-100"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </g>
          </svg>
        </button>
        <button
          onClick={showNextImage}
          className="top-[50%] right-0 absolute bg-black/50 hover:bg-black/70 px-1 sm:px-3 py-3 sm:py-6 rounded-l-lg -translate-y-[50%] duration-300 group"
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
                className="group-hover:stroke-white group-disabled:stroke-zinc-400 stroke-zinc-100"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </g>
          </svg>
        </button>
      </div>
    </div>
  );
}
