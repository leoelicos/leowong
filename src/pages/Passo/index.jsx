// import './css/style.css'
import { Button, Input, notification, Layout, Card, Space, Checkbox, Row, Col, Slider, InputNumber } from 'antd'
import React, { useMemo, useState } from 'react'
const { Header, Content, Footer } = Layout
const { TextArea } = Input
const headerStyle = {
  textAlign: 'center',
  color: '#fff',
  backgroundColor: '#7dbcea'
}
const contentStyle = {
  textAlign: 'center'
}

const footerStyle = {
  textAlign: 'center',
  color: '#fff',
  backgroundColor: '#7dbcea'
}
const Context = React.createContext({
  name: 'Default'
})
export default function PasswordGenerator() {
  const [password, setPassword] = useState('')
  const [options, setOptions] = useState([false, false, false, false])
  const plainOptions = ['Lowercase', 'Uppercase', 'Numbers', 'Symbols']
  const onChange = (checkedValues) => {
    const newOptions = plainOptions.map((v) => checkedValues.includes(v))
    setOptions(newOptions)
  }
  const [slider, setSlider] = useState(50)
  const handleChangeSlider = (newValue) => {
    setSlider(newValue)
  }
  const handleClickGenerate = () => {
    const characters = slider
    const randomNumbers = options[2]
    const randomUpperLetters = options[1]
    const randomLowerLetters = options[0]
    const randomSymbols = options[3]
    let p = getPassword(characters, randomNumbers, randomUpperLetters, randomLowerLetters, randomSymbols)
    setPassword(p)
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
  const contextValue = useMemo(() => ({ name: 'Password copied to clipboard' }), [])
  return (
    <Layout>
      <Header style={headerStyle}>Password Generator</Header>
      <Content style={contentStyle}>
        <Card>
          <Space direction='vertical'>
            <Row
              align='middle'
              justify='center'>
              <Col span={4}>Length</Col>
              <Col span={12}>
                <Slider
                  min={8}
                  max={128}
                  onChange={handleChangeSlider}
                  value={slider}
                />
              </Col>
              <Col span={4}>
                <InputNumber
                  min={8}
                  max={128}
                  value={slider}
                  onChange={handleChangeSlider}
                />
              </Col>
            </Row>
            <Checkbox.Group
              options={plainOptions}
              onChange={onChange}
            />
            <Button
              id='generate'
              className='btn'
              onClick={handleClickGenerate}
              disabled={options.filter((v) => v).length === 0}>
              Generate Password
            </Button>
            <Context.Provider value={contextValue}>
              {contextHolder}

              <TextArea
                autoSize={true}
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value)
                }}
                aria-label='Generated Password'
                style={{ resize: 'none' }}
                disabled={password.length === 0}></TextArea>
              <Button
                type='primary'
                style={{ width: '100%' }}
                disabled={password.length === 0}
                onClick={async () => {
                  try {
                    await navigator.clipboard.writeText(password)

                    openNotification()
                  } catch (e) {
                    console.error(e)
                  }
                }}>
                Copy
              </Button>
            </Context.Provider>
          </Space>
        </Card>
      </Content>
      <Footer style={footerStyle}>Made with ❤️</Footer>
    </Layout>
  )
}

function getPassword(characters, randomNumbers, randomUpperLetters, randomLowerLetters, randomSymbols) {
  var randomString = getRandomString(randomNumbers, randomUpperLetters, randomLowerLetters, randomSymbols)
  var password = ''
  for (var i = 0; i < characters; i++) {
    password += getRandomCharacter(randomString)
  }
  return password
}

function getRandomString(number, upper, lower, symbol) {
  return (number ? '0123456789' : '') + (upper ? 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' : '') + (lower ? 'abcdefghijklmnopqrstuvwxyz' : '') + (symbol ? '!"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~' : '')
}

function getRandomCharacter(string) {
  return string.length === 0 ? '' : string[Math.floor(Math.random() * string.length)]
}
