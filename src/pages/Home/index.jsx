import { Outlet } from 'react-router-dom'

import Header from './components/1__Header/index.jsx'
import Hero from './components/2__Hero/index.jsx'
import About from './components/3__About/index.jsx'
import Projects from './components/4__Projects/index.jsx'
import Resume from './components/5__Resume/index.jsx'

import './style.css'
export default function Home() {
  return (
    <div className='home'>
      <Header />

      {<Outlet />}
    </div>
  )
}
export function HomeContent() {
  setTimeout(() => {
    const hash = window.location.hash
    const id = hash === '#about' ? 'about' : hash === '#projects' ? 'projects' : hash === '#resume' ? 'resume' : 'top'
    const element = document.getElementById(id)
    element.scrollIntoView({ alignToTop: true })
  }, 0)

  return (
    <div className='home-content'>
      <Hero>
        <About />
        <Projects />
        <Resume />
      </Hero>
    </div>
  )
}
