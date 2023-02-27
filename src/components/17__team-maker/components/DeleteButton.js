import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button } from 'antd'

const DeleteButton = ({ cb }) => (
  <Button
    type='primary'
    shape='default'
    danger
    onClick={cb}>
    <FontAwesomeIcon icon={faTrash} />
  </Button>
)

export default DeleteButton
