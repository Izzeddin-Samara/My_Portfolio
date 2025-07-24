import { IoSend } from "react-icons/io5";
import Link from "next/link";
import { FaDownload } from "react-icons/fa";
import { PiHandWavingFill } from "react-icons/pi";

export default function HeroSection() {
  return (
    <>
      <div className="w-full py-40">
        <div className="mx-auto max-w-7xl p-4 md:p-8">
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
            <div>
              <img
                src="izzeddin-image.jpg"
                className="mx-auto w-48 rounded-full object-cover md:w-96"
                alt="izzeddin"
              />{" "}
            </div>
            <div className="mt-10 w-full text-center">
              <h1 className="mx-auto flex items-center justify-center gap-2 text-2xl leading-tight font-bold md:text-5xl dark:text-white">
                Hi, I&rsquo;m Izzeddin{" "}
                <PiHandWavingFill className="wave mb-4 text-4xl text-purple-700 md:text-7xl" />
              </h1>
              <p className="text-md mx-auto mt-12 text-justify text-lg lg:text-xl dark:text-white">
                Passionate{" "}
                <span className="font-bold text-purple-700 dark:text-purple-500">
                  Web Developer
                </span>{" "}
                skilled in React, TypeScript, and Tailwind CSS. I build modern,
                responsive apps with clean design and have experience with
                backend tools like Express and Django.
              </p>

              <div className="mt-10 flex justify-center gap-2">
                <a href="/izzeddin-cv.pdf" target="_blank">
                  <button
                    type="button"
                    className="flex cursor-pointer items-center gap-2 rounded-lg bg-purple-700 p-4 text-sm text-white outline-none hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 md:text-lg"
                  >
                    Download CV <FaDownload size={25} />
                  </button>
                </a>

                <Link href="/contact">
                  <button
                    type="button"
                    className="flex cursor-pointer items-center gap-2 rounded-lg bg-gray-500 p-4 text-sm text-white outline-none hover:bg-gray-600 focus:ring-4 focus:ring-gray-300 md:text-lg"
                  >
                    Contact me <IoSend size={25} />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
