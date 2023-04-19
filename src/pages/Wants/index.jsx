import { useState } from 'react'
import BucketForm from './components/BucketForm'
import Bucket from './components/Bucket'

import logo from './images/wants.png'

import './style/style.css'

import useFavicon from '../../hooks/useFavicon'
import useTitle from '../../hooks/useTitle'

export default function Wants() {
  useTitle('Wants')
  useFavicon('/favicons/wants.png')
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
    <div className='wants'>
      <header>
        <div className='logo'>
          <img
            src={logo}
            alt='logo'
          />
          <h1>Wants</h1>
        </div>
        <BucketForm onSubmit={addBucketItem} />
      </header>
      <div className='bucket-app'>
        <Bucket
          bucket={bucket}
          completeBucketItem={completeBucketItem}
          removeBucketItem={removeBucketItem}
          editBucketItem={editBucketItem}
        />
      </div>
    </div>
  )
}
