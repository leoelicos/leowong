/* react */
import { useRef, useState } from 'react'

/* antd */
import { Alert, Button, Card, Divider, Form, Input, Select } from 'antd'

/* images */
import { faClose, faPen, faSave, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Meta from 'antd/es/card/Meta'

const EmployeeCard = ({ id, onDelete, initialValues, initialMode, actualValues, onSave }) => {
  const [mode, setMode] = useState(initialMode) // view or edit
  const hasSubmitted = useRef(false)

  const handleFinish = ({ name, role, email }) => {
    onSave({ name, role, email, id })

    setMode('view')
    hasSubmitted.current = false
  }

  return mode === 'edit' ? (
    <article className='employee'>
      <Form
        onFinish={handleFinish}
        initialValues={initialValues}>
        <Card
          headStyle={{ paddingBottom: '8px' }}
          size='small'
          className='employee-card'
          bordered={false}
          extra={
            <Button
              type='link'
              danger
              htmlType='button'
              shape='circle'
              style={{ marginLeft: '8px' }}
              onClick={() => {
                setMode('view')
              }}>
              <FontAwesomeIcon icon={faClose} />
            </Button>
          }
          title={actualValues ? 'Edit employee' : 'New employee'}
          style={{ paddingTop: '1.5rem' }}>
          <table>
            <tbody>
              <tr>
                <th>Name</th>
                <td>
                  <Form.Item
                    name='name'
                    rules={[
                      {
                        required: true,
                        message: (
                          <Alert
                            type='error'
                            message='Required'
                            showIcon
                          />
                        )
                      },
                      {
                        pattern: new RegExp(/^[^\d]+$/g),
                        message: (
                          <Alert
                            type='error'
                            message='No numbers'
                            showIcon
                          />
                        )
                      },
                      {
                        pattern: new RegExp(/^[^!";#$%&'()*+,./:;<=>?@[\]^_{|}~]+$/),
                        message: (
                          <Alert
                            type='error'
                            message='No symbols'
                            showIcon
                          />
                        )
                      }
                    ]}>
                    <Input placeholder='Enter a name' />
                  </Form.Item>
                </td>
              </tr>
              <tr>
                <th>Role</th>
                <td>
                  <Form.Item
                    name='role'
                    rules={[
                      {
                        required: true,
                        message: (
                          <Alert
                            type='error'
                            message='Required'
                            showIcon
                          />
                        )
                      }
                    ]}>
                    <Select
                      placeholder='Select a role'
                      options={[
                        { label: 'Manager', value: 0 },
                        { label: 'Engineer', value: 1 },
                        { label: 'Intern', value: 2 }
                      ]}
                    />
                  </Form.Item>
                </td>
              </tr>
              <tr>
                <th>Email</th>
                <td>
                  <Form.Item
                    name='email'
                    rules={[
                      {
                        required: true,
                        message: (
                          <Alert
                            type='error'
                            message='Required'
                            showIcon
                          />
                        )
                      },
                      {
                        type: 'email',
                        message: (
                          <Alert
                            type='error'
                            message='Valid email required'
                            showIcon
                          />
                        )
                      }
                    ]}>
                    <Input placeholder='Enter an email' />
                  </Form.Item>
                </td>
              </tr>
              <tr>
                <th>ID</th>
                <td>
                  <Input
                    width='100%'
                    disabled
                    value={id}
                  />
                </td>
              </tr>
            </tbody>
          </table>
          <Divider style={{ width: 'unset', margin: '8px -12px' }} />
          <div className='buttons'>
            <Button
              type='primary'
              htmlType='button'
              danger
              onClick={onDelete}>
              <FontAwesomeIcon icon={faTrash} />
              &ensp;Delete
            </Button>
            <Button
              type='primary'
              htmlType='submit'
              shape='default'>
              <FontAwesomeIcon icon={faSave} />
              &ensp;Save
            </Button>
          </div>
        </Card>
      </Form>
    </article>
  ) : actualValues ? (
    <article className='employee'>
      <Card
        size='small'
        style={{ width: '100%', maxWidth: '300px' }}
        title={actualValues.name}
        extra={
          <Button
            type='primary'
            onClick={() => {
              setMode('edit')
            }}>
            <FontAwesomeIcon icon={faPen} />
          </Button>
        }>
        <Meta
          title={['Manager', 'Engineer', 'Intern'][actualValues.role]}
          description={
            <p>
              <strong>Email</strong>&ensp;<a href={`mailto:${actualValues.email}`}>{actualValues.email}</a>
              <br />
              <strong>ID</strong>&ensp;{id}
            </p>
          }
        />
      </Card>
    </article>
  ) : null
}
export default EmployeeCard
