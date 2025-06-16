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
        <HiUsers className="text-2xl text-purple-700 md:text-5xl lg:text-6xl" />
      ),
      overview:
        "A full-stack team management app with CRUD, login, and real-time search features.",

      techstack: [
        { id: "react", icon: <FaReact size={60} color="#007acc" /> },
        { id: "ts", icon: <SiTypescript size={60} color="#007acc" /> },
        {
          id: "tailwind",
          icon: <RiTailwindCssFill size={60} color="#06b6d4" />,
        },
        { id: "express", icon: <SiExpress size={60} color="black" /> },
        { id: "mongodb", icon: <SiMongodb size={60} color="#439934" /> },
      ],
      slug: "TeamBase",
    },
    {
      name: "TechNova",
      icon: (
        <IoIosRocket className="text-2xl text-purple-700 md:text-5xl lg:text-6xl" />
      ),

      overview:
        "Technova is a modern software services website, offering a range of digital solutions",

      techstack: [
        { id: "react", icon: <FaReact size={60} color="#007acc" /> },
        { id: "ts", icon: <SiTypescript size={60} color="#007acc" /> },
        {
          id: "tailwind",
          icon: <RiTailwindCssFill size={60} color="#06b6d4" />,
        },
      ],
      slug: "TechNova",
    },
  ];
  return (
    <>
      <div className="w-full py-30">
        <div className="mx-auto max-w-5xl">
          <h1 className="mb-8 text-center text-4xl font-bold text-purple-700 dark:text-purple-500">
            Projects
          </h1>
          <p className="mb-4 text-center text-xl dark:text-white">
            Here are some of major projects I&rsquo;ve worked on recently!
          </p>
          <div className="grid grid-cols-1 gap-10 p-4 md:grid-cols-2">
            {projects.map(
              ({ name, icon, overview, techstack, slug }, index) => (
                <div
                  key={index}
                  className="space-y-10 rounded-lg bg-purple-200 p-8 text-center shadow-xl dark:bg-gray-700 dark:text-white"
                >
                  <h1 className="flex items-center justify-center gap-2 text-2xl font-bold text-purple-700 md:text-4xl dark:text-purple-600">
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
                    <button className="w-2/4 cursor-pointer rounded-lg bg-purple-700 p-4 text-sm font-bold text-white shadow-xl outline-none hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 dark:bg-purple-600 dark:hover:bg-purple-700">
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
