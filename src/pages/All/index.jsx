import Project from '../Home/components/4__Projects/Project.jsx'

import appData from '../../data/apps.js'
import './style.css'
import GradientText from '../../components/GradientText/index.jsx'
const {
  ingre,
  readr,
  moovee,
  shopr,
  submitted,
  kiddin,
  locus,
  spriddle,
  sytycj,
  onetwothreego,
  hourly,
  emply,
  docu,
  txtly,
  regexpo,
  algoz,
  fundr //
  // taggr,
  // devtips,
  // votr,
  // clist,
  // vroom,
  // writr,
  // depto,
  // cinem,
  // wander,
  // grader,
  // passo,
  // megen,
} = appData

export default function All() {
  const apps = [
    ingre,
    readr,
    moovee,
    locus,
    shopr,
    spriddle,
    sytycj,
    onetwothreego,
    submitted,
    kiddin,
    hourly,
    emply,
    fundr,
    docu,
    txtly,
    regexpo,
    algoz //
  ]

  return (
    <div className='all'>
      <h1>
        <GradientText
          color1='white'
          color2='floralwhite'>
          &nbsp;Leo's apps
        </GradientText>
      </h1>

      <div className='projects'>
        <div className='project-cards'>
          {apps.map((project) => (
            <Project
              key={project.title}
              project={project}
            />
          ))}
        </div>

        <div style={{ height: '36vh' }} />
      </div>
    </div>
  )
}
