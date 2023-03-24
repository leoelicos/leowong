import { Link } from 'react-router-dom'

export default function Project({
  title,
  link,
  description,
  keywords,
  color1,
  color2,
  background1,
  background2 //
}) {
  const b1 = background1.join(',')
  const b2 = background2.join(',')
  const c1 = color1.join(',')
  const c2 = color2.join(',')
  const projectStyle = {
    background: `linear-gradient(45deg, rgb(${b1}), rgb(${b2}, 50%)`
  }

  const projectTitleStyle = {
    color: `rgb(${c1})`
  }

  const projectDescriptionStyle = {
    color: `rgb(${c2})`
  }

  const projectKeywordsStyle = {
    color: `rgb(${c1})`
  }

  return (
    <Link
      className={`project-card`}
      style={projectStyle}
      to={link}>
      <h4
        className='project-card-title'
        style={projectTitleStyle}>
        {title}
      </h4>
      <p
        className='project-card-description'
        style={projectDescriptionStyle}>
        {description}
      </p>
      <p
        className='project-card-keywords'
        style={projectKeywordsStyle}>
        {keywords.join(' · ')}
      </p>
    </Link>
  )
}
