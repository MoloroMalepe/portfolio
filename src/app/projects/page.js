export default function Projects() {
  return (
    <div className="grid grid-rows-[auto_1fr_auto] items-center justify-items-center min-h-screen p-8 sm:p-20 font-[var(--font-geist-sans)] gap-16 md:flex-row lg:flex-col">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start max-w-3xl w-full">
        <div className="w-flex-shrink-0 max-w-3xl border shadow-xl border-blue-400 rounded-lg p-6 bg-white hover:shadow-2xl transition-all duration-300">
          <h2 className="font-bold text-2xl text-center sm:text-left text-blue-950 mb-4 underline">
            My collaborations
          </h2>

          <ul className="list-disc list-inside mt-4">
            {" "}
            {/* Added a ul for bullet points */}
            <li>
              <strong className="text-gray-700 text-lg ">
                Codeigniter E-commerce Platform:
              </strong>

              <p className="text-lg leading-relaxed text-gray-600">
                In a WIL collaboration, I developed an ecommerce platform using
                CodeIgniter. My responsibilities included designing the
                relational database schema, normalizing tables for optimal
                performance, and implementing responsive frontend components
                using HTML, CSS, and JavaScript. This project allowed me to
                apply my skills in database management and frontend development
                within a real-world context
              </p>
            </li>
            <li>
              <strong className="text-gray-700 text-lg ">
                Mechanic-Insurance:
              </strong>
              <p className="text-lg leading-relaxed text-gray-700">
                A collaborative project that streamlines vehicle repairs between
                mechanics and insurance companies. It handles everything from
                the repair process to proof of delivery and invoicing, all
                within the system, eliminating the need for direct customer
                involvement.
              </p>
            </li>
          </ul>
        </div>
      </main>
    </div>
  );
}
