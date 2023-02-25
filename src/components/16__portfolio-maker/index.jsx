/* state */
import { faReact } from '@fortawesome/free-brands-svg-icons'
import { faCopy } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { createContext, useCallback, useEffect, useMemo, useState } from 'react'

/* style */
import './style/index.css'
import injectHTML from './iframeLoad'
import { notification } from 'antd'

const Context = createContext({
  name: 'Default'
})

export default function HTMLGenerator() {
  const [api, contextHolder] = notification.useNotification()
  const openNotification = () => {
    const options = {
      message: 'Success!',
      description: <Context.Consumer>{({ name }) => `${name}`}</Context.Consumer>,
      placement: 'bottomRight',
      duration: 1
    }
    api.info(options)
  }

  /* state */
  const [formValues, setFormValues] = useState({ formName: '', formLocation: '', formBio: '', formLinkedIn: '', formGithub: '' })
  const getString = useCallback(
    (formValues) =>
      `<html>
<head>
</head>
<body>
<h1>About me</h1>
<ul>
<li>👋🏻 Hi, I'm ${formValues.formName.length > 0 ? formValues.formName : '…'}</li>
<li>🏝️ I am based in ${formValues.formLocation.length > 0 ? formValues.formLocation : '…'}</li>
<li>💬 ${formValues.formBio.length > 0 ? formValues.formBio : '…'}</li>
<li>🔗 Connect with me at <a href='https://linkedin.in/${formValues.formLinkedIn.length > 0 ? formValues.formLinkedIn : '…'}' target='_blank'>LinkedIn</a></li>
<li>🧑🏻‍💻 Find my repos at <a href='https://github.com/${formValues.formGithub.length > 0 ? formValues.formGithub : '…'}' target='_blank'>GitHub</a></li>
</ul>
</body>
</html>`,
    []
  )

  /* event handlers */
  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log(formValues)
    const output = getString()

    try {
      await navigator.clipboard.writeText(output)

      openNotification()
    } catch (e) {
      console.error(e)
    }
  }

  useEffect(() => {
    injectHTML(getString(formValues))
  }, [formValues, getString])

  const contextValue = useMemo(() => ({ name: 'HTML copied to clipboard' }), [])

  return (
    <div className='app-16'>
      <div className='body'>
        <header>
          <h1>Portfolio Maker</h1>
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
            <Context.Provider value={contextValue}>
              {contextHolder}
              <button
                className='disable-caret'
                type='button'
                onClick={handleSubmit}>
                <FontAwesomeIcon icon={faCopy} /> Copy HTML
              </button>
            </Context.Provider>
          </form>
          <section
            className='portfolio-container'
            style={{ height: '100%' }}>
            <article
              className='portfolio'
              style={{ height: '100%' }}>
              <iframe
                title='generated page'
                className='iframe'
                id='test_iframe'
                src='about:blank'
                width='100%'
                height='100%'
              />
            </article>
          </section>
        </main>
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
      </div>
    </div>
  )
}
