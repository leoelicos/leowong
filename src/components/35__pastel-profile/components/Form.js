import { useState, useId } from 'react'

import { validateEmail } from '../utils/helpers.js'

function Form() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [errorMessage, setErrorMessage] = useState('')

  const handleInputChange = (e) => {
    const { target } = e
    const inputType = target.name
    const inputValue = target.value

    if (inputType === 'name') {
      setName(inputValue)
    } else if (inputType === 'email') {
      setEmail(inputValue)
    } else {
      setMessage(inputValue)
    }
  }

  const handleFormSubmit = (e) => {
    e.preventDefault()

    if (!name) {
      setErrorMessage('Name is required')
      return
    }

    if (!email) {
      setErrorMessage('Email is required')
      return
    }

    if (!validateEmail(email)) {
      setErrorMessage('Email is invalid')
      return
    }

    if (!message) {
      setErrorMessage('Message is required')
      return
    }

    alert(`Hello ${name}. We'll be in touch shortly.`)

    setName('')
    setEmail('')
    setMessage('')
  }

  const contactFormId = useId()
  const contactNameId = useId()
  const contactEmailId = useId()
  const contactMessageId = useId()

  return (
    <>
      <form id={contactFormId}>
        <label htmlFor={contactNameId}>Your Name:</label>
        <input
          id={contactNameId}
          required=''
          value={name}
          name='name'
          onChange={handleInputChange}
          type='text'
        />
        <label htmlFor={contactEmailId}>Your Email:</label>
        <input
          id={contactEmailId}
          required=''
          value={email}
          name='email'
          onChange={handleInputChange}
          type='email'
        />
        <label htmlFor={contactMessageId}>Your Message:</label>
        <input
          id={contactMessageId}
          value={message}
          name='message'
          onChange={handleInputChange}
          type='textarea'
        />
        <input
          type='submit'
          id='send-button'
          value='Send Your Message'
          onClick={handleFormSubmit}
          className='btn-wrapper'
        />
      </form>

      {errorMessage && (
        <div>
          <p className='error-text'>{errorMessage}</p>
        </div>
      )}
    </>
  )
}

export default Form
