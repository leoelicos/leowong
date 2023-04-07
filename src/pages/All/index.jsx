import Project from '../Home/components/4__Projects/Project.jsx'

import appData from '../../data/apps.js'
import './style.css'
import GradientText from '../../components/GradientText/index.jsx'
const { ingre, readr, moovee, shopr, submitted, kiddin, locus, /* taggr, */ spriddle, sytycj, onetwothreego, /* devtips, */ /* votr, */ hourly, emply, /* clist, */ /* vroom, */ docu, /* writr, */ txtly, regexpo, algoz, /* depto, */ /* cinem, */ /* wander, */ /* grader, */ /* passo, */ /* megen, */ fundr } = appData

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
  const search = [ingre, readr, moovee, locus] // removed clima
  const ecommerce = [shopr] // removed taggr
  const games = [spriddle, sytycj, onetwothreego] // removed kiddle

  const forums = [submitted, kiddin] // removed devtips, votr
  const management = [hourly, emply, fundr] // removed wants, clist, vroom, jobby
  const editors = [docu, txtly] // removed writr
  const articles = [regexpo, algoz]
  /* const apis = [] */ // removed ,depto, cinem, wander, grader, matey
  /* const generators = [] */ // removed passo, megen

  return (
    <div className='all'>
      <h1>
        <GradientText
          color1='red'
          color2='orange'>
          &nbsp;Leo Wong
        </GradientText>
      </h1>
      <h2 style={{ color: 'white', textAlign: 'center', fontSize: 'max(1vmin, 36px)' }}>All projects</h2>
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
        {/* <h3 className='projects-header'>APIs 🔁</h3> */}
        {/* <Projects projects={apis} /> */}
        {/* <h3 className='projects-header'>Generators 🤖</h3>
        <Projects projects={generators} /> */}
        <div style={{ height: '36vh' }} />
      </div>
    </div>
  )
}
