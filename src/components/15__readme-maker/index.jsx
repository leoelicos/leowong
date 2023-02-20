import { Button, Form, Input, Select } from 'antd'

const x = [
  { name: 'usage', type: 'input', title: 'Usage' },
  { name: 'contributing', type: 'input', title: 'Contributions' },
  { name: 'tests', type: 'input', title: 'Tests' },
  { name: 'license', type: 'list', title: 'license', choices: ['MIT License', 'GNU GPLv3', 'ISC License'] },
  { name: 'username', type: 'input', title: 'GitHub Username' },
  {
    name: 'email',
    type: 'input',
    title: 'Email',
    validate(value) {
      const pass = value.match(/.+@+.+\.+.+/)
      if (pass) return true
      return 'Please enter a valid email (must contain @ and .)'
    }
  }
]

const ReadmeMaker = () => {
  const validateMessages = {
    required: '${label} is required!',
    types: {
      email: '${label} is not a valid email!',
      number: '${label} is not a valid number!'
    },
    number: {
      range: '${label} must be between ${min} and ${max}'
    }
  }

  const layout = { labelCol: { span: 8 }, wrapperCol: { span: 16 } }
  const tailLayout = { wrapperCol: { offset: 8, span: 16 } }
  const [form] = Form.useForm()

  const onFinish = (values) => {
    console.log(values)
  }
  const onReset = () => {
    form.resetFields()
  }
  const onFill = () => {
    form.setFieldsValue({
      note: 'Hello world!',
      gender: 'male'
    })
  }
  return (
    <Form
      validateMessages={validateMessages}
      {...layout}
      form={form}
      name='control-hooks'
      onFinish={onFinish}
      style={{
        maxWidth: 600
      }}>
      <Form.Item
        name='title'
        label='Title'>
        <Input />
      </Form.Item>

      <Form.Item
        name='description'
        label='Description'>
        <Input />
      </Form.Item>

      <Form.Item
        name='installation'
        label='Installation'>
        <Input />
      </Form.Item>

      <Form.Item
        name='usage'
        label='Usage'>
        <Input />
      </Form.Item>

      <Form.Item
        name='contributing'
        label='Contributing'>
        <Input />
      </Form.Item>

      <Form.Item
        name='tests'
        label='Tests'>
        <Input />
      </Form.Item>

      <Form.Item
        name='license'
        label='License'>
        <Select>
          <Select.Option value='MIT License'>MIT License</Select.Option>
          <Select.Option value='GNU GPLv3'>GNU GPLv3</Select.Option>
          <Select.Option value='ISC License'>ISC License</Select.Option>
        </Select>
      </Form.Item>

      <Form.Item
        name='username'
        label='GitHub Username'>
        <Input />
      </Form.Item>

      <Form.Item
        name='email'
        rules={[
          {
            type: 'email'
          }
        ]}
        label='Email'>
        <Input />
      </Form.Item>

      {/*  */}
      <Form.Item {...tailLayout}>
        <Button
          type='primary'
          htmlType='submit'>
          Submit
        </Button>
        <Button
          htmlType='button'
          onClick={onReset}>
          Reset
        </Button>
        <Button
          type='link'
          htmlType='button'
          onClick={onFill}>
          Fill form
        </Button>
      </Form.Item>
    </Form>
  )
}
export default ReadmeMaker
