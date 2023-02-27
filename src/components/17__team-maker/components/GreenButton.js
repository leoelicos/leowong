import { faAdd } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button, ConfigProvider } from 'antd'

const GreenButton = ({ cb }) => (
  <ConfigProvider
    theme={{
      token: {
        colorPrimary: 'green'
      }
    }}>
    <Button
      style={{ boxShadow: 'none' }}
      type='primary'
      onClick={cb}>
      <FontAwesomeIcon icon={faAdd} />
      &ensp;Employee
    </Button>
  </ConfigProvider>
)

export default GreenButton
