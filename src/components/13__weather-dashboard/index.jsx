/* Custom components */
import Header from './components/Header'
import Today from './components/Today'
import Future from './components/Future'

/* hooks */

import useLocalStorage from './hooks/useLocalStorage'
import useGeo from './hooks/useGeo'
import useFavicon from '../../hooks/useFavicon'
import useTitle from '../../hooks/useTitle'

/* style */
import './css/index.css'

import useOpenWeatherOneCall from './hooks/useOpenWeatherOneCall'
import { useEffect, useState } from 'react'

export default function WeatherDashboard() {
  useFavicon('/favicons/13-favicon.png')
  useTitle('WWAG')
  const { savedCities, saveCity } = useLocalStorage()
  const [cityOptions, setCityOptions] = useState([])
  const updateCityOptions = (array) => {
    setCityOptions(array)
  }
  const [city, setCity] = useState(
    savedCities.length
      ? savedCities[0]
      : {
          country: 'US',
          state: 'New York',
          city: 'New York County',
          lat: 40.7127281,
          lon: -74.0060152
        }
  )
  const updateCity = (props) => {
    setCity((prev) => ({ ...prev, ...props }))
  }
  const searchCities = useGeo(updateCityOptions)
  const searchCoords = useOpenWeatherOneCall(updateCity)

  useEffect(() => {
    searchCoords(city.lat, city.lon)
  }, [city.lat, city.lon, searchCoords])

  const handleClickHistory = (historyCity) => {
    updateCity(historyCity)
    searchCoords(historyCity.lat, historyCity.lon)
  }
  const handleClickSelect = (selectedCity) => {
    updateCity(selectedCity)
    searchCoords(selectedCity.lat, selectedCity.lon)
  }

  // console.log('render', { city })

  return (
    <div className='app-13'>
      <div className='body'>
        <Header
          cityOptions={cityOptions}
          searchCities={searchCities}
          saveCity={saveCity}
          savedCities={savedCities}
          handleClickHistory={handleClickHistory}
          handleClickSelect={handleClickSelect}
        />
        {city.hourlyData ? (
          <main>
            <div
              id='cityNameLabel'
              className='cityNameLabel'>
              {city.city}
            </div>
            <Today city={city} />

            <Future city={city} />
          </main>
        ) : null}
      </div>
    </div>
  )
}
