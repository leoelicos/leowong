import { faAdd, faSave } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button } from 'antd'
import React, { useEffect, useRef, useState } from 'react'

function BucketForm({ onSubmit, edit = null }) {
  const isAddForm = edit === null
  const inputEl = useRef(null)
  const [input, setInput] = useState(isAddForm ? '' : edit.value)
  const [eagerness, setEagerness] = useState(isAddForm ? undefined : edit.eagerness)

  const eagernessLevel = ['High', 'Medium', 'Low']

  const handleSubmit = (e) => {
    e.preventDefault()

    const payload = {
      id: new Date().getTime(),
      text: input.length > 0 ? input : 'No name',
      eagerness: eagerness || 'Low',
      isComplete: false
    }

    onSubmit(payload)

    if (isAddForm) {
      setInput('')
      setEagerness(undefined)
      inputEl.current.focus()
    }
  }

  const handleChange = (e) => {
    setInput(e.target.value)
  }

  useEffect(() => {
    inputEl?.current?.focus()
  }, [])
  return !edit ? (
    /* new item */
    <div>
      <form
        className='bucket-form'
        onSubmit={handleSubmit}>
        <input
          ref={inputEl}
          type='text'
          placeholder='Add to your bucket list'
          value={input}
          name='text'
          className='bucket-input'
          onChange={handleChange}
        />
        <div className='dropdown'>
          <button className={`dropbtn ${eagerness ? eagerness.toLowerCase() : ''}`}>{eagerness || 'Priority'}</button>
          <div className='dropdown-content'>
            <ul style={{ listStyleType: 'none', padding: '0', cursor: 'pointer' }}>
              <li
                className={`dropbtn high`}
                style={{ width: '100%', margin: '0', borderRadius: '0' }}
                onClick={() => {
                  setEagerness(eagernessLevel[0])
                }}>
                High
              </li>
              <li
                className={`dropbtn medium`}
                style={{ width: '100%', margin: '0', borderRadius: '0' }}
                onClick={() => {
                  setEagerness(eagernessLevel[1])
                }}>
                Medium
              </li>
              <li
                className={`dropbtn low`}
                style={{ width: '100%', margin: '0', borderRadius: '0' }}
                onClick={() => {
                  setEagerness(eagernessLevel[2])
                }}>
                Low
              </li>
            </ul>
          </div>
        </div>
        <Button
          type='primary'
          shape='round'
          className='bucket-button'
          onClick={handleSubmit}>
          <FontAwesomeIcon
            icon={faAdd}
            className='add-icon'
          />
        </Button>
      </form>
    </div>
  ) : (
    /* update item */
    <div>
      <h3>Update entry: {edit.value}</h3>
      <form
        className='bucket-form'
        onSubmit={handleSubmit}>
        <input
          ref={inputEl}
          type='text'
          placeholder={edit.value}
          value={input}
          name='text'
          className='bucket-input'
          onChange={handleChange}></input>
        <div className='dropdown'>
          <button className={`dropbtn ${eagerness ? eagerness.toLowerCase() : ''}`}>{eagerness || 'Priority'}</button>
          <div className='dropdown-content'>
            <ul style={{ listStyleType: 'none', padding: '0', cursor: 'pointer' }}>
              <li
                className={`dropbtn high`}
                style={{ width: '100%', margin: '0', borderRadius: '0' }}
                onClick={() => {
                  setEagerness(eagernessLevel[0])
                }}>
                High
              </li>
              <li
                className={`dropbtn medium`}
                style={{ width: '100%', margin: '0', borderRadius: '0' }}
                onClick={() => {
                  setEagerness(eagernessLevel[1])
                }}>
                Medium
              </li>
              <li
                className={`dropbtn low`}
                style={{ width: '100%', margin: '0', borderRadius: '0' }}
                onClick={() => {
                  setEagerness(eagernessLevel[2])
                }}>
                Low
              </li>
            </ul>
          </div>
        </div>

        <Button
          type='primary'
          shape='round'
          className='bucket-button'
          onClick={handleSubmit}>
          <FontAwesomeIcon
            icon={faSave}
            className='save-icon'
          />
        </Button>
      </form>
    </div>
  )
}

export default BucketForm
