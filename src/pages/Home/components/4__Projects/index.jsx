import list from '../../../../data/apps.js'

import './index.css'

import AppButton from './AppButton'

export default function Projects() {
  return (
    <div className='toc'>
      <div className='body'>
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
      </div>
    </div>
  )
}
