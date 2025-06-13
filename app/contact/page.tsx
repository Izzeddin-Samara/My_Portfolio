import { FaLocationDot } from "react-icons/fa6";
import { FaEnvelope } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

export default function Contact() {
  return (
    <>
      <div className="dark:bg-gray-800">
        {/* Contact Header */}
        <div className="mx-auto mt-10 h-auto max-w-5xl p-1 py-20">
          <div className="flex h-[200px] items-center">
            <div className="w-full text-center">
              <h1 className="text-3xl font-bold text-purple-700 md:text-3xl lg:text-5xl">
                Contact me
              </h1>
              <p className="mt-4 text-lg dark:text-white">
                Have a project in mind? let's connect! Fill out the form below
                and I Will get back to you so!
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
