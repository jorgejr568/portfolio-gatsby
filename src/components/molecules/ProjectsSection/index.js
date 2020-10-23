import React, { useState } from 'react'
import { ProjectItem } from '../ProjectItem'
const projects = require('../../../data/projects')

export const ProjectsSection = () => {
  const [activeProject, setActiveProject] = useState(0)
  const nextPage = () => {
    const newIndex = (activeProject + 1) % projects.length
    setActiveProject(newIndex)
  }
  const prevPage = () => {
    let newIndex = (activeProject - 1) % projects.length
    if (newIndex < 0) newIndex = projects.length - 1
    setActiveProject(newIndex)
  }

  return (
    <section id="projects">
      <h2>portfolio.</h2>

      <div style={{ flexBasis: '100%' }}>
        <div>
          <a href="#" onClick={e => e.preventDefault() & prevPage()}>
            &lt;
          </a>

          <a href="#" onClick={e => e.preventDefault() & nextPage()}>
            &gt;
          </a>
        </div>
      </div>

      <ul>
        <li>
          {projects.map((project, index) => (
            <ProjectItem
              project={project}
              key={index}
              className={activeProject === index && 'active'}
            />
          ))}
        </li>
      </ul>
    </section>
  )
}
