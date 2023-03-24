import { faArrowUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import BgCar from '../../images/bg/car.png'
import BgMotorway from '../../images/bg/motorway.png'
import BgRoad from '../../images/bg/road.png'
import './style.css'

export default function Hero({ children }) {
  return (
    <div className='app-05'>
      <div className='body'>
        <main id='top'>
          <a href='#about'>
            <figure id='bg-motorway'>
              <img
                src={BgMotorway}
                alt='motorway sign pointing down'
              />
            </figure>
            <figure id='bg-life'>
              <img
                src={BgRoad}
                alt='trees and roads'
              />
            </figure>
            <figure id='bg-car'>
              <img
                src={BgCar}
                alt='car interior'
              />
            </figure>
          </a>
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
