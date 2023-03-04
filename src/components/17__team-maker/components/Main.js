/* react */
import { useState, useContext, useEffect } from 'react'
import { EmployeeContext, EmployeeDispatchContext } from '../context/EmployeeContext'

import EmployeeCard from './EmployeeCard'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAdd } from '@fortawesome/free-solid-svg-icons'
import { Button, ConfigProvider } from 'antd'
import useIDB from '../hooks/useIdb'
import useLocalStorage from '../hooks/useLocalStorage'

const Main = () => {
  const [newEmployees, setNewEmployees] = useState([])
  const { employeesLS, updateEmployeesLS } = useLocalStorage('team-maker-employees')
  const dispatchEmployee = useContext(EmployeeDispatchContext)
  const employees = useContext(EmployeeContext)
  const { putDb, getDb, deleteDb } = useIDB()

  const handleSave = ({ id, name, email, role }) => {
    dispatchEmployee({ type: 'savedEmployee', action: { id, name, email, role } })
    putDb({ id, name, email, role })

    updateEmployeesLS(
      !employees.find((e) => e.id === id) //
        ? employees.concat({ id, name, email, role })
        : employees.map((e) =>
            e.id === id //
              ? { id, name, email, role }
              : e
          )
    )
  }

  const handleDelete = (id) => {
    dispatchEmployee({ type: 'removedEmployee', action: { id: id } })
    deleteDb(id)
    let employee = employees.find((e) => e.id === id)
    if (!!employee) updateEmployeesLS(employees.filter((e) => e.id !== id))
  }

  useEffect(() => {
    const fillProvider = async () => {
      try {
        const idb = await getDb()
        const ls = employeesLS
        const fallback = [
          { name: 'Bob', role: 0, id: '1677409204360', email: 'bob@github.com' },
          { name: 'Grace', role: 1, id: '1677409204361', email: 'grace@github.com' },
          { name: 'Keyley', role: 2, id: '1677409204362', email: 'kayley@github.com' }
        ]
        const initialEmployees = idb?.length > 0 ? idb : ls.length > 0 ? ls : fallback
        initialEmployees.forEach((e) => {
          dispatchEmployee({ type: 'savedEmployee', action: e })
          putDb(e)
        })
        updateEmployeesLS(initialEmployees)
      } catch (e) {
        console.error(e)
      }
    }
    fillProvider()
  }, [])

  return (
    <main>
      {!employees?.length ? null : (
        <ConfigProvider
          theme={{
            token: {
              colorPrimary: '#0014ab',
              colorBgBase: '#faebd7',
              colorBorder: '#0014ab',
              colorBorderSecondary: 'transparent',
              colorTextDescription: '#7a6345',
              colorError: '#b22',
              colorBgElevated: '#faead6',

              colorPrimaryBg: 'transparent'
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
                    handleDelete(id)
                  }}
                  onSave={handleSave}
                />
              ))}
          </section>
        </ConfigProvider>
      )}
      <section className='new-employees'>
        <ConfigProvider
          theme={{
            token: {
              colorPrimary: 'black',
              colorBgBase: 'white',
              colorError: '#b22',
              colorBorderSecondary: 'transparent',

              colorBorder: '#0014ab',
              colorBgElevated: 'white',

              colorPrimaryBg: 'transparent'
            }
          }}>
          <Button
            style={{ boxShadow: 'none' }}
            type='primary'
            onClick={() => {
              setNewEmployees((prev) => prev.concat({ id: new Date().getTime() }))
            }}>
            <FontAwesomeIcon icon={faAdd} />
          </Button>
          {newEmployees?.length > 0 && (
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
                  onSave={handleSave}
                />
              ))}
            </section>
          )}
        </ConfigProvider>
      </section>
    </main>
  )
}
export default Main
