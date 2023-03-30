import { Link } from 'react-router-dom'

export default function Project({ project }) {
  const {
    title,
    endpoint,
    description,
    keywords,
    color1,
    color2,
    background1,
    background2 //
  } = project
  return (
    <Link
      className={`project-card`}
      style={{
        background: `linear-gradient(45deg, ${background1}, ${background2} 100%`
      }}
      to={`/description/${endpoint}`}>
      <h4
        className='project-card-title'
        style={{
          color: `${color1}`
        }}>
        {title}
      </h4>
      <p
        className='project-card-description'
        style={{
          color: `${color2}`
        }}>
        {description}
      </p>
      <p
        className='project-card-keywords'
        style={{
          color: `${color1}`
        }}>
        {keywords.join(' · ')}
      </p>
    </Link>
  )
}
