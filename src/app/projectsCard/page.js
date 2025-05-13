import Image from "next/image";
import Link from "next/link";

const ProjectCard = ({ project }) => {
  return (
    <div className="rounded-md overflow-hidden shadow-md hover:shadow-lg transition duration-300">
      {project.image && (
        <div className="relative w-full h-60">
          <Image
            src={project.image}
            alt={project.title}
            layout="fill"
            objectFit="cover"
          />
        </div>
      )}
      <div className="p-4">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">
          {project.title}
        </h3>
        <p className="text-gray-700 text-sm mb-4">{project.description}</p>
        <div className="flex space-x-2">
          {project.liveLink && (
            <Link
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-blue-500 text-white py-2 px-4 rounded-md text-sm hover:bg-blue-700 transition duration-200"
            >
              Live Demo
            </Link>
          )}
          {project.githubLink && (
            <Link
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-gray-300 text-gray-800 py-2 px-4 rounded-md text-sm hover:bg-gray-400 transition duration-200"
            >
              GitHub
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
