/* state */
import { faCopy } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { createContext, useCallback, useEffect, useMemo, useState } from 'react'

/* style */
import './style/style.css'
import injectHTML from './iframeLoad'
import { notification, Button } from 'antd'

/* favicon, title */
import useFavicon from '../../hooks/useFavicon'
import useTitle from '../../hooks/useTitle'

import logo from './images/megen.png'
const Context = createContext({
  name: 'Default'
})

export default function HTMLGenerator() {
  useFavicon('/favicons/megen.png')
  useTitle('Megen')

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
  const getString = useCallback((formValues) => {
    const name = formValues?.formName || '…'
    const location = formValues?.formLocation || '…'
    const bio = formValues?.formBio || '…'
    const linkedIn = formValues?.formLinkedIn || '…'
    const github = formValues?.formGithub || '…'
    return `<html>
<head>
</head>
<body >
<h1>About me</h1>
<ul>
<li>👋🏻 Hi, I'm ${name}</li>
<li>🏝️ I am based in ${location}</li>
<li>💬 ${bio}</li>
<li>🔗 Connect with me at <a href='https://linkedin.in/${linkedIn}' target='_blank'>LinkedIn</a></li>
<li>🧑🏻‍💻 Find my repos at <a href='https://github.com/${github}' target='_blank'>GitHub</a></li>
</ul>
</body>
</html>`
  }, [])

  /* event handlers */
  const handleSubmit = async (e) => {
    e.preventDefault()
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
    <div className='megen'>
      <header>
        <img
          src={logo}
          alt='logo'
          className='logo'
        />
        <h1>Megen</h1>
        <Context.Provider value={contextValue}>
          {contextHolder}
          <Button
            className='disable-caret'
            type='button'
            onClick={handleSubmit}>
            <FontAwesomeIcon icon={faCopy} />
            &nbsp;Generate HTML
          </Button>
        </Context.Provider>
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
    </div>
  )
}
