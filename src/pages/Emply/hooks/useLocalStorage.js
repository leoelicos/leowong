import { useEffect, useState } from 'react'

const useLocalStorage = (name) => {
  const [ls, setLS] = useState(() => {
    let item = JSON.parse(localStorage.getItem(name)) || []
    return item
  })

  /* update local storage every time local state changes */
  useEffect(() => {
    localStorage.setItem(name, JSON.stringify(ls))
  }, [ls, name])

  /* expose function to update local state */
  const updateLS = (r) => {
    setLS(r)
  }

  return { ls, updateLS }
}
export default useLocalStorage
