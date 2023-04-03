import { createContext, useEffect, useReducer } from 'react'

import useIDB from '../hooks/useIdb.js'
import useLocalStorage from '../hooks/useLocalStorage'

export const EmployeeContext = createContext(null)
export const EmployeeDispatchContext = createContext(null)

export default function EmployeeProvider({ children }) {
  const [employees, dispatch] = useReducer(employeeReducer, [])
  const { putDb, getDb } = useIDB()
  const { ls, updateLS } = useLocalStorage('team-maker-employees')

  useEffect(() => {
    const initialiseEmployeeContext = async () => {
      try {
        const idb = await getDb()
        if (idb?.length > 0) {
          console.log('Emply Context init: idb not zero', { idb })
          updateLS(idb)
          idb.forEach((e) => dispatch({ type: 'addedEmployee', action: e }))
        } else if (ls?.length > 0) {
          console.log('Emply Context init: ls not zero')
          ls.forEach((e) => {
            putDb(e)
            dispatch({ type: 'addedEmployee', action: e })
          })
        } else {
          console.log('Emply Context init: use fallback')
          const fallback = [
            { name: 'Bob', role: 0, id: 1677409204360, email: 'bob@github.com' },
            { name: 'Grace', role: 1, id: 1677409204361, email: 'grace@github.com' },
            { name: 'Keyley', role: 2, id: 1677409204362, email: 'kayley@github.com' }
          ]
          updateLS(fallback)
          fallback.forEach((e) => {
            putDb(e)
            dispatch({ type: 'addedEmployee', action: e })
          })
        }
      } catch (e) {
        console.error(e)
      }
    }
    initialiseEmployeeContext()
    // eslint-disable-next-line
  }, [])

  return (
    <EmployeeContext.Provider value={employees}>
      <EmployeeDispatchContext.Provider value={dispatch}>{children}</EmployeeDispatchContext.Provider>
    </EmployeeContext.Provider>
  )
}

/* return updated state to useReducer */
function employeeReducer(employees, { type, action }) {
  switch (type) {
    case 'savedEmployee': {
      console.log('savedEmployee')
      if (!employees) return []

      const { id, name, email, role } = action
      console.log({ id, name, email, role })

      const employee = { id, name, email, role }

      return employees.map((e) => (e.id === id ? employee : e))
    }

    case 'addedEmployee': {
      if (!employees) return []

      const { id, name, email, role } = action

      const employee = { id, name, email, role }

      return employees.concat(employee)
    }

    case 'removedEmployee': {
      console.log('removedEmployee', { employees, type, action })
      const newEmployees = employees.filter((item) => item.id !== action.id)
      return newEmployees
    }

    case 'clickedDeleteAllEmployees': {
      console.log('clickedDeleteAllEmployees')
      return []
    }

    default: {
      return new Error('Action not found')
    }
  }
}
