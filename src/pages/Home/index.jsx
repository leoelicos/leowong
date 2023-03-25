import useFavicon from '../../hooks/useFavicon.js'
import useTitle from '../../hooks/useTitle.js'
import Header from './components/1__Header/index.jsx'
import Hero from './components/2__Hero/index.jsx'
import About from './components/3__About/index.jsx'
import Projects from './components/4__Projects/index.jsx'
import Resume from './components/5__Resume/index.jsx'

import './style.css'
export default function Home() {
  useFavicon('favicons/home.png')
  useTitle('Leo Wong')
  return (
    <div className='home'>
      <Header />
      <div className='home-content'>
        <Hero>
          <About />
          <Projects />
          <Resume />
        </Hero>
      </div>
    </div>
  )
}
