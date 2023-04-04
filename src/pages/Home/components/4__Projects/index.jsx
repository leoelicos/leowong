import Project from './Project'

import appData from '../../../../data/apps.js'

import './style.css'
import { Link } from 'react-router-dom'

const { ingre, submitted, shopr, kiddin, moovee, readr } = appData

export default function Projects() {
  const projects = [ingre, submitted, kiddin, readr, moovee, shopr]

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
      <Link
        className='project-all '
        to={`/all`}>
        <h4
          style={{
            margin: 0
          }}>
          See all
        </h4>
      </Link>
    </div>
  )
}
