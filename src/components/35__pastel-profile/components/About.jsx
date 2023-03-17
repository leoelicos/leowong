const points = [
  { title: 'positions', tags: ['node developer', 'front end developer', 'back end developer'] },
  { title: 'front end', tags: ['react/cra/functional', 'es6/jsx', 'antd', 'axios'] },
  { title: 'back end', tags: ['express', 'mysql/sequelize', 'mongodb/mongoose', 'graphql/typedefs'] },
  { title: 'testing', tags: ['jest', 'mocha/coffeescript'] },
  { title: 'PaaS', tags: ['Heroku', 'Vercel', 'Render', 'GitHub Pages'] },
  { title: 'learning', tags: ['next', 'typescript', 'design patterns'] },
  { title: 'values', tags: ['originality', 'attribution', 'modularity'] }
]

export default function About() {
  return (
    <article
      className='box'
      id='about'>
      {points.map((point) => (
        <AboutPanel
          title={point.title}
          tags={point.tags}
        />
      ))}
    </article>
  )
}

function AboutPanel({ title, tags }) {
  return (
    <div className='content'>
      <h3>{title}</h3>
      {tags.map((tag) => (
        <p
          class='tag'
          key={tag}>
          {tag}
        </p>
      ))}
    </div>
  )
}
