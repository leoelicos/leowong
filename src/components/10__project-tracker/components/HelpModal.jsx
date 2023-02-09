import { faAdd } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Modal, Button, DatePicker, Form, Input, Select, InputNumber } from 'antd'

const Title = () => (
  <section style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
    <h1 style={{ fontFamily: 'sans-serif', color: '#123123' }}>
      <span style={{ fontSize: '3.7rem', margin: '0', padding: '0' }}>
        <FontAwesomeIcon icon={faAdd} /> Project
      </span>
    </h1>
  </section>
)

const HelpModal = ({ handleClickModalCancel, modal, handleAddProject }) => {
  return (
    <Modal
      maskStyle={{ backgroundColor: 'rgba(0,0,0,0.5)' }}
      title={<Title />}
      centered
      open={modal}
      okType={'danger'}
      onCancel={handleClickModalCancel}
      bodyStyle={{ fontFamily: 'Montserrat, sans-serif' }}
      footer={null}>
      <Form
        name='basic'
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        onFinish={handleAddProject}
        autoComplete='off'>
        <Form.Item
          label='Project Name'
          name='projectName'
          rules={[{ required: true, message: 'Please input your project title' }]}>
          <Input />
        </Form.Item>
        <Form.Item
          label='Project Type'
          name='projectType'
          rules={[{ required: true, message: "Please choose the project's type" }]}>
          <Select>
            {['Web Application (Front End)', 'Web Application (Back End)', 'Web Application (Full Stack)', 'Mobile Application', 'Print Campaign', 'Digital Marketing Campaign'].map((v) => (
              <Select.Option
                key={v}
                value={v}>
                {v}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>

        <Form.Item
          label='Hourly Rate'
          name='hourlyRate'
          rules={[{ required: true, message: "Please input the project's hourly rate" }]}>
          <InputNumber
            min={0}
            addonBefore='$'
            parser={(value) => Number(value).toFixed(2)}
          />
        </Form.Item>

        <Form.Item
          label='Hours'
          name='hours'
          rules={[{ required: true, message: "Please input the project's Hours" }]}>
          <InputNumber
            min={0}
            addonAfter='h'
            parser={(value) => Number(value).toFixed(0)}
          />
        </Form.Item>

        <Form.Item
          label='Due Date'
          name='dueDate'
          rules={[{ required: true, message: "Please input the project's Due Date" }]}>
          <DatePicker />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button
            type='primary'
            htmlType='submit'>
            Submit
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  )
}

export default HelpModal
