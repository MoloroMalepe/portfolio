import Image from "next/image";
import Skills from "../skills/page";
import myPhoto from "../assets/picture/gettyimages-1394347360-612x612.jpg";
// Import the SkillsList component

const About = () => {
  return (
    <>
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className=" flex items-center justify-center bg-gray-200 rounded-sm">
              <Image
                src={myPhoto}
                alt="Moloro"
                width={400}
                height={300}
                className="rounded-xl"
              />
              {/* <ProfilePic /> */}
            </div>
            <div className=" border-l-0 md:border-l-2 md:border-gray-300">
              {/* <h2 className="text-3xl font-semibold text-blue-600 mb-4 underline">
                My Journey
              </h2> */}
              <div className=" flex justify-center pb-6 text-3xl font-semibold text-blue-600 underline">
                About Moloro
              </div>
              <div className="bg-white shadow-md">
                <p className="text-gray-700 leading-relaxed mb-4 shadow-sm flex items-center justify-center ml-4">
                  {/* Hello! Im an entry-level developer passionate about building
              innovative and user-friendly web applications. I have a strong
              foundation in Angular, React Nextjs, tailwindCSS, Java, Python, mysql, postgresql . Im eager to learn and contribute to exciting
              projects. My journey into development has been driven by a desire 
              to . */}
                  My fascination with technology's ability to improve daily life
                  sparked my journey into software development. Witnessing how
                  code can solve real-world problems and enhance user
                  experiences ignited a passion within me to become a creator of
                  these solutions. This curiosity has driven me to actively seek
                  opportunities to learn and contribute, from initial
                  internships to a comprehensive learnership and valuable
                  experience in quality assurance.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4 ml-4 pb-6">
                  Im a [mention a personal trait like problem-solver,
                  detail-oriented, team player] and Im always looking for
                  opportunities to expand my skillset and collaborate with
                  others.
                </p>
              </div>
              {/* Render the skills list */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
