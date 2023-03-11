import list from '../../data/apps'

import './style/index.css'

import App from './components/App'
import AppBody from './components/AppBody'
import AppButton from './components/AppButton'

function Toc() {
  return (
    <App>
      <AppBody>
        <h1 className='header'>FEATURED WORK</h1>
        <div className='app-buttons'>
          {list.map(({ title, description, keywords, link, finished, background1, background2, color1, color2 }) => (
            <AppButton
              key={title}
              title={title}
              description={description}
              keywords={keywords}
              link={link}
              finished={finished}
              background1={background1}
              background2={background2}
              color1={color1}
              color2={color2}
            />
          ))}
        </div>
      </AppBody>
    </App>
  )
}

export default Toc
