const { REACT_APP_13_OPENWEATHER_APPID } = process.env

const getHourlyData = (data) =>
  data.hourly.map((d) => {
    return {
      temp: d.temp.toFixed(0),
      wind_speed: d.wind_speed.toFixed(0),
      uvi: d.uvi.toFixed(1),
      humidity: d.humidity.toFixed(0)
    }
  })

const getDailyData = (data) =>
  data.daily
    .map((d) => {
      const unixUTC = d.dt
      const dt = new Date(unixUTC * 1000)
      return {
        temp: ([d.temp.morn, d.temp.day, d.temp.eve, d.temp.night].reduce((a, b) => a + parseFloat(b), 0) / 4).toFixed(0),
        wind_speed: d.wind_speed.toFixed(0),
        uv: d.uvi.toFixed(1),
        humidity: d.humidity.toFixed(0),
        icon: `https://openweathermap.org/img/wn/${d.weather[0].icon}@2x.png`,
        description: d.weather[0].description,
        day: Intl.DateTimeFormat('en-US', { weekday: 'short' }).format(dt),
        date: dt.getDate(),
        month: Intl.DateTimeFormat('en-US', { month: 'short' }).format(dt)
      }
    })
    .slice(0, 5)

const getCurrentData = (data) => {
  const d = data.current
  const unixUTC = d.dt
  const dt = new Date(unixUTC * 1000)
  const o = {
    temp: d.temp.toFixed(0),
    wind_speed: d.wind_speed.toFixed(0),
    uv: d.uvi.toFixed(1),
    humidity: d.humidity.toFixed(0),
    icon: `https://openweathermap.org/img/wn/${d.weather[0].icon}@2x.png`,
    description: d.weather[0].description,
    day: Intl.DateTimeFormat('en-US', { weekday: 'short' }).format(dt),
    date: dt.getDate(),
    month: Intl.DateTimeFormat('en-US', { month: 'short' }).format(dt)
  }
  return o
}

const useOpenWeatherOneCall = (updateCity) => {
  const searchCoords = async (lat, lon) => {
    try {
      const uri = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely,alerts&appid=${REACT_APP_13_OPENWEATHER_APPID}&units=metric&lang=en`

      const response = await fetch(uri)
      const data = await response.json()

      const hourlyData = getHourlyData(data)
      const dailyData = getDailyData(data)
      const current = getCurrentData(data)

      updateCity({ hourlyData, dailyData, current })
    } catch (error) {
      console.error(error)
    }
  }
  return searchCoords
}

export default useOpenWeatherOneCall
