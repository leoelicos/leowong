import '../css/weather.css'

function CustomHeader() {
  return (
    <header id='header'>
      <div className='header-date'>
        <div
          className='current-date'
          id='currentDate'></div>
        <div className='date-container'>
          <div
            className='currentDay'
            id='currentDay'></div>
          <div
            className='currentMonthAndYear'
            id='currentMonthAndYear'></div>
        </div>
      </div>
      <div className='clock-container'>
        <div className='clock'>
          <div className='needle clock-hour'></div>
          <div className='needle minute'></div>
          <div className='needle second'></div>
          <div className='center-point'></div>
        </div>
        <div className='time'></div>
      </div>
      <figure id='weather-container'>
        <img
          src=''
          alt=''
          id='weather-icon'
        />
        <figcaption>
          <div
            className='location'
            id='location'></div>
          <div id='weather-temperature'></div>
          <div id='weather-description'></div>
        </figcaption>
      </figure>
    </header>
  )
}
export default CustomHeader
