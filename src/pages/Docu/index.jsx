import './css/index.css'
import Markdown from 'marked-react'

import data from './data/types'
import React, { useMemo, useState } from 'react'

import { Button, notification, Tooltip } from 'antd'

const Header = ({ children }) => {
  return <header>{children}</header>
}

const Content = ({ children }) => {
  return <main>{children}</main>
}

const Footer = ({ children }) => {
  return <footer>{children}</footer>
}
const Context = React.createContext({
  name: 'Default'
})
export default function Docu() {
  const initialTypes = data.map((t) => ({ ...t, key: t.name, selected: false }))

  const [types, setTypes] = useState(initialTypes)
  const handleClick = ({ name }) => {
    setTypes((prev) => prev.map((type) => (type.name === name ? { ...type, selected: !type.selected } : type)))
  }
  const [api, contextHolder] = notification.useNotification()
  const openNotification = () => {
    api.info({
      //
      message: 'Success!',
      description: <Context.Consumer>{({ name }) => `${name}`}</Context.Consumer>,
      placement: 'bottomRight',
      duration: 1
    })
  }
  const contextValue = useMemo(() => ({ name: 'Markdown copied to clipboard' }), [])
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
                <Tooltip
                  key={key}
                  title={description}>
                  <article
                    onClick={() => {
                      handleClick({ name })
                    }}
                    className={selected ? 'selected' : ''}>
                    {<Markdown>{content}</Markdown>}
                  </article>
                </Tooltip>
              ))}
          </section>
          <h1>Overview</h1>
          <section className='readme-header'>
            {types
              .filter((t) => t.section === 'overview')
              .map(({ name, selected, content, key, description }) => (
                <Tooltip
                  key={key}
                  title={description}>
                  <article
                    onClick={() => {
                      handleClick({ name })
                    }}
                    className={selected ? 'selected' : ''}>
                    {<Markdown>{content}</Markdown>}
                  </article>
                </Tooltip>
              ))}
          </section>
          <h1>Setup</h1>
          <section className='readme-header'>
            {types
              .filter((t) => t.section === 'setup')
              .map(({ name, selected, content, key, description }) => (
                <Tooltip
                  key={key}
                  title={description}>
                  <article
                    onClick={() => {
                      handleClick({ name })
                    }}
                    className={selected ? 'selected' : ''}>
                    {<Markdown>{content}</Markdown>}
                  </article>
                </Tooltip>
              ))}
          </section>
          <h1>References</h1>
          <section className='readme-header'>
            {types
              .filter((t) => t.section === 'references')
              .map(({ name, selected, content, key, description }) => (
                <Tooltip
                  key={key}
                  title={description}>
                  <article
                    onClick={() => {
                      handleClick({ name })
                    }}
                    className={selected ? 'selected' : ''}>
                    {<Markdown>{content}</Markdown>}
                  </article>
                </Tooltip>
              ))}
          </section>
          <h1>Footer</h1>
          <section className='readme-header'>
            {types
              .filter((t) => t.section === 'footer')
              .map(({ name, selected, content, key, description }) => (
                <Tooltip
                  key={key}
                  title={description}>
                  <article
                    onClick={() => {
                      handleClick({ name })
                    }}
                    className={selected ? 'selected' : ''}>
                    {<Markdown>{content}</Markdown>}
                  </article>
                </Tooltip>
              ))}
          </section>
        </Content>
        <Footer>
          <Context.Provider value={contextValue}>
            {contextHolder}
            <Button
              onClick={async () => {
                const output = types
                  .filter((v) => v.selected)
                  .map((v) => v.content)
                  .join('\n\n')

                try {
                  await navigator.clipboard.writeText(output)

                  openNotification()
                } catch (e) {
                  console.error(e)
                }
              }}>
              Generate .md
            </Button>
            <Button
              type='danger'
              onClick={() => {
                setTypes((prev) => prev.map((type) => ({ ...type, selected: false })))
              }}>
              Reset clicks
            </Button>
          </Context.Provider>
        </Footer>
      </div>
    </div>
  )
}
