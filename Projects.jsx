const Projects = () => {
  const projects = [
    { name: "Online Banking System", link: "https://github.com/yourusername/banking" },
    { name: "Portfolio Website", link: "https://your-portfolio-link.vercel.app" },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-100 text-center">
      <h2 className="text-3xl font-bold mb-6">Projects</h2>
      <div className="flex flex-col items-center gap-6">
        {projects.map((project, index) => (
          <a key={index} href={project.link} target="_blank" className="w-80 p-4 bg-white shadow-lg rounded-lg hover:scale-105 transition">
            {project.name}
          </a>
        ))}
      </div>
    </section>
  );
};

export default Projects;