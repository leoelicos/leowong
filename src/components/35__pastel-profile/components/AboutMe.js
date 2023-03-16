export default function About() {
  return (
    <article
      className='box'
      id='about'>
      <img
        className='avatar'
        src='https://leoelicos.github.io/bcs-02-professional-portfolio/assets/images/avatar.jpg'
        alt='leo wong'
      />

      <section className='content'>
        <h4>Full Stack Dev</h4>
      </section>

      <section className='content'>
        <h3>My process</h3>
        <h4>
          <span className='hashtag'>#TDD</span>
          <span className='hashtag'>#DRY</span>
          <span className='hashtag'>#agile</span>
        </h4>
      </section>
      <section className='content'>
        <h3>My values</h3>
        <h4>
          <span className='hashtag'>#original</span>
          <span className='hashtag'>#teamwork</span>
          <span className='hashtag'>#bestpractice</span>
        </h4>
      </section>
      <section className='content'>
        <h3>Bio</h3>
        <h4>
          <span className='hashtag'>Hello, I'm Leo. I'm currently studying to become a full-stack developer. I spend my days at bootcamp, on codewars and on leetcode. Contact me at leoelicos at gmail dot com</span>
        </h4>
      </section>
    </article>
  )
}
