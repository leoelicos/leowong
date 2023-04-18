import { useMemo, useState, createContext, Fragment } from 'react'
import useFavicon from '../../hooks/useFavicon'
import useTitle from '../../hooks/useTitle'

import data from './data/types'

import { Badge, Button, notification } from 'antd'

import './css/style.css'

/* render markdown as React components */
import Markdown from 'marked-react'

/* render articles as Masonry components */
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry'

import logo from './images/docu.png'

const Context = createContext({
  name: 'Default'
})

export default function Docu() {
  useTitle('Docu')
  useFavicon('/favicons/docu.png')

  const initialTypes = data.map((t) => ({
    ...t, //
    key: t.name,
    selected: false
  }))

  const [types, setTypes] = useState(initialTypes)
  const handleClick = ({ name }) => {
    setTypes((prev) =>
      prev.map((type) =>
        type.name === name //
          ? { ...type, selected: !type.selected }
          : type
      )
    )
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

  const sections = useMemo(
    () => [
      {
        title: 'Header',
        types: types.filter((t) => t.section === 'header')
      },
      {
        title: 'Overview',
        types: types.filter((t) => t.section === 'overview')
      },
      {
        title: 'Setup',
        types: types.filter((t) => t.section === 'setup')
      },
      {
        title: 'References',
        types: types.filter((t) => t.section === 'references')
      },
      {
        title: 'Footer',
        types: types.filter((t) => t.section === 'footer')
      }
    ],
    [types]
  )

  const handleClickGenerate = async () => {
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
  }

  const count = useMemo(() => types.filter((type) => type.selected).length, [types])

  return (
    <div className='docu'>
      <Context.Provider value={contextValue}>
        {contextHolder}
        <header>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <img
              src={logo}
              className='logo'
            />
            <h1>Docu</h1>
          </div>
          <div>
            <Badge
              count={count}
              showZero>
              <Button
                type='primary'
                onClick={handleClickGenerate}>
                Generate
              </Button>
            </Badge>
            <Button
              type='primary'
              danger
              onClick={() => {
                setTypes((prev) => prev.map((type) => ({ ...type, selected: false })))
              }}>
              Reset clicks
            </Button>
          </div>
        </header>

        <main>
          {sections.map((section) => (
            <Fragment key={section.title}>
              <h1>{section.title}</h1>
              <section>
                <ResponsiveMasonry
                  columnsCountBreakPoints={{ 0: 1, 450: 2, 679: 3, 908: 4, 1137: 5 }}
                  style={{ width: '100%', overflowX: 'hidden' }}>
                  <Masonry className='grid'>
                    {section.types.map(({ name, selected, content, key, description }) => (
                      <article
                        key={key}
                        onClick={() => {
                          handleClick({ name })
                        }}
                        className={selected ? 'selected' : ''}>
                        <Markdown>{content}</Markdown>
                      </article>
                    ))}
                  </Masonry>
                </ResponsiveMasonry>
              </section>
            </Fragment>
          ))}
        </main>
      </Context.Provider>
    </div>
  )
}
