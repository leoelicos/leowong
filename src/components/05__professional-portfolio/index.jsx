import { faArrowAltCircleDown, faArrowUp, faArrowUpRightFromSquare, faCode } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  Avatar,
  BgCar,
  BgMotorway,
  BgRoad,
  IconGitHub,
  IconLinkedIn,
  Project08WordGame,
  Project09CodeQuiz,
  Project13WeatherDashboard,
  Project14Moovee,
  Project21EMS,
  Project25Submitted,
  Project27JustKidding,
  Project40Ingre //
} from './images/index'
import './style/style.css'

export default function ProfessionalPortfolio() {
  return (
    <div className='app-05'>
      <div className='body'>
        <header>
          <nav>
            <a href='#about'>about</a>
            <a href='#work'>work</a>
            <a href='#portfolio'>portfolio</a>
            <a href='#contact'>contact</a>
          </nav>
        </header>

        <main>
          <figure id='bg-motorway'>
            <a href='#about'>
              <img
                src={BgMotorway}
                alt='motorway sign pointing down'
              />
            </a>
          </figure>
          <figure id='bg-life'>
            <img
              src={BgRoad}
              alt='trees and roads'
            />
          </figure>
          <figure id='bg-car'>
            <img
              src={BgCar}
              alt='car interior'
            />
          </figure>

          <section className='scrolling'>
            <section className='about-me'>
              <article
                className='box'
                id='about'>
                <h1 className='content-header'>Leo Wong</h1>

                <img
                  className='avatar'
                  src={Avatar}
                  alt='leo wong'
                />

                <section className='content'>
                  <h3>Full Stack Developer</h3>
                </section>

                <section className='content'>
                  <h3>My process</h3>
                  <h3>
                    <span className='hashtag'>#TDD</span>
                    <span className='hashtag'>#DRY</span>
                    <span className='hashtag'>#agile</span>
                  </h3>
                </section>
                <section className='content'>
                  <h3>My values</h3>
                  <h3>
                    <span className='hashtag'>#original</span>
                    <span className='hashtag'>#teamwork</span>
                    <span className='hashtag'>#bestpractice</span>
                  </h3>
                </section>

                <div className='content icons'>
                  <a
                    className='btn icon'
                    target='_blank'
                    rel='noreferrer'
                    href='https://drive.google.com/file/d/1h8cJZCP00_rwluAvS5hHzIPyXsKbvkZm/view?usp=sharing'>
                    <p className='image download'>
                      <FontAwesomeIcon
                        style={{ fontSize: '6vh' }}
                        icon={faArrowAltCircleDown}
                      />
                    </p>
                    <p className='label'>Resume</p>
                  </a>
                  <a
                    className='btn icon'
                    target='_blank'
                    rel='noreferrer'
                    href='https://www.linkedin.com/in/leo-wong-b9b570129/'>
                    <p className='image'>
                      <img
                        src={IconLinkedIn}
                        alt='an icon of LinkedIn'
                      />
                    </p>
                    <p className='label'>LinkedIn</p>
                  </a>
                  <a
                    className='btn icon'
                    target='_blank'
                    rel='noreferrer'
                    href='https://github.com/leoelicos?tab=repositories'>
                    <p className='image'>
                      <img
                        src={IconGitHub}
                        alt='an icon of GitHub'
                      />
                    </p>
                    <p className='label'>GitHub</p>
                  </a>
                </div>
              </article>
            </section>
            <section className='articles'>
              <article
                className='box'
                id='work'>
                <h1 className='content-header'>Bio</h1>
                <section className='content'>
                  <h3>Full Stack Student</h3>
                  <p className='hashtags'>
                    <span className='hashtag'>2022</span>
                  </p>
                  <h3>Industry Program Manager</h3>
                  <p className='hashtags'>
                    <span className='hashtag'>2021</span>
                  </p>
                  <h3>Moodle Content Creator</h3>
                  <p className='hashtags'>
                    <span className='hashtag'>2020</span>
                  </p>
                  <h3>Head Teacher</h3>
                  <p className='hashtags'>
                    <span className='hashtag'>2018</span>
                  </p>
                  <h3>Teacher</h3>
                  <p className='hashtags'>
                    <span className='hashtag'>2016</span>
                  </p>
                </section>
              </article>

              <article
                className='box'
                id='portfolio'>
                <h1 className='content-header'>Full stack</h1>
                <section className='content-wrapper'>
                  <section className='content'>
                    <h2>ingré</h2>
                    <h3>Shopping utility</h3>
                    <p className='hashtags'>
                      <span className='hashtag'>#react</span>
                      <span className='hashtag'>#antd</span>
                      <span className='hashtag'>#stripe</span>
                    </p>
                    <div className='code-links'>
                      <a
                        href='https://github.com/leoelicos/ingre'
                        target='_blank'
                        rel='noreferrer'
                        className='repo'>
                        <FontAwesomeIcon icon={faCode} /> code
                      </a>
                      <a
                        href='https://egg-ingre.herokuapp.com/'
                        target='_blank'
                        rel='noreferrer'
                        className='deployed'>
                        <FontAwesomeIcon icon={faArrowUpRightFromSquare} /> app
                      </a>
                    </div>
                    <a
                      className='anchor-past-project'
                      target='_blank'
                      rel='noreferrer'
                      href='https://egg-ingre.herokuapp.com/'>
                      <img
                        className='content-image'
                        src={Project40Ingre}
                        alt='ingre app'
                      />
                    </a>
                  </section>
                </section>
              </article>

              <article
                className='box'
                id='portfolio'>
                <h1 className='content-header'>Front end</h1>
                <section className='content-wrapper'>
                  <section className='content'>
                    <h2>MOOVEE</h2>
                    <h3>YouTube Trailer Search</h3>
                    <p className='hashtags'>
                      <span className='hashtag'>#collab</span>
                      <span className='hashtag'>#ajax</span>
                      <span className='hashtag'>#youtube</span>
                    </p>
                    <div className='code-links'>
                      <a
                        href='https://github.com/leoelicos/bcs-07-moovee'
                        target='_blank'
                        rel='noreferrer'
                        className='repo'>
                        <FontAwesomeIcon icon={faCode} /> code
                      </a>
                      <a
                        href='https://leoelicos.github.io/bcs-07-moovee/'
                        target='_blank'
                        rel='noreferrer'
                        className='deployed'>
                        <FontAwesomeIcon icon={faArrowUpRightFromSquare} /> app
                      </a>
                    </div>
                    <a
                      id='portfolio-signature'
                      target='_blank'
                      rel='noreferrer'
                      href='https://leoelicos.github.io/bcs-07-moovee/'>
                      <img
                        className='content-image'
                        src={Project14Moovee}
                        alt='moovee app'
                      />
                    </a>
                  </section>
                </section>
              </article>

              <article
                className='box'
                id='portfolio'>
                <h1 className='content-header'>Full stack</h1>
                <section className='content-wrapper'>
                  <section className='content'>
                    <h2>Just Kidding!</h2>
                    <h3>Image Sharing Forum</h3>
                    <p className='hashtags'>
                      <span className='hashtag'>#collab</span>
                      <span className='hashtag'>#agile</span>
                      <span className='hashtag'>#mvc</span>
                    </p>
                    <div className='code-links'>
                      <a
                        href='https://github.com/leoelicos/bcs-14-tech-blog'
                        target='_blank'
                        rel='noreferrer'
                        className='repo'>
                        <FontAwesomeIcon icon={faCode} /> code
                      </a>
                      <a
                        href='https://leoelicos-tech-blog.herokuapp.com/'
                        target='_blank'
                        rel='noreferrer'
                        className='deployed'>
                        <FontAwesomeIcon icon={faArrowUpRightFromSquare} /> app
                      </a>
                    </div>
                    <a
                      className='anchor-past-project'
                      target='_blank'
                      rel='noreferrer'
                      href='https://just-kidding-baby.herokuapp.com/'>
                      <img
                        className='content-image'
                        src={Project27JustKidding}
                        alt='just kidding app'
                      />
                    </a>
                  </section>
                </section>
              </article>

              <article
                className='box'
                id='portfolio'>
                <h1 className='content-header'>Full stack</h1>
                <section className='content-wrapper'>
                  <section className='content'>
                    <h2>Submitted!</h2>
                    <h3>Wordpress-style Tech Blog</h3>
                    <p className='hashtags'>
                      <span className='hashtag'>#RESTful</span>
                      <span className='hashtag'>#expressjs</span>
                      <span className='hashtag'>#mvc</span>
                    </p>
                    <div className='code-links'>
                      <a
                        href='https://github.com/leoelicos/bcs-14-tech-blog'
                        target='_blank'
                        rel='noreferrer'
                        className='repo'>
                        <FontAwesomeIcon icon={faCode} /> code
                      </a>
                      <a
                        href='https://leoelicos-tech-blog.herokuapp.com/'
                        target='_blank'
                        rel='noreferrer'
                        className='deployed'>
                        <FontAwesomeIcon icon={faArrowUpRightFromSquare} /> app
                      </a>
                    </div>
                    <a
                      className='anchor-past-project'
                      target='_blank'
                      rel='noreferrer'
                      href='https://leoelicos-tech-blog.herokuapp.com/'>
                      <img
                        className='content-image'
                        src={Project25Submitted}
                        alt='submitted app'
                      />
                    </a>
                  </section>
                </section>
              </article>

              <article
                className='box'
                id='portfolio'>
                <h1 className='content-header'>Back end</h1>
                <section className='content-wrapper'>
                  <section className='content'>
                    <h2>Employee Management System</h2>
                    <h3>Command Line CMS</h3>
                    <p className='hashtags'>
                      <span className='hashtag'>#nodejs</span>
                      <span className='hashtag'>#CRUD</span>
                      <span className='hashtag'>#mysql</span>
                    </p>
                    <div className='code-links'>
                      <a
                        href='https://github.com/leoelicos/bcs-12-employee-management-system/'
                        target='_blank'
                        rel='noreferrer'
                        className='repo'>
                        <FontAwesomeIcon icon={faCode} /> code
                      </a>
                      <a
                        href='https://www.youtube.com/watch?v=W58SFkcsXkM'
                        target='_blank'
                        rel='noreferrer'
                        className='deployed'>
                        <FontAwesomeIcon icon={faArrowUpRightFromSquare} /> demo
                      </a>
                    </div>
                    <a
                      className='anchor-past-project'
                      target='_blank'
                      rel='noreferrer'
                      href='https://www.youtube.com/watch?v=W58SFkcsXkM'>
                      <img
                        className='content-image'
                        src={Project21EMS}
                        alt='employee management system app'
                      />
                    </a>
                  </section>
                </section>
              </article>

              <article className='box'>
                <h1 className='content-header'>Front end</h1>
                <section className='content-wrapper'>
                  <section className='content'>
                    <h2>WWAG</h2>
                    <h3>Weather Data Visualization</h3>
                    <p className='hashtags'>
                      <span className='hashtag'>#ajax</span>
                      <span className='hashtag'>#svg</span>
                      <span className='hashtag'>#no-scroll</span>
                    </p>
                    <div className='code-links'>
                      <a
                        href='https://github.com/leoelicos/bcs-06-weather-dashboard'
                        target='_blank'
                        rel='noreferrer'
                        className='repo'>
                        <FontAwesomeIcon icon={faCode} /> code
                      </a>
                      <a
                        href='https://leoelicos.github.io/bcs-06-weather-dashboard/'
                        target='_blank'
                        rel='noreferrer'
                        className='deployed'>
                        <FontAwesomeIcon icon={faArrowUpRightFromSquare} /> app
                      </a>
                    </div>
                    <a
                      className='anchor-past-project'
                      target='_blank'
                      rel='noreferrer'
                      href='https://leoelicos.github.io/bcs-06-weather-dashboard/'>
                      <img
                        className='content-image'
                        src={Project13WeatherDashboard}
                        alt='worldwide weather app'
                      />
                    </a>
                  </section>
                </section>
              </article>

              <article className='box'>
                <h1 className='content-header'>Front end</h1>
                <section className='content-wrapper'>
                  <section className='content'>
                    <h2>SYTYCJ</h2>
                    <h3>Timed Javascript Quiz</h3>
                    <p className='hashtags'>
                      <span className='hashtag'>#game</span>
                      <span className='hashtag'>#interactive</span>
                      <span className='hashtag'>#no-scroll</span>
                    </p>
                    <div className='code-links'>
                      <a
                        href='https://github.com/leoelicos/bcs-04-code-quiz'
                        target='_blank'
                        rel='noreferrer'
                        className='repo'>
                        <FontAwesomeIcon icon={faCode} /> code
                      </a>
                      <a
                        href='https://leoelicos.github.io/bcs-04-code-quiz/'
                        target='_blank'
                        rel='noreferrer'
                        className='deployed'>
                        <FontAwesomeIcon icon={faArrowUpRightFromSquare} /> app
                      </a>
                    </div>
                    <a
                      className='anchor-past-project'
                      target='_blank'
                      rel='noreferrer'
                      href='https://leoelicos.github.io/bcs-04-code-quiz/'>
                      <img
                        className='content-image'
                        src={Project09CodeQuiz}
                        alt='code quiz app'
                      />
                    </a>
                  </section>
                </section>
              </article>

              <article className='box'>
                <h1 className='content-header'>Front end</h1>
                <section className='content-wrapper'>
                  <section className='content'>
                    <h2>KIDDLE</h2>
                    <h3>Wordle for kids</h3>
                    <p className='hashtags'>
                      <span className='hashtag'>#game</span>
                      <span className='hashtag'>#kids</span>
                      <span className='hashtag'>#fun</span>
                    </p>
                    <div className='code-links'>
                      <a
                        href='https://github.com/leoelicos/bcs/tree/main/src/components/08__kiddle'
                        target='_blank'
                        rel='noreferrer'
                        className='repo'>
                        <FontAwesomeIcon icon={faCode} /> code
                      </a>
                      <a
                        href='https://bcs40.vercel.app/kiddle'
                        target='_blank'
                        rel='noreferrer'
                        className='deployed'>
                        <FontAwesomeIcon icon={faArrowUpRightFromSquare} /> app
                      </a>
                    </div>
                    <a
                      className='anchor-past-project'
                      target='_blank'
                      rel='noreferrer'
                      href='https://bcs40.vercel.app/kiddle'>
                      <img
                        className='content-image'
                        src={Project08WordGame}
                        alt='Kiddle app'
                      />
                    </a>
                  </section>
                </section>
              </article>

              <article
                id='contact'
                className='box'>
                <h1 className='content-header'>Contact Me</h1>
                <form id='contact-form'>
                  <a
                    id='label-send'
                    value='leoelicos@gmail.com'
                    className='btn-wrapper'
                    target='_blank'
                    rel='noreferrer'
                    href='mailto: leoelicos@gmail.com'>
                    leoelicos@gmail.com
                  </a>
                </form>
              </article>
            </section>
          </section>
        </main>
        <footer
          onClick={() => {
            window.location.href = '/05-professional-portfolio#top'
          }}>
          Back to Top&nbsp;
          <FontAwesomeIcon icon={faArrowUp} />
        </footer>
      </div>
    </div>
  )
}
