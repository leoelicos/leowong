import { NavLink } from 'react-router-dom'

import './style/index.css'

export default function Header() {
  return (
    <header>
      <div>
        <div>LEOWONG</div>
      </div>
      <nav>
        <ul>
          <li>
            <NavLink
              exact='true'
              to='/home/about'
              className={({ isActive, isPending }) => (isPending ? 'pending' : isActive ? 'active' : '')}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              exact='true'
              to='/home/projects'
              className={({ isActive, isPending }) => (isPending ? 'pending' : isActive ? 'active' : '')}>
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink
              exact='true'
              to='/home/resume'
              className={({ isActive, isPending }) => (isPending ? 'pending' : isActive ? 'active' : '')}>
              Resume
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}
