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
        </div>
      </div>
    </>
  );
}
