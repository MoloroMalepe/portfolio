import Image from "next/image";
import Link from "next/link";
import About from "./about/page";

export default function Home() {
  return (
    <>
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] md:flex-row and lg:flex-col overflow-visible">
        <main className="flex flex-col gap-1 row-start-2 items-center justify-center">
          <div className="flex flex-column ">
            <h1 className=" font-bold mb-4 text-gray-800 text-5xl sm:text-6xl hover:text-blue-600 animate-bounce-3">
              Hi, I am Moloro!
            </h1>
            <div className="w-[50%] rounded-full h-fit">
              <image
                src="https://www.docupile.com/wp-content/uploads/2024/06/120.png"
                alt=""
                height={48}
                width={48}
                className="rounded-full"
              />
            </div>
          </div>
          <p className=" hover:text-blue-400 text-xl sm:text-xl mb-6 ">
            Full-Stack Developer | Web3 Enthusiast
          </p>

          <Link href="/projects">
            <button className=" hover:text-blue-600 text-gray-800 font-bold py-5 px-4 rounded mx-auto">
              Click here to view my projects
            </button>
          </Link>
          <div className="max-w-3xl sm:text-left border shadow-xl border-blue-400 rounded-lg p-6 bg-gray-200 hover:shadow-2xl transition-all duration-300 flex justify-items-start">
            <p className="p-4 text-lg font-bold flex content-center ">
              I am a passionate Junior software developer with a focus on
              full-stack development and Web3 technologies. With experience in
              Java, Spring Boot, Angular, Next.js, and more, I am dedicated to
              building innovative and user-friendly applications
            </p>
          </div>

          <About />
        </main>
      </div>
    </>
  );
}
