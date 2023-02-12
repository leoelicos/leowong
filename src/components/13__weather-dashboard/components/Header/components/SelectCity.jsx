import { forwardRef } from 'react'
import { Select } from 'antd'
const { Option } = Select

const SelectCity = forwardRef(({ open, responseCities, isActive }, ref) => {
  return (
    <Select
      id='cityMatch'
      className={`form-select ${isActive ? '' : 'gray'}`}
      defaultValue='1'
      open={open}
      ref={ref}>
      {responseCities.map((c, i) => (
        <Option
          key={i}
          id={`match${i}`}>
          {c}
        </Option>
      ))}
    </Select>
  )
})
export default SelectCity
