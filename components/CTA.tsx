import Link from "next/link";

export default function CTA() {
  return (
    <>
      <div className="px-6 py-20 text-center w-3/4 mx-auto">
        <h1 className="text-center text-xl font-bold md:text-xl  dark:text-white">
          Available for hire and always open to exciting opportunities. If
          you're looking for a frontend developer who cares about clean code,
          beautiful design, and real user experience — let’s talk
        </h1>
        
        <Link href="/contact">
          <button className="mt-8 cursor-pointer rounded-lg bg-purple-700 p-4 text-2xl font-bold text-white outline-none hover:bg-purple-800 focus:ring-4 focus:ring-purple-300">
            Contact Me Now!
          </button>
        </Link>
      </div>
    </>
  );
}
