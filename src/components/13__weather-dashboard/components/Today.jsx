import { useEffect, useRef, useState } from 'react'
import iconTemp from '../images/temp.png'
import iconUV from '../images/uv.png'
import iconWater from '../images/water.png'
import iconWind from '../images/wind.png'
import Balls from './Balls'
import Graph from './Graph'

function Today({ city }) {
  // console.log('Today', city)

  const [activeGraph, setActiveGraph] = useState(0)

  const { hourlyData, current } = city
  // console.log('Today', { hourlyData, current })
  const hourlyData24 = hourlyData.slice(0, 24)

  const d = current

  var svgContainerRef = useRef(null)

  const [width, setWidth] = useState(svgContainerRef.current?.getBoundingClientRect().width || 0)

  const updateWidth = () => {
    console.log('changed width')
    const w = svgContainerRef.current?.getBoundingClientRect().width || 0
    // console.log('updateWidth', w)
    setWidth(w)
  }

  useEffect(() => {
    updateWidth()
  }, [svgContainerRef.current])

  useEffect(() => {
    console.log('found container')
    window.addEventListener('resize', updateWidth)
    return () => {
      window.removeEventListener('resize', updateWidth)
    }
  }, [])

  return (
    <div className='today'>
      <div className='cards-title'>Today</div>

      <section className='card-today'>
        <div className='card-title'>
          <span className='day'>{d.day}</span>
          <span className='separator'>|</span>
          <span className='date'>{`${d.date} ${d.month}`}</span>
        </div>

        <div className='card-split'>
          <div className='card-info-icon'>
            <img
              src={d.icon}
              alt={d.description}
            />
          </div>
          <article className='card'>
            <div className='card-info'>
              <div className='card-info-panel-label'>TEMP</div>
              <div className='card-info-panel-numerical'>{d.temp}°C</div>
              <div className='card-info-panel-icon'>
                <img
                  className='metadata-icons'
                  src={iconTemp}
                  alt='temperature'
                />
              </div>

              <Balls
                type='temp'
                value={d.temp}
              />

              <div className='card-info-panel-label'>WIND</div>
              <div className='card-info-panel-numerical'>{d.wind_speed}kph</div>
              <div className='card-info-panel-icon'>
                <img
                  className='metadata-icons'
                  src={iconWind}
                  alt='wind'
                />
              </div>
              <Balls
                type='wind'
                value={d.wind_speed}
              />

              <div className='card-info-panel-label'>UV</div>
              <div className='card-info-panel-numerical'>{d.uv}</div>
              <div className='card-info-panel-icon'>
                <img
                  className='metadata-icons'
                  src={iconUV}
                  alt='uv'
                />
              </div>
              <Balls
                type='uv'
                value={d.uv}
              />

              <div className='card-info-panel-label'>HUM</div>
              <div className='card-info-panel-numerical'>{d.humidity}°C</div>
              <div className='card-info-panel-icon'>
                <img
                  className='metadata-icons'
                  src={iconWater}
                  alt='humidity'
                />
              </div>
              <Balls
                type='humidity'
                value={d.humidity}
              />
            </div>
          </article>
        </div>
        <div
          className='graph-container'
          ref={svgContainerRef}>
          <div className='graph-options'>
            <span
              className={`graph-option ${activeGraph === 0 ? 'active' : ''}`}
              onClick={() => {
                setActiveGraph(0)
              }}>
              TEMP
            </span>
            <span
              className={`graph-option ${activeGraph === 1 ? 'active' : ''}`}
              onClick={() => {
                setActiveGraph(1)
              }}>
              WIND
            </span>
            <span
              className={`graph-option ${activeGraph === 2 ? 'active' : ''}`}
              onClick={() => {
                setActiveGraph(2)
              }}>
              UV
            </span>
            <span
              className={`graph-option ${activeGraph === 3 ? 'active' : ''}`}
              onClick={() => {
                setActiveGraph(3)
              }}>
              HUM
            </span>
          </div>
          <Graph
            array={
              activeGraph === 0
                ? hourlyData24.map(({ temp }) => temp) //
                : activeGraph === 1
                ? hourlyData24.map(({ wind_speed }) => wind_speed)
                : activeGraph === 2
                ? hourlyData24.map(({ uvi }) => uvi)
                : activeGraph === 3
                ? hourlyData24.map(({ humidity }) => humidity)
                : []
            }
            w={width}
          />
        </div>
      </section>
    </div>
  )
}
export default Today
