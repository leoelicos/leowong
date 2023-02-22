import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './css/index.css'
import Markdown from 'marked-react'

import types from './data/types'

const Header = ({ children }) => {
  return <header>{children}</header>
}

const Content = ({ children }) => {
  return <main>{children}</main>
}

const Footer = ({ children }) => {
  return <footer>{children}</footer>
}

const ReadmeMaker = () => {
  return (
    <div className='app-15'>
      <div className='body'>
        <Header>
          <h1>Readme Maker</h1>
        </Header>
        <Content>
          {types.map(({ name, content }) => (
            <article key={name}>
              <div>
                <Markdown>{content}</Markdown>
              </div>
            </article>
          ))}
        </Content>
        <Footer>
          <h2>
            Made with&ensp;
            <FontAwesomeIcon icon={faHeart} />
            &ensp;and React
          </h2>
        </Footer>
      </div>
    </div>
  )
}

export default ReadmeMaker
