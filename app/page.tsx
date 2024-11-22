'use client'
import { useState } from "react";
import Image from "next/image";
import Navbar from "./ui/navbar";
import Sidebar from "./ui/sidebar";

import { BsArrowRight, BsPaperclip } from "react-icons/bs";

export default function Home(this: any) {
  const [prompt, setPrompt] = useState("");
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="grid grid-rows-[20px_1fr_20px] w-full items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:pt-4 font-[family-name:var(--font-geist-sans)]">
        <Navbar />

        <main className="flex flex-col gap-8 row-start-2 items-center w-full px-96">
          <h1 className="text-4xl font-semibold text-center">
            What will you create today?
          </h1>
          <div className="w-full bg-black/[.05] dark:bg-white/[.06] p-4 rounded-lg">

            <div className="w-full relative">
              <div className="py-sm px-md overflow-y-hidden whitespace-pre-wrap break-words max-h-[164px] min-h-[44px] invisible leading-[24px]">
                {prompt}
              </div>
              <textarea
                placeholder="Ask me anything..."
                className="absolute right-0 top-0 bottom-0 left-0 py-sm px-md resize-none leading-[24px] bg-transparent outline-none appearance-none"
                value={prompt}
                onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setPrompt(e.target.value)}
              />
            </div>

            <div className="flex justify-between items-center text-2xl">
              <button title="Upload a file" className="items-center dark:bg-white/[.05] hover:bg-black/[.05] hover:dark:bg-white/[.1] border border-opacity-25 border-black/[0.2] dark:border-white/[0.2] rounded p-1 text-md"><BsPaperclip /></button>
              <button title="Submit" disabled={prompt == ""} className="items-center text-white bg-blue-600 hover:bg-blue-500 dark:bg-blue-600 hover:dark:bg-blue-500 p-1 rounded disabled:text-black/[0.5] disabled:dark:text-white/[0.5] disabled:bg-transparent disabled:hover:bg-transparent"><BsArrowRight /></button>
            </div>
          </div>

          <div className="flex gap-4 items-center flex-col sm:flex-row">
            <a
              className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
              href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                className="dark:invert"
                src="/vercel.svg"
                alt="Vercel logomark"
                width={20}
                height={20}
              />
              Deploy now
            </a>
            <a
              className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
              href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              Read our docs
            </a>
          </div>
        </main>
        <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
          <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              aria-hidden
              src="/file.svg"
              alt="File icon"
              width={16}
              height={16}
            />
            Learn
          </a>
          <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              aria-hidden
              src="/window.svg"
              alt="Window icon"
              width={16}
              height={16}
            />
            Examples
          </a>
          <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              aria-hidden
              src="/globe.svg"
              alt="Globe icon"
              width={16}
              height={16}
            />
            Go to nextjs.org →
          </a>
        </footer>
      </div>
    </div>
  );
}
