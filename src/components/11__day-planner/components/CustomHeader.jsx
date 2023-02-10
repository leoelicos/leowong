function CustomHeader({ now, weather }) {
  const { weatherIcon, temperature, description, city } = weather
  const hours = now.getHours()
  const hoursForClock = hours % 12 || 12
  const minutes = now.getMinutes()
  const seconds = now.getSeconds()
  const ampm = hours > 12 ? 'PM' : 'AM'
  const degrees = (x, x1, x2, y1, y2) => {
    return ((x - x1) * (y2 - y1)) / (x2 - x1) + y1
  }
  let hoursDegree = degrees(hoursForClock, 0, 12, 0, 360) || 360
  let minutesDegree = degrees(minutes, 0, 60, 0, 360) || 360
  let secondsDegree = degrees(seconds, 0, 60, 0, 360) || 360

  return (
    <header id='header'>
      <div className='header-date'>
        <div
          className='current-date'
          id='currentDate'>
          {now.getDate()}
        </div>
        <div className='date-container'>
          <div
            className='currentDay'
            id='currentDay'>
            {new Intl.DateTimeFormat('en-US', { weekday: 'long' }).format(now)}
          </div>
          <div
            className='currentMonthAndYear'
            id='currentMonthAndYear'>
            {new Intl.DateTimeFormat('en-US', { month: 'long', year: 'numeric' }).format(now).toUpperCase()}
          </div>
        </div>
      </div>
      <div className='clock-container'>
        <div className='clock'>
          <div
            className='needle clock-hour'
            style={{ transition: 'all 0s', transform: `translate(-50%, -100%) rotate(${hoursDegree}deg)` }}></div>
          <div
            className='needle minute'
            style={{ transform: `translate(-50%, -100%) rotate(${minutesDegree}deg)` }}></div>
          <div
            className='needle second'
            style={{ transform: `translate(-50%, -100%) rotate(${secondsDegree}deg)` }}></div>
          <div className='center-point'></div>
        </div>
        <div className='time'>{`${hoursForClock === 0 ? 12 : hoursForClock}:${minutes < 10 ? `0${minutes}` : minutes} ${ampm}`}</div>
      </div>
      {weatherIcon !== 'loading' ? (
        <figure id='weather-container'>
          <img
            src={weatherIcon}
            alt={description}
            id='weather-icon'
          />

          <figcaption>
            <div
              className='location'
              id='location'>
              {city}
            </div>
            <div id='weather-temperature'>{temperature}</div>
            <div id='weather-description'>{description}</div>
          </figcaption>
        </figure>
      ) : (
        <span>📶</span>
      )}
    </header>
  )
}
export default CustomHeader
