import Header from './components/1__Header/index.jsx'
import Hero from './components/2__Hero/index.jsx'
import About from './components/3__About/index.jsx'
import Projects from './components/4__Projects/index.jsx'
import Resume from './components/5__Resume/index.jsx'

import './style/style.css'
export default function Home() {
  return (
    <div className='home'>
      <Header />
      <div class='home-content'>
        <Hero>
          <About />
          <Projects />
          <Resume />
        </Hero>
      </div>
    </div>
  )
}
