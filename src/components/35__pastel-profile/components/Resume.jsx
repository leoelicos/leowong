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

      <ul className='nav'>
        <li className='nav-item deployed'>
          <a
            href='https://www.linkedin.com/in/leoelicos/'
            className='footer-content'>
            Linkedin
          </a>
        </li>
        <li className='nav-item deployed'>
          <a
            href='https://github.com/leoelicos?tab=repositories'
            className='footer-content'>
            GitHub
          </a>
        </li>
        <li className='nav-item deployed'>
          <a
            href='https://www.codewars.com/users/leoelicos'
            className='footer-content'>
            CodeWars
          </a>
        </li>
      </ul>
    </div>
  )
}
