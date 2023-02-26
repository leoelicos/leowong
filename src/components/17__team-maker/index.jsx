import { useState } from 'react'

/* context */
import EmployeeProvider from './context/EmployeeContext'

/* components */
import { Button, ConfigProvider } from 'antd'
import Employees from './components/Employees'
import NewEmployee from './components/NewEmployee'

/* images and style */
import { faAdd } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './style/index.css'

const TeamMaker = () => {
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
    <div className='app-17'>
      <div className='body'>
        <EmployeeProvider>
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
                <section className='new-employee'>
                  <Button
                    className='add-employee-button'
                    type='primary'
                    onClick={onAddNewEmployee}>
                    <FontAwesomeIcon icon={faAdd} />
                    &ensp;Employee
                  </Button>
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
              </ConfigProvider>
              <section>
                <Employees />
              </section>
            </section>
          </main>
          <footer>
            <p>End</p>
          </footer>
        </EmployeeProvider>
      </div>
    </div>
  )
}
export default TeamMaker
