import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import './style.css'
export default function Resume() {
  return (
    <div
      className='resume'
      id='resume'>
      <h3>Resume</h3>

      <a
        target='_blank'
        rel='noreferrer'
        href='https://drive.google.com/file/d/1Z6-Ec7gif7m8Zc9oGTFRcGc_SKSbtbzV/view?usp=sharing'>
        <p className='image download'>
          <FontAwesomeIcon
            style={{ fontSize: '6vh', color: 'orange' }}
            icon={faDownload}
          />
        </p>
        <p className='label'>Resume</p>
      </a>

      <a
        target='_blank'
        rel='noreferrer'
        href='https://www.linkedin.com/in/leoelicos'>
        <p className='image'>
          <FontAwesomeIcon
            style={{ fontSize: '6vh', color: 'orange' }}
            icon={faLinkedinIn}
          />
        </p>
        <p className='label'>LinkedIn</p>
      </a>
      <a
        target='_blank'
        rel='noreferrer'
        href='https://github.com/leoelicos'>
        <p className='image'>
          <FontAwesomeIcon
            style={{ fontSize: '6vh', color: 'orange' }}
            icon={faGithub}
          />
        </p>
        <p className='label'>GitHub</p>
      </a>

      <a
        target='_blank'
        rel='noreferrer'
        href='mailto: leoelicos@gmail.com'>
        <p className='image'>
          <FontAwesomeIcon
            style={{ fontSize: '6vh', color: 'orange' }}
            icon={faEnvelope}
          />
        </p>
        <p className='label'>Email</p>
      </a>
      <div style={{ marginBottom: '15vh' }}>&nbsp;</div>
    </div>
  )
}
