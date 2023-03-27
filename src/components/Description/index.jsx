import { faLink } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import useFavicon from '../../hooks/useFavicon.js'
import useTitle from '../../hooks/useTitle.js'

const Description = ({ app }) => {
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
    apis

    //
  } = app

  useTitle(title)
  useFavicon(`/favicons/${endpoint}.png`)
  return (
    <PageWrapper>
      <SectionWrapper>
        <SectionTitle>{title}</SectionTitle>
      </SectionWrapper>
      <SectionWrapper>
        <SectionDescription>{description}</SectionDescription>
      </SectionWrapper>
      <SectionWrapper>
        <SectionKeywords>
          {keywords.map((keyword) => (
            <SectionKeyword
              key={keyword}
              word={keyword}
            />
          ))}
        </SectionKeywords>
      </SectionWrapper>
      <SectionWrapper>
        <LinksWrapper>
          {link.length > 0 && (
            <LinkRound
              href={link}
              text='Deployed'
            />
          )}
          {code.length > 0 && (
            <LinkRound
              href={code}
              text='Code'
            />
          )}
        </LinksWrapper>
      </SectionWrapper>

      {apis.length > 0 && (
        <SectionWrapper>
          <h2>APIs</h2>
          <TechWrapper>
            {apis.map((tech) => (
              <Tech
                key={tech}
                name={tech}
                background='purple'
                color='white'
              />
            ))}
          </TechWrapper>
        </SectionWrapper>
      )}
      {frontEndTech.length > 0 && (
        <SectionWrapper>
          <h2>Front end tech</h2>
          <TechWrapper>
            {frontEndTech.map((tech) => (
              <Tech
                key={tech}
                name={tech}
                background='white'
                color='black'
              />
            ))}
          </TechWrapper>
        </SectionWrapper>
      )}
      {backEndTech.length > 0 && (
        <SectionWrapper>
          <h2>Back end tech</h2>
          <TechWrapper>
            {backEndTech.map((tech) => (
              <Tech
                key={tech}
                name={tech}
                background='black'
                color='white'
              />
            ))}
          </TechWrapper>
        </SectionWrapper>
      )}
      <SectionWrapper>
        <h2>User story</h2>
        <ul>
          {userStory.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
      </SectionWrapper>
      <SectionWrapper>
        <h2>Business Requirements</h2>
        <ul>
          {businessRequirements.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
      </SectionWrapper>
      {changes.length > 0 && (
        <SectionWrapper>
          <h2>Updates</h2>
          <ul>
            {changes.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </SectionWrapper>
      )}
    </PageWrapper>
  )
}
export default Description

function SectionKeywords({ children }) {
  const style = {
    display: 'flex',
    gap: '1vmin',
    flexFlow: 'row wrap',
    justifyContent: 'center',
    alignItems: 'center',
    maxWidth: '100%'
  }
  return <div style={style}>{children}</div>
}

function SectionKeyword({ word }) {
  var style = {
    padding: '0.5vmin 2vmin',
    borderRadius: '1vmin',

    fontSize: 'max(16px, 1vmin)',
    textAlign: 'center',
    whiteSpace: 'nowrap'
  }
  return <span style={style}>{word}</span>
}

function SectionTitle({ children }) {
  const style = {
    margin: '3vh 0 1.5vh 0',
    fontFamily: "'Arial', sans-serif"
  }
  return (
    <h1
      style={style}
      className='section-title'>
      {children}
    </h1>
  )
}
function SectionDescription({ children }) {
  const style = {
    margin: '0',
    fontFamily: "'Arial', sans-serif",
    fontWeight: 'bold'
  }
  return <p style={style}>{children}</p>
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

function LinksWrapper({ children }) {
  const style = {
    display: 'flex',
    gap: '1vmin',
    flexFlow: 'row wrap',
    justifyContent: 'center',
    alignItems: 'center',
    maxWidth: '100%'
  }
  return <div style={style}>{children}</div>
}

function LinkRound({ href, text }) {
  const style = {
    background: 'white',
    textDecoration: 'none',
    borderRadius: '4vmin',
    padding: '1vh 1vw',
    color: 'black'
  }
  return (
    <a
      href={href}
      target='_blank'
      rel='noreferrer'
      style={style}>
      {text} <FontAwesomeIcon icon={faLink} />
    </a>
  )
}
function TechWrapper({ children }) {
  const style = {
    display: 'flex',
    gap: '1vmin',
    flexFlow: 'row wrap',
    justifyContent: 'center',
    alignItems: 'center',
    maxWidth: '100%'
  }
  return <div style={style}>{children}</div>
}

function SectionWrapper({ children }) {
  const style = {
    display: 'flex',
    gap: '1vmin',
    flexFlow: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    maxWidth: '100%'
  }
  return <div style={style}>{children}</div>
}

function PageWrapper({ children }) {
  const style = {
    backgroundColor: 'lightblue',
    display: 'flex',
    gap: '1vmax',
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexFlow: 'column',
    flex: '1',
    height: '100vh',
    width: '100%',
    overflowY: 'auto',
    maxWidth: '100%',
    fontFamily: "'Arial', sans-serif"
  }
  return <div style={style}>{children}</div>
}
