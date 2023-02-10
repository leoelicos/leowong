import duties from '../data/duties'

import { AutoComplete } from 'antd'
import { useState } from 'react'
import '../css/autocomplete.css'

const App = ({ text, onTextChange }) => {
  const [options, setOptions] = useState([])
  const onSearch = (searchText) => {
    const matches = searchText.match(/\w+/gm)
    setOptions(!matches ? [] : duties.filter((duty) => matches.some((match) => duty.value.includes(match))))
  }

  return (
    <AutoComplete
      className='autocomplete'
      value={text}
      options={options}
      style={{
        width: 200
      }}
      onSearch={onSearch}
      onChange={onTextChange}
      placeholder='...'
    />
  )
}
export default App
