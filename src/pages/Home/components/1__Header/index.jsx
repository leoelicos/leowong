import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'
import './style.css'
export default function Header() {
  const [showMenu, setShowMenu] = useState(true)

  const toggle = () => {
    setShowMenu((m) => !m)
  }

  return (
    <header>
      <a
        className='logo'
        href='#top'>
        LEOWONG
      </a>

      <nav className='nav'>
        <ul className='menu small'>
          <a href='#about'>ABOUT</a>
          <a href='#projects'>PROJECTS</a>
          <a href='#resume'>RESUME</a>
        </ul>

        <button
          className='hamburger'
          onClick={toggle}>
          <FontAwesomeIcon icon={faBars} />
        </button>
        <ul className={`menu big ${showMenu ? 'hide' : ''}`}>
          <a
            href='/#about'
            onClick={toggle}>
            ABOUT
          </a>
          <a
            href='/#projects'
            onClick={toggle}>
            PROJECTS
          </a>
          <a
            href='/#resume'
            onClick={toggle}>
            RESUME
          </a>
        </ul>
      </nav>
    </header>
  )
}
