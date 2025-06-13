import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { SiDjango } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { FaJsSquare } from "react-icons/fa";
import { GrMysql } from "react-icons/gr";

export default function Skills() {
  return (
    <>
      <div className="dark:bg-gray-800">
        <div className="mx-auto min-h-screen max-w-7xl py-30">
          <div className="px-6 text-gray-900 dark:bg-gray-800">
            <h1 className="mt-15 mb-10 text-center text-3xl font-bold text-purple-700 dark:text-purple-500">
              Skills & Technologies
            </h1>
            <p className="mb-4 text-center text-justify text-xl dark:text-white">
              I’m passionate about crafting clean, efficient, and scalable web
              applications using a variety of tools and technologies. Below are
              the key languages, frameworks, databases, and tools I work with
              regularly. I enjoy continuously learning and expanding my skill
              set to stay up-to-date with modern development practices.
            </p>
          </div>
          <div className="mt-15 space-y-15 text-center">
            <div>
              <h1 className="text-2xl font-bold dark:text-white">Languages</h1>
              <ul className="mt-8 flex flex-col items-center justify-center gap-8 md:flex-row">
                <li>
                  <FaHtml5 size={60} color="#ff6d00" />
                </li>
                <li>
                  <FaCss3Alt size={60} color="#214ce5" />
                </li>
                <li>
                  <FaJsSquare size={60} className="text-[#efd81d]" />
                </li>
                <li>
                  <SiTypescript size={52} color="#007acc" />
                </li>
                <li>
                  <img
                    height={60}
                    width={60}
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg"
                  />
                </li>
              </ul>
            </div>
            <div>
              <h1 className="mt-8 text-2xl font-bold dark:text-white">
                Frameworks/Libraries
              </h1>
              <ul className="mt-8 flex flex-col items-center justify-center gap-8 md:flex-row">
                <li>
                  <SiDjango className="dark:text-white" size={60} />
                </li>
                <li>
                  <img
                    height={60}
                    width={60}
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
                  />
                </li>
                <li>
                  <SiExpress className="dark:text-white" size={60} />
                </li>
                <li>
                  <img
                    height={60}
                    width={60}
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg"
                  />
                </li>
                <li>
                  <img
                    height={60}
                    width={60}
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"
                  />
                </li>
              </ul>
            </div>
            <div>
              <h1 className="mt-8 text-2xl font-bold dark:text-white">
                Databases
              </h1>
              <ul className="mt-8 flex flex-col items-center justify-center gap-8 md:flex-row">
                <li>
                  <GrMysql
                    className="text-[oklch(0.44_0.08_246.3)] dark:text-white"
                    size={60}
                  />
                </li>
                <li>
                  <img
                    height={60}
                    width={60}
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg"
                  />
                </li>
              </ul>
            </div>
            <div>
              <h1 className="mt-8 text-2xl font-bold dark:text-white">Tools</h1>
              <ul className="mt-8 flex flex-col items-center justify-center gap-8 md:flex-row">
                <li>
                  <img
                    height={60}
                    width={60}
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg"
                  />
                </li>
                <li>
                  <img height={60} width={60} src="mysqlworkbench.svg" />
                </li>

                <li>
                  <img
                    height={60}
                    width={60}
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg"
                  />
                </li>
                <li>
                  <FaGithub className="dark:text-white" size={60} />
                </li>
                <li>
                  <img height={60} width={60} src="mailjet.webp" />
                </li>
                <li>
                  <img height={60} width={60} src="mailtrap.avif" />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
