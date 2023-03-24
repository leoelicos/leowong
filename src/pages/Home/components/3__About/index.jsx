/* custom images */
import Avatar from '../../images/avatar.png'
import './index.css'
export default function About() {
  return (
    <section className='scrolling'>
      <section
        className='about-me'
        id='about'>
        <img
          className='avatar'
          src={Avatar}
          alt='leo wong'
        />
        <article className='bio'>
          <h3>Leo Wong</h3>
          <p>Full stack developer</p>

          <p>Leo is a passionate developer who has spent a year studying both front-end and back-end coding. His love for coding started when he did an intensive coding bootcamp with the University of Sydney. He soon realized his love for React, building and designing user interfaces that are not only functional but also aesthetically pleasing.</p>
        </article>
        <article className='front-end-skills'>
          <h3>Front end</h3>
          <p>
            <span className='hashtag'>React</span>
            <span className='hashtag'>AntD</span>
            <br />
            <span className='hashtag'>jQuery</span>
            <span className='hashtag'>HTML</span>
            <span className='hashtag'>CSS</span>
          </p>
        </article>
        <article className='back-end-skills'>
          <h3>Back end</h3>
          <p>
            <span className='hashtag'>Express</span>
            <br />
            <span className='hashtag'>SQL</span>
            <span className='hashtag'>MongoQL</span>
            <span className='hashtag'>GQL</span>
          </p>
        </article>
      </section>
      <section className='articles'></section>
    </section>
  )
}
