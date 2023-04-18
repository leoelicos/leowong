import Prism from 'prismjs'
import './style/algoz.scss'

import algos from './data/data.json'
import { createContext, useMemo, useState } from 'react'
import useTitle from '../../hooks/useTitle'
import useFavicon from '../../hooks/useFavicon'

import { Button, ConfigProvider, Modal, notification } from 'antd'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode, faLink } from '@fortawesome/free-solid-svg-icons'
import { faCopy } from '@fortawesome/free-regular-svg-icons'

/* render articles as Masonry components */
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry'

const Context = createContext({
  name: 'Default'
})

function formatCode(code) {
  return Prism.highlight(code, Prism.languages.javascript, 'javascript')
}

export default function Algoz() {
  useTitle('Algoz')
  useFavicon('/favicons/algoz.png')
  const [api, contextHolder] = notification.useNotification()

  const openNotification = () => {
    api.info({
      //
      message: 'Success!',
      description: <Context.Consumer>{({ name }) => `${name}`}</Context.Consumer>,
      placement: 'bottomRight',
      duration: 0.5
    })
  }

  const [difficulty, setDifficulty] = useState('medium')
  const difficulties = ['easy', 'medium', 'hard']

  /* antd modal */
  const [algo, setAlgo] = useState(undefined)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const showModal = () => {
    setIsModalOpen(true)
  }
  const handleOk = () => {
    setIsModalOpen(false)
  }
  const handleCancel = () => {
    setIsModalOpen(false)
  }

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(algo.solution)
      openNotification()
    } catch (e) {
      console.error(e)
    }
  }
  const contextValue = useMemo(() => ({ name: 'Password copied to clipboard' }), [])
  return (
    <div className='algoz disable-caret'>
      <Context.Provider value={contextValue}>
        {contextHolder}

        <header>
          <h1>Algoz</h1>
          <nav>
            <ul>
              {difficulties.map((d) => (
                <li key={d}>
                  <button
                    className={`difficulty ${d === difficulty ? 'active' : ''}`}
                    onClick={() => {
                      setDifficulty(d)
                      console.log(`Clicked ${d}`)
                    }}>
                    {d}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </header>
        <main>
          <ResponsiveMasonry
            columnsCountBreakPoints={{ 0: 1, 700: 2, 1050: 3, 1400: 4, 1750: 5 }}
            style={{ width: '100%', overflowX: 'hidden' }}>
            <Masonry className='grid'>
              {algos
                .filter((algo) => algo.difficulty === difficulty)
                .sort((a, b) => (a.name < b.name ? -1 : a.name > b.name ? 1 : 0))
                .map((algo) => (
                  <div
                    className='card'
                    key={algo.name}>
                    <div className='title'>{algo.name}</div>
                    <div className='buttons'>
                      <ConfigProvider
                        theme={{
                          token: {
                            colorPrimary: 'red'
                          }
                        }}>
                        <Button
                          block
                          size='small'
                          shape='round'
                          type='default'
                          href={algo.link}
                          target='_blank'
                          rel='noreferrer'
                          className='leetcode'>
                          <FontAwesomeIcon icon={faLink} />
                          &nbsp;LeetCode
                        </Button>
                      </ConfigProvider>
                      <Button
                        size='small'
                        shape='round'
                        type='primary'
                        block
                        onClick={() => {
                          setAlgo(algo)
                          showModal()
                        }}>
                        <FontAwesomeIcon icon={faCode} />
                        &nbsp;My solution
                      </Button>
                    </div>
                  </div>
                ))}
            </Masonry>
          </ResponsiveMasonry>
        </main>
        {algo && (
          <ConfigProvider
            theme={{
              token: {
                colorPrimary: 'green',
                colorBgBase: 'black'
              }
            }}>
            <Modal
              centered='false'
              closable={false}
              footer={
                <>
                  <Button
                    type='primary'
                    onClick={handleCopy}>
                    <FontAwesomeIcon icon={faCopy} />
                    &nbsp;Copy
                  </Button>
                  <Button
                    type='primary'
                    onClick={handleOk}>
                    OK
                  </Button>
                </>
              }
              title={<div style={{ color: 'white' }}>{algo.name}</div>}
              open={isModalOpen}
              onCancel={handleCancel}
              bodyStyle={{
                backgroundColor: 'black',
                marginTop: '1vh',
                maxHeight: '80vh',
                overflowY: 'auto'
              }}
              children={
                <div className='algoz__code'>
                  <pre>
                    <code
                      dangerouslySetInnerHTML={{
                        __html: formatCode(algo.solution)
                      }}
                    />
                  </pre>
                </div>
              }
            />
          </ConfigProvider>
        )}
      </Context.Provider>
    </div>
  )
}
