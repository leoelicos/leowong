import { NavLink } from 'react-router-dom'

import avatar from '../images/rando.png'

export default function Header() {
  return (
    <header>
      <img
        className='avatar'
        src={avatar}
        alt='avatar'
      />
      <nav>
        <ul>
          <li>
            <NavLink
              exact
              to='/35-pastel-profile/about'
              className={({ isActive, isPending }) => (isPending ? 'pending' : isActive ? 'active' : '')}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              exact
              to='/35-pastel-profile/projects'
              className={({ isActive, isPending }) => (isPending ? 'pending' : isActive ? 'active' : '')}>
              Portfolio
            </NavLink>
          </li>
          <li>
            <NavLink
              exact
              to='/35-pastel-profile/contact'
              className={({ isActive, isPending }) => (isPending ? 'pending' : isActive ? 'active' : '')}>
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink
              exact
              to='/35-pastel-profile/resume'
              className={({ isActive, isPending }) => (isPending ? 'pending' : isActive ? 'active' : '')}>
              Resume
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}
