import { faSave, faAdd, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button, Card, ConfigProvider, Input, Select } from 'antd'
import { useState } from 'react'

import EmployeeProvider from './context/EmployeeContext'
import './style/index.css'

const initialEmployees = [
  { name: 'Bob', role: 0, id: '1677409204360', email: 'bob@github.com' },
  { name: 'Grace', role: 1, id: '1677409204361', email: 'grace@github.com' },
  { name: 'Keyley', role: 2, id: '1677409204362', email: 'kayley@github.com' }
]

const TeamMaker = () => {
  const [employees, setEmployees] = useState(initialEmployees)
  const handleNewEmployee = () => {
    console.log('Clicked handleNewEmployee')
  }

  const handleDeleteEmployee = () => {
    console.log('Clicked Delete Employee')
  }
  const handleSaveEmployee = () => {
    console.log('Clicked Save Employee')
  }

  const handleChangeName = (e) => {
    console.log({ e })
    setEmployees((prev) => prev.map((employee) => (employee.id === 'EMP001' ? { ...employee, name: e.target.value } : employee)))
  }

  const handleChangeRole = (e) => {
    setEmployees((prev) => prev.map((employee) => (employee.id === 'EMP001' ? { ...employee, role: e } : employee)))
  }
  const handleChangeEmail = (e) => {
    setEmployees((prev) => prev.map((employee) => (employee.id === 'EMP001' ? { ...employee, email: e.target.value } : employee)))
  }
  return (
    <div className='app-17'>
      <div className='body'>
        <header>
          <h1>Team Maker</h1>
        </header>
        <main>
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
                onClick={handleNewEmployee}>
                <FontAwesomeIcon icon={faAdd} />
                &ensp;Employee
              </Button>
            </ConfigProvider>
            <section>
              {employees
                .sort((a, b) => b.role - a.role)
                .map((employeeProps) => (
                  <Article
                    key={employeeProps.id}
                    {...employeeProps}
                    handleChangeName={handleChangeName}
                    handleSaveEmployee={handleSaveEmployee}
                    handleDeleteEmployee={handleDeleteEmployee}
                    handleChangeRole={handleChangeRole}
                    handleChangeEmail={handleChangeEmail}
                  />
                ))}
            </section>
          </section>
        </main>
        <footer>
          <p>End</p>
        </footer>
      </div>
    </div>
  )
}
export default TeamMaker
