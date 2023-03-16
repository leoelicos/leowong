const styles = {
  footerLinks: {
    background: '0 0',
    fontSize: '1rem'
  }
}
export default function Header(props) {
  return (
    <footer>
      <ul className='nav'>
        <li className='nav-item deployed'>
          <a
            href='https://www.linkedin.com/in/leoelicos/'
            className='footer-content'
            style={styles.footerLinks}>
            Linkedin
          </a>
        </li>
        <li className='nav-item deployed'>
          <a
            href='https://github.com/leoelicos?tab=repositories'
            className='footer-content'
            style={styles.footerLinks}>
            GitHub
          </a>
        </li>
        <li className='nav-item deployed'>
          <a
            href='https://www.codewars.com/users/leoelicos'
            className='footer-content'
            style={styles.footerLinks}>
            CodeWars
          </a>
        </li>
      </ul>
    </footer>
  )
}
