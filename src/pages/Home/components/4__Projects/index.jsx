import './style.css'

export default function Projects() {
  return (
    <div
      className='projects'
      id='projects'>
      <h2 className='projects-header'>Work</h2>
      <article className='case-study'>
        <h3>ingré</h3>
        <p>
          A shopping list for the home cook. You pick recipes, mark what you already have, then tick items off at the shop. The sections follow an Australian supermarket.
        </p>
        <p>
          The recipes are part of the website, so opening one does not wait on a server. Hearts and the list stay on that device. Sign-in and card payments are the only things on the API.
        </p>
        <dl className='facts'>
          <div>
            <dt>Live</dt>
            <dd>
              <a href='https://ingre.vercel.app/'>ingre.vercel.app</a>
            </dd>
          </div>
          <div>
            <dt>Stack</dt>
            <dd>React, TypeScript, Node.js, Express, MongoDB</dd>
          </div>
          <div>
            <dt>Phone</dt>
            <dd>iPhone and Android are not in the stores yet</dd>
          </div>
        </dl>
        <p className='case-study-links'>
          <a href='https://ingre.vercel.app/'>Website</a>
          <a href='https://github.com/leoelicos/ingre'>Code</a>
        </p>
      </article>
    </div>
  )
}
