import Avatar from '../../images/avatar.png'
import './style.css'

export default function About() {
  return (
    <section
      className='about-me'
      id='about'>
      <img
        className='avatar'
        src={Avatar}
        alt='Leo Wong'
      />
      <h1 className='about-name'>Leo Wong</h1>
      <p className='about-role'>Full stack developer, Sydney</p>
      <p>
        I build web applications and the services behind them. I maintain ingré, a shopping list for home cooks. An iPhone app and an Android app are in progress. They will use the same recipes as the website.
      </p>

      <h2>Web</h2>
      <ul className='hashtags'>
        <li className='hashtag'>React</li>
        <li className='hashtag'>TypeScript</li>
        <li className='hashtag'>Node.js</li>
        <li className='hashtag'>Express</li>
        <li className='hashtag'>MongoDB</li>
      </ul>

      <h2>In progress</h2>
      <ul className='hashtags'>
        <li className='hashtag'>Swift</li>
        <li className='hashtag'>Kotlin</li>
      </ul>
    </section>
  )
}
