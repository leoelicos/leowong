import { useState } from 'react'
import BucketForm from './components/BucketForm'
import Bucket from './components/Bucket'

import './style/index.css'
import useTitle from '../../hooks/useTitle'
import useFavicon from '../../hooks/useFavicon'

export default function Wants() {
  useTitle('Wants')
  useFavicon('/favicons/buckets.png')
  const [bucket, setBucket] = useState([])

  const addBucketItem = (item) => {
    setBucket((prev) => prev.concat(item))
  }

  const completeBucketItem = (id) => {
    setBucket((prev) =>
      prev.map((item) => {
        return item.id === id ? { ...item, isComplete: !item.isComplete } : item
      })
    )
  }

  const removeBucketItem = (id) => {
    setBucket((prev) => prev.filter((item) => item.id !== id))
  }

  const editBucketItem = (id, item) => {
    if (!item.text.length > 0) return
    setBucket((prev) => prev.map((i) => (i.id === id ? { ...i, ...item } : i)))
  }

  return (
    <div className='app-34'>
      <div className='body'>
        <div className='bucket-app'>
          <h1>What is on your bucket list?</h1>
          <BucketForm onSubmit={addBucketItem} />
          <Bucket
            bucket={bucket}
            completeBucketItem={completeBucketItem}
            removeBucketItem={removeBucketItem}
            editBucketItem={editBucketItem}
          />
        </div>
      </div>
    </div>
  )
}
