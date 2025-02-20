export default function About() {
  return (
    // <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8  gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] md:flex-row and lg:flex-col">
    //   <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
    //     <div className=" min-w-full min-h-full border shadow-lg border-blue-400 p-2 items-center">
    //       <h2 className="font-bold text-lg">About me</h2>
    //       <p className="text-lg leading-relaxed">
    //         I am a curious and driven developer who loves solving problems
    //         through code. When I am not coding, you can find me exploring the
    //         latest tech trends or immersing myself in nature as someone who
    //         ggrew up at the country, deep surrounded by wildlife and river.
    //         Professional Experience: As a Junior Developer at The Web3 Ninja, I
    //         have gained valuable experience in Next js. I have successfully
    //         managed to create my portfolio, at my previous works i managed to
    //         automate applications using selenium and spring boot, mananed to
    //         contribute projects using angular, postgresql. Technical Skills:
    //         Java, Spring Boot, Angular, Next.js, HTML5, CSS, Tailwind CSS,
    //         Laravel, Selenium, Blockchain. Education: Diploma in Software
    //         Development, Tshwane University of Technology
    //       </p>
    //     </div>
    //   </main>
    // </div>
    <div className="grid grid-rows-[auto_1fr_auto] items-center justify-items-center min-h-screen p-8 sm:p-20 font-[var(--font-geist-sans)] gap-16 md:flex-row lg:flex-col">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start max-w-3xl w-full">
        <div className="w-flex-shrink-0 max-w-3xl border shadow-xl border-blue-400 rounded-lg p-6 bg-white hover:shadow-2xl transition-all duration-300">
          <h2 className="font-bold text-2xl text-center sm:text-left text-blue-950 mb-4 underline">
            About Me
          </h2>
          <p className="text-lg leading-relaxed text-gray-700">
            I am a curious and driven developer who loves solving problems
            through code. When I am not coding, you can find me exploring the
            latest tech trends or immersing myself in nature, as someone who
            grew up in the countryside, deeply surrounded by wildlife and
            rivers.
          </p>
          <p className="text-lg leading-relaxed text-gray-700 mt-4">
            <strong>Professional Experience:</strong> As a Junior Developer at
            The Web3 Ninja, I have gained valuable experience in Next.js. I have
            successfully created my portfolio, automated applications using
            Selenium and Spring Boot, and contributed to projects using Angular
            and PostgreSQL.
          </p>
          <p className="text-lg leading-relaxed text-gray-700 mt-4">
            <strong>Technical Skills:</strong> Java, Spring Boot, Angular,
            Next.js, HTML5, CSS, Tailwind CSS, Laravel, Selenium, Blockchain.
          </p>
          <p className="text-lg leading-relaxed text-gray-700 mt-4">
            <strong>Education:</strong> Diploma in Software Development, Tshwane
            University of Technology.
            <p>Systems Support NQF5, SPECCON</p>
          </p>
        </div>
      </main>
    </div>
  );
}
