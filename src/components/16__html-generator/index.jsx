/* state */
import { faReact } from '@fortawesome/free-brands-svg-icons'
import { faCopy } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useEffect, useState } from 'react'

/* style */
import './style/index.css'
import injectHTML from './iframeLoad'
export default function HTMLGenerator() {
  /* state */
  const [formValues, setFormValues] = useState({ formName: '', formLocation: '', formBio: '', formLinkedIn: '', formGithub: '' })

  /* event handlers */
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(formValues)
  }

  useEffect(() => {
    injectHTML(formValues)
  }, [formValues])

  return (
    <div className='app-16'>
      <div className='body'>
        <header>
          <h1>Portfolio Maker</h1>
          <button
            className='disable-caret'
            type='button'
            onClick={handleSubmit}>
            <FontAwesomeIcon icon={faCopy} /> Copy HTML
          </button>
        </header>
        <main>
          <form>
            <label htmlFor='form-name'>Name</label>
            <fieldset>
              <input
                type='text'
                id='form-name'
                value={formValues.formName}
                onChange={(e) => {
                  setFormValues((prev) => {
                    return { ...prev, formName: e.target.value }
                  })
                }}
                placeholder='…'
              />
            </fieldset>
            <label htmlFor='form-location'>Location</label>
            <fieldset>
              <input
                type='text'
                id='form-location'
                value={formValues.formLocation}
                onChange={(e) => {
                  setFormValues((prev) => ({ ...prev, formLocation: e.target.value }))
                }}
                placeholder='…'
              />
            </fieldset>
            <label htmlFor='form-bio'>Bio</label>
            <fieldset>
              <input
                type='text'
                id='form-bio'
                value={formValues.formBio}
                onChange={(e) => {
                  setFormValues((prev) => ({ ...prev, formBio: e.target.value }))
                }}
                placeholder='…'
              />
            </fieldset>
            <label htmlFor='form-linked-in'>LinkedIn</label>
            <fieldset>
              <input
                type='text'
                id='form-linked-in'
                value={formValues.formLinkedIn}
                onChange={(e) => {
                  setFormValues((prev) => ({ ...prev, formLinkedIn: e.target.value }))
                }}
                placeholder='…'
              />
            </fieldset>
            <label htmlFor='form-github'>GitHub</label>
            <fieldset>
              <input
                type='text'
                id='form-github'
                value={formValues.formGithub}
                onChange={(e) => {
                  setFormValues((prev) => ({ ...prev, formGithub: e.target.value }))
                }}
                placeholder='…'
              />
            </fieldset>
          </form>
          <section className='portfolio-container'>
            <article className='portfolio'>
              <iframe
                className='iframe'
                id='test_iframe'
                src='about:blank'
                width='100%'
              />
            </article>
          </section>
          <footer>
            <div className='message'>
              <p>
                Made with&ensp;
                <FontAwesomeIcon
                  icon={faReact}
                  className='react-icon'
                />
              </p>
            </div>
          </footer>
        </main>
      </div>
    </div>
  )
}
