import Prism from 'prismjs'
import './style/algoz.scss'

import algos from './data/data.json'
import { useState } from 'react'
import useTitle from '../../hooks/useTitle'
import useFavicon from '../../hooks/useFavicon'

function formatCode(code) {
  return Prism.highlight(code, Prism.languages.javascript, 'javascript')
}

export default function Algoz() {
  useTitle('Algoz')
  useFavicon('/favicons/algoz.png')
  return (
    <div className='algoz'>
      <div
        className='body'
        style={{ width: '100%', height: '100%' }}>
        <header>
          <h1>Algoz</h1>
          <nav>
            <ul>
              <li>
                <button
                  onClick={() => {
                    console.log('Clicked Medium!')
                  }}>
                  Medium
                </button>
              </li>
            </ul>
          </nav>
        </header>
        <main>
          {algos
            .sort((a, b) => (a.name < b.name ? -1 : a.name > b.name ? 1 : 0))
            .map((algo) => (
              <ACard
                algo={algo}
                key={algo.name}
              />
            ))}
        </main>
      </div>
    </div>
  )
}
const ACard = ({ algo }) => {
  const [toggle, setToggle] = useState(false)
  const handleToggle = () => {
    setToggle((prev) => !prev)
  }

  return (
    <>
      <div className='card'>
        <div
          className='name'
          style={{
            width: '100%',
            whiteSpace: 'pre-wrap'
          }}>
          {algo.name}
        </div>
        <div className='buttons'>
          <button
            type='default'
            onClick={() => {
              window.open(algo.link, '_blank', 'noreferrer')
            }}
            className='button problem'>
            Problem
          </button>
          <button
            onClick={handleToggle}
            className={`button solution ${toggle ? 'on' : 'off'}`}>
            Solution
          </button>
        </div>
      </div>
      <div
        style={{
          margin: '-2rem 0 0 0',

          maxHeight: toggle ? '9999px' : '0',
          transition: toggle ? 'max-height 1s linear' : 'max-height 0s linear',
          overflow: toggle ? 'unset' : 'hidden',

          padding: '5px 0',
          justifyContent: 'center'
        }}>
        <pre
          className='language-js'
          style={{
            padding: '8px 8px',
            borderRadius: '0 0 8px 8px',
            width: '100%',
            whiteSpace: 'break-spaces',
            wordBreak: 'break-word'
          }}>
          <code
            dangerouslySetInnerHTML={{ __html: formatCode(algo.solution) }}
            className='language-js'
            style={{
              width: '100%',
              whiteSpace: 'break-spaces',
              wordBreak: 'break-word'
            }}
          />
        </pre>
      </div>
    </>
  )
}
