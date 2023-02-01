// import './css/style.css'
import { Button, Input, message, Layout, Card, Space, Checkbox, Row, Col, Slider, InputNumber } from 'antd'
import { useState } from 'react'
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
    console.log('generating')
    console.log({ options, slider })
  }
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
            <TextArea
              onClick={async () => {
                try {
                  await navigator.clipboard.writeText(password)
                  message.success(`Copied password to clipboard`)
                } catch (e) {
                  console.error(e)
                }
              }}
              value={password}
              placeholder='Your Secure Password'
              aria-label='Generated Password'
              style={{ cursor: 'pointer', resize: 'none' }}></TextArea>
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
