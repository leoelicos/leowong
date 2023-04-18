/* custom components */
import ProjectTable from './components/ProjectTable'
import HelpModal from './components/HelpModal'

/* custom hooks */
import useTime from './hooks/useTime'
import useData from './hooks/useData'
import useModal from './hooks/useModal'
import useFavicon from '../../hooks/useFavicon'
import useTitle from '../../hooks/useTitle'

/* style */
import './style/style.css'

import logo from './images/jobby.png'
import { Button } from 'antd'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

export default function ProjectTracker() {
  useTitle('Jobby')
  useFavicon('/favicons/jobby.png')

  /* time */
  const time = useTime()

  /* data and data methods */
  const { jobs, addJob, deleteJob } = useData()

  /* modal and modal methods */
  const { modal, showModal, hideModal } = useModal()

  const d = new Date(time)
  const timeString = d.toLocaleTimeString([], { hourCycle: 'h11', hour12: true, hour: 'numeric', minute: '2-digit', second: '2-digit' })
  const dateString = d.toLocaleDateString(undefined, { day: 'numeric', month: 'short', year: 'numeric' })

  return (
    <div className='jobby'>
      <header>
        <img
          src={logo}
          alt='logo'
        />
        <div className='add'>
          <h1>Jobby</h1>
        </div>
        <div className='datetime'>
          <span id='time-display'>{timeString}</span>
          <span id='date-display'>{dateString}</span>
        </div>
      </header>
      <main>
        <div className='button-holder'>
          <Button
            type='primary'
            shape='circle'
            onClick={showModal}>
            <div>
              <FontAwesomeIcon icon={faPlus} />
            </div>
          </Button>
        </div>

        <ProjectTable
          data={jobs}
          onDelete={deleteJob}
        />
        <HelpModal
          modal={modal}
          onAdd={addJob}
          hideModal={hideModal}
        />
      </main>
    </div>
  )
}
