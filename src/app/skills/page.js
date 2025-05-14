import Experience from "../experience/page";
const Skills = () => {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Next.js",
    "Tailwind CSS",
    "Node.js",
    "Express.js",
    "Git",
    "GitHub",
    // Add more skills as needed
  ];

  return (
    <>
      <div className="mt-6 mx-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">Skills</h3>
        <ul className="list-disc list-inside text-gray-700">
          {skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </div>
      <Experience />
    </>
  );
};

export default Skills;
