import { useState } from 'react'

export default function useModal() {
  /* state */
  const [isModalOpen, setIsModalOpen] = useState(false)

  /* handlers */
  const handleClickOpen = () => {
    setIsModalOpen(true)
  }

  const handleClickModalOk = () => {
    setIsModalOpen(false)
  }

  const handleClickModalCancel = () => {
    setIsModalOpen(false)
  }

  return { isModalOpen, handleClickOpen, handleClickModalOk, handleClickModalCancel }
}
