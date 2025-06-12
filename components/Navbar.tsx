"use client";
import Link from "next/link";
import { DarkThemeToggle } from "flowbite-react";
import { usePathname } from "next/navigation";


export default function Navbar() {
  

  const pathname = usePathname();

  return (
    <>
      <nav className="fixed w-full dark:bg-gray-800 bg-purple-100">
        <div className="mx-auto mt-4 flex h-16 max-w-[100%] items-center justify-between p-4">
          <h1 className="text-2xl font-bold text-purple-700 lg:text-4xl dark:text-purple-500">
            Izzeddin Samara
          </h1>
          <ul className="hidden items-center space-x-8 md:flex dark:text-white">
            <li>
              <Link
                href="/"
                className={`text-2xl hover:text-purple-700 md:text-xl dark:hover:text-purple-500 ${
                  pathname === "/"
                    ? "font-bold text-purple-700 dark:text-purple-500"
                    : ""
                }`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className={`text-2xl hover:text-purple-700 md:text-xl dark:hover:text-purple-500 ${
                  pathname === "/about"
                    ? "font-bold text-purple-700 dark:text-purple-500"
                    : ""
                }`}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className={`text-2xl hover:text-purple-700 md:text-xl dark:hover:text-purple-500 ${
                  pathname === "/contact"
                    ? "font-bold text-purple-700 dark:text-purple-500"
                    : ""
                }`}
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                href="/skills"
                className={`text-2xl hover:text-purple-700 md:text-xl dark:hover:text-purple-500 ${
                  pathname === "/skills"
                    ? "font-bold text-purple-700 dark:text-purple-500"
                    : ""
                }`}
              >
                Skills
              </Link>
            </li>
            <li>
              <Link
                href="/projects"
                className={`text-2xl hover:text-purple-700 md:text-xl dark:hover:text-purple-500 ${
                  pathname === "/projects"
                    ? "font-bold text-purple-700 dark:text-purple-500"
                    : ""
                }`}
              >
                Projects 
              </Link>
            </li>
            <li>
              <DarkThemeToggle />
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
