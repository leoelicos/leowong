import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
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
        <Header>Readme Maker</Header>
        <Content>
          {new Array(4).fill(Math.random(100)).map((v, i) => (
            <article key={i}>{v}</article>
          ))}
        </Content>
        <Footer>
          Made with&ensp;
          <FontAwesomeIcon icon={faHeart} />
          &ensp;and React
        </Footer>
      </div>
    </div>
  )
}

export default ReadmeMaker
