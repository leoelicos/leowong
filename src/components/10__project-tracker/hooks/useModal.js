import { useState } from 'react'

const useModal = () => {
  const [modal, setModal] = useState(false)

  const hideModal = () => {
    setModal(false)
  }

  const showModal = () => {
    console.log('Clicked show modal')
    setModal(true)
  }

  return { modal, showModal, hideModal }
}
export default useModal
