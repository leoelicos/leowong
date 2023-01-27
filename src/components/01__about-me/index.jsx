import './style/style.css'
export default function AboutMe() {
  return (
    <div className='app-00'>
      <div className='body'>
        <header className='masthead'>
          <p className='masthead-intro'>Hi I'm</p>
          <h1 className='masthead-heading'>Leo Wong</h1>
        </header>
        <section className='details'>
          <h1>Introduction</h1>
          <p>Hi, I'm Leo, I am a web developer.</p>
          <h1>What are your favorite hobbies?</h1>
          <p>My favourite hobbies are talking to people, walking, shopping and hanging out with friends.</p>
          <h1>What's your dream job?</h1>
          <p>My dream job is to work for a web development company.</p>
        </section>

        <footer id='footer'>
          <ul className='social'>
            <li>
              <a href='http://www.github.com/leoelicos'>Github</a>
            </li>
          </ul>
        </footer>
      </div>
    </div>
  )
}
