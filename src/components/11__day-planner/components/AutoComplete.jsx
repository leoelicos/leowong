import duties from '../data/duties'

import { AutoComplete } from 'antd'
import { useState } from 'react'
import '../css/autocomplete.css'

const App = () => {
  const [value, setValue] = useState('')
  const [options, setOptions] = useState([])
  const onSearch = (searchText) => {
    const matches = searchText.match(/\w+/gm)
    setOptions(!matches ? [] : duties.filter((duty) => matches.some((match) => duty.value.includes(match))))
  }
  const onSelect = (data) => {
    console.log('onSelect', data)
  }
  const onChange = (data) => {
    setValue(data)
  }
  return (
    <>
      <AutoComplete
        className='autocomplete'
        value={value}
        options={options}
        style={{
          width: 200
        }}
        onSelect={onSelect}
        onSearch={onSearch}
        onChange={onChange}
        placeholder='...'
      />
    </>
  )
}
export default App
