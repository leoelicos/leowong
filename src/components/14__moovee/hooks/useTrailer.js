import { Button, Modal } from 'antd'
import { useState } from 'react'
// import useResize from '../hooks/useResize'

function useTrailer() {
  const [isTrailerOpen, setIsTrailerOpen] = useState(false)
  const [uri, setUri] = useState('')

  const showTrailer = (youtubeURI) => {
    setUri(youtubeURI)
    setIsTrailerOpen(true)
  }
  const handleOk = () => {
    setIsTrailerOpen(false)
  }

  // const [w, h] = useResize()

  const Trailer = () => {
    return (
      <Modal
        uri={uri}
        open={isTrailerOpen}
        onOk={handleOk}
        closable={false}
        maskClosable={true}
        onCancel={handleOk}
        footer={[
          <Button
            key='close'
            onClick={handleOk}>
            Close
          </Button>
        ]}>
        <iframe
          onLoad={null}
          width='100%'
          height='100%'
          src={uri}
          title='YouTube video player'
          border='none'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
          allowFullScreen=''
          style={{ border: 'none' }}
        />
      </Modal>
    )
  }

  return { Trailer, showTrailer }
}
export default useTrailer
