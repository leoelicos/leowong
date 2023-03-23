import { useRouteError } from 'react-router-dom'
import './style/index.css'
export default function ErrorPage() {
  const error = useRouteError()
  console.error(error)

  return (
    <div
      id='error-page'
      className='error-page'>
      <h1>Sorry, there's been an error.</h1>
      <code>{error.statusText || error.message}</code>
    </div>
  )
}
