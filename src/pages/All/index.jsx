import Project from '../Home/components/4__Projects/Project.jsx'

import appData from '../../data/apps.js'
import './style.css'
import GradientText from '../../components/GradientText/index.jsx'
const { ingre, readr, moovee, shopr, submitted, kiddin, locus, spriddle, sytycj, onetwothreego, hourly, emply, docu, txtly, regexpo, algoz, fundr, kiddle, taggr, devtips, votr, clist, vroom, writr, depto, cinem, wander, grader, passo, megen } = appData

export default function All() {
  const featured = [ingre, submitted, kiddin, readr, moovee, shopr]

  const other = [kiddle, algoz, spriddle, locus, sytycj, onetwothreego, hourly, emply, fundr, docu, txtly, regexpo]

  return (
    <div className='all'>
      <h1>
        <GradientText
          color1='white'
          color2='floralwhite'>
          &nbsp;Leo's apps
        </GradientText>
      </h1>

      <div className='projects featured'>
        <h2>Featured</h2>
        <div className='project-cards'>
          {featured.map((project) => (
            <Project
              key={project.title}
              project={project}
            />
          ))}
        </div>
      </div>

      <div className='projects'>
        <h2>Other</h2>
        <div className='project-cards'>
          {other.map((project) => (
            <Project
              key={project.title}
              project={project}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
