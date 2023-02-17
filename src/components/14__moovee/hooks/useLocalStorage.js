import { useEffect, useState } from 'react'

const useLocalStorage = () => {
  const currentStorage = JSON.parse(localStorage.getItem('movies'))
  const [savedMovies, setSavedMovies] = useState(currentStorage ?? [])

  useEffect(() => {
    localStorage.setItem('movies', JSON.stringify(savedMovies))
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
