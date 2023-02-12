function SelectHistoryCity({ savedCities, search, isActive }) {
  const handleSelect = (e) => {
    search(e.target.value)
  }
  return (
    <select
      id='history'
      className={`form-select ${isActive ? '' : 'gray'}`}
      defaultValue='history1'
      onChange={handleSelect}>
      {savedCities.map((city, i) => (
        <option
          key={i}
          value={city.city}>
          {city.city}
        </option>
      ))}
    </select>
  )
}
export default SelectHistoryCity
