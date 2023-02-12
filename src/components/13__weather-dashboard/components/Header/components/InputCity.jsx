import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function InputCity({ searchValue, handleSearchValueChange, onClickSearchIcon, isActive }) {
  return (
    <div className='search-container'>
      <input
        className={`form-select ${isActive ? '' : 'gray'}`}
        type='search'
        id='search'
        list='citylist'
        placeholder='CITY'
        value={searchValue}
        onChange={(e) => {
          handleSearchValueChange(e.target.value)
        }}
      />
      <button
        type='button'
        id='searchBtn'
        className='button'
        onClick={onClickSearchIcon}>
        <FontAwesomeIcon icon={faMagnifyingGlass} />
      </button>
    </div>
  )
}
export default InputCity
