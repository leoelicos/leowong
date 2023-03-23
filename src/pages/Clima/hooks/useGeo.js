const { REACT_APP_13_OPENWEATHER_APPID } = process.env

const useGeo = (updateCityOptions) => {
  const searchCities = async (query) => {
    try {
      const response = await fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${query}&limit=5&appid=${REACT_APP_13_OPENWEATHER_APPID}&units=metric&lang=en`)
      const data = await response.json()
      const serialized = data.map((city) => ({
        lat: city.lat,
        lon: city.lon,
        city: city.name,
        country: city.country,
        state: city.state
      }))
      const fingerprint = serialized.map(({ city, country, state }) => `${city}_${country}_${state}`)
      const unique = serialized.filter(({ city, country, state }, i) => fingerprint.indexOf(`${city}_${country}_${state}`) === i)

      updateCityOptions(unique)
    } catch (error) {
      console.error(error)
    }
  }
  return searchCities
}

export default useGeo
