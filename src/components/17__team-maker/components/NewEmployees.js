import { faAdd } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button, ConfigProvider } from 'antd'
import { useState } from 'react'

import NewEmployee from './NewEmployee'
const NewEmployees = () => {
  const [newEmployees, setNewEmployees] = useState([])

  const onDeleteNewEmployee = ({ id }) => {
    console.log('Clicked delete new employee')
    setNewEmployees((prev) => prev.filter((e) => e.id !== id))
  }

  const onChangeNewEmployeeName = ({ id, name }) => {
    setNewEmployees((prev) => prev.map((e) => (e.id === id ? { ...e, name } : e)))
  }

  const onChangeNewEmployeeEmail = ({ id, email }) => {
    setNewEmployees((prev) => prev.map((e) => (e.id === id ? { ...e, email } : e)))
  }

  const onChangeNewEmployeeRole = ({ id, role }) => {
    setNewEmployees((prev) => prev.map((e) => (e.id === id ? { ...e, role } : e)))
  }

  const onAddNewEmployee = () => {
    console.log('Clicked add new employee')
    const id = new Date().getTime()
    setNewEmployees((prev) => prev.concat({ id, name: '', role: undefined, email: '' }))
  }

  return (
    <section className='edit'>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: 'green'
          }
        }}>
        <Button
          className='add-employee-button'
          type='primary'
          onClick={onAddNewEmployee}>
          <FontAwesomeIcon icon={faAdd} />
          &ensp;Employee
        </Button>
        <section className='new-employees'>
          {!newEmployees?.length
            ? null
            : newEmployees
                .sort((a, b) => b.id - a.id)
                .map((employeeProps) => (
                  <NewEmployee
                    key={employeeProps.id}
                    {...employeeProps}
                    onDelete={onDeleteNewEmployee}
                    onChangeName={onChangeNewEmployeeName}
                    onChangeEmail={onChangeNewEmployeeEmail}
                    onChangeRole={onChangeNewEmployeeRole}
                  />
                ))}
        </section>
      </ConfigProvider>{' '}
    </section>
  )
}
export default NewEmployees
