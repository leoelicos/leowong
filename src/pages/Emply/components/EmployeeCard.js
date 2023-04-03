import { useRef, useState } from 'react'
import { Alert, Button, Card, Divider, Form, Input, Select } from 'antd'
import { faClose, faDice, faPen, faSave, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Meta from 'antd/es/card/Meta'
import { faker } from '@faker-js/faker'
export default function EmployeeCard({ id, onDelete, initialValues, initialMode, actualValues, onSave }) {
  const [mode, setMode] = useState(initialMode) // view or edit
  const hasSubmitted = useRef(false)
  const [form] = Form.useForm()

  const handleFinish = ({ name, role, email }) => {
    onSave({ name, role, email, id })

    setMode('view')
    hasSubmitted.current = false
  }

  const handleFill = () => {
    console.log('Clicked handleFill', form.getFieldsValue())

    const name = faker.name.fullName().replace(/[^A-Za-z ]/g, '')
    const email = faker.internet.email()
    const role = Math.floor(Math.random() * 3)

    form.setFieldsValue({ name, role, email })
  }
  return mode === 'edit' ? (
    <article>
      <Form
        form={form}
        onFinish={handleFinish}
        initialValues={initialValues}
        labelCol={{ span: 5 }}
        wrapperCol={{ span: 19 }}>
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
          title={actualValues ? 'Edit employee' : 'New employee'}>
          <Form.Item
            label='Name'
            name='name'
            rules={[ruleRequired, ruleNoNumbers, ruleNoSymbols]}>
            <Input placeholder='Enter a name' />
          </Form.Item>
          <Form.Item
            label='Role'
            name='role'
            rules={[ruleRequired]}>
            <Select
              placeholder='Select a role'
              options={[
                { label: 'Manager', value: 0 },
                { label: 'Engineer', value: 1 },
                { label: 'Intern', value: 2 }
              ]}
            />
          </Form.Item>
          <Form.Item
            label='Email'
            name='email'
            rules={[ruleRequired, ruleValidEmail]}>
            <Input placeholder='Enter an email' />
          </Form.Item>

          <Divider style={{ width: 'unset', margin: '8px -12px' }} />
          <div className='buttons'>
            <Button
              type='primary'
              htmlType='submit'
              shape='default'>
              <FontAwesomeIcon icon={faSave} />
              &ensp;Save
            </Button>
            <Button
              type='primary'
              htmlType='button'
              danger
              onClick={onDelete}>
              <FontAwesomeIcon icon={faTrash} />
              &ensp;Delete
            </Button>
            <Button
              type='default'
              htmlType='button'
              onClick={handleFill}>
              <FontAwesomeIcon icon={faDice} />
              &ensp;Fill
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
              <strong>ID</strong>&ensp;<span style={{ fontFamily: 'monospace' }}>{id}</span>
            </p>
          }
        />
      </Card>
    </article>
  ) : null
}

var ruleRequired = {
  required: true,
  message: (
    <Alert
      type='error'
      message='Required'
      showIcon
    />
  )
}
var ruleValidEmail = {
  type: 'email',
  message: (
    <Alert
      type='error'
      message='Valid email required'
      showIcon
    />
  )
}
var ruleNoNumbers = {
  pattern: new RegExp(/^[^\d]+$/g),
  message: (
    <Alert
      type='error'
      message='No numbers'
      showIcon
    />
  )
}
var ruleNoSymbols = {
  pattern: new RegExp(/^[^!";#$%&'()*+,./:;<=>?@[\]^_{|}~]+$/),
  message: (
    <Alert
      type='error'
      message='No symbols'
      showIcon
    />
  )
}
