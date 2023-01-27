import { useState } from 'react'
import { ReactComponent as LWLogo } from './images/LW.svg'

import ScreenshotLandingPage from './images/screenshot-landing-page.jpg'
import ScreenshotCodeRefactor from './images/screenshot-code-refactor.png'
import ScreenshotCSSSnippetCheatsheet from './images/screenshot-css-snippet-cheat-sheet.jpg'

import './style/style.css'
export default function LandingPage() {
  const [hideModal, setHideModal] = useState(true)
  const handleCloseModal = () => {
    setHideModal(true)
  }
  const handleOpenModal = () => {
    setHideModal(false)
  }
  return (
    <div className='app-02'>
      <div className='body'>
        <div id='topofpage'></div>
        <header>
          <LWLogo className='lw-logo' />
          <nav>
            <ul>
              <li>
                <a href='#topofpage'>Home</a>
              </li>
              <li>
                <a href='#topofportfolios'>Portfolio</a>
              </li>
              <li>
                <a
                  href='#'
                  id='button'
                  onClick={() => {
                    console.log('ClickedOpen')
                    handleOpenModal()
                  }}>
                  Contact Now
                </a>
              </li>
            </ul>
          </nav>
        </header>

        <main>
          <section className='hero'>
            <img
              className='hero-img'
              src='https://unsplash.com/photos/gw-aplKL3Qg/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8MTV8fGpvdXJuZXl8ZW58MHx8fHwxNjQ1NDIxOTE5&force=true&w=2400'
              alt='a picture of a forest path'
            />
            <div className='hero-content'>
              <h1>
                <strong>LW Design</strong>
              </h1>
              <h3>Tell a beautiful story with LW today.</h3>
            </div>
          </section>

          <div id='topofportfolios'></div>
          <h3 className='portfolios-header'>Portfolio</h3>

          <section
            className='portfolios'
            id='portfolios'>
            <a
              className='portfolio'
              target='_blank'
              href='https://bcs40.vercel.app/02-landing-page/'>
              <h3 className='portfolio-header'>Landing Page</h3>
              <p className='portfolio-text'>Designer Home Page</p>
              <img
                className='portfolio-image'
                src={ScreenshotLandingPage}
                alt='landing page'
              />
            </a>

            <a
              className='portfolio'
              target='_blank'
              href='https://bcs40.vercel.app/05-professional-portfolio'>
              <h3 className='portfolio-header'>Code Refactor</h3>
              <p className='portfolio-text'>Accessiblility Driven Codebase</p>
              <img
                className='portfolio-image'
                src={ScreenshotCodeRefactor}
                alt='accessibility-driven page'
              />
            </a>

            <a
              className='portfolio'
              target='_blank'
              href='https://bcs40.vercel.app/04-css-snippet-cheatsheet/'>
              <h3 className='portfolio-header'>CSS Snippet Cheat Sheet</h3>
              <p className='portfolio-text'>Responsive Design</p>
              <img
                className='portfolio-image'
                src={ScreenshotCSSSnippetCheatsheet}
                alt='image of HTML work'
              />
            </a>
          </section>
          <h3 className='portfolios-footer'>
            <sub>
              <em>More projects coming soon</em>
            </sub>
          </h3>

          <section className={`bg-modal ${hideModal ? 'hide' : ''}`}>
            <div className='modal-content'>
              <div
                className='close'
                onClick={handleCloseModal}>
                +
              </div>
              <LWLogo className='lw-logo' />

              <form action=''>
                <input
                  type='text'
                  placeholder='Name'
                />
                <input
                  type='text'
                  placeholder='Email'
                />
                <a
                  href='/'
                  className='btn'>
                  Submit
                </a>
              </form>
            </div>
          </section>
        </main>

        <footer>
          <div className='footer-text'>
            <p>&copy; 2022 LW Design</p>
          </div>
        </footer>
      </div>
    </div>
  )
}
