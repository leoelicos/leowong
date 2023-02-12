import { useEffect, useState } from 'react'

const useLocalStorage = () => {
  const [savedCities, setSavedCities] = useState([])

  useEffect(() => {
    setSavedCities(() => JSON.parse(localStorage.getItem('cities') ?? '[]'))
  }, [])

  useEffect(() => {
    localStorage.setItem('cityLogs', JSON.stringify(savedCities))
  }, [savedCities])

  const saveCity = ({ city, lat, lon }) => {
    setSavedCities((prev) => [...prev, { city, lat, lon }].slice(-5))
  }

  return { savedCities, saveCity }
}

export default useLocalStorage
