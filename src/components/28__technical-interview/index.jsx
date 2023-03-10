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
  const headerStyle = {
    textAlign: 'center',
    color: '#fff',
    height: '84px',
    paddingInline: '50px',
    lineHeight: '64px',
    backgroundColor: '#7dbcea',
    width: '100%'
  }
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
    <div className='app-29'>
      <div
        className='body'
        style={{ width: '100%', height: '100%' }}>
        <ConfigProvider
          theme={{
            token: {
              colorPrimary: '#b22'
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
            <Header style={headerStyle}>
              <Title level={2}>Medium Algo's</Title>
            </Header>
            <Title level={3}>Collection</Title>
            <p
              style={{
                lineHeight: '1.8rem',
                padding: '0 1rem'
              }}>
              52 Medium-level LeetCode algorithms for you to attempt. Read the <Button type='primary'>Problem</Button> on LeetCode, and check out my <Button type='default'>Solution</Button> too.
            </p>
            <Content style={contentStyle}>
              {algos.map((algo) => (
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
            type='primary'
            onClick={() => {
              window.open(algo.link, '_blank', 'noreferrer')
            }}>
            Problem
          </Button>
          <Button
            type='default'
            danger={toggle ? true : false}
            onClick={handleToggle}>
            Solution
          </Button>
        </div>
      </Card>
      <div
        style={{
          display: toggle ? 'flex' : 'none',
          padding: '5px',
          justifyContent: 'center'
        }}>
        <pre
          className='language-js'
          style={{
            padding: '8px 8px',
            borderRadius: '8px',
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
