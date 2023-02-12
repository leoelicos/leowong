function Today() {
  return (
    <div className='today'>
      <div className='cards-title'>Today</div>

      <section className='card-today'>
        <div className='card-title'>
          <span className='day'>—</span>
          <span className='separator'>|</span>
          <span className='date'>—</span>
        </div>

        <div className='card-split'>
          <div className='card-info-icon'>
            <img
              src='./assets/images/globe.ico'
              alt=''
            />
          </div>
          <article className='card'>
            <div className='card-info'>
              <div className='card-info-panel-label temp0'>TEMP</div>
              <div className='card-info-panel-numerical temp0'>15°C</div>
              <div className='card-info-panel-icon'>
                <img
                  src='./assets/images/temp.png'
                  alt=''
                />
              </div>
              <div className='card-info-panel-graphical temp0'>
                <div className='ball'></div>
                <div className='ball'></div>
                <div className='ball'></div>
                <div className='ball'></div>
                <div className='ball'></div>
              </div>

              <div className='card-info-panel-label wind0'>WIND</div>
              <div className='card-info-panel-numerical wind0'>1kph</div>
              <div className='card-info-panel-icon'>
                <img
                  src='./assets/images/wind.png'
                  alt=''
                />
              </div>
              <div className='card-info-panel-graphical wind0'>
                <div className='ball'></div>
                <div className='ball'></div>
                <div className='ball'></div>
                <div className='ball'></div>
                <div className='ball'></div>
              </div>

              <div className='card-info-panel-label uv0'>UV</div>
              <div className='card-info-panel-numerical uv0'>0.47</div>
              <div className='card-info-panel-icon'>
                <img
                  src='./assets/images/uv.png'
                  alt=''
                />
              </div>
              <div className='card-info-panel-graphical uv0'>
                <div className='ball'></div>
                <div className='ball'></div>
                <div className='ball'></div>
                <div className='ball'></div>
                <div className='ball'></div>
              </div>

              <div className='card-info-panel-label hum0'>HUM</div>
              <div className='card-info-panel-numerical hum0'>15°C</div>
              <div className='card-info-panel-icon'>
                <img
                  src='./assets/images/water.png'
                  alt=''
                />
              </div>
              <div className='card-info-panel-graphical hum0'>
                <div className='ball'></div>
                <div className='ball'></div>
                <div className='ball'></div>
                <div className='ball'></div>
                <div className='ball'></div>
              </div>
            </div>
          </article>
        </div>
        <div className='graph-container'>
          <div className='graph-options'>
            <span
              className='graph-option'
              id='option-temperature'>
              TEMP
            </span>
            <span
              className='graph-option'
              id='option-wind'>
              WIND
            </span>
            <span
              className='graph-option active'
              id='option-uv'>
              UV
            </span>
            <span
              className='graph-option'
              id='option-humidity'>
              HUM
            </span>
          </div>
          <svg
            id='svg1'
            xmlns='http://www.w3.org/2000/svg'
            width='500'
            height='80'>
            <defs>
              <linearGradient
                id='temperatureGradient'
                x1='0'
                x2='0'
                y1='0'
                y2='1'>
                <stop
                  offset='0%'
                  stopColor='white'
                />
                <stop
                  offset='50%'
                  stopColor='white'
                  stopOpacity='1'
                />
                <stop
                  offset='100%'
                  stopColor='white'
                  stopOpacity='0'
                />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </section>
    </div>
  )
}
export default Today
