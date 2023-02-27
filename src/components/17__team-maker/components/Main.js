/* react */
import { useState, useContext } from 'react'
import { EmployeeContext, EmployeeDispatchContext } from '../context/EmployeeContext'

import EmployeeCard from './EmployeeCard'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAdd } from '@fortawesome/free-solid-svg-icons'
import { Button, ConfigProvider } from 'antd'

const Main = () => {
  const [newEmployees, setNewEmployees] = useState([])
  const dispatchEmployee = useContext(EmployeeDispatchContext)
  const employees = useContext(EmployeeContext)

  return (
    <main>
      {!employees?.length ? null : (
        <ConfigProvider
          theme={{
            token: {
              colorPrimary: 'black',
              colorBgBase: '#faebd7',
              colorBorderSecondary: '#0014ab',
              colorError: '#b22'
            }
          }}>
          <section className='view'>
            {employees
              .sort((a, b) => a.role - b.role)
              .map(({ id, name, email, role }) => (
                <EmployeeCard
                  key={id}
                  id={id}
                  name={name}
                  email={email}
                  role={role}
                  initialValues={{ id, name, email, role }}
                  actualValues={{ id, name, email, role }}
                  onDelete={() => {
                    dispatchEmployee({ type: 'removedEmployee', action: { id: id } })
                  }}
                />
              ))}
          </section>
        </ConfigProvider>
      )}
      <section className='new-employees'>
        <ConfigProvider
          theme={{
            token: { colorPrimary: 'black', colorBgBase: 'white', colorError: '#b22' }
          }}>
          <Button
            style={{ boxShadow: 'none' }}
            type='primary'
            onClick={() => {
              setNewEmployees((prev) => prev.concat({ id: new Date().getTime() }))
            }}>
            <FontAwesomeIcon icon={faAdd} />
          </Button>
          <section className='new-employees-list'>
            {newEmployees.map(({ id }) => (
              <EmployeeCard
                key={id}
                id={id}
                onDelete={() => {
                  setNewEmployees((prev) => prev.filter((employee) => employee.id !== id))
                }}
                initialValues={{ name: '', email: '', role: undefined }}
                initialMode='edit'
              />
            ))}
          </section>
        </ConfigProvider>
      </section>
    </main>
  )
}
export default Main
