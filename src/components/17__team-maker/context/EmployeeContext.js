import { createContext, useReducer } from 'react'

export const EmployeeContext = createContext(null)
export const EmployeeDispatchContext = createContext(null)

export default function EmployeeProvider({ children }) {
  const initialEmployees = [
    { name: 'Bob', role: 0, id: '1677409204360', email: 'bob@github.com' },
    { name: 'Grace', role: 1, id: '1677409204361', email: 'grace@github.com' },
    { name: 'Keyley', role: 2, id: '1677409204362', email: 'kayley@github.com' }
  ]

  const [employees, dispatch] = useReducer(employeeReducer, initialEmployees)

  return (
    <EmployeeContext.Provider value={employees}>
      <EmployeeDispatchContext.Provider value={dispatch}>{children}</EmployeeDispatchContext.Provider>
    </EmployeeContext.Provider>
  )
}
function employeeReducer(employees, { type, action }) {
  switch (type) {
    case 'removedEmployee': {
      return employees.filter((item) => item.id !== action.id)
    }

    case 'savedEmployee': {
      const { id, name, email, role } = action
      let employee = employees.find((employee) => employee.id === action.id)
      if (employee === undefined) return employees.concat({ id, name, email, role })
      return employees.map((e) => (e.id === id ? { id, name, email, role } : e))
    }

    default: {
      return new Error('Action not found')
    }
  }
}
