import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './css/index.css'
import Markdown from 'marked-react'

import data from './data/types'
import { useState } from 'react'

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
  const initialValues = data.map(({ name, content }) => ({ name, content, selected: false }))
  const [types, setTypes] = useState(initialValues)
  const handleClick = ({ name }) => {
    setTypes((prev) => prev.map((type) => (type.name === name ? { ...type, selected: !type.selected } : type)))
  }
  return (
    <div className='app-15'>
      <div className='body'>
        <Header>
          <h1>Readme Maker</h1>
        </Header>
        <Content>
          {types.map(({ name, content, selected }) => (
            <article
              key={name}
              onClick={() => {
                handleClick({ name })
              }}
              className={selected ? 'selected' : ''}>
              <div>
                <Markdown>{name}</Markdown>
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
