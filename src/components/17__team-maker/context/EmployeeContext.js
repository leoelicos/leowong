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
      if (employee === undefined) {
        const newEmployees = employees.concat({ id, name, email, role })
        console.log({ newEmployees })
        return newEmployees
      } else {
        const newEmployees = employees.map((e) => (e.id === id ? { id, name, email, role } : e))
        console.log(newEmployees)
        return newEmployees
      }
    }

    case 'changedName': {
      const { id, name } = action
      let employee = employees.find((employee) => employee.id === id)
      if (employee === undefined) {
        console.log('Not found')
        return employees
      } else return employees.map((e) => (e.id === id ? { ...e, name } : e))
    }

    case 'changedRole': {
      const { id, role } = action
      let employee = employees.find((employee) => employee.id === id)
      if (employee === undefined) {
        console.log('Not found')
        return employees
      } else return employees.map((e) => (e.id === id ? { ...e, role } : e))
    }

    case 'changedEmail': {
      const { id, email } = action
      let employee = employees.find((employee) => employee.id === id)
      if (employee === undefined) {
        console.log('Not found')
        return employees
      } else return employees.map((e) => (e.id === id ? { ...e, email } : e))
    }

    default: {
      return new Error('Action not found')
    }
  }
}
