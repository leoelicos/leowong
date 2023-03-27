import Project from './Project'

import appData from '../../../../data/apps.js'

import './style.css'

const { ingre, submitted, shopr, kiddin, moovee, readr } = appData

export default function Projects() {
  const projects = [ingre, submitted, shopr, kiddin, moovee, readr]
  return (
    <div
      className='projects'
      id='projects'>
      <h3 className='projects-header'>Projects</h3>
      <div className='project-cards'>
        {projects.map((project) => {
          return (
            <Project
              key={project.title}
              project={project}
            />
          )
        })}
      </div>
    </div>
  )
}
