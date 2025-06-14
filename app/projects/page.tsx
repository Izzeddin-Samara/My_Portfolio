import { SiTypescript } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { HiUsers } from "react-icons/hi2";
import { IoIosRocket } from "react-icons/io";


export default function Projects() {
  const projects = [
    {
      name: "TeamBase",
      icon: <HiUsers size={50} />,
      overview:
        "TeamBase is a web application for managing team member information. It includes login and registration, and lets users add, edit, delete, and search employee records.",
      screenshot: "Home.jpg",
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
        </div>
      </div>
    </>
  );
}
