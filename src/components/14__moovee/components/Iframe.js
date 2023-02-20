import { Spin } from 'antd'
import { useState } from 'react'

const Iframe = ({ uri }) => {
  const [loading, setLoading] = useState(true)
  const hideSpinner = () => {
    setLoading(false)
  }
  return (
    <>
      <Spin className={loading ? '' : 'finished'} />
      <div
        className={loading ? 'finished' : ''}
        style={{ height: '100%', width: '100%' }}>
        <iframe
          title='Trailer'
          src={uri}
          width='100%'
          height='100%'
          onLoad={hideSpinner}
          allowFullScreen='allowfullscreen'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture full'
          style={{ border: 'none' }}
        />
      </div>
    </>
  )
}

export default Iframe
