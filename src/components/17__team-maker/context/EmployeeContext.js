import { createContext, useReducer } from 'react'

export const EmployeeContext = createContext(null)
export const EmployeeDispatchContext = createContext(null)

export default function EmployeeProvider({ children }) {
  const initialEmployees = []
  const [employee, dispatch] = useReducer(employeeReducer, initialEmployees)
  return (
    <EmployeeContext.Provider value={employee}>
      <EmployeeDispatchContext.Provider value={dispatch}>{children}</EmployeeDispatchContext.Provider>
    </EmployeeContext.Provider>
  )
}
function employeeReducer(employee, action) {
  switch (action.type) {
    case 'addedEmployee': {
      return employee.concat(action.id)
    }
    case 'removedEmployee': {
      return employee.filter((item) => item !== action.id)
    }
    case 'changedEmployeeName': {
      return employee.map()
    }
    case 'savedEmployee': {
    }
    default: {
      return new Error('Action not found')
    }
  }
}
