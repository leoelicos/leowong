export default function Resume() {
  return (
    <div>
      <h2 style={{ marginTop: '1rem' }}>Resume</h2>
      <a
        className='deployed'
        target='_blank'
        rel='noreferrer'
        href='https://drive.google.com/file/d/1h8cJZCP00_rwluAvS5hHzIPyXsKbvkZm/view?usp=sharing'>
        Resume
      </a>
      <h2 style={{ marginTop: '1rem' }}>Front-end Proficiencies</h2>
      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>Javascript</li>
        <li>Handlebars</li>
        <li>React.js</li>
      </ul>
      <h2 style={{ marginTop: '1rem' }}>Back-end Proficiencies</h2>
      <ul>
        <li>Node.js</li>
        <li>Express.js</li>
        <li>Sequelize</li>
        <li>MongoDB</li>
        <li>MERN Stack</li>
      </ul>
    </div>
  )
}
