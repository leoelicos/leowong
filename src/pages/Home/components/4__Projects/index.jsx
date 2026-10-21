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
          A shopping list built from recipes, with Australian supermarket sections. The recipes ship with the website. Sign-in and card payments stay on a small API.
        </p>
        <p>The website is live. The iPhone and Android apps are not in the stores yet.</p>
        <p className='case-study-links'>
          <a href='https://ingre.vercel.app/'>Website</a>
          <a href='https://github.com/leoelicos/ingre'>Code</a>
        </p>
      </article>
    </div>
  )
}
