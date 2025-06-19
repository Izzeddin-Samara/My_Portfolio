import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { IoIosRocket } from "react-icons/io";
import { HiUsers } from "react-icons/hi2";
import Link from "next/link";

export default function Projects() {
  const projects = [
    {
      name: "TeamBase",
      icon: (
        <HiUsers className="text-2xl text-purple-700 md:text-3xl" />
      ),
      overview:
        "A full-stack team management app with CRUD, login, and real-time search features.",

      techstack: [
        { id: "react", icon: <FaReact className="text-3xl md:text-4xl" color="#007acc" /> },
        { id: "ts", icon: <SiTypescript className="text-3xl md:text-4xl" color="#007acc" /> },
        {
          id: "tailwind",
          icon: <RiTailwindCssFill className="text-3xl md:text-4xl" color="#06b6d4" />,
        },
        { id: "express", icon: <SiExpress className="text-3xl md:text-4xl" color="black" /> },
        { id: "mongodb", icon: <SiMongodb className="text-3xl md:text-4xl" color="#439934" /> },
      ],
      slug: "TeamBase",
    },
    {
      name: "TechNova",
      icon: (
        <IoIosRocket className="text-2xl text-purple-700 md:text-3xl" />
      ),

      overview:
        "Technova is a modern software services website, offering a range of digital solutions",

      techstack: [
        { id: "react", icon: <FaReact className="text-3xl md:text-4xl" color="#007acc" /> },
        { id: "ts", icon: <SiTypescript className="text-3xl md:text-4xl" color="#007acc" /> },
        {
          id: "tailwind",
          icon: <RiTailwindCssFill className="text-3xl md:text-4xl" color="#06b6d4" />,
        },
      ],
      slug: "TechNova",
    },
  ];
  return (
    <>
      <div className="w-full py-20">
        <div className="mx-auto max-w-5xl">
          <h1 className="mb-8 text-center text-4xl font-bold text-purple-700 dark:text-purple-500">
            Projects
          </h1>
          <p className="mb-4 text-center text-lg dark:text-white">
            Here are some of major projects I&rsquo;ve worked on recently!
          </p>
          <div className="grid grid-cols-1 gap-5 p-4 md:grid-cols-2">
            {projects.map(
              ({ name, icon, overview, techstack, slug }, index) => (
                <div
                  key={index}
                  className="space-y-10 md:w-[90%] mx-auto rounded-lg bg-purple-300 p-8 text-center shadow-xl dark:bg-gray-700 dark:text-white"
                >
                  <h1 className=" flex items-center justify-center gap-2 text-2xl font-bold text-purple-700 md:text-3xl dark:text-purple-600">
                    {icon}
                    {name}
                  </h1>

                  <h3 className="mt-8 mb-4 text-lg font-semibold">Overview</h3>
                  <p className="text-justify text-sm">{overview}</p>
                  <h3 className="mt-8 text-lg font-semibold">Tech Stack</h3>

                  <ul className="mt-8 flex flex-wrap md:flex-nowrap items-center justify-center gap-8 md:flex-row">
                    {techstack.map((stack) => (
                      <li key={stack.id}>{stack.icon}</li>
                    ))}
                  </ul>
                  <Link href={`/projects#${slug}`}>
                    <button className="md:w-[60%] w-[80%]  cursor-pointer rounded-lg bg-purple-700 p-4 text-md md:text-xl font-bold text-white shadow-xl outline-none hover:bg-purple-800 focus:ring-4 focus:ring-purple-400 dark:bg-purple-600 dark:hover:bg-purple-700">
                      Learn more
                    </button>
                  </Link>
                </div>
              ),
            )}
          </div>
        </div>
      </div>
    </>
  );
}
