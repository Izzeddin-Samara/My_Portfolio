import Link from "next/link";

export default function About() {
  return (
    <>
      <div className="mt-15">
        <div className="mx-auto min-h-screen max-w-7xl py-15">
          <div className="px-6 text-gray-900">
            <h1 className="mt-15 mb-10 text-center md:text-3xl text-2xl font-bold text-purple-700 md:text-4xl dark:text-purple-500">
              About me
            </h1>
            <p className="text-lg md:text-xl mb-4 text-center text-justify leading-loose md:text-xl dark:text-white">
              I&rsquo;m Izzeddin, a{" "}
              <span className="font-bold text-purple-700 dark:text-purple-400">
                Frontend Developer
              </span>{" "}
              with a strong passion for building beautiful and functional web
              experiences. I completed a full-stack development bootcamp at
              AXSOS Academy and have a degree in Accounting from An-Najah
              National University. I&rsquo;m currently focusing on React, Tailwind
              CSS, and modern web development. With a background in customer
              service and a sharp eye for design, I enjoy designing sleek
              interfaces and turning concepts into interactive web experiences.
            </p>
          </div>
          <div className="md:text-xl text-lg px-6 py-20 md:text-xl dark:text-white">
            <h1 className="text-center md:text-3xl text-xl font-bold text-purple-700 md:text-4xl dark:text-purple-500">
              Why I Entered Web Development?
            </h1>
            <p className="mt-8 mb-4 text-center text-justify leading-loose">
              My journey into web development started from a growing curiosity
              about how websites are built. I come from a different background — 
              I studied accounting and worked in sales for several years. But
              over time, I realized I wanted to do something more creative and
              technical. I&rsquo;ve always been interested in technology, and the idea
              of building something from scratch that people can use online
              really appealed to me.
            </p>
            <p className="mt-8 mb-4 text-center text-justify leading-loose">
              I joined a full-stack development bootcamp where I built real
              projects using HTML, CSS, JavaScript and backend tools like
              Django. Through that experience, I discovered how much I enjoy
              frontend development — especially the process of turning ideas and
              designs into responsive, user-friendly interfaces.
            </p>
            <p className="mt-8 mb-4 text-center text-justify leading-loose">
              Now, I focus mostly on technologies like React, Next.js,
              TypeScript, and Tailwind CSS. I enjoy creating clean, modern, and
              accessible web experiences, and I&rsquo;m continuously learning to
              improve my skills. Web development gives me a strong sense of
              purpose, combining creativity with problem-solving, and that&rsquo;s why
              I chose this path.
            </p>
          </div>
          <div className="text-lg md:text-xl px-6 md:py-5 md:text-xl dark:text-white">
            <h1 className="text-center md:text-3xl text-2xl font-bold text-purple-700 md:text-4xl dark:text-purple-500">
              My Long-Term Goals
            </h1>
            <p className="mb-4 mt-8 text-center text-justify leading-loose">
              In the long run, I want to become a highly skilled full-stack
              developer who can build complete, scalable web applications from
              start to finish. I aim to deepen my knowledge of modern frontend
              frameworks like React and Next.js, while also expanding my backend
              skills with Node.js and databases.
            </p>
            <p className="mb-4 mt-8 text-center text-justify leading-loose">
              I&rsquo;m passionate about creating clean, efficient, and accessible
              user experiences, and I hope to work on projects that make a
              positive impact on users&rsquo; lives. Eventually, I want to contribute
              to open-source projects, collaborate with talented teams, and
              maybe even lead development projects.
            </p>
            <p className="mb-4 mt-8 text-center text-justify leading-loose">
              Continuous learning is very important to me — I plan to stay
              up-to-date with new technologies, improve my problem-solving
              skills, and maybe explore areas like UI/UX design and cloud
              deployment. Ultimately, my goal is to build a rewarding career in
              web development and keep growing both professionally and
              personally.
            </p>
          </div>

          {/* CTA Section */}
          <div className="px-6 text-center mt-15">
            <h1 className="text-justify text-xl font-bold md:text-2xl dark:text-white">
              Looking for a passionate frontend developer who&rsquo;s always learning
              and eager to bring ideas to life?
            </h1>
            <p className="mt-8 text-justify text-sm md:text-xl dark:text-white">
              I&rsquo;d love to connect and explore opportunities where I can
              contribute, grow, and build great things together.
            </p>
            <Link href="/contact">
              <button className="mt-8 cursor-pointer rounded-lg bg-purple-700 p-4 md:text-xl text-sm font-bold text-white outline-none hover:bg-purple-800 focus:ring-4 focus:ring-purple-300">
                Contact Me Now!
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
