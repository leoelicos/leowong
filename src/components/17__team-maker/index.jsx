/* context */
import EmployeeProvider from './context/EmployeeContext'

/* components */
import NewEmployees from './components/NewEmployees'
import Employees from './components/Employees'

import './style/index.css'

const TeamMaker = () => {
  return (
    <div className='app-17'>
      <div className='body'>
        <header>
          <h1>Team Maker</h1>
        </header>
        <main>
          <EmployeeProvider>
            <Employees />
            <NewEmployees />
          </EmployeeProvider>
        </main>
        <footer>
          <p>End</p>
        </footer>
      </div>
    </div>
  )
}
export default TeamMaker
