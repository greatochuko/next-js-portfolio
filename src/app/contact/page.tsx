import AboutBlock from "@/components/AboutBlock";
import ContactForm from "@/components/ContactForm";
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
          <ContactForm/>
        </div>
      </div>
    </div>
  );
}
