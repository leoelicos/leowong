import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './css/index.css'
import Markdown from 'marked-react'

import data from './data/types'
import { useState } from 'react'

import { Tooltip } from 'antd'

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
  const initialTypes = data.map((t) => ({ ...t, key: t.name, selected: false }))

  const [types, setTypes] = useState(initialTypes)
  const handleClick = ({ name }) => {
    console.log({ name })
    setTypes((prev) => prev.map((type) => (type.name === name ? { ...type, selected: !type.selected } : type)))
  }
  return (
    <div className='app-15'>
      <div className='body'>
        <Header>
          <h1>Readme Maker</h1>
        </Header>
        <Content>
          <h1>Header</h1>
          <section className='readme-header'>
            {types
              .filter((t) => t.section === 'header')
              .map(({ name, selected, content, key, description }) => (
                <article
                  key={key}
                  onClick={() => {
                    handleClick({ name })
                  }}
                  className={selected ? 'selected' : ''}>
                  <Tooltip title={description}>{<Markdown>{content}</Markdown>}</Tooltip>
                </article>
              ))}
          </section>
          <h1>Overview</h1>
          <section className='readme-header'>
            {types
              .filter((t) => t.section === 'overview')
              .map(({ name, selected, content, key, description }) => (
                <article
                  key={key}
                  onClick={() => {
                    handleClick({ name })
                  }}
                  className={selected ? 'selected' : ''}>
                  <Tooltip title={description}>{<Markdown>{content}</Markdown>}</Tooltip>
                </article>
              ))}
          </section>
          <h1>Setup</h1>
          <section className='readme-header'>
            {types
              .filter((t) => t.section === 'low-level detail')
              .map(({ name, selected, content, key, description }) => (
                <article
                  key={key}
                  onClick={() => {
                    handleClick({ name })
                  }}
                  className={selected ? 'selected' : ''}>
                  <Tooltip title={description}>{<Markdown>{content}</Markdown>}</Tooltip>
                </article>
              ))}
          </section>
          <h1>References</h1>
          <section className='readme-header'>
            {types
              .filter((t) => t.section === 'references')
              .map(({ name, selected, content, key, description }) => (
                <article
                  key={key}
                  onClick={() => {
                    handleClick({ name })
                  }}
                  className={selected ? 'selected' : ''}>
                  <Tooltip title={description}>{<Markdown>{content}</Markdown>}</Tooltip>
                </article>
              ))}
          </section>
          <h1>Footer</h1>
          <section className='readme-header'>
            {types
              .filter((t) => t.section === 'footer')
              .map(({ name, selected, content, key, description }) => (
                <article
                  key={key}
                  onClick={() => {
                    handleClick({ name })
                  }}
                  className={selected ? 'selected' : ''}>
                  <Tooltip title={description}>{<Markdown>{content}</Markdown>}</Tooltip>
                </article>
              ))}
          </section>
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
