import appData from '../../../../data/apps.js'

import { useParams } from 'react-router-dom'
import useFavicon from '../../../../hooks/useFavicon.js'
import useTitle from '../../../../hooks/useTitle.js'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

import './style.css'

export default function Description() {
  let params = useParams()

  let appName = params.appName
  const app = appData[appName]

  const {
    endpoint,
    link,
    code,
    title,
    description,
    keywords,
    userStory,
    businessRequirements,
    changes,
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

  return (
    <PageWrapper>
      <SectionTitle
        className='description-title'
        title={title}
        background1={background1}
        background2={background2}
        color1={color1}
        color2={color2}
        description={description}
        keywords={keywords}
        link={link}
      />

      <table className='description-table'>
        <tbody>
          <tr>
            <th>Deployed</th>
            <td>
              <DeployButton link={link} />
            </td>
          </tr>
          <tr>
            <th>Code</th>
            <td>
              <CodeButton link={code} />
            </td>
          </tr>
          <tr>
            <th>Summary</th>
            <td>{description}</td>
          </tr>
          {frontEndTech.length > 0 && (
            <tr>
              <th>Front end</th>
              <td>
                {frontEndTech.map((tech) => (
                  <span
                    key={tech}
                    style={{
                      backgroundColor: 'white',
                      color: 'black',
                      padding: '0.5vh 2vw',
                      borderRadius: '1vmin',

                      fontSize: 'max(16px, 1vmin)',
                      textAlign: 'center',
                      whiteSpace: 'nowrap'
                    }}>
                    {tech}
                  </span>
                ))}
              </td>
            </tr>
          )}
          {backEndTech.length > 0 && (
            <tr>
              <th>Back end</th>
              <td>
                {backEndTech.map((tech) => (
                  <Tech
                    key={tech}
                    name={tech}
                    background='black'
                    color='white'
                  />
                ))}
              </td>
            </tr>
          )}
          {apis.length > 0 && (
            <tr>
              <th>APIs</th>
              <td>
                {apis.map((tech) => (
                  <Tech
                    key={tech}
                    name={tech}
                    background='purple'
                    color='white'
                  />
                ))}
              </td>
            </tr>
          )}
          {userStory.length > 0 && (
            <tr>
              <th>User story</th>
              <td>
                <ul>
                  {userStory.map((point) => (
                    <li key={point}>👉🏻{point}</li>
                  ))}
                </ul>
              </td>
            </tr>
          )}
          {businessRequirements.length > 0 && (
            <tr>
              <th>Requirements</th>
              <td>
                <ul>
                  {businessRequirements.map((point) => (
                    <li key={point}>👉🏻{point}</li>
                  ))}
                </ul>
              </td>
            </tr>
          )}
          {changes.length > 0 && (
            <tr>
              <th>Updates</th>
              <td>
                <ul>
                  {changes.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </PageWrapper>
  )
}
function DeployButton({ link }) {
  const site = link.includes('herokuapp.com') //
    ? 'heroku'
    : link.includes('onrender.com')
    ? 'Render'
    : 'Vercel'

  return (
    <a
      href={link}
      target='_blank'
      rel='noreferrer'
      className='deploy-button'>
      {site}
    </a>
  )
}
function CodeButton({ link }) {
  return (
    <a
      href={link}
      target='_blank'
      rel='noreferrer'
      className='code-button'>
      <FontAwesomeIcon icon={faGithub} />
    </a>
  )
}

function SectionTitle({
  title,
  background1,
  background2,
  color1,
  color2,
  link,
  description,
  keywords //
}) {
  console.log({ title, background1, background2, color1, color2, link, description, keywords })
  return (
    <a
      href={link}
      target='blank'
      rel='noreferrer'
      style={{
        background: `linear-gradient(45deg, 
          ${background1}, 
          ${background2} 50%, 
          ${background1} 100%)`,
        color: `${color1}`
      }}
      className='description-title'>
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
    </a>
  )
}

function Tech({ name, background, color }) {
  var style = {
    backgroundColor: background,
    color: color,
    padding: '0.5vmin 2vmin',
    borderRadius: '1vmin',

    fontSize: 'max(16px, 1vmin)',
    textAlign: 'center',
    whiteSpace: 'nowrap'
  }
  return <span style={style}>{name}</span>
}

function PageWrapper({ children }) {
  const style = {
    display: 'flex',

    alignItems: 'center',
    justifyContent: 'flex-start',
    flexFlow: 'column',
    flex: '1',
    height: '100vh',
    width: '100%',
    overflowY: 'auto',
    maxWidth: '100%',
    fontFamily: "'Open Sans', Arial, sans-serif"
  }
  return (
    <div
      style={style}
      className='description'>
      {children}
    </div>
  )
}
