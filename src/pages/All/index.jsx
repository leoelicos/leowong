import { Link } from 'react-router-dom'
import './style.css'

export default function All() {
  return (
    <div className='all'>
      <h1>Leo Wong</h1>
      <p>The only public project is ingré.</p>
      <p>
        <a href='https://ingre.vercel.app/'>ingre.vercel.app</a>
      </p>
      <p>
        <Link to='/#projects'>Back</Link>
      </p>
    </div>
  )
}
