import { faSave, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button, Card, Input, Select } from 'antd'
import { useContext } from 'react'
import { EmployeeDispatchContext } from '../context/EmployeeContext'

const Employee = (employeeProps) => {
  const { name, email, id, role } = employeeProps

  const dispatchEmployee = useContext(EmployeeDispatchContext)

  const handleChangeName = () => {
    dispatchEmployee({ type: 'changedName', action: { name, id } })
  }

  const handleChangeRole = () => {
    dispatchEmployee({ type: 'changedRole', action: { role, id } })
  }

  const handleChangeEmail = () => {
    dispatchEmployee({ type: 'changedEmail', action: { email, id } })
  }
  const handleSaveEmployee = () => {
    dispatchEmployee({ type: 'savedEmployee', action: { name, role, email, id } })
  }

  const handleDeleteEmployee = () => {
    dispatchEmployee({ type: 'removedEmployee', action: { id } })
  }

  return (
    <article className={`employee ${role === 0 ? 'manager' : role === 1 ? 'engineer' : role === 2 ? 'intern' : ''}`}>
      <Card
        className='employee-card'
        bordered={false}
        title={
          <Input
            value={name}
            onChange={(e) => {
              handleChangeName(id, e.target.value)
            }}
          />
        }
        extra={
          <Button
            type='primary'
            shape='default'
            block
            onClick={handleSaveEmployee}>
            <FontAwesomeIcon icon={faSave} />
          </Button>
        }
        actions={[
          <Button
            type='primary'
            shape='default'
            danger
            onClick={handleDeleteEmployee}>
            <FontAwesomeIcon icon={faTrash} />
          </Button>
        ]}>
        <table>
          <tbody>
            <tr>
              <th>Role</th>
              <td>
                <Select
                  bordered={false}
                  value={role}
                  onChange={handleChangeRole}
                  options={[
                    { label: 'Manager', value: 0 },
                    { label: 'Engineer', value: 1 },
                    { label: 'Intern', value: 2 }
                  ]}></Select>
              </td>
            </tr>
            <tr>
              <th>Email</th>
              <td>
                <Input
                  value={email}
                  onChange={handleChangeEmail}
                />
              </td>
            </tr>
            <tr>
              <th>ID</th>
              <td>{id}</td>
            </tr>
          </tbody>
        </table>
      </Card>
    </article>
  )
}
export default Employee
