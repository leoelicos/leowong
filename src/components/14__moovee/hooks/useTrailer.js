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
      </ConfigProvider>
    )
  }

  return { Trailer, showTrailer, updateUri, updateLoadingGapi }
}

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

export default useTrailer
