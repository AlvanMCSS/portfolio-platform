import { useState } from 'react'
import Header from './components/Header'
import SearchBar from './components/SearchBar'
import ProjectForm from './components/ProjectForm'
import ProjectList from './components/ProjectList'

import './App.css'

function App() {
  const [projects, setProjects] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const filteredProjects = projects.filter((project) => {
  const titleMatches = project.title.toLowerCase().includes(searchTerm.toLowerCase())

  const descriptionMatches = project.description.toLowerCase().includes(searchTerm.toLowerCase())

  return titleMatches || descriptionMatches
})
  function handleAddProject(newProject) {
    setProjects((currentProjects) => [...currentProjects, newProject])
  }

  return (
    <>
      <Header />
      <SearchBar
       searchTerm={searchTerm}
       setSearchTerm={setSearchTerm}/>
      <ProjectForm onAddProject={handleAddProject} />
       <ProjectList projects={filteredProjects} />
    </>
  )
}

export default App
