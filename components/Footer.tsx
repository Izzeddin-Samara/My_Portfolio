import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { SiCalendly } from "react-icons/si";

import Link from "next/link";

export default function Footer() {
  return (
    <>
      <footer className="bg-purple-300 p-4 dark:bg-gray-800">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div>
            <Link href="/">
              <h1 className="text-center text-xl font-bold text-purple-700 md:text-left dark:text-purple-500">
                Izzeddin Samara
              </h1>
            </Link>
          </div>
          <div>
            <ul className="flex flex-col items-center justify-center gap-6 md:flex-row dark:text-white">
              <li>
                <Link
                  className="border-b-2 border-transparent pb-0.5 text-sm transition-all hover:border-purple-700 dark:hover:border-purple-500"
                  href="/"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  className="border-b-2 border-transparent pb-0.5 text-sm transition-all hover:border-purple-700 dark:hover:border-purple-500"
                  href="/about"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  className="border-b-2 border-transparent pb-0.5 text-sm transition-all hover:border-purple-700 dark:hover:border-purple-500"
                  href="/contact"
                >
                  Contact
                </Link>
              </li>

              <li>
                <Link
                  className="border-b-2 border-transparent pb-0.5 text-sm transition-all hover:border-purple-700 dark:hover:border-purple-500"
                  href="/skills"
                >
                  Skills
                </Link>
              </li>

              <li>
                <Link
                  className="border-b-2 border-transparent pb-0.5 text-sm transition-all hover:border-purple-700 dark:hover:border-purple-500"
                  href="/projects"
                >
                  Projects
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <ul className="mt-1 flex justify-center gap-6 md:justify-end dark:text-white">
              <li>
                <a
                  href="https://github.com/Izzeddin-Samara"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-purple-700 dark:hover:text-purple-400"
                >
                  <FaGithub size={20} />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/izzeddin-samara/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-purple-700 dark:hover:text-purple-400"
                >
                  <FaLinkedin size={20} />
                </a>
              </li>
              <li>
                <a
                  href="mailto:izzeddinsamara@outlook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-purple-700 dark:hover:text-purple-400"
                >
                  <FaEnvelope size={20} />
                </a>
              </li>
              <li>
                <a
                  href="https://calendly.com/izzidinsamara/30min?month=2025-06"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-purple-700 dark:hover:text-purple-400"
                >
                  <SiCalendly size={20} />
                </a>
              </li>
              <li>
                <a
                  href="https://api.whatsapp.com/send/?phone=00972595484832&text&type=phone_number&app_absent=0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-purple-700 dark:hover:text-purple-400"
                >
                  <FaWhatsapp size={20} />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <hr className="my-6 border-purple-700 sm:mx-auto lg:my-4 dark:border-purple-500" />{" "}
        <p className="mt-2 text-center text-xs text-gray-950 dark:text-white">
          © Izzeddin Samara 2025, All rights reserved.
        </p>
      </footer>
    </>
  );
}
