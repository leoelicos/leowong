/* custom images */
import Avatar from '../../images/avatar.png'
import GradientText from '../../../../components/GradientText/index.jsx'
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
      <h3 style={{ fontSize: 'max(64px, 8vh)', fontFamily: "'Allerta Stencil', sans-serif" }}>
        <GradientText
          color1='red'
          color2='orange'>
          &nbsp;Leo Wong
        </GradientText>
      </h3>
      <h4>Full stack developer, Sydney</h4>
      <p>
        I build web applications and the services behind them. I maintain ingré, a shopping list for home cooks. An iPhone app and an Android app are in progress. They will use the same recipes as the website.
      </p>

      <h4>Web</h4>
      <p className='hashtags'>
        <span className='hashtag'>React</span>
        <span className='hashtag'>TypeScript</span>
        <span className='hashtag'>Node.js</span>
        <span className='hashtag'>Express</span>
        <span className='hashtag'>MongoDB</span>
      </p>

      <h4>In progress</h4>
      <p className='hashtags'>
        <span className='hashtag'>Swift</span>
        <span className='hashtag'>Kotlin</span>
      </p>
    </section>
  )
}
