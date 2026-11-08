import { useState } from 'react'

function ProjectForm({ onAddProject }) {

  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  function handleSubmit(event) {
    event.preventDefault()

    onAddProject({
      title: title,
      description: description
    })

    setTitle('')
    setDescription('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add a New Project</h2>

      <input
        type="text"
        placeholder="Project name"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />

      <textarea
        placeholder="Project description..."
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      ></textarea>

      <button type="submit">
        Add Project
      </button>
    </form>
  );
};

export default ProjectForm;