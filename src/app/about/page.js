import Image from "next/image";
import Skills from "../skills/page"; // Import the SkillsList component

const About = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Image Column */}
          <div className="rounded-lg overflow-hidden shadow-md">
            <Image
              src="" // Replace with your image
              alt="About Me"
              width={500}
              height={500}
              className="object-cover"
            />
          </div>

          {/* Text Column */}
          <div>
            <h2 className="text-3xl font-semibold text-gray-800 mb-4 shadow-lg">
              About Me
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Hello! Im an entry-level developer passionate about building
              innovative and user-friendly web applications. I have a strong
              foundation in [mention your key skills like front-end, back-end,
              specific languages]. Im eager to learn and contribute to exciting
              projects. My journey into development has been driven by a desire
              to [mention your motivation or goals].
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Im a [mention a personal trait like problem-solver,
              detail-oriented, team player] and Im always looking for
              opportunities to expand my skillset and collaborate with others.
            </p>
            <Skills /> {/* Render the skills list */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
