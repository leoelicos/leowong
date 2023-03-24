import Project from './Project'

import { featuredApps } from '../../../../data/apps.js'
import './style.css'

export default function Projects() {
  return (
    <div
      className='projects'
      id='projects'>
      <h3 className='projects-header'>Projects</h3>
      <div className='project-cards'>
        {featuredApps.map(
          ({
            title,
            description,
            keywords,
            link,
            background1,
            background2,
            color1,
            color2 //
          }) => {
            return (
              <Project
                key={title}
                title={title}
                description={description}
                keywords={keywords}
                link={link}
                background1={background1}
                background2={background2}
                color1={color1}
                color2={color2}
              />
            )
          }
        )}
      </div>
    </div>
  )
}
