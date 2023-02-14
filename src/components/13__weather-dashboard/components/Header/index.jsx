import { useEffect, useRef, useState } from 'react'

/* Custom components */
import Globe from './Globe'

/* antd components */
import { Select } from 'antd'

/* style */
import './style/header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

function Header({ savedCities, saveCity, handleClickHistory, cityOptions, searchCities, handleClickSelect }) {
  /* state */
  const [active, setActive] = useState(0)
  const [selectCityOpen, setSelectCityOpen] = useState(false)
  const [searchValue, setSearchValue] = useState('')

  /* DOM refs */
  const inputRef = useRef(null)
  const selectCityRef = useRef(null)
  const selectHistoryRef = useRef(null)

  /* input */
  const handleSearchValueChange = (val) => {
    setSearchValue(val)
  }
  const handleSubmit = () => {
    if (!searchValue.length) return
    setActive(1)
    searchCities(searchValue)
    setSelectCityOpen(true)
    selectCityRef.current.focus()
  }

  /* button2 */
  const handleSelectCity = (optionIdx) => {
    /* close select element */
    setSelectCityOpen(false)

    /* get city with selected optionIdx */
    let selectedCity = cityOptions[optionIdx]

    /* update local storage */
    saveCity(selectedCity)

    /* search for the city and update the city */
    handleClickSelect(selectedCity)
  }

  /* button3 */
  const handleSelectCityHistory = (historyIdx) => {
    /* search for the city and update the city */
    handleClickHistory(savedCities[historyIdx])
  }

  /* focus logic */
  useEffect(() => {
    if (active === 2) selectHistoryRef.current.focus()
    else if (active === 1) selectCityRef.current.focus()
    else inputRef.current.focus()
  }, [active])

  return (
    <header className='header'>
      <Globe />
      <div className='header-contents'>
        <h1 className='title'>WORLDWIDE WEATHER AT A GLANCE</h1>

        <form
          className='buttons'
          onSubmit={handleSubmit}>
          <div className='search-container'>
            <input
              ref={inputRef}
              className={`form-select ${active === 0 ? '' : 'gray'}`}
              type='search'
              id='search'
              list='citylist'
              placeholder='CITY'
              value={searchValue}
              onChange={(e) => {
                handleSearchValueChange(e.target.value)
              }}
              onKeyDown={(e) => {
                if (e.key === 'Enter') handleSubmit()
              }}
            />
            <button
              type='button'
              id='searchBtn'
              className='button'
              onClick={(e) => {
                e.preventDefault()
                handleSubmit()
              }}>
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
          </div>
          <Select
            className={`form-select ${active === 1 ? '' : 'gray'}`}
            ref={selectCityRef}
            onChange={handleSelectCity}
            onDropdownVisibleChange={(visible) => {
              setSelectCityOpen(visible)
            }}
            open={selectCityOpen}
            options={cityOptions.map(({ country, state, city }, i) => ({ key: `${country}_${state}_${city}`, value: i, label: `${city} (${state}, ${country})` }))}
          />

          <Select
            className={`form-select ${active === 2 ? '' : 'gray'}`}
            onChange={handleSelectCityHistory}
            ref={selectHistoryRef}>
            {savedCities?.map(({ country, state, city, lat, lon }, i) => (
              <Select.Option
                key={i}
                value={i}>
                {`${city} (${state}, ${country})`}
              </Select.Option>
            )) || null}
          </Select>
        </form>
      </div>
    </header>
  )
}
export default Header
