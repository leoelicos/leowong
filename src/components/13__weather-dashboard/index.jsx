import './css/index.css'
import useFavicon from '../../hooks/useFavicon'
import useTitle from '../../hooks/useTitle'
export default function WeatherDashboard() {
  useFavicon('/favicons/13-favicon.png')
  useTitle('WWAG')
  return (
    <div className='app-13'>
      <div className='body'>
        <header className='page-header'>
          <img
            className='page-header-field-location-icon'
            src='./assets/images/globe.ico'
            alt=''
          />
          <div className='boxset'>
            <h1 className='page-header-title'>WORLDWIDE WEATHER AT A GLANCE</h1>
            <div className='page-header-fieldset'>
              <div className='page-header-field-location'>
                <form
                  className='page-header-field-location-search'
                  id='searchForm'>
                  <div className='search-container'>
                    <input
                      type='search'
                      id='search'
                      list='citylist'
                      placeholder='CITY'
                    />
                    <button
                      type='button'
                      id='searchBtn'>
                      <i className='fa-solid fa-magnifying-glass'></i>
                    </button>
                  </div>
                  <select
                    id='cityMatch'
                    className='form-select gray'>
                    <option
                      selected
                      id='matchStatus'
                      className=''>
                      Select
                    </option>
                    <option
                      value='1'
                      id='match1'>
                      —
                    </option>
                    <option
                      value='2'
                      id='match2'>
                      —
                    </option>
                    <option
                      value='3'
                      id='match3'>
                      —
                    </option>
                    <option
                      value='4'
                      id='match4'>
                      —
                    </option>
                    <option
                      value='5'
                      id='match5'>
                      —
                    </option>
                  </select>
                  <select
                    id='history'
                    className='form-select'>
                    <option
                      selected
                      id='historyStatus'>
                      History
                    </option>
                    <option
                      value='1'
                      id='history1'>
                      —
                    </option>
                    <option
                      value='2'
                      id='history2'>
                      —
                    </option>
                    <option
                      value='3'
                      id='history3'>
                      —
                    </option>
                    <option
                      value='4'
                      id='history4'>
                      —
                    </option>
                    <option
                      value='5'
                      id='history5'>
                      —
                    </option>
                  </select>
                </form>
              </div>
            </div>
          </div>
        </header>
        <main>
          <div
            id='cityNameLabel'
            className='cityNameLabel'></div>
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
                        stop-color='white'
                      />
                      <stop
                        offset='50%'
                        stop-color='white'
                        stop-opacity='1'
                      />
                      <stop
                        offset='100%'
                        stop-color='white'
                        stop-opacity='0'
                      />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </section>
          </div>

          <div className='future'>
            <div className='cards-title'>5-day forecast</div>
            <section className='cards'>
              <article
                className='card'
                id='card1'>
                <div className='card-title'>
                  <span className='day'>—</span>
                  <span className='separator'>|</span>
                  <span className='date'>—</span>
                </div>
                <div className='card-info'>
                  <div className='card-info-icon'>
                    <img
                      src='./assets/images/globe.ico'
                      alt=''
                    />
                  </div>
                  <div className='card-info-panel-label temp1'>TEMP</div>
                  <div className='card-info-panel-numerical temp1'>15°C</div>
                  <div className='card-info-panel-icon'>
                    <img
                      src='./assets/images/temp.png'
                      alt=''
                    />
                  </div>
                  <div className='card-info-panel-graphical temp1'>
                    <div className='ball'></div>
                    <div className='ball'></div>
                    <div className='ball'></div>
                    <div className='ball'></div>
                    <div className='ball'></div>
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
                    <div className='ball'></div>
                    <div className='ball'></div>
                    <div className='ball'></div>
                    <div className='ball'></div>
                    <div className='ball'></div>
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
                    <div className='ball'></div>
                    <div className='ball'></div>
                    <div className='ball'></div>
                    <div className='ball'></div>
                    <div className='ball'></div>
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
                    <div className='ball'></div>
                    <div className='ball'></div>
                    <div className='ball'></div>
                    <div className='ball'></div>
                    <div className='ball'></div>
                  </div>
                </div>
              </article>
              <article
                className='card'
                id='card2'>
                <div className='card-title'>
                  <span className='day'>—</span>
                  <span className='separator'>|</span>
                  <span className='date'>—</span>
                </div>
                <div className='card-info'>
                  <div className='card-info-icon temp2'>
                    <img
                      src='./assets/images/globe.ico'
                      alt=''
                    />
                  </div>
                  <div className='card-info-panel-label temp2'>TEMP</div>
                  <div className='card-info-panel-numerical temp2'>15°C</div>
                  <div className='card-info-panel-icon'>
                    <img
                      src='./assets/images/temp.png'
                      alt=''
                    />
                  </div>
                  <div className='card-info-panel-graphical temp2'>
                    <div className='ball'></div>
                    <div className='ball'></div>
                    <div className='ball'></div>
                    <div className='ball'></div>
                    <div className='ball'></div>
                  </div>
                  <div className='card-info-panel-label wind2'>WIND</div>
                  <div className='card-info-panel-numerical wind2'>1kph</div>
                  <div className='card-info-panel-icon'>
                    <img
                      src='./assets/images/wind.png'
                      alt=''
                    />
                  </div>
                  <div className='card-info-panel-graphical wind2'>
                    <div className='ball'></div>
                    <div className='ball'></div>
                    <div className='ball'></div>
                    <div className='ball'></div>
                    <div className='ball'></div>
                  </div>
                  <div className='card-info-panel-label uv2'>UV</div>
                  <div className='card-info-panel-numerical uv2'>0.47</div>
                  <div className='card-info-panel-icon'>
                    <img
                      src='./assets/images/uv.png'
                      alt=''
                    />
                  </div>
                  <div className='card-info-panel-graphical uv2'>
                    <div className='ball'></div>
                    <div className='ball'></div>
                    <div className='ball'></div>
                    <div className='ball'></div>
                    <div className='ball'></div>
                  </div>
                  <div className='card-info-panel-label hum2'>HUM</div>
                  <div className='card-info-panel-numerical hum2'>15°C</div>
                  <div className='card-info-panel-icon'>
                    <img
                      src='./assets/images/water.png'
                      alt=''
                    />
                  </div>
                  <div className='card-info-panel-graphical hum2'>
                    <div className='ball'></div>
                    <div className='ball'></div>
                    <div className='ball'></div>
                    <div className='ball'></div>
                    <div className='ball'></div>
                  </div>
                </div>
              </article>
              <article
                className='card'
                id='card3'>
                <div className='card-title'>
                  <span className='day'>—</span>
                  <span className='separator'>|</span>
                  <span className='date'>—</span>
                </div>
                <div className='card-info'>
                  <div className='card-info-icon'>
                    <img
                      src='./assets/images/globe.ico'
                      alt=''
                    />
                  </div>
                  <div className='card-info-panel-label temp3'>TEMP</div>
                  <div className='card-info-panel-numerical temp3'>15°C</div>
                  <div className='card-info-panel-icon'>
                    <img
                      src='./assets/images/temp.png'
                      alt=''
                    />
                  </div>
                  <div className='card-info-panel-graphical temp3'>
                    <div className='ball'></div>
                    <div className='ball'></div>
                    <div className='ball'></div>
                    <div className='ball'></div>
                    <div className='ball'></div>
                  </div>
                  <div className='card-info-panel-label wind3'>WIND</div>
                  <div className='card-info-panel-numerical wind3'>1kph</div>
                  <div className='card-info-panel-icon'>
                    <img
                      src='./assets/images/wind.png'
                      alt=''
                    />
                  </div>
                  <div className='card-info-panel-graphical wind3'>
                    <div className='ball'></div>
                    <div className='ball'></div>
                    <div className='ball'></div>
                    <div className='ball'></div>
                    <div className='ball'></div>
                  </div>
                  <div className='card-info-panel-label uv3'>UV</div>
                  <div className='card-info-panel-numerical uv3'>0.47</div>
                  <div className='card-info-panel-icon'>
                    <img
                      src='./assets/images/uv.png'
                      alt=''
                    />
                  </div>
                  <div className='card-info-panel-graphical uv3'>
                    <div className='ball'></div>
                    <div className='ball'></div>
                    <div className='ball'></div>
                    <div className='ball'></div>
                    <div className='ball'></div>
                  </div>
                  <div className='card-info-panel-label hum3'>HUM</div>
                  <div className='card-info-panel-numerical hum3'>15°C</div>
                  <div className='card-info-panel-icon'>
                    <img
                      src='./assets/images/water.png'
                      alt=''
                    />
                  </div>
                  <div className='card-info-panel-graphical hum3'>
                    <div className='ball'></div>
                    <div className='ball'></div>
                    <div className='ball'></div>
                    <div className='ball'></div>
                    <div className='ball'></div>
                  </div>
                </div>
              </article>
              <article
                className='card'
                id='card4'>
                <div className='card-title'>
                  <span className='day'>—</span>
                  <span className='separator'>|</span>
                  <span className='date'>—</span>
                </div>
                <div className='card-info'>
                  <div className='card-info-icon'>
                    <img
                      src='./assets/images/globe.ico'
                      alt=''
                    />
                  </div>
                  <div className='card-info-panel-label temp4'>TEMP</div>
                  <div className='card-info-panel-numerical temp4'>15°C</div>
                  <div className='card-info-panel-icon'>
                    <img
                      src='./assets/images/temp.png'
                      alt=''
                    />
                  </div>
                  <div className='card-info-panel-graphical temp4'>
                    <div className='ball'></div>
                    <div className='ball'></div>
                    <div className='ball'></div>
                    <div className='ball'></div>
                    <div className='ball'></div>
                  </div>
                  <div className='card-info-panel-label wind4'>WIND</div>
                  <div className='card-info-panel-numerical wind4'>1kph</div>
                  <div className='card-info-panel-icon'>
                    <img
                      src='./assets/images/wind.png'
                      alt=''
                    />
                  </div>
                  <div className='card-info-panel-graphical wind4'>
                    <div className='ball'></div>
                    <div className='ball'></div>
                    <div className='ball'></div>
                    <div className='ball'></div>
                    <div className='ball'></div>
                  </div>
                  <div className='card-info-panel-label uv4'>UV</div>
                  <div className='card-info-panel-numerical uv4'>0.47</div>
                  <div className='card-info-panel-icon'>
                    <img
                      src='./assets/images/uv.png'
                      alt=''
                    />
                  </div>
                  <div className='card-info-panel-graphical uv4'>
                    <div className='ball'></div>
                    <div className='ball'></div>
                    <div className='ball'></div>
                    <div className='ball'></div>
                    <div className='ball'></div>
                  </div>
                  <div className='card-info-panel-label hum4'>HUM</div>
                  <div className='card-info-panel-numerical hum4'>15°C</div>
                  <div className='card-info-panel-icon'>
                    <img
                      src='./assets/images/water.png'
                      alt=''
                    />
                  </div>
                  <div className='card-info-panel-graphical hum4'>
                    <div className='ball'></div>
                    <div className='ball'></div>
                    <div className='ball'></div>
                    <div className='ball'></div>
                    <div className='ball'></div>
                  </div>
                </div>
              </article>
              <article
                className='card'
                id='card5'>
                <div className='card-title'>
                  <span className='day'>—</span>
                  <span className='separator'>|</span>
                  <span className='date'>—</span>
                </div>
                <div className='card-info'>
                  <div className='card-info-icon'>
                    <img
                      src='./assets/images/globe.ico'
                      alt=''
                    />
                  </div>
                  <div className='card-info-panel-label temp5'>TEMP</div>
                  <div className='card-info-panel-numerical temp5'>15°C</div>
                  <div className='card-info-panel-icon'>
                    <img
                      src='./assets/images/temp.png'
                      alt=''
                    />
                  </div>
                  <div className='card-info-panel-graphical temp5'>
                    <div className='ball'></div>
                    <div className='ball'></div>
                    <div className='ball'></div>
                    <div className='ball'></div>
                    <div className='ball'></div>
                  </div>
                  <div className='card-info-panel-label wind5'>WIND</div>
                  <div className='card-info-panel-numerical wind5'>1kph</div>
                  <div className='card-info-panel-icon'>
                    <img
                      src='./assets/images/wind.png'
                      alt=''
                    />
                  </div>
                  <div className='card-info-panel-graphical wind5'>
                    <div className='ball'></div>
                    <div className='ball'></div>
                    <div className='ball'></div>
                    <div className='ball'></div>
                    <div className='ball'></div>
                  </div>
                  <div className='card-info-panel-label uv5'>UV</div>
                  <div className='card-info-panel-numerical uv5'>0.47</div>
                  <div className='card-info-panel-icon'>
                    <img
                      src='./assets/images/uv.png'
                      alt=''
                    />
                  </div>
                  <div className='card-info-panel-graphical uv5'>
                    <div className='ball'></div>
                    <div className='ball'></div>
                    <div className='ball'></div>
                    <div className='ball'></div>
                    <div className='ball'></div>
                  </div>
                  <div className='card-info-panel-label hum5'>HUM</div>
                  <div className='card-info-panel-numerical hum5'>15°C</div>
                  <div className='card-info-panel-icon'>
                    <img
                      src='./assets/images/water.png'
                      alt=''
                    />
                  </div>
                  <div className='card-info-panel-graphical hum5'>
                    <div className='ball'></div>
                    <div className='ball'></div>
                    <div className='ball'></div>
                    <div className='ball'></div>
                    <div className='ball'></div>
                  </div>
                </div>
              </article>
            </section>
          </div>
        </main>
      </div>
    </div>
  )
}
