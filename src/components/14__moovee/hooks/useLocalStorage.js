import { useEffect, useState } from 'react'

const useLocalStorage = (key) => {
  const currentStorage = JSON.parse(localStorage.getItem(key))
  const [savedMovies, setSavedMovies] = useState(currentStorage ?? [])

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(savedMovies))
  }, [savedMovies])

  const saveMovie = (title) => {
    setSavedMovies((prev) => {
      if (prev.includes(title)) {
        return [title, ...prev.filter((v) => v !== title)]
      }
      const res = [title, ...prev].slice(0, 5)
      return res
    })
  }

  return { savedMovies, saveMovie }
}

export default useLocalStorage
