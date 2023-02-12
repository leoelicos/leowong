/* Custom components */
import Header from './components/Header'
import Today from './components/Today'
import Future from './components/Future'
import Globe from './components/Header/Globe'

/* hooks */
import useGraph from './hooks/useGraph'
import useSearch from './hooks/useSearch'
import useFavicon from '../../hooks/useFavicon'
import useTitle from '../../hooks/useTitle'

/* style */
import './css/index.css'
import useLocalStorage from './hooks/useLocalStorage'
import { useEffect } from 'react'

export default function WeatherDashboard() {
  useFavicon('/favicons/13-favicon.png')
  useTitle('WWAG')
  const { savedCities, saveCity } = useLocalStorage()
  /* test */
  useEffect(() => {
    saveCity({ city: 'London', lat: 123, lon: 456 })
    saveCity({ city: 'Bristol', lat: 123, lon: 456 })
    saveCity({ city: 'Cambridge', lat: 123, lon: 456 })
    saveCity({ city: 'Essex', lat: 123, lon: 456 })
    saveCity({ city: 'Spire', lat: 123, lon: 456 })
    saveCity({ city: 'Casterly Rock', lat: 123, lon: 456 })
  }, [])
  return (
    <div className='app-13'>
      <div className='body'>
        <Header
          addCity={saveCity}
          savedCities={savedCities}
        />
        {/*<main>
          <div
            id='cityNameLabel'
            className='cityNameLabel'></div>
          <Today />

          <Future /> 
        </main>*/}
      </div>
    </div>
  )
}
