import { faSave, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button, Card, Input, Select } from 'antd'
import { useContext } from 'react'
import { EmployeeDispatchContext } from '../context/EmployeeContext'
import DeleteButton from './DeleteButton'
const NewEmployee = ({ name, email, id, role, onDelete, onChangeName, onChangeEmail, onChangeRole }) => {
  const dispatchEmployee = useContext(EmployeeDispatchContext)
  const onSave = () => {
    dispatchEmployee({ type: 'savedEmployee', action: { name, id, email, role } })
    onDelete({ id })
  }
  const roleClass = role === 0 ? 'manager' : role === 1 ? 'engineer' : role === 2 ? 'intern' : ''
  return (
    <article className={`employee ${roleClass}`}>
      <Card
        className='employee-card'
        bordered={false}
        title={
          <Input
            value={name}
            onChange={(e) => {
              const name = e.target.value
              onChangeName({ id, name })
            }}
          />
        }
        extra={
          <Button
            type='primary'
            shape='default'
            block
            onClick={onSave}>
            <FontAwesomeIcon icon={faSave} />
          </Button>
        }
        actions={[
          <DeleteButton
            cb={() => {
              onDelete({ id })
            }}
          />
        ]}>
        <table>
          <tbody>
            <tr>
              <th>Role</th>
              <td>
                <Select
                  bordered={false}
                  value={role}
                  onChange={(e) => {
                    const role = e
                    onChangeRole({ id, role })
                  }}
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
                  onChange={(e) => {
                    const email = e.target.value
                    onChangeEmail({ id, email })
                  }}
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
export default NewEmployee
