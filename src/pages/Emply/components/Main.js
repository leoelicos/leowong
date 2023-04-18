import { useState, useContext } from 'react'
import useIDB from '../hooks/useIdb'
import useLocalStorage from '../hooks/useLocalStorage'

import { EmployeeContext, EmployeeDispatchContext } from '../context/EmployeeContext'
import EmployeeCard from './EmployeeCard'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAdd, faTrash } from '@fortawesome/free-solid-svg-icons'
import { Button, ConfigProvider } from 'antd'
import { faker } from '@faker-js/faker'

const Main = () => {
  const [newEmployees, setNewEmployees] = useState([])

  const { updateLS } = useLocalStorage('team-maker-employees')

  const { putDb, deleteDb, clearDb } = useIDB()

  const dispatchEmployee = useContext(EmployeeDispatchContext)

  const employees = useContext(EmployeeContext)

  const handleSave = ({ id, name, email, role }) => {
    const employee = { id, name, email, role }
    const n = employees.map((e) => (e.id === id ? employee : e))

    putDb(employee) /* update idb */

    updateLS(n) /* update local storage */

    /* update Context */
    dispatchEmployee({
      type: 'savedEmployee',
      action: employee
    })
  }

  const handleAdd = ({ name, email, role }) => {
    const id = new Date().getTime() + name.slice(0, 3)
    const employee = { id, name, email, role }
    const n = employees.concat(employee)

    putDb(employee) /* update idb */

    updateLS(n) /* update local storage */

    /* update Context */
    dispatchEmployee({
      type: 'addedEmployee',
      action: employee
    })
  }

  const handleAddBlank = () => {
    setNewEmployees((prev) => prev.concat({ id: new Date().getTime() }))
  }

  const handleDeleteBlank = (id) => {
    setNewEmployees((prev) => prev.filter((employee) => employee.id !== id))
  }

  const handleDeleteAllBlanks = () => {
    setNewEmployees([])
  }

  const handleDeleteAllEmployees = () => {
    clearDb() /* update idb */

    updateLS([]) /* update local storage */

    dispatchEmployee({
      type: 'clickedDeleteAllEmployees',
      action: undefined
    })
  }

  const handleAddRandomEmployees = () => {
    const randoms = new Array(10).fill(0).map(() => {
      const name = faker.name.fullName()
      const id = new Date().getTime() + name.slice(0, 3)
      const email = faker.internet.email()
      const role = Math.floor(Math.random() * 3)
      return { id, name, email, role }
    })

    const randomEmployees = employees.concat(randoms)
    /* update local storage */
    updateLS(randomEmployees)
    randoms.forEach((e) => {
      /* update idb */
      putDb(e)

      /* update Context */
      dispatchEmployee({
        type: 'addedEmployee',
        action: e
      })
    })
  }

  const handleDelete = (id) => {
    /* update idb */
    deleteDb(id)

    /* update local storage */
    let employee = employees.find((e) => e.id === id)
    if (!!employee) updateLS(employees.filter((e) => e.id !== id))

    /* update Context */
    dispatchEmployee({ type: 'removedEmployee', action: { id: id } })
  }

  return (
    <main>
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
        <section className='employees'>
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
          <div className='buttons above'>
            <Button
              style={{ boxShadow: 'none' }}
              type='primary'
              onClick={handleAddRandomEmployees}>
              <FontAwesomeIcon icon={faAdd} />
              &nbsp;10 random
            </Button>
            {employees?.length > 0 && (
              <Button
                style={{ boxShadow: 'none' }}
                type='primary'
                danger
                onClick={handleDeleteAllEmployees}>
                <FontAwesomeIcon icon={faTrash} />
                &nbsp;Delete all
              </Button>
            )}
          </div>
        </section>
      </ConfigProvider>

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
        <section className='new-employees'>
          <div className='buttons below'>
            <Button
              style={{ boxShadow: 'none' }}
              type='primary'
              onClick={handleAddBlank}>
              <FontAwesomeIcon icon={faAdd} />
            </Button>
            {newEmployees?.length > 0 && (
              <Button
                style={{ boxShadow: 'none' }}
                type='default'
                danger
                onClick={handleDeleteAllBlanks}>
                <FontAwesomeIcon icon={faTrash} />
                &nbsp;Clear unsaved
              </Button>
            )}
          </div>
          {newEmployees?.length > 0 && (
            <section className='new-employees-list'>
              {newEmployees.map(({ id }) => (
                <EmployeeCard
                  key={id}
                  id={id}
                  onDelete={() => {
                    handleDeleteBlank(id)
                  }}
                  initialValues={{ name: '', email: '', role: undefined }}
                  initialMode='edit'
                  onSave={handleAdd}
                />
              ))}
            </section>
          )}
        </section>
      </ConfigProvider>
    </main>
  )
}
export default Main
