import { useState, useEffect } from 'react'
import './style/style.css'

export default function Background({ children }) {
  const [bgLoaded, setBgLoaded] = useState(false)

  useEffect(() => {
    const img = new Image()
    img.onload = () => {
      setBgLoaded(true)
    }
    img.src = './images/splash.jpg'
  }, [])

  const backgroundStyle = {
    backgroundImage: bgLoaded ? 'url("../images/splash.jpg")' : 'none',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: -1
  }
  return (
    <div
      className='home background'
      style={backgroundStyle}>
      {children}
    </div>
  )
}
