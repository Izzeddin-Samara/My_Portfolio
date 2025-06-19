import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { SiDjango } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { FaJsSquare } from "react-icons/fa";
import { GrMysql } from "react-icons/gr";
import { RiNextjsFill } from "react-icons/ri";
import Link from "next/link";

export default function Skills() {
  return (
    <>
      <div className="mt-15 space-y-15 text-center">
        <h1 className="text-2xl font-bold text-purple-700 md:text-4xl dark:text-purple-500">
          Skills and Technologies
        </h1>
        <div>
          <h1 className="text-2xl font-bold dark:text-white">Languages</h1>
          <ul className="mt-8 flex flex-wrap items-center justify-center gap-8 md:flex-row md:flex-nowrap">
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
                alt="Python Logo"
              />
            </li>
          </ul>
        </div>
        <div>
          <h1 className="mt-8 text-2xl font-bold dark:text-white">
            Frameworks/Libraries
          </h1>
          <ul className="mt-8 flex flex-wrap items-center justify-center gap-8 md:flex-row md:flex-nowrap">
            <li>
              <SiDjango className="dark:text-white" size={60} />
            </li>
            <li>
              <img
                height={60}
                width={60}
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
                alt="React Logo"
              />
            </li>
            <li>
              <RiNextjsFill className="dark:text-white" size={60} />
            </li>
            <li>
              <SiExpress className="dark:text-white" size={60} />
            </li>
            <li>
              <img
                height={60}
                width={60}
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg"
                alt="Bootstrap Logo"
              />
            </li>
            <li>
              <img
                height={60}
                width={60}
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"
                alt="Tailwind CSS Logo"
              />
            </li>
          </ul>
        </div>
        <div>
          <h1 className="mt-8 text-2xl font-bold dark:text-white">Databases</h1>
          <ul className="mt-8 flex flex-wrap items-center justify-center gap-8 md:flex-row md:flex-nowrap">
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
                alt="MongoDB Logo"
              />
            </li>
          </ul>
        </div>
        <div>
          <h1 className="mt-8 text-2xl font-bold dark:text-white">Tools</h1>
          <ul className="mt-8 flex flex-wrap items-center justify-center gap-8 md:flex-row md:flex-nowrap">
            <li>
              <img
                height={60}
                width={60}
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg"
                alt="Postman Logo"
              />
            </li>
            <li>
              <img height={60} width={60} src="mysqlworkbench.svg" alt="MySQL Workbench Logo" />
            </li>

            <li>
              <img
                height={60}
                width={60}
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg"
                alt="Git Logo"
              />
            </li>
            <li>
              <FaGithub className="dark:text-white" size={60} />
            </li>
            <li>
              <img height={60} width={60} src="mailjet.webp" alt="Mailjet Logo" />
            </li>
            <li>
              <img height={60} width={60} src="mailtrap.avif" alt="Mailtrap Logo" />
            </li>
            <li>
              <img
                src="restapi.png"
                alt="REST API"
                height={60}
                width={60}
                className="rounded-lg bg-white p-2 dark:bg-white"
              />
            </li>
          </ul>
        </div>
        <p className="mt-8 mb-10 text-sm leading-loose md:text-xl dark:text-white">
          Interested in learning more about my skill set?{" "}
          <Link
            className="text-md ml-2 border-b-4 border-purple-700 font-bold text-purple-700 transition-all hover:border-transparent dark:border-purple-500 dark:text-purple-500 dark:hover:border-transparent"
            href="/skills"
          >
            Learn more
          </Link>
        </p>
      </div>
    </>
  );
}
