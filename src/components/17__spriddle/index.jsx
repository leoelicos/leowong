import Header from './components/Header/index.jsx'
import Footer from './components/Footer/index.jsx'
import Main from './components/Main/index.jsx'

export default function Spriddle() {
  const bodyStyle = {
    display: 'flex',
    flexDirection: 'column',
    width: '100vw',
    height: '100vh',
    overflowY: 'auto'
  }

  return (
    <div className='app-17'>
      <div
        className='body'
        style={bodyStyle}>
        <Header />
        <Main />
        <Footer />
      </div>
    </div>
  )
}
