import { Modal } from 'antd'
import { useState } from 'react'

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
  const handleCancel = () => {
    setIsTrailerOpen(false)
  }

  const Trailer = () => {
    return (
      <Modal
        uri={uri}
        open={isTrailerOpen}
        onOk={handleOk}
        onCancel={handleCancel}>
        <p>Youtube Iframe searching for {uri}</p>
      </Modal>
    )
  }

  return { Trailer, showTrailer }
}
export default useTrailer
