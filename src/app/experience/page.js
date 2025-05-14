import Image from "next/image";
import myPhoto from "../assets/picture/fullstackpng.png";
import qAphoto from "../assets/picture/testing.png";
import firstPic from "../assets/picture/next.png";
import secPicture from "../assets/picture/systemAn.png";
import thirdPic from "../assets/picture/linux.jpeg";
import fourthPic from "../assets/picture/support.jpeg";
const Experience = () => {
  return (
    <>
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div class="bg-slate-100 rounded-md shadow-md p-6">
              <h4 class="text-lg font-semibold text-blue-600 mb-2">
                Full-stack development Foundation
              </h4>
              <p class="text-gray-700">
                My formal introduction to web development came through a
                full-stack development learnership program with real-life
                projects. I gained hands-on experience in building a platform
                using <strong class="font-semibold">Angular</strong> for the
                front-end and{" "}
                <strong class="font-semibold">Spring Boot Java</strong> with{" "}
                <strong class="font-semibold">PostgreSQL</strong> for the
                back-end. We also used{" "}
                <strong class="font-semibold">Figma</strong> for UI design and
                collaborated within a team, utilizing{" "}
                <strong class="font-semibold">Trello</strong> for task
                management. This provided me with valuable experience in the
                full development lifecycle and teamwork.
              </p>

              <div class="mt-3 ">
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                  Angular
                </span>
                <span class="inline-block bg-gray-200 rounded-full px-3 py-4 text-sm font-semibold text-gray-700 mr-2">
                  Spring Boot
                </span>
                <span class="inline-block bg-gray-200 rounded-full px-3 py-4 text-sm font-semibold text-gray-700 mr-2">
                  Java
                </span>
                <span class="inline-block bg-gray-200 rounded-full px-3 py-4 text-sm font-semibold text-gray-700 mr-2">
                  PostgreSQL
                </span>
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                  Figma
                </span>
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                  Trello
                </span>
              </div>
            </div>
            <div className=" border-l-0 md:border-l-2 md:border-gray-300">
              <div className=" flex bg-white items-center justify-center border-l-0 md:border-1-2 md:border-gray-300 rounded-lg h-full">
                <Image
                  src={myPhoto}
                  alt="Moloro"
                  width={400}
                  height={400}
                  className="rounded-xl"
                />
                {/* <ProfilePic /> */}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-8 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div class="bg-white rounded-md shadow-md p-6">
              <h4 class="text-lg font-semibold text-blue-600 mb-2">
                Quality Assurance Insights
              </h4>
              <p class="text-gray-700">
                Transitioning into a QA Automation role at a major financial
                institution broadened my understanding of the software
                development lifecycle from a different perspective. Using{" "}
                <strong class="font-semibold">Spring Boot</strong>,{" "}
                <strong class="font-semibold">Selenium</strong>,{" "}
                <strong class="font-semibold">Postman</strong>, and{" "}
                <strong class="font-semibold">PostgreSQL</strong>, I automated
                testing processes, ensuring the reliability and quality of
                applications. This role involved working closely with senior QA
                testers and project managers, utilizing tools like{" "}
                <strong class="font-semibold">Jira</strong> and{" "}
                <strong class="font-semibold">Qmetry</strong> for test case
                management and bug tracking. This experience reinforced the
                critical importance of delivering bug-free and user-centric
                applications.
              </p>
              <div class="mt-3">
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                  Spring Boot
                </span>
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                  Selenium
                </span>
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                  Postman
                </span>
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                  Swagger
                </span>
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                  PostgreSQL
                </span>
                <span class="inline-block bg-gray-200 rounded-full px-3 mt-2 py-1 text-sm font-semibold text-gray-700 mr-2">
                  Jira
                </span>
                <span class="inline-block bg-gray-200 rounded-full px-3 py-0 text-sm font-semibold text-gray-700 mr-2">
                  Qmetry
                </span>
              </div>
            </div>
            <div className=" border-l-0 md:border-l-2 md:border-gray-300">
              <div className=" flex bg-gray-100 items-center justify-center border-l-0 md:border-1-2 md:border-gray-300 rounded-lg h-full">
                <Image
                  src={qAphoto}
                  alt="Moloro"
                  width={400}
                  height={400}
                  className="rounded-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-8 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div class="bg-slate-100 rounded-md shadow-md p-6">
              <h4 class="text-lg font-semibold text-blue-600 mb-2">
                Additional Skills & Knowledge
              </h4>
              <ul role="list" class="list-disc pl-5 text-gray-700">
                <li class="mb-1">
                  <strong>Self-Driven Learning:</strong> Independently learned{" "}
                  <strong class="font-semibold">Next.js</strong>, expanding my
                  front-end skillset.
                  <div class="mt-1">
                    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                      Next.js
                    </span>
                  </div>
                </li>
                <li class="mb-1">
                  <strong>Academic and Foundational Knowledge:</strong> My
                  academic background includes a National Diploma in Software
                  Development, providing a strong theoretical foundation.
                  Coursework included <strong class="font-semibold">C++</strong>
                  , <strong class="font-semibold">PL/SQL</strong>,{" "}
                  <strong class="font-semibold">
                    System Analysis and Design Techniques
                  </strong>
                  , and{" "}
                  <strong class="font-semibold">Project Management</strong>.
                  While my System Support certificate doesn&#39;t have direct
                  professional experience yet, it highlights my technical
                  aptitude.
                  <div class="mt-1">
                    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                      C++
                    </span>
                    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                      PL/SQL
                    </span>
                    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                      System Analysis
                    </span>
                    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                      Project Management
                    </span>
                  </div>
                </li>
                <li>
                  <strong>Linux Proficiency:</strong> My familiarity with{" "}
                  <strong class="font-semibold">Linux</strong> further enhances
                  my technical toolkit.
                  <div class="mt-1">
                    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                      Linux
                    </span>
                  </div>
                </li>
              </ul>
            </div>
            <div className=" border-l-0 md:border-l-2 md:border-gray-300">
              <div className=" flex flex-row bg-white items-center justify-center rounded-e-xl h-full">
                <div className="flex flex-col items-center justify-center space-y-2">
                  1
                  <Image src={firstPic} alt="Moloro" className="rounded-full" />
                  <Image src={thirdPic} alt="Moloro" className="rounded-full" />
                </div>
                <div className="flex flex-col  space-y-2 p-2">
                  <Image
                    src={secPicture}
                    alt="Moloro"
                    className="rounded-full"
                  />
                  <Image
                    src={fourthPic}
                    alt="Moloro"
                    className="rounded-full"
                  />
                  2
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Experience;
