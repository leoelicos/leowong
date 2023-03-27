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
        alt='leo wong'
      />
      <h3 style={{ fontSize: 'max(64px, 8vh)', fontFamily: "'Allerta Stencil', sans-serif" }}>
        <GradientText
          color1='red'
          color2='orange'>
          &nbsp;Leo Wong
        </GradientText>
      </h3>
      <h4>Full stack developer</h4>
      <p>Leo is a passionate developer who has spent a year studying both front-end and back-end coding. His love for coding started when he did an intensive coding bootcamp with the University of Sydney. He soon realized his love for React, building and designing user interfaces that are not only functional but also aesthetically pleasing.</p>

      <h4>Front end</h4>
      <p className='hashtags'>
        <span className='hashtag'>React</span>
        <span className='hashtag'>AntD</span>
        <span className='hashtag'>jQuery</span>
        <span className='hashtag'>HTML</span>
        <span className='hashtag'>CSS</span>
        <span className='hashtag'>Bootstrap</span>
        <span className='hashtag'>Materialize</span>
      </p>

      <h4>Back end</h4>
      <p className='hashtags'>
        <span className='hashtag'>Express</span>
        <span className='hashtag'>SQL</span>
        <span className='hashtag'>MongoQL</span>
        <span className='hashtag'>GQL</span>
      </p>
    </section>
  )
}
