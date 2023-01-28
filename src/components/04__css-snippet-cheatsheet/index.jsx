import './style/style.css'
import snippets from './data/snippets'
import { useState } from 'react'
export default function CSSSnippetCheatsheet() {
  const [alert, setAlert] = useState(false)
  const handleClick = async (code) => {
    await navigator.clipboard.writeText(code)
    console.log('clicked', alert)
    setAlert(true)
    setTimeout(() => {
      setAlert(false)
    }, 1000)
  }

  return (
    <div className='app-04'>
      <div className='body'>
        <header>
          <h1>CSS Snippet Cheatsheet</h1>
          <p>Ever have trouble recalling the exact syntax for your favourite CSS code? Click the snippets to copy.</p>
        </header>
        <main>
          {snippets.map(({ title, description, code }) => (
            <article
              key={title}
              className='code-card'
              onClick={() => {
                handleClick(code)
              }}>
              <h3 className='card-header'>{title}</h3>
              <p className='card-text'>{description}</p>
              <pre className='card-code linear-gradient-background'>{code}</pre>
            </article>
          ))}
        </main>
        {alert ? <div className='alert'>Copied to clipboard</div> : null}
        <footer>
          <h3>Made with ❤️ and CSS</h3>
        </footer>
      </div>
    </div>
  )
}
