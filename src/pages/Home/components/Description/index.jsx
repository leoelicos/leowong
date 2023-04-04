import appData from '../../../../data/apps.js'

import { useParams } from 'react-router-dom'
import useFavicon from '../../../../hooks/useFavicon.js'
import useTitle from '../../../../hooks/useTitle.js'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
import './style.css'

export default function Description() {
  let params = useParams()

  let appName = params.appName
  const app = appData[appName]

  const {
    endpoint,
    links,
    code,
    title,
    description,
    keywords,
    userStory,
    features,
    frontEndTech,
    backEndTech,
    apis,
    color1,
    color2,
    background1,
    background2

    //
  } = app

  useTitle(title)
  useFavicon(`/favicons/${endpoint}.png`)

  const titleGradient = `linear-gradient(45deg, 
    ${background1}, 
    ${background2} 50%, 
    ${background1} 100%)`
  const titleColor = color1

  return (
    <div className='description'>
      {/* header */}
      <div
        target='blank'
        rel='noreferrer'
        style={{
          background: titleGradient,
          color: titleColor
        }}
        className='description-title '>
        <h4 style={{ color: `${color1}`, fontSize: 'max(36px, 4vmin)', margin: '0 0 4px 0' }}>{title}</h4>
        <p
          style={{
            color: `${color2}`,
            margin: '0 0 2px 0'
          }}>
          {description}
        </p>
        <p
          style={{
            color: `${color1}`,
            margin: 0
          }}>
          {keywords.join(' · ')}
        </p>
        <div className='links'>
          <a
            href={links[0]}
            target='_blank'
            rel='noreferrer'
            className='deploy-button link'>
            App
          </a>

          <a
            href={code}
            target='_blank'
            rel='noreferrer'
            className='code-button link'>
            Code
          </a>
        </div>
      </div>

      <table className='description-table'>
        <tbody>
          {userStory.length > 0 && (
            <tr>
              <th>Story</th>
              <td>
                <ul>
                  {userStory.map((point) => (
                    <li key={point}>
                      <FontAwesomeIcon
                        icon={faAngleRight}
                        style={{ color: 'gold' }}
                      />
                      &nbsp;
                      {point}
                    </li>
                  ))}
                </ul>
              </td>
            </tr>
          )}
          {features.length > 0 && (
            <tr>
              <th>Features</th>
              <td>
                <ul>
                  {features.map((point) => (
                    <li key={point}>
                      <FontAwesomeIcon
                        icon={faAngleRight}
                        style={{ color: 'gold' }}
                      />
                      &nbsp;{point}
                    </li>
                  ))}
                </ul>
              </td>
            </tr>
          )}
          {frontEndTech.length > 0 && (
            <tr>
              <th>Client</th>
              <td>
                {frontEndTech.map((tech) => (
                  <span
                    key={tech}
                    className='tech frontend'>
                    {tech}
                  </span>
                ))}
              </td>
            </tr>
          )}
          {backEndTech.length > 0 && (
            <tr>
              <th>Server</th>
              <td>
                {backEndTech.map((tech) => (
                  <div
                    className='tech backend'
                    key={tech}>
                    {tech}
                  </div>
                ))}
              </td>
            </tr>
          )}
          {apis.length > 0 && (
            <tr>
              <th>DaaS</th>
              <td>
                {apis.map((api) => (
                  <div
                    className='tech api'
                    key={api}>
                    {api}
                  </div>
                ))}
              </td>
            </tr>
          )}
          {links.length > 1 && (
            <tr>
              <th>Backup</th>
              <td>
                {links.slice(1).map((link, i) => (
                  <a
                    key={link}
                    href={link}
                    target='_blank'
                    rel='noreferrer'
                    className='deploy-button link'>
                    Mirror&nbsp;{i + 1}
                  </a>
                ))}
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}
