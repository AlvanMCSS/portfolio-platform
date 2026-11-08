function ProjectCard ({title, description}) { // props that the components recieve. They display the values we receive.
    return (
    <div>
        <h3>{title}</h3>
        <p>{description}</p>
    </div>

    );
};

export default ProjectCard;