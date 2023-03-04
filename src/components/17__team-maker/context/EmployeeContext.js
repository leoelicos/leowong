import { createContext, useReducer } from 'react'

export const EmployeeContext = createContext(null)
export const EmployeeDispatchContext = createContext(null)

export default function EmployeeProvider({ children }) {
  const [employees, dispatch] = useReducer(employeeReducer, [])
  return (
    <EmployeeContext.Provider value={employees}>
      <EmployeeDispatchContext.Provider value={dispatch}>{children}</EmployeeDispatchContext.Provider>
    </EmployeeContext.Provider>
  )
}
function employeeReducer(employees, { type, action }) {
  switch (type) {
    case 'savedEmployee': {
      const { id, name, email, role } = action
      let employee = employees.find((employee) => employee.id === action.id)

      const newEmployee = { id, name, email, role }
      let newEmployees =
        employee === undefined //
          ? employees.concat(newEmployee)
          : employees.map((e) => (e.id === id ? newEmployee : e))
      return newEmployees
    }

    case 'removedEmployee': {
      const newEmployees = employees.filter((item) => item.id !== action.id)
      return newEmployees
    }

    default: {
      return new Error('Action not found')
    }
  }
}
