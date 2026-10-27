import { faArrowUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import BgCar from '../../images/bg/car.png'
import BgMotorway from '../../images/bg/motorway.png'
import BgRoad from '../../images/bg/road.png'
import './style.css'
import useFavicon from '../../../../hooks/useFavicon.js'
import useTitle from '../../../../hooks/useTitle.js'

export default function Hero({ children }) {
  useFavicon('/favicons/home.png')
  useTitle('Leo Wong, full stack developer in Sydney')
  return (
    <div className='app-05'>
      <div className='body'>
        <main id='top'>
          <figure id='bg-motorway'>
            <a href='#about'>
              <img
                src={BgMotorway}
                alt='Motorway sign. Continue to the introduction.'
              />
            </a>
            <figcaption className='hero-role'>
              <a href='#about'>Full stack developer, Sydney</a>
            </figcaption>
          </figure>
          <figure id='bg-life'>
            <img
              src={BgRoad}
              alt=''
            />
          </figure>
          <figure id='bg-car'>
            <img
              src={BgCar}
              alt=''
            />
          </figure>
          {children}
        </main>
        <a
          className='footer-link'
          href='#top'>
          Back to Top&nbsp;
          <FontAwesomeIcon icon={faArrowUp} />
        </a>
      </div>
    </div>
  )
}
