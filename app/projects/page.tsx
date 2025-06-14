import { SiTypescript } from "react-icons/si";
import { FaGlobe } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { HiUsers } from "react-icons/hi2";
import { IoIosRocket } from "react-icons/io";
import Link from "next/link";
import { FaCheckCircle } from "react-icons/fa";

export default function Projects() {
  const projects = [
    {
      name: "TeamBase",
      icon: <HiUsers size={50} />,
      overview:
        "TeamBase is a web application for managing team member information. It includes login and registration, and lets users add, edit, delete, and search employee records.",
      screenshot: "TeamBase.jpg",
      features: [
        "User authentication (login and registration)",
        "Add new employee records",
        "Edit existing employee information",
        "Delete employees",
        "Search employees data",
        "Contact form powered by Mailjet",
        "Responsive and clean user interface",
      ],
      techstack: [
        <FaReact size={60} color="#007acc" />,
        <SiTypescript size={60} color="#007acc" />,
        <RiTailwindCssFill size={60} color="#06b6d4" />,
        <SiExpress size={60} color="black" />,
        <SiMongodb size={60} color="#439934" />,
      ],
      liveDemo: "https://team-base-dd23.vercel.app/",
      githubrepo: "https://github.com/Izzeddin-Samara/TeamBase",
    },
    {
      name: "TechNova",
      icon: <IoIosRocket size={50} />,

      overview:
        "Technova is a modern software services website built with React and Tailwind CSS, offering a range of digital solutions including custom software development, cloud services, UI/UX design, cybersecurity, IT consulting, and digital transformation. It showcases company's services in a clean, responsive, and professional layout",
      screenshot: "TechNova.jpeg",
      features: [
        "Modern, fully responsive design — optimized for all screen sizes",
        "Home page — features a Pricing section and client Testimonials",
        " About Us page — includes Team members and Partnerships",
        " Services page — showcases core offerings with sleek icons",
        "Contact Us page — simple form for easy communication",
        "Careers page — includes an application form with CV upload",
        "Clean, intuitive layout — with a modern Navbar and Footer",
      ],
      techstack: [
        <FaReact size={60} color="#007acc" />,
        <SiTypescript size={60} color="#007acc" />,
        <RiTailwindCssFill size={60} color="#06b6d4" />,
      ],
      liveDemo: "https://tech-nova-tawny.vercel.app/",
      githubrepo: "https://github.com/Izzeddin-Samara/TechNova",
    },
  ];
  return (
    <>
      <div className="dark:bg-gray-800">
        <div className="mx-auto min-h-screen max-w-7xl py-30">
          <div className="text-center">
            <h1 className=" text-5xl font-bold text-purple-700 dark:text-purple-500">
              Projects
            </h1>
            <p className="text-justify mt-10 text-xl w-[90%] mx-auto dark:text-white" >
              Here you'll find a selection of the applications and websites I've
              built. Each project showcases my skills with modern technologies
              and my passion for creating clean, user-friendly experiences. Feel
              free to explore, try the live demos, and get a glimpse of what I
              can do
            </p>
          </div>
          
          {/* Project card */}
          <div className="grid grid-cols-1 md:grid-cols-1">
            {projects.map(({ name, icon, overview, screenshot, features, techstack, liveDemo, githubrepo }, index) => (
              <div className="p-8 text-center dark:text-white bg-" key={index}>
                <div className="mt-8 rounded-lg p-4 shadow-lg bg-purple-200  dark:bg-gray-700">
                  <h1 className="mt-8 flex items-center justify-center gap-2 text-4xl font-bold text-purple-700 dark:text-purple-500">
                    {icon}
                    {name}
                  </h1>
                  <h3 className="mt-16 text-xl font-semibold">Overview:</h3>
                  <div>
                    <p className="mx-auto mt-8 w-3/4 text-justify text-gray-600 dark:text-gray-300">
                      {overview}
                    </p>
                    <div className="mt-8">
                      <img
                        className="mx-auto w-full max-w-4xl rounded-lg shadow-xl"
                        src={screenshot}
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="flex flex-col justify-center gap-16 md:flex-row">
                    <div>
                      <h3 className="mt-8 text-center text-xl font-semibold">
                        Features:
                      </h3>
                      <ul className="mt-8 space-y-4 text-left">
                        {features.map((feature, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <FaCheckCircle
                              className="mt-1 flex-shrink-0 text-green-600 dark:text-green-400"
                              size={18}
                            />
                            <span className="text-sm sm:text-base">
                              {feature}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h3 className="mt-8 text-xl font-semibold">Tech Stack</h3>
                      <ul className="mt-8 flex flex-col items-center justify-center gap-8 md:flex-row">
                        {techstack.map((stack, index) => (
                          <li key={index}>{stack}</li>
                        ))}
                      </ul>
                      <div className="mt-20 flex flex-col justify-center gap-4 md:flex-row">
                        <a
                          href={liveDemo}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <button
                            type="button"
                            className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-lg bg-purple-700 p-4 text-xl text-white outline-none hover:bg-purple-800 hover:shadow-xl focus:ring-4 focus:ring-purple-300"
                          >
                            Live Demo <FaGlobe size={25} />
                          </button>
                        </a>

                        <a
                          href={githubrepo}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <button
                            type="button"
                            className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-lg bg-gray-800 p-4 text-xl text-white outline-none hover:bg-gray-950 hover:shadow-xl focus:ring-4 focus:ring-gray-300"
                          >
                            View on GitHub <FaGithub size={25} />
                          </button>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="px-6 py-30 text-center">
            <h1 className="text-center text-2xl font-bold dark:text-white">
              Have a creative idea, business need, or technical challenge that
              needs a smart solution?
            </h1>
            <p className="mt-8 text-center text-lg dark:text-white">
              Let’s work together to build something that’s smart, scalable, and
              beautifully designed.
            </p>

            <Link href="/contact">
              <button className="mt-8 cursor-pointer rounded-lg bg-purple-700 p-4 text-2xl text-white outline-none hover:bg-purple-800 focus:ring-4 focus:ring-purple-300">
                Contact Me Now!
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
