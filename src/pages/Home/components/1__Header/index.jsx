import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import './style.css'

const links = [
  ['/#about', 'About'],
  ['/#projects', 'Work'],
  ['/#resume', 'Contact']
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => {
    setMenuOpen(false)
  }

  return (
    <header>
      <Link
        className='logo'
        href='/#top'>
        LEOWONG
      </Link>

      <nav
        className='nav'
        aria-label='Sections'>
        <ul className='menu small'>
          {links.map(([href, label]) => (
            <li key={href}>
              <a href={href}>{label}</a>
            </li>
          ))}
        </ul>
        <button
          type='button'
          className='hamburger'
          onClick={() => setMenuOpen((open) => !open)}
          aria-expanded={menuOpen}
          aria-controls='site-menu'
          aria-label='Menu'>
          <FontAwesomeIcon icon={faBars} />
        </button>

        <ul
          id='site-menu'
          className={`menu big ${menuOpen ? '' : 'hide'}`}>
          {links.map(([href, label]) => (
            <li key={href}>
              <a
                href={href}
                onClick={closeMenu}>
                {label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
