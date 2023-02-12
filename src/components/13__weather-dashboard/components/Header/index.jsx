import Globe from './Globe'
/* components */
import { useRef, useState } from 'react'
import InputCity from './components/InputCity.jsx'
import SelectCity from './components/SelectCity.jsx'
import SelectHistoryCity from './components/SelectHistoryCity.jsx'

/* style */
import './style/header.css'
function Header({ savedCities, saveCity }) {
  /* state */
  const [searchValue, setSearchValue] = useState('')
  const selectCityRef = useRef(null)
  const [selectCityOpen, setSelectCityOpen] = useState(false)

  /* event handlers */
  const search = (city) => {
    console.log('Now searching for', city)
  }
  const handleSearchValueChange = (val) => {
    setSearchValue(val)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('clicked submit', searchValue)
    // gray the InputCity
    // focus SelectCity
    selectCityRef.current.setAttribute('size', '5')
    selectCityRef.current.focus()
  }
  return (
    <header className='header'>
      <Globe />
      <div className='header-contents'>
        <h1 className='title'>WORLDWIDE WEATHER AT A GLANCE</h1>

        <form
          className='buttons'
          onSubmit={handleSubmit}>
          <InputCity
            searchValue={searchValue}
            handleSearchValueChange={handleSearchValueChange}
            onClickSearchIcon={handleSubmit}
            isActive={active === 0}
          />
          <SelectCity
            ref={selectCityRef}
            saveCity={saveCity}
            open={selectCityOpen}
            isActive={active === 1}
          />
          <SelectHistoryCity
            savedCities={savedCities}
            search={search}
            isActive={active === 2}
          />
        </form>
      </div>
    </header>
  )
}
export default Header
