import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFloppyDisk } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import AutoComplete from '../components/AutoComplete'

const TimeBlock = ({ time, initialText, addToSchedule }) => {
  const [text, setText] = useState(initialText)
  const [saved, setSaved] = useState(false)
  const handleTextChange = (e) => {
    setText(e)
  }
  return (
    <article
      key={time}
      id={`hour${time}`}>
      <section className='timeblock-hour'>{time < 12 ? `${time} AM` : `${time} PM`}</section>
      <AutoComplete
        className='timeblock-textarea'
        text={text}
        onTextChange={handleTextChange}
      />
      <button
        className='timeblock-save'
        data-descr={saved ? 'Saved' : ''}
        onClick={(e) => {
          e.preventDefault()
          addToSchedule(time, text)
          setSaved(true)
          setTimeout(() => {
            setSaved(false)
          }, 1000)
        }}>
        <FontAwesomeIcon icon={faFloppyDisk} />
      </button>
    </article>
  )
}

export default TimeBlock
