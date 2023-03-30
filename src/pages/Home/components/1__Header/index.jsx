import { faAngleLeft, faAngleRight, faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'
import { Link, resolvePath, useParams } from 'react-router-dom'
import './style.css'

export default function Header() {
  let params = useParams()

  // for description nav button
  const order = ['ingre', 'submitted', 'kiddin', 'readr', 'moovee', 'shopr']
  let currPosition = undefined
  let prevPosition = undefined
  let nextPosition = undefined
  if (params.appName !== undefined) {
    currPosition = order.indexOf(params.appName)
    prevPosition = Math.max(0, currPosition - 1)
    nextPosition = Math.min(order.length - 1, currPosition + 1)
    console.log({ currPosition, prevPosition, nextPosition })
  }

  const [showMenu, setShowMenu] = useState(true)

  const toggle = () => {
    setShowMenu((m) => !m)
  }

  const onDescriptionPage = params.appName !== undefined

  const resolved = resolvePath({ to: '#top' })
  console.log({ resolved })
  return (
    <header>
      {onDescriptionPage ? (
        <a
          className='logo'
          href={params.appName === undefined ? '/#top' : '/#projects'}>
          <FontAwesomeIcon icon={faAngleLeft} />
          &nbsp;PROJECTS
        </a>
      ) : (
        <Link
          className='logo'
          href={params.appName === undefined ? '/#top' : '/#projects'}>
          LEOWONG
        </Link>
      )}

      <nav className='nav'>
        {onDescriptionPage ? (
          <ul className='menu small description'>
            {currPosition > 0 && (
              <a href={`/description/${order[prevPosition]}`}>
                <FontAwesomeIcon icon={faAngleLeft} />
              </a>
            )}
            {currPosition < order.length - 1 && (
              <a href={`/description/${order[nextPosition]}`}>
                <FontAwesomeIcon icon={faAngleRight} />
              </a>
            )}
          </ul>
        ) : (
          <>
            <ul className='menu small'>
              <a href='/#about'>ABOUT</a>
              <a href='/#projects'>PROJECTS</a>
              <a href='/#resume'>RESUME</a>
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
          </>
        )}
      </nav>
    </header>
  )
}
