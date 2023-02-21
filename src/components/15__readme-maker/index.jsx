import './css/index.css'

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
  return (
    <div className='app-15'>
      <div className='body'>
        <Header>Heading</Header>
        <Content>Content</Content>
        <Footer>Footer</Footer>
      </div>
    </div>
  )
}

export default ReadmeMaker
