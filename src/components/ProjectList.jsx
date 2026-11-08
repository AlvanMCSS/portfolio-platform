import ProjectCard from './ProjectCard'

function ProjectList({ projects }) {
  return (
    <div>
      <h2>My Projects</h2>

      {projects.map((project, index) => (
        <ProjectCard
          key={index}
          title={project.title}
          description={project.description}
        />
      ))}
    </div>
  )
}

export default ProjectList