import { useEffect } from 'react'
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
      <a
        className='skip'
        href='#about'>
        Skip to introduction
      </a>
      <Header />
      <Outlet />
    </div>
  )
}
export function HomeContent() {
  useEffect(() => {
    const id = window.location.hash.replace('#', '')
    if (!id) return
    document.getElementById(id)?.scrollIntoView()
  }, [])

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
