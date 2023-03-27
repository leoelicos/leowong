import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button } from 'antd'
import React, { useState } from 'react'
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
              style={{ padding: '1rem', width: '100%', display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
              {item.text}
            </div>
            <div className='icons'>
              <div className='edit-icon-wrapper'>
                <Button
                  type='primary'
                  shape='round'
                  className='bucket-button'
                  onClick={() => {
                    handleEdit(item)
                  }}>
                  <FontAwesomeIcon
                    icon={faPen}
                    className='edit-icon'
                  />
                </Button>
              </div>

              <div
                className='delete-icon-wrapper'
                onClick={() => {
                  props.removeBucketItem(item.id)
                }}>
                <FontAwesomeIcon
                  icon={faTrash}
                  className='delete-icon'
                />
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  )
}

export default Bucket
