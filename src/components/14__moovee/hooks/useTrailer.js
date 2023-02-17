import { Button, Modal, Spin } from 'antd'

import { useState } from 'react'

const VideoElement = ({ uri }) => {
  return (
    <iframe
      src={uri}
      style={{ border: 'none' }}
      width='100%'
      height='100%'
      title='Trailer'
      allowFullScreen='allowfullscreen'
      allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture full'
    />
  )
}

function useTrailer() {
  const [isTrailerOpen, setIsTrailerOpen] = useState(false)
  const [loadingGapi, setLoadingGapi] = useState(false)
  const [uri, setUri] = useState('')

  const showTrailer = () => {
    setIsTrailerOpen(true)
  }

  const hideTrailer = () => {
    setIsTrailerOpen(false)
  }
  const updateUri = (s) => {
    setUri(s)
  }

  const Trailer = () => {
    return (
      <Modal
        transitionName=''
        maskTransitionName=''
        open={isTrailerOpen}
        onOk={hideTrailer}
        closable={false}
        maskClosable={true}
        onCancel={hideTrailer}
        footer={[
          <Button
            type='primary'
            block
            key='close'
            onClick={hideTrailer}>
            Close
          </Button>
        ]}>
        {loadingGapi ? (
          <Spin
            size='large'
            className='loading-spin'
          />
        ) : (
          <VideoElement uri={uri} />
        )}
      </Modal>
    )
  }

  return { Trailer, showTrailer, updateUri, setLoadingGapi }
}

export default useTrailer
