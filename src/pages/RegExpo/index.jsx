import { ConfigProvider, Layout } from 'antd'
import { Content, Header } from 'antd/es/layout/layout'
import Title from 'antd/es/typography/Title'

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
  backgroundColor: '#ddd',
  flex: '1',
  maxWidth: '500px',
  fontSize: '1.15rem',
  fontWeight: 'bold',
  fontFamily: 'Open Sans, sans-serif',
  textAlign: 'left',
  padding: '2rem',
  whiteSpace: 'break-spaces'
}

export default function RegExpo() {
  useTitle('RegExpo')
  useFavicon('favicons/regexpo.png')
  return (
    <div className='app-29'>
      <div
        className='body'
        style={{ width: '100vw', height: '100vh' }}>
        <ConfigProvider
          theme={{
            token: {
              colorPrimary: 'red'
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
              <Title level={2}>Regex Tutorial: Password Matching</Title>
            </Header>
            <Content style={contentStyle}>
              <p>Online password generators often claim to generate passwords that include numbers, lowercase characters, uppercase characters, begin with a letter, include symbols, have no similar characters and no duplicate characters…</p>
              <p>…but how can we know for sure?</p>
              <p>
                I published&ensp;
                <a
                  href='https://gist.github.com/leoelicos/5d8dfb511b682fc5894688d54cfb5a73'
                  target='_blank'
                  rel='noreferrer'>
                  Regex Tutorial
                </a>
                &ensp;<i>(opens in a new page)</i>, on Github Gists, to explain some of the basic concepts of Regex.
              </p>
            </Content>
          </Layout>
        </ConfigProvider>
      </div>
    </div>
  )
}
