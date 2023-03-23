import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useEffect, useState } from 'react'
import articles from './data/articles'
import benefits from './data/benefits'
import { Hero } from './images'
import './style/style.css'
import useWindowDimensions from './useWindowDimensions'

export default function CodeRefactor() {
  const [menuActive, setMenuActive] = useState(false)
  const [hamburgerActive, setHamburgerActive] = useState(false)
  const handleClickMenu = () => {
    setMenuActive((prev) => !prev)
  }
  const hideMenu = () => {
    setMenuActive(false)
  }
  const { width } = useWindowDimensions()
  useEffect(() => {
    if (width > 1174) {
      console.log('width > 1174')
      setMenuActive(false)
      setHamburgerActive(false)
    } else {
      setHamburgerActive(true)
    }
  }, [width])
  return (
    <div className='app-03'>
      <div className='body'>
        <header>
          <h1>
            Hori<span className='seo'>seo</span>n
          </h1>
          <nav className={hamburgerActive ? 'hide' : ''}>
            <ul>
              {articles.map(({ id, heading }) => (
                <li key={id}>
                  <a href={`#${id}`}>{heading}</a>
                </li>
              ))}
            </ul>
          </nav>
          <button
            className={`hamburger ${hamburgerActive ? '' : 'hide'}`}
            onClick={handleClickMenu}>
            <FontAwesomeIcon icon={faBars} />
          </button>
        </header>
        <ul className={`menu ${menuActive ? '' : 'hide'}`}>
          {articles.map(({ id, heading }) => (
            <li key={id}>
              <a
                href={`#${id}`}
                onClick={hideMenu}>
                {heading}
              </a>
            </li>
          ))}
        </ul>

        <main>
          <section
            id='hero'
            style={{ backgroundImage: `url(${Hero})` }}></section>
          <div className='sections'>
            <section id='content'>
              {articles.map(({ id, imgSrc, imgAlt, heading, paragraph }) => {
                return (
                  <article
                    key={id}
                    id={id}>
                    <img
                      src={imgSrc}
                      alt={imgAlt}
                    />
                    <div>
                      <h2>{heading}</h2>
                      <p>{paragraph}</p>
                    </div>
                  </article>
                )
              })}
            </section>
            <section id='benefits'>
              {benefits.map(({ id, imgSrc, imgAlt, heading, paragraph }) => (
                <article
                  key={id}
                  id={id}>
                  <h3>{heading}</h3>
                  <img
                    src={imgSrc}
                    alt={imgAlt}
                  />
                  <p>{paragraph}</p>
                </article>
              ))}
            </section>
          </div>
        </main>

        <div>
          <h2 style={{ marginTop: '1rem' }}>Resume</h2>
          <a
            className='deployed'
            target='_blank'
            rel='noreferrer'
            href='https://drive.google.com/file/d/1h8cJZCP00_rwluAvS5hHzIPyXsKbvkZm/view?usp=sharing'>
            Resume
          </a>

          <ul className='nav'></ul>
        </div>

        <footer>
          <h2>Made with ❤️️ by Horiseon</h2>
          <p>&copy; 2023 Horiseon Social Solution Services, Inc.</p>
        </footer>
      </div>
    </div>
  )
}
