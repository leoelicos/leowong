import duties from '../data/duties'

import { AutoComplete } from 'antd'
import { useState } from 'react'
const mockVal = (str, repeat = 1) => ({
  value: str.repeat(repeat)
})
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
        value={value}
        options={options}
        style={{
          width: 200
        }}
        onSelect={onSelect}
        onSearch={onSearch}
        onChange={onChange}
        placeholder='control mode'
      />
    </>
  )
}
export default App
