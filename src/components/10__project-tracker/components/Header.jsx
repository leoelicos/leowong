function Header({ timeString, dateString, handleClickAdd }) {
  return (
    <header className='jumbotron jumbotron-fluid custom-jumbotron'>
      <div
        className='container text-center'
        id='hero'>
        <h1>Project Tracker</h1>
        <h2>
          Time&ensp;<span id='time-display'>{timeString}</span>
        </h2>
        <h2>
          Date&ensp;<span id='date-display'>{dateString}</span>
        </h2>
        <button onClick={handleClickAdd}>Add Project</button>
      </div>
    </header>
  )
}
export default Header
