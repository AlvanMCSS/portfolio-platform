import ProjectCard from "./ProjectCard";

function ProjectList () {
    return (
        function ProjectList ({ projects }) {
            return (
                <div>
                    <h1>My projects</h1>

                       {projects.map((project) => {
                         <ProjectCard 
                           title={project.title}
                           description={project.description}/>
                       }
                    )}
                </div>
            )
        }
    )
}
export default ProjectList;