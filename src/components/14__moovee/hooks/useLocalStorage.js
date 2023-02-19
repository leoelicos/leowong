import { useState } from 'react'

const useLocalStorage = (key) => {
  const [history, setHistory] = useState(JSON.parse(localStorage.getItem(key)))

  const saveHistory = (value) => {
    setHistory((prev) => {
      let oldHistory = prev.includes(value) //
        ? prev.filter((v) => v !== value)
        : prev.length > 4
        ? prev.slice(0, 4)
        : prev
      let newHistory = [value].concat(...oldHistory)
      localStorage.setItem(key, JSON.stringify(newHistory))
      setHistory(newHistory)
    })
  }

  return { history, saveHistory }
}

export default useLocalStorage
