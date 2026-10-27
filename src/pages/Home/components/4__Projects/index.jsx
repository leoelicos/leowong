import './style.css'

export default function Projects() {
  return (
    <div
      className='projects'
      id='projects'>
      <h3 className='projects-header'>Work</h3>
      <article className='case-study'>
        <h4>ingré</h4>
        <p>
          A shopping list for the home cook. You pick recipes, mark what you already have, then tick items off at the shop. The sections follow an Australian supermarket.
        </p>
        <p>
          The recipes are part of the website, so opening one does not wait on a server. Hearts and the list stay on that device. Sign-in and card payments are the only things on the API.
        </p>
        <p>The website is live. The iPhone app and the Android app are not in the stores yet.</p>
        <p className='case-study-links'>
          <a href='https://ingre.vercel.app/'>Website</a>
          <a href='https://github.com/leoelicos/ingre'>Code</a>
        </p>
      </article>
    </div>
  )
}
