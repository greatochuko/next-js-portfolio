import AboutBlock from "@/components/AboutBlock";
import React from "react";

export default function ContactPage() {
  return (
    <div className="mt-6 w-[90%] max-w-4xl lg:max-w-7xl mx-auto">
      <div className="flex gap-6 lg:flex-row flex-col">
        <AboutBlock sticky side />
        <div className="bg-white p-4 sm:p-6 rounded-lg shadow-[0_1px_5px_0px] shadow-zinc-300">
          <div className="flex flex-col gap-2 sm:gap-4 md:gap-6 mb-8">
            <h2 className="text-[min(5vw,_30px)]  font-semibold text-zinc-800">
              Let&apos;s 👋 <span className="text-blue-500">Work</span> Together
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-zinc-500 font-[500]">
              I&apos;m here to help if you&apos;re looking for a fullstack web / mobile
              developer to bring your idea to life or a development partner to
              elevate your business to the next level.
            </p>
          </div>
          <form className="flex flex-col gap-4 md:gap-6 p-4 md:p-6 bg-zinc-100 text-zinc-700">
            <div className="flex flex-col md:flex-row gap-6 items-center">
              <div className="flex flex-col gap-2 flex-1 w-full">
                <label htmlFor="name" className="font-semibold">
                  Name
                </label>
                <input
                  name="name"
                  type="text"
                  id="name"
                  placeholder="Enter your name"
                  className="p-3 md:p-4 border rounded-md md:rounded-lg focus:ring ring-blue-400"
                />
              </div>
              <div className="flex flex-col gap-2 flex-1 w-full">
                <label htmlFor="email" className="font-semibold">
                  Email
                </label>
                <input
                  name="emil"
                  type="email"
                  id="email"
                  placeholder="Enter your Email"
                  className="p-3 md:p-4 border rounded-md md:rounded-lg focus:ring ring-blue-400"
                />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="subject" className="font-semibold">
                Subject
              </label>
              <input
                name="subject"
                type="text"
                id="subject"
                placeholder="Subject"
                className="p-3 md:p-4 border rounded-md md:rounded-lg focus:ring ring-blue-400"
              />
            </div>

            <div className="flex flex-col gap-2 col-span-2">
              <label htmlFor="message" className="font-semibold">
                Message
              </label>
              <textarea
                name="message"
                id="message"
                placeholder="Type details about your enquiry"
                className="resize-none aspect-video md:aspect-[2.5] p-4 border rounded-md md:rounded-lg focus:ring ring-blue-400"
              ></textarea>
            </div>
            <button
              type="submit"
              className="col-span-2 font-semibold bg-blue-500 text-white rounded-md md:rounded-lg p-3 md:p-4 disabled:bg-zinc-500 hover:bg-blue-600/90 active:bg-blue-600 duration-300 focus-visible:ring ring-blue-400"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
