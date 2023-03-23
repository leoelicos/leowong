import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFloppyDisk } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import AutoComplete from './AutoComplete'
import TextArea from 'antd/es/input/TextArea'

const TimeBlock = ({ time, initialText, addToSchedule, relative }) => {
  const [text, setText] = useState(initialText)
  const [saved, setSaved] = useState(false)
  const handleTextChange = (e) => {
    setText(e)
  }

  return (
    <article
      key={time}
      id={`hour${time}`}>
      <section className='timeblock-hour'>{time < 12 ? `${time} AM` : `${time === 12 ? 12 : time - 12} PM`}</section>
      <div className={`timeblock-textarea ${relative}`}>
        <AutoComplete
          text={text}
          onTextChange={handleTextChange}
          style={{ width: '100%' }}>
          <TextArea
            style={{ background: 'none' }}
            className='.app-11-text-area'
          />
        </AutoComplete>
      </div>
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
