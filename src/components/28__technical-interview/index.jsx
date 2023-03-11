import { Button, Card, ConfigProvider, Layout } from 'antd'
import { Content, Header } from 'antd/es/layout/layout'
import Title from 'antd/es/typography/Title'

import Prism from 'prismjs'
import './style/index.css'

import algos from './data/data.json'
import { useState } from 'react'

function formatCode(code) {
  return Prism.highlight(code, Prism.languages.javascript, 'javascript')
}

export default function RegexTutorial() {
  const contentStyle = {
    minHeight: '120px',
    color: '#000',
    flex: '1',
    maxWidth: '500px',
    fontSize: '1.15rem',
    fontWeight: 'bold',
    fontFamily: 'Open Sans, sans-serif',
    textAlign: 'left',

    whiteSpace: 'break-spaces',
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    width: '100%'
  }
  return (
    <div className='app-28'>
      <div
        className='body'
        style={{ width: '100%', height: '100%' }}>
        <ConfigProvider
          theme={{
            token: {
              colorPrimary: '#000'
            }
          }}>
          <Layout
            style={{
              width: '100%',
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center'
            }}>
            <Header
              style={{
                textAlign: 'center',
                color: '#fff',
                paddingInline: '50px',
                lineHeight: '64px',
                backgroundColor: '#7dbcea',
                width: '100%',
                flex: '1',
                display: 'flex',
                flexFlow: 'column',
                alignItems: 'center'
              }}>
              <Title
                level={2}
                style={{ margin: '1rem 0' }}>
                Medium Algo's
              </Title>

              <Title
                level={3}
                style={{ margin: '1rem 0' }}>
                Collection
              </Title>
              <p
                style={{
                  lineHeight: '1.8rem',
                  padding: '0 1rem',
                  maxWidth: '500px',
                  textAlign: 'center',
                  margin: '1rem 0'
                }}>
                {algos.length} Medium-level LeetCode algorithms for you to attempt. Read about the LeetCode{' '}
                <Button
                  type='default'
                  size='small'>
                  Problem
                </Button>{' '}
                and check out my{' '}
                <Button
                  type='primary'
                  size='small'>
                  Solution
                </Button>{' '}
                too.
              </p>
            </Header>
            <Content style={contentStyle}>
              {algos
                .sort((a, b) => (a.name < b.name ? -1 : a.name > b.name ? 1 : 0))
                .map((algo) => (
                  <ACard
                    algo={algo}
                    key={algo.name}
                  />
                ))}
            </Content>
          </Layout>
        </ConfigProvider>
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
      <Card
        size='small'
        bordered={false}
        title={
          <div
            style={{
              width: '100%',
              whiteSpace: 'pre-wrap'
            }}>
            {algo.name}
          </div>
        }
        className='algo-card'>
        <div className='algo-card-body'>
          <Button
            style={{ marginRight: '4px' }}
            type='default'
            onClick={() => {
              window.open(algo.link, '_blank', 'noreferrer')
            }}>
            Problem
          </Button>
          <Button
            type='primary'
            danger={toggle ? true : false}
            onClick={handleToggle}>
            Solution
          </Button>
        </div>
      </Card>
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
