import { Link } from 'react-router-dom'

export default function AppButton({ title, link, description, keywords, finished, color1, color2, background1, background2 }) {
  return (
    <Link
      className={`app-button ${finished ? 'finished' : ''}`}
      style={{ background: `linear-gradient(45deg, rgb(${background1[0]},${background1[1]},${background1[2]}), rgb(${background2[0]},${background2[1]},${background2[2]} 50%)` }}
      to={link}>
      <p
        className='app-button-title'
        style={{ color: `rgb(${color1[0]},${color1[1]},${color1[2]})` }}>
        {title}
      </p>
      <p
        className='app-button-description'
        style={{ color: `rgb(${color2[0]},${color2[1]},${color2[2]})` }}>
        {description}
      </p>
      <p
        className='app-button-keywords'
        style={{ color: `rgb(${color1[0]},${color1[1]},${color1[2]})` }}>
        {keywords.join(' · ')}
      </p>
    </Link>
  )
}
