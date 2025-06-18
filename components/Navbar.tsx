"use client";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Link from "next/link";
import { DarkThemeToggle } from "flowbite-react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isOpen, setIsopen] = useState(false);

  const toggle = () => {
    setIsopen(!isOpen);
  };

  const pathname = usePathname();

  return (
    <>
      <nav className="fixed z-50 w-full dark:bg-gray-800 bg-purple-200">
        <div className="mx-auto mt-4 flex h-16 max-w-[100%] items-center justify-between p-4">
          <Link href="/">
            <h1 className="text-2xl font-bold text-purple-700 lg:text-4xl dark:text-purple-500">
              Izzeddin Samara
            </h1>
          </Link>

          <ul className="hidden items-center space-x-8 lg:flex dark:text-white">
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
          {/* Hamburger Icon (only visible on mobile) */}
          <button onClick={toggle} className="m-4 lg:hidden dark:text-white">
            {isOpen ? <FaTimes size={30} /> : <FaBars size={30} />}
          </button>
        </div>

        {/* Mobile Menu (Hidden by default, shown when `isOpen` is true) */}
        <ul
          className={`space-y-4 bg-gray-300 p-4 text-center lg:hidden dark:bg-gray-700 dark:text-white ${
            isOpen ? "block" : "hidden"
          }`}
        >
          <li>
            <Link
              href="/"
              className={`text-lg hover:text-purple-700 md:text-xl dark:hover:text-purple-500 ${
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
              className={`text-lg hover:text-purple-700 md:text-xl dark:hover:text-purple-500 ${
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
              className={`text-lg hover:text-purple-700 md:text-xl dark:hover:text-purple-500 ${
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
              className={`text-lg hover:text-purple-700 md:text-xl dark:hover:text-purple-500 ${
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
              className={`text-lg hover:text-purple-700 md:text-xl dark:hover:text-purple-500 ${
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
      </nav>
    </>
  );
}
