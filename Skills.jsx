const Skills = () => {
  const skills = ["Java", "Spring Boot", "React", "Tailwind CSS", "SQL", "GitHub"];
  return (
    <section id="skills" className="py-20 bg-white text-center">
      <h2 className="text-3xl font-bold mb-6">Skills</h2>
      <div className="flex flex-wrap justify-center gap-4">
        {skills.map((skill, index) => (
          <span key={index} className="px-4 py-2 bg-gray-200 rounded-lg shadow hover:bg-blue-400 hover:text-white">
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
};

export default Skills;