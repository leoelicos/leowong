import { useEffect, useState } from 'react'

const { REACT_APP_11_IPREGISTRY_KEY, REACT_APP_11_OPENWEATHER_APPID } = process.env

const useWeather = () => {
  const [data, setData] = useState({ city: 'loading', temperature: 'loading', weatherIcon: 'loading', description: 'loading' })

  useEffect(() => {
    fetch(`https://api.ipregistry.co/?key=${REACT_APP_11_IPREGISTRY_KEY}`)
      .then((ipRes) => ipRes.json())
      .then((ipData) => {
        setData((prev) => ({ ...prev, city: ipData.location.city }))
        return ipData.location.city
      })
      .then((city) => fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${REACT_APP_11_OPENWEATHER_APPID}&units=metric`))
      .then((weatherRes) => weatherRes.json())
      .then((weatherData) => {
        setData((prev) => ({
          ...prev, //
          weatherIcon: `https://openweathermap.org/img/wn/${weatherData.weather[0]['icon']}@2x.png`,
          temperature: `${Math.round(weatherData.main.temp)}°C`,
          description: `${weatherData.weather[0]['description']}`
        }))
      })
      .catch((e) => {
        console.error(e)
      })
  }, [])

  return data
}
export default useWeather
