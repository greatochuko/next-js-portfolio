import AboutBlock from "@/components/AboutBlock";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function ContactPage() {
  return (
    <div className="mt-6 w-[90%] max-w-4xl lg:max-w-7xl mx-auto ">
      <div className="flex gap-6">
        <AboutBlock sticky />
        <div className="bg-white p-4 sm:p-6 rounded-lg shadow-[0_1px_5px_0px] shadow-zinc-300">
          <div className="flex flex-col gap-2 sm:gap-4 md:gap-6 mb-8">
            <h2 className="text-[min(5vw,_30px)]  font-semibold text-zinc-800">
              Let's 👋 <span className="text-blue-500">Work</span> Together
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-zinc-500 font-[500]">
              I'm here to help if you're looking for a fullstack web / mobile
              developer to bring your idea to life or a development partner to
              elevate your business to the next level.
            </p>
          </div>
          <form className="grid grid-cols-2 gap-6 p-6 bg-zinc-100 text-zinc-700">
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="font-semibold">
                Name
              </label>
              <input
                name="name"
                type="text"
                id="name"
                placeholder="Enter your name"
                className="p-4 border rounded-lg focus:ring ring-blue-400"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="font-semibold">
                Email
              </label>
              <input
                name="emil"
                type="email"
                id="email"
                placeholder="Enter your name"
                className="p-4 border rounded-lg focus:ring ring-blue-400"
              />
            </div>
            <div className="flex flex-col gap-2 col-span-2">
              <label htmlFor="subject" className="font-semibold">
                Subject
              </label>
              <input
                name="subject"
                type="text"
                id="subject"
                placeholder="Enter your name"
                className="p-4 border rounded-lg focus:ring ring-blue-400 w-[calc(50%-12px)]"
              />
            </div>

            <div className="flex flex-col gap-2 col-span-2">
              <label htmlFor="message" className="font-semibold">
                Message
              </label>
              <textarea
                name="message"
                id="message"
                className="resize-none aspect-[2.5] p-4 border rounded-lg focus:ring ring-blue-400"
              ></textarea>
            </div>
            <button
              type="submit"
              className="col-span-2 bg-blue-500 text-white rounded-lg p-4 disabled:bg-zinc-500 hover:bg-blue-600/90 active:bg-blue-600 duration-300 focus-visible:ring ring-blue-400"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
