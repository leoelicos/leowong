import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Avatar from './images/lwfull.webp'
import CodeWarsLogo from './images/cw.png'
import LeetCodeLogo from './images/lc.png'
import NodeLogo from './images/node.png'
import AusLogo from './images/aus.png'
import ReactLogo from './images/react.png'
import JSXLogo from './images/jsx.png'
import AntdLogo from './images/antd.png'

import ExpressLogo from './images/express.png'
import MysqlLogo from './images/mysql.png'
import MongoLogo from './images/mongodb.webp'
import GraphQLLogo from './images/GraphQL_Logo.svg.png'
import JestLogo from './images/jest.png'
import MochaLogo from './images/mocha.png'

export default function About() {
  return (
    <article
      className='about'
      id='about'>
      <p>
        Hi I'm Leo
        <TechButton
          logo={Avatar}
          label='Leo Wong'
        />
      </p>
      <p>
        I live in Sydney
        <TechButton
          logo={AusLogo}
          label='Sydney'
        />
      </p>
      <p>
        I am looking for work as a{' '}
        <TechButton
          logo={NodeLogo}
          label='node'
        />{' '}
        developer.
      </p>
      <p>
        On the front end, I have worked with{' '}
        <TechButton
          logo={ReactLogo}
          label='react'
        />
        ,
        <TechButton
          logo={JSXLogo}
          label='jsx'
        />{' '}
        and
        <TechButton
          logo={AntdLogo}
          label='antd'
        />
      </p>
      <p>
        On the back end, I have worked with{' '}
        <TechButton
          logo={ExpressLogo}
          label='express'
        />
        ,
        <TechButton
          logo={MysqlLogo}
          label='label'
        />
        ,
        <TechButton
          logo={MongoLogo}
          label='mongodb'
        />{' '}
        and
        <TechButton
          logo={GraphQLLogo}
          label='graphql'
        />
      </p>
      <p>
        I have run small unit tests using{' '}
        <TechButton
          logo={JestLogo}
          label='jest'
        />{' '}
        and
        <TechButton
          logo={MochaLogo}
          label='mocha'
        />
      </p>
      <p>I have deployed my apps on Heroku, Vercel, Render and Github Pages</p>
      <p>I am keen on learning Next, Typescript and SSR</p>
      <p>Links</p>

      <a href='https://www.linkedin.com/in/leoelicos/'>
        <FontAwesomeIcon icon={faLinkedinIn} />
      </a>

      <a href='https://github.com/leoelicos?tab=repositories'>
        <FontAwesomeIcon icon={faGithub} />
      </a>

      <a
        target='_blank'
        rel='noreferrer'
        href='mailto:leoelicos@gmail.com'>
        <FontAwesomeIcon icon={faEnvelope} />
        <p>email</p>
      </a>

      <a
        target='_blank'
        rel='noreferrer'
        href='https://drive.google.com/file/d/1h8cJZCP00_rwluAvS5hHzIPyXsKbvkZm/view?usp=sharing'>
        CV
      </a>

      <a
        href='https://www.codewars.com/users/leoelicos'
        className='footer-content'>
        <img
          src={LeetCodeLogo}
          style={{ width: '20px' }}
          alt='leetcode'
        />
        <p>leetcode</p>
      </a>

      <a href='https://www.codewars.com/users/leoelicos'>
        <img
          src={CodeWarsLogo}
          style={{ width: '20px' }}
          alt='codewars'
        />
        <p>codewars</p>
      </a>
    </article>
  )
}

const Image = ({ logo, alt, dataLabel }) => (
  <div
    className='image-wrapper'
    style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100%'
    }}>
    <img
      className='image'
      src={logo}
      style={{
        objectFit: 'cover',
        objectPosition: 'center',

        maxHeight: '40px'
      }}
      data-label={dataLabel}
      alt={alt}
    />
  </div>
)

const TechButton = ({ logo, label }) => (
  <div
    className='tech-button'
    style={{
      display: 'inline-flex',
      flexDirection: 'row',
      alignItems: 'flex-end',
      height: '100%'
    }}>
    <Image
      dataLabel={label}
      logo={logo}
      alt={label}
    />
  </div>
)

const LinkButton = ({ logo, label, link }) => (
  <a
    href={link}
    rel='noreferrer'
    className='link-button'
    style={{
      display: 'inline-flex',
      flexDirection: 'row',
      alignItems: 'flex-end',
      height: '100%'
    }}>
    <Image
      data-label={label}
      logo={logo}
      alt={label}
    />
  </a>
)
