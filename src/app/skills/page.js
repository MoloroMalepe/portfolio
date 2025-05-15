import Experience from "../experience/page";
import Image from "next/image";
import {
  FaHtml5,
  FaAngular,
  FaCss3,
  FaReact,
  FaJava,
  FaPython,
  FaTrello,
  FaJira,
  FaLinux,
  FaGit,
} from "react-icons/fa";
const Skills = () => {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Next.js",
    "Tailwind CSS",
    "Node.js",
    "",
    "Git",
    "GitHub",
    // Add more skills as needed
  ];

  return (
    <>
      <div className="flex flex-col">
        <div>
          <p className="text-gray-800 text-3xl font-semibold p-5 underline">
            Technologies
          </p>
          <div className="animate-slide-left flex flex-row space-x-3 h-fit w-fit rounded-md ml-3 mt-3  p-2 overflow-hidden">
            <FaHtml5 size={48} className="text-[#E34F26]" />
            <FaCss3 size={48} className="text-[#1572B6]" />
            <FaReact size={48} className="text-[#61DAFB]" />
            <FaAngular size={48} className="text-[#DD0031]" />
            <FaJava size={48} className="text-[#D24D1D]" />
            <FaPython size={48} className="text-[#3776AB]" />
            <FaTrello size={48} className="text-[#0079BF]" />
            <FaJira size={48} className="text-[#0052CC]" />
            <FaLinux size={48} className="text-[#]" />
            <FaGit size={48} className="text-[#F05032]" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
