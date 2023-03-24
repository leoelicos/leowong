import { faArrowAltCircleDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import IconLinkedIn from '../../images/icon/li.png'
import IconGitHub from '../../images/icon/gh.png'
import './style.css'
export default function Resume() {
  return (
    <div>
      <h2 style={{ marginTop: '1rem' }}>Resume</h2>

      <a
        className='btn icon'
        target='_blank'
        rel='noreferrer'
        href='https://drive.google.com/file/d/1h8cJZCP00_rwluAvS5hHzIPyXsKbvkZm/view?usp=sharing'>
        <p className='image download'>
          <FontAwesomeIcon
            style={{ fontSize: '6vh' }}
            icon={faArrowAltCircleDown}
          />
        </p>
        <p className='label'>Resume</p>
      </a>
      <a
        className='btn icon'
        target='_blank'
        rel='noreferrer'
        href='https://www.linkedin.com/in/leo-wong-b9b570129/'>
        <p className='image'>
          <img
            src={IconLinkedIn}
            alt='an icon of LinkedIn'
          />
        </p>
        <p className='label'>LinkedIn</p>
      </a>
      <a
        className='btn icon'
        target='_blank'
        rel='noreferrer'
        href='https://github.com/leoelicos?tab=repositories'>
        <p className='image'>
          <img
            src={IconGitHub}
            alt='an icon of GitHub'
          />
        </p>
        <p className='label'>GitHub</p>
      </a>

      <a
        id='label-send'
        value='leoelicos@gmail.com'
        className='btn-wrapper'
        target='_blank'
        rel='noreferrer'
        href='mailto: leoelicos@gmail.com'>
        leoelicos@gmail.com
      </a>
    </div>
  )
}
