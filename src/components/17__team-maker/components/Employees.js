/* state */
import { useContext } from 'react'

/* components */
import { EmployeeContext } from '../context/EmployeeContext'
import Employee from './Employee'

const Employees = () => {
  const employees = useContext(EmployeeContext)

  console.log({ employees })
  return !employees?.length
    ? null
    : employees
        .sort((a, b) => a.role - b.role)
        .map((employeeProps) => (
          <Employee
            key={employeeProps.id}
            {...employeeProps}
          />
        ))
}
export default Employees
