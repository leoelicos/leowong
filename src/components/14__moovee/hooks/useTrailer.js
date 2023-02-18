import { useState } from 'react'
import { Button, ConfigProvider, Modal, Spin } from 'antd'

function useTrailer() {
  const [isTrailerOpen, setIsTrailerOpen] = useState(false)
  const [loadingGapi, setLoadingGapi] = useState(false)
  const [uri, setUri] = useState('')

  const updateLoadingGapi = (bool) => {
    setLoadingGapi(bool)
  }

  const updateUri = (s) => {
    setUri(s)
  }

  const showTrailer = () => {
    setIsTrailerOpen(true)
  }

  const hideTrailer = () => {
    setIsTrailerOpen(false)
  }

  const Trailer = () => {
    return (
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: '#ed7d31'
          }
        }}>
        <Modal
          open={isTrailerOpen}
          onOk={hideTrailer}
          onCancel={hideTrailer}
          closable={false}
          maskClosable={true}
          className='app-14__modal'
          footer={
            <Button
              type='primary'
              block
              key='close'
              onClick={hideTrailer}>
              Close
            </Button>
          }
          maskStyle={{ background: 'radial-gradient(circle, rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0.6) 50%, rgba(0, 0, 0, 0.9) 100%)' }}
          transitionName='' // cancel popup animation
        >
          <VideoElement
            loadingGapi={loadingGapi}
            uri={uri}
          />
        </Modal>
      </ConfigProvider>
    )
  }

  return { Trailer, showTrailer, updateUri, updateLoadingGapi }
}

const VideoElement = ({ loadingGapi, uri }) => {
  return loadingGapi ? (
    <Spin
      size='large'
      className='loading-spin'
    />
  ) : (
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

export default useTrailer
