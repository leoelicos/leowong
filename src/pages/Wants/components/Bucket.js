import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button } from 'antd'
import { useState } from 'react'
import BucketForm from './BucketForm'

function Bucket(props) {
  const [edit, setEdit] = useState({
    id: null,
    value: '',
    eagerness: '',
    isComplete: false
  })

  const submitUpdate = (value) => {
    props.editBucketItem(edit.id, value)

    setEdit({
      id: null,
      value: '',
      eagerness: '',
      isComplete: false
    })
  }
  const handleEdit = (item) => {
    setEdit({
      id: item.id,
      value: item.text,
      eagerness: item.eagerness,
      isComplete: item.isComplete
    })
  }
  return (
    <div className='bucket-container'>
      {edit.id ? (
        <BucketForm
          edit={edit}
          onSubmit={submitUpdate}
        />
      ) : (
        props.bucket.map((item, i) => (
          <div
            className={
              item.isComplete //
                ? `bucket-row complete ${item.eagerness.toLowerCase()}`
                : `bucket-row ${item.eagerness.toLowerCase()}`
            }
            key={i}
            onClick={() => {
              props.completeBucketItem(item.id)
            }}>
            <div
              key={item.id}
              className='item-text'>
              {item.text}
            </div>
            <div className='icons'>
              <Button
                type='primary'
                shape='circle'
                className='bucket-button'
                onClick={() => {
                  handleEdit(item)
                }}>
                <FontAwesomeIcon
                  icon={faPen}
                  className='edit-icon'
                />
              </Button>

              <Button
                type='primary'
                danger
                shape='circle'
                className='bucket-button'
                onClick={() => {
                  props.removeBucketItem(item.id)
                }}>
                <FontAwesomeIcon
                  icon={faTrash}
                  className='delete-icon'
                />
              </Button>
            </div>
          </div>
        ))
      )}
    </div>
  )
}

export default Bucket
