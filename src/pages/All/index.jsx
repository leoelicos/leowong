import Project from '../Home/components/4__Projects/Project.jsx'

import appData from '../../data/apps.js'
import './style.css'
import GradientText from '../../components/GradientText/index.jsx'
const { ingre, readr, moovee, shopr, submitted, kiddin, locu, taggr, spriddle, syt, onetwothreego, devtips, votr, hourly, emply, clist, vroom, docu, writr, txtly, regexpo, algoz, depto, cinem, wander, grader, passo, megen } = appData

function Projects({ projects }) {
  return (
    <div className='project-cards'>
      {projects.map((project) => (
        <Project
          key={project.title}
          project={project}
        />
      ))}
    </div>
  )
}

export default function All() {
  const search = [ingre, readr, moovee, locu] // removed clima for maintenance
  const ecommerce = [shopr, taggr]
  const games = [spriddle, syt, onetwothreego] // removed kiddle for maintenance

  const forums = [submitted, kiddin, devtips, votr]
  const management = [hourly, emply, clist, vroom] // removed wants for maintenance
  // removed jobby for maintenance
  const editors = [docu, writr, txtly]
  const articles = [regexpo, algoz]
  const apis = [depto, cinem, wander, grader] // removed fundr for maintenance
  // also removed matey for maintenance
  const generators = [passo, megen]

  return (
    <div className='all'>
      <h3 style={{ fontSize: 'max(64px, 8vh)', fontFamily: "'Allerta Stencil', sans-serif", textAlign: 'center' }}>
        <GradientText
          color1='red'
          color2='orange'>
          &nbsp;Leo Wong
        </GradientText>
      </h3>
      <h3
        class='projects-header'
        style={{ color: 'white', textAlign: 'center', fontSize: 'max(1vmin, 36px)' }}>
        All projects
      </h3>
      <div className='projects'>
        <h3 className='projects-header'>Search 🔎</h3>
        <Projects projects={search} />
        <h3 className='projects-header'>Ecommerce 🛒</h3>
        <Projects projects={ecommerce} />
        <h3 className='projects-header'>Games 🕹️</h3>
        <Projects projects={games} />
        <h3 className='projects-header'>Forums 💬</h3>
        <Projects projects={forums} />
        <h3 className='projects-header'>Management ⚒️</h3>
        <Projects projects={management} />
        <h3 className='projects-header'>Editors 🗒️</h3>
        <Projects projects={editors} />
        <h3 className='projects-header'>Articles 📰</h3>
        <Projects projects={articles} />
        <h3 className='projects-header'>APIs 🔁</h3>
        <Projects projects={apis} />
        <h3 className='projects-header'>Generators 🤖</h3>
        <Projects projects={generators} />
        <div style={{ height: '36vh' }} />
      </div>
    </div>
  )
}
