import Link from "next/link";

export default function About() {
  return (
    <>
      <div className="dark:bg-gray-800">
        <div className="mx-auto min-h-screen max-w-7xl py-30">
          <div className="px-6 text-gray-900 dark:bg-gray-800">
            <h1 className="mt-15 mb-10 text-center text-2xl font-bold text-purple-700 md:text-4xl dark:text-purple-500">
              About me
            </h1>
            <p className="text-md mb-4 text-center text-justify md:text-lg dark:text-white">
              I'm Izzeddin, a{" "}
              <span className="font-bold text-purple-700 dark:text-purple-400">
                Frontend Developer
              </span>{" "}
              with a strong passion for building beautiful and functional web
              experiences. I completed a full-stack development bootcamp at
              AXSOS Academy and have a degree in Accounting from An-Najah
              National University. I'm currently focusing on React, Tailwind
              CSS, and modern web development. With a background in customer
              service and a sharp eye for design, I enjoy designing sleek
              interfaces and turning concepts into interactive web experiences.
            </p>
          </div>
          <div className="text-md px-6 py-20 md:text-lg dark:text-white">
            <h1 className="text-center text-2xl font-bold text-purple-700 md:text-4xl dark:text-purple-500">
              Why I Entered Web Development?
            </h1>
            <p className="mt-8 mb-4 text-center text-justify">
              My journey into web development started from a growing curiosity
              about how websites are built. I come from a different background —
              I studied accounting and worked in sales for several years. But
              over time, I realized I wanted to do something more creative and
              technical. I’ve always been interested in technology, and the idea
              of building something from scratch that people can use online
              really appealed to me.
            </p>
            <p className="text- mt- mb-4 text-center text-justify">
              I joined a full-stack development bootcamp where I built real
              projects using HTML, CSS, JavaScript and backend tools like
              Django. Through that experience, I discovered how much I enjoy
              frontend development — especially the process of turning ideas and
              designs into responsive, user-friendly interfaces
            </p>
            <p className="text- mt- mb-4 text-center text-justify">
              Now, I focus mostly on technologies like React, Next.js,
              TypeScript, and Tailwind CSS. I enjoy creating clean, modern, and
              accessible web experiences, and I’m continuously learning to
              improve my skills. Web development gives me a strong sense of
              purpose, combining creativity with problem-solving, and that's why
              I chose this path
            </p>
          </div>
          <div className="text-md px-6 md:py-5 md:text-lg dark:text-white">
            <h1 className="text-center text-2xl font-bold text-purple-700 md:text-4xl dark:text-purple-500">
              My Long-Term Goals
            </h1>
            <p className="mb- mt-8 text-center text-justify">
              In the long run, I want to become a highly skilled full-stack
              developer who can build complete, scalable web applications from
              start to finish. I aim to deepen my knowledge of modern frontend
              frameworks like React and Next.js, while also expanding my backend
              skills with Node.js and databases.
            </p>
            <p className="mb- mt-4 text-center text-justify">
              I’m passionate about creating clean, efficient, and accessible
              user experiences, and I hope to work on projects that make a
              positive impact on users’ lives. Eventually, I want to contribute
              to open-source projects, collaborate with talented teams, and
              maybe even lead development projects.
            </p>
            <p className="mb- mt-4 text-center text-justify">
              Continuous learning is very important to me — I plan to stay
              up-to-date with new technologies, improve my problem-solving
              skills, and maybe explore areas like UI/UX design and cloud
              deployment. Ultimately, my goal is to build a rewarding career in
              web development and keep growing both professionally and
              personally.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
