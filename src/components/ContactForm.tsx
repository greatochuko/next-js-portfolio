"use client"
import React from 'react'

export default function ContactForm() {
  return (
    <form onSubmit={e=>e.preventDefault()} className="flex flex-col gap-4 md:gap-6 p-4 md:p-6 bg-zinc-100 text-zinc-700">
            <div className="flex flex-col md:flex-row gap-6 items-center">
              <div className="flex flex-col gap-2 flex-1 w-full">
                <label htmlFor="name" className="font-semibold">
                  Name
                </label>
                <input
                  name="name"
                  type="text"
                  id="name"
                  required
                  placeholder="Enter your name"
                  className="p-3 md:p-4 border rounded-md md:rounded-lg focus-visible:ring ring-blue-400"
                />
              </div>
              <div className="flex flex-col gap-2 flex-1 w-full">
                <label htmlFor="email" className="font-semibold">
                  Email
                </label>
                <input
                  name="email"
                  type="email"
                  id="email"
                  required
                  placeholder="Enter your Email"
                  className="p-3 md:p-4 border rounded-md md:rounded-lg focus-visible:ring ring-blue-400"
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
                required
                placeholder="Subject"
                className="p-3 md:p-4 border rounded-md md:rounded-lg focus-visible:ring ring-blue-400"
                />
            </div>

            <div className="flex flex-col gap-2 col-span-2">
              <label htmlFor="message" className="font-semibold">
                Message
              </label>
              <textarea
                name="message"
                id="message"
                required
                placeholder="Type details about your enquiry"
                className="resize-none aspect-video md:aspect-[2.5] p-4 border rounded-md md:rounded-lg focus-visible:ring ring-blue-400"
              ></textarea>
            </div>
            <button
              type="submit"
              className="col-span-2 font-semibold bg-blue-500 text-white rounded-md md:rounded-lg p-3 md:p-4 disabled:bg-zinc-500 hover:bg-blue-600/90 active:bg-blue-600 duration-300 focus-visible-visible:ring ring-blue-400"
            >
              Send Message
            </button>
          </form>
  )
}
