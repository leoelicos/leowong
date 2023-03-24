import Balls from './Balls'

function Future({ city }) {
  const { dailyData } = city
  return (
    <div className='future'>
      <div className='cards-title'>5-day forecast</div>
      <section className='cards'>
        {dailyData.map((d, i) => {
          return (
            <article
              key={i}
              className='card'>
              <div className='card-title'>
                <span className='day'>{d.day}</span>
                <span className='separator'>|</span>
                <span className='date'>{`${d.date} ${d.month}`}</span>
              </div>
              <div className='card-info'>
                <div className='card-info-icon'>
                  <img
                    src={d.icon}
                    alt=''
                  />
                </div>
                <div className='card-info-panel-label temp1'>TEMP</div>
                <div className='card-info-panel-numerical temp1'>{d.temp}°C</div>
                <div className='card-info-panel-icon'>
                  <img
                    src='./assets/images/temp.png'
                    alt=''
                  />
                </div>
                <div className='card-info-panel-graphical'>
                  <Balls
                    type='temp'
                    value={d.temp}
                  />
                </div>
                <div className='card-info-panel-label wind1'>WIND</div>
                <div className='card-info-panel-numerical wind1'>1kph</div>
                <div className='card-info-panel-icon'>
                  <img
                    src='./assets/images/wind.png'
                    alt=''
                  />
                </div>
                <div className='card-info-panel-graphical wind1'>
                  <Balls
                    type='wind'
                    value={d.wind_speed}
                  />
                </div>
                <div className='card-info-panel-label uv1'>UV</div>
                <div className='card-info-panel-numerical uv1'>0.47</div>
                <div className='card-info-panel-icon'>
                  <img
                    src='./assets/images/uv.png'
                    alt=''
                  />
                </div>
                <div className='card-info-panel-graphical uv1'>
                  <Balls
                    type='uv'
                    value={d.uv}
                  />
                </div>
                <div className='card-info-panel-label hum1'>HUM</div>
                <div className='card-info-panel-numerical hum1'>15°C</div>
                <div className='card-info-panel-icon'>
                  <img
                    src='./assets/images/water.png'
                    alt=''
                  />
                </div>
                <div className='card-info-panel-graphical hum1'>
                  <Balls
                    type='humidity'
                    value={d.humidity}
                  />
                </div>
              </div>
            </article>
          )
        })}
      </section>
    </div>
  )
}
export default Future
