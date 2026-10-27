import './style.css'

const links = [
  ['mailto:leoelicos@gmail.com', 'leoelicos@gmail.com'],
  ['https://www.linkedin.com/in/leoelicos', 'LinkedIn'],
  ['https://github.com/leoelicos', 'GitHub'],
  [
    'https://drive.google.com/file/d/1Z6-Ec7gif7m8Zc9oGTFRcGc_SKSbtbzV/view?usp=sharing',
    'CV'
  ]
]

export default function Resume() {
  return (
    <section
      className='resume'
      id='resume'>
      <h2>Contact</h2>
      <ul>
        {links.map(([href, label]) => (
          <li key={label}>
            <a
              href={href}
              {...(href.startsWith('http')
                ? { target: '_blank', rel: 'noreferrer' }
                : {})}>
              {label}
            </a>
          </li>
        ))}
      </ul>
    </section>
  )
}
