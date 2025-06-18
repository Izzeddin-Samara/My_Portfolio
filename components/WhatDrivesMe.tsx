import Link from "next/link";
export default function WhatDrivesMe() {
  return (
    <>
      <div className="h-auto p-4">
        <div className="mx-auto max-w-7xl text-center">
          <h1 className="md:text-4xl text-2xl font-bold text-purple-700 dark:text-purple-500">
            What Drives me?
          </h1>
          <p className="mt-8 text-justify text-lg leading-loose md:text-xl dark:text-white">
            My path to web development might not be traditional — I started with
            accounting and sales, but curiosity and a love for technology led me
            here. I believe that every website should be more than just code; it
            should be a thoughtful experience crafted with care. Combining my
            background in customer service with modern frontend skills like
            React and Tailwind, I focus on building sites that are both
            functional and meaningful. Learning never stops for me — I’m always
            eager to explore new tools, sharpen my craft, and turn ideas into
            real, user-friendly solutions.
          </p>
            <p className="mt-8 mb-10 md:text-xl text-sm leading-loose dark:text-white">
              Want to know more about my journey and what I’m working toward?{" "}
              <Link
                className="text-md ml-2 border-b-4 border-purple-700 font-bold text-purple-700 transition-all hover:border-transparent dark:border-purple-500 dark:text-purple-500 dark:hover:border-transparent"
                href="/about"
              >
                Learn more
              </Link>
            </p>
        </div>
      </div>
    </>
  );
}
