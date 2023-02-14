import { useEffect, useState } from 'react'

const useLocalStorage = () => {
  const currentStorage = JSON.parse(localStorage.getItem('cities'))
  const [savedCities, setSavedCities] = useState(currentStorage ?? [])

  useEffect(() => {
    localStorage.setItem('cities', JSON.stringify(savedCities))
  }, [savedCities])

  const saveCity = ({ country, state, city, lat, lon }) => {
    setSavedCities((prev) => {
      if (prev.some((city) => city.lat === lat && city.lon === lon)) return prev
      return [{ country, state, city, lat, lon }, ...prev].slice(0, 5)
    })
  }

  return { savedCities, saveCity }
}

export default useLocalStorage
