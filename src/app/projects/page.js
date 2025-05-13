import ProjectCard from "../projectsCard/page";

const Projects = () => {
  const projects = [
    {
      title: "Project Title 1",
      description: "A brief description of project 1 and its features.",
      image: "/images/project1.jpg", // Replace with your image
      // Optional
      githubLink: "https://github.com/your-username/project1",
    },
    {
      title: "Project Title 2",
      description: "A brief description of project 2 and its features.",
      image: "/images/project2.jpg", // Replace with your image
      // Optional
      githubLink: "https://github.com/your-username/project2",
    },
    {
      title: "Project Title 3",
      description: "A brief description of project 3 and its features.",
      image: "/images/project3.jpg", // Replace with your image

      githubLink: "https://github.com/your-username/project3",
    },
    // Add more projects as needed
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold text-gray-800 mb-8 text-center shadow-xl">
          Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
