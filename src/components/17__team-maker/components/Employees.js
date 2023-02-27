/* state */
import { useContext } from 'react'

/* components */
import { EmployeeContext } from '../context/EmployeeContext'
import Employee from './Employee'

const Employees = () => {
  const employees = useContext(EmployeeContext)

  return !employees?.length ? null : (
    <section className='view'>
      {employees
        .sort((a, b) => a.role - b.role)
        .map((employeeProps) => (
          <Employee
            key={employeeProps.id}
            {...employeeProps}
          />
        ))}
    </section>
  )
}
export default Employees
