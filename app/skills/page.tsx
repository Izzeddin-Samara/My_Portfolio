import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { SiDjango } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { FaJsSquare } from "react-icons/fa";
import { GrMysql } from "react-icons/gr";
import { RiNextjsFill } from "react-icons/ri";

export default function Skills() {
  return (
    <>
      <div>
        <div className="mx-auto mt-40 min-h-screen max-w-7xl">
          <div className="px-6 text-gray-900">
            <h1 className="mt-15 mb-10 text-center text-2xl font-bold text-purple-700 md:text-3xl dark:text-purple-500">
              Skills & Technologies
            </h1>
            <p className="mb-4 text-center text-justify text-lg leading-loose md:text-xl dark:text-white">
              I’m passionate about crafting clean, efficient, and scalable web
              applications using a variety of tools and technologies. Below are
              the key languages, frameworks, databases, and tools I have worked
              with. I enjoy continuously learning and expanding my skill set to
              stay up-to-date with modern development practices.
            </p>
          </div>
          <div className="mt-15 space-y-15 text-center">
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
              <h1 className="mt-8 text-2xl font-bold dark:text-white">
                Databases
              </h1>
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
                  <img
                    height={60}
                    width={60}
                    src="mysqlworkbench.svg"
                    alt="MySQL Workbench Logo"
                  />
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
                  <img
                    height={60}
                    width={60}
                    src="mailjet.webp"
                    alt="Mailjet Logo"
                  />
                </li>
                <li>
                  <img
                    height={60}
                    width={60}
                    src="mailtrap.avif"
                    alt="Mailtrap Logo"
                  />
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
          </div>
          <div className="px-6 py-10 text-gray-900">
            <h1 className="mt-15 mb-10 text-center text-2xl font-bold text-purple-700 md:text-3xl dark:text-purple-500">
              Soft Skills & Strengths
            </h1>
            <p className="mb-8 text-center text-justify text-lg leading-loose md:text-xl dark:text-white">
              Beyond technical skills, I believe that effective communication,
              strong problem-solving abilities, and teamwork are the
              cornerstones of successful software development. I take pride in
              clearly articulating ideas and actively listening to teammates and
              clients to ensure alignment and understanding.
            </p>
            <p className="mb-8 text-center text-justify text-lg leading-loose md:text-xl dark:text-white">
              I excel at breaking down complex problems into manageable steps
              and approaching challenges with a positive, solution-oriented
              mindset. Collaboration energizes me — I enjoy contributing to a
              team environment where different perspectives come together to
              create better outcomes. Time management and organization are also
              key strengths of mine, allowing me to balance multiple tasks and
              deadlines without compromising quality
            </p>
            <p className="mb-8 text-center text-justify text-lg leading-loose md:text-xl dark:text-white">
              In addition, I’m adaptable and open-minded, ready to take
              constructive feedback and continuously improve both my technical
              and interpersonal skills. These soft skills enable me to work
              efficiently within diverse teams and contribute meaningfully to
              projects from start to finish
            </p>
          </div>

          <div className="px-6 text-gray-900">
            <h1 className="mt-15 mb-10 text-center text-2xl font-bold text-purple-700 md:text-3xl dark:text-purple-500">
              Continuous Learning
            </h1>
            <p className="mb-8 text-center text-justify text-lg leading-loose md:text-xl dark:text-white">
              The tech landscape is constantly evolving, and staying current is
              critical to remaining effective and innovative as a developer. I
              am deeply committed to lifelong learning and embrace every
              opportunity to expand my knowledge and expertise
            </p>
            <p className="mb-8 text-center text-justify text-lg leading-loose md:text-xl dark:text-white">
              I learn best by doing. Whether I’m coding a new project from
              scratch or exploring a fresh library just out of curiosity, I
              always seek to turn theory into practice. I believe in learning
              through experimentation, and I love that moment when things
              finally click after trial and error — it’s what keeps me growing
              and excited about development.
            </p>

            <p className="mb-8 text-center text-justify text-lg leading-loose md:text-xl dark:text-white">
              I also believe hands-on experience is invaluable — I enjoy
              building side projects that challenge me to apply new concepts and
              technologies in real-world contexts. This ongoing learning mindset
              not only fuels my personal growth but also helps me deliver more
              modern, efficient, and user-friendly software solutions
            </p>
          </div>
          <div className="px-6 py-20 text-center">
            <h1 className="text-md text-center text-justify font-bold md:text-2xl dark:text-white">
              Need a frontend developer who can turn ideas into clean,
              responsive, and modern interfaces?
            </h1>
            <p className="mt-4 text-center text-sm md:mt-8 md:text-xl dark:text-white">
              Let’s build something awesome together.
            </p>

            <Link href="/contact">
              <button className="mt-4 cursor-pointer rounded-lg bg-purple-700 p-4 text-sm text-white outline-none hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 md:mt-8 md:text-2xl">
                Contact Me Now!
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
