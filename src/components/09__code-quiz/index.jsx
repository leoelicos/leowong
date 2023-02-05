import { faChartBar, faClock } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Fragment, useEffect, useState } from 'react'
import questionBank from './data/questions'
import Favicon from './image/favicon.png'
import './style/style.css'
export default function CodeQuiz() {
  /* state */
  const [splashVisible, setSplashVisible] = useState(true)
  const [index, setIndex] = useState(0)
  const [correctQuestions, setCorrectQuestions] = useState(0)
  const [secondsLeft, setSecondsLeft] = useState(60)
  const [highScoreButtonVisible, setHighScoreButtonVisible] = useState(true)

  useEffect(() => {
    document.querySelector('#favicon').setAttribute('href', './image/favicon.png')
  }, [])

  useEffect(() => {
    startGame()
  }, [])

  /* game logic */
  function startGame() {
    setIndex(0)
    setCorrectQuestions(0)
    setSecondsLeft(60)

    setSplashVisible(true)
  }
  function startTimer() {
    timer = setInterval(() => {
      secondsLeft--
      secondsEl = document.getElementById('seconds')
      secondsEl.textContent = secondsLeft.toString().padStart(2, '0')
      if (secondsLeft <= 0) {
        clearInterval(timer)
        recordSection()
        secondsEl.textContent = "Time's up!"
      }
    }, 1000)
  }
  return (
    <div className='app-09'>
      <div className='body'>
        <header>{splashVisible && <SplashHeader />}</header>
        <main>{splashVisible && <SplashMain />}</main>
      </div>
    </div>
  )
}

const SplashHeader = () => (
  <>
    <p className='nav-timer'>
      <FontAwesomeIcon icon={faClock} />
      <span>0:</span>
      <span id='seconds'>60</span>
    </p>
    <p className='nav-question'>
      Question <span id='currentQuestion' />
      0/6
    </p>
    {highScoreButtonVisible && (
      <p
        className='nav-view'
        onClick={renderHighScores}>
        <FontAwesomeIcon icon={faChartBar} />
      </p>
    )}
  </>
)

const SplashMain = () => (
  <section id='splash'>
    <image
      className='splash-image'
      src={Favicon}
      alt='quiz icon'
    />
    <h1 className='splash-heading'>So You Think You Can Javascript?</h1>
    <p className='splash-description'>{`${questionBank.length} questions.`}</p>
    <p className='splash-description'>Wrong answers will deduct 10 seconds!</p>
    <button
      className='splash-start-button'
      id='startTime'
      onClick={() => {
        setHighScoreButtonVisible(false)
        renderQuizQuestions(index)
        startTimer()
      }}>
      Ready?
    </button>
  </section>
)

// add to main
const QuizQuestions = (index) => {
  return (
    <>
      <p id='quiz-title'>{questionBank[index].title}</p>
      <ul>
        {questionBank[index].choices.map((newItem) => (
          <li
            key={newItem}
            className='btn-wrapper'
            onClick={checkAnswer}>
            <button className='btn'>{newItem}</button>
          </li>
        ))}
      </ul>
    </>
  )
}

function checkAnswer(event) {
  feedbackEl = document.createElement('p')
  feedbackEl.setAttribute('id', 'feedback')

  if (event.target.textContent == questionBank[index].answer) {
    correctQuestions++
    feedbackEl.classList.add('greenfeedback')
    feedbackEl.append(`Question ${index + 1} was correct!`)
  } else {
    secondsLeft = secondsLeft - 10
    feedbackEl.classList.add('redfeedback')
    feedbackEl.innerHTML = `Question ${index + 1} was incorrect.<br>"${questionBank[index].title}"<br>Answer: "${questionBank[index].answer}".<br>Penalty: -10 seconds`
  }

  index++

  if (index >= questionBank.length) {
    secondsEl.textContent = secondsLeft.toString().padStart(2, '0')
    recordSection()
  } else {
    renderQuizQuestions(index)
    currentQuestionEl = document.getElementById('currentQuestion')
    currentQuestionEl.innerHTML = `${index + 1}/6`
    main.classList.add('quiz')
    main.appendChild(feedbackEl)
  }
}
function recordSection() {
  if (secondsLeft >= 0) {
    clearInterval(timer)
  }

  main.innerHTML = ''
  main.className = 'recordSection'

  main.append(feedbackEl, document.createElement('hr'))

  h1 = document.createElement('h1')
  h1.setAttribute('id', 'victoryMessage')
  h1.textContent = `${correctQuestions}/${questionBank.length}`
  main.appendChild(h1)

  h1 = document.createElement('h1')
  h1.setAttribute('id', 'affirmation')
  if (correctQuestions === 0) {
    h1.append(`Don't worry, everyone starts at 0! 😶‍🌫️`)
  } else if (correctQuestions === 1) {
    h1.append(`One for the road, 5 for the study table! 🐥`)
  } else if (correctQuestions === 2) {
    h1.append(`Two is better than one! ⛅`)
  } else if (correctQuestions === 3) {
    h1.append(`That's 50% correct! 🌤️`)
  } else if (correctQuestions === 4) {
    h1.append(`Four correct! Not bad! 🌻`)
  } else if (correctQuestions === 5) {
    h1.append(`Five correct! Beautiful! ✨`)
  } else if (correctQuestions === 6) {
    h1.append(`Bingo! Hats off to you! 🎩`)
  }
  main.appendChild(h1)

  label = document.createElement('p')
  label.setAttribute('id', 'victoryScoreLabel')
  label.textContent = 'Seconds remaining: ' + Math.max(secondsLeft, 0)
  main.appendChild(label, document.createElement('hr'))

  label = document.createElement('label')
  label.setAttribute('id', 'recordInitialLabel')
  label.textContent = 'Please enter your initials below: '
  main.appendChild(label)

  input = document.createElement('input')
  input.setAttribute('type', 'text')
  input.setAttribute('maxLength', '2')
  input.setAttribute('id', 'initials')
  input.textContent = ''
  main.appendChild(input)

  button = document.createElement('button')
  button.setAttribute('type', 'submit')
  button.setAttribute('id', 'submit')
  button.textContent = 'Submit'
  main.appendChild(button)

  button.addEventListener('click', function () {
    var initials = input.value.toString().toUpperCase()

    if (initials.length === 0) {
      button.textContent = 'Your initials please'
      button.classList.add('redfeedback')
      setTimeout(() => {
        button.textContent = 'Submit'
        button.classList.remove('redfeedback')
      }, 500)

      return
    } else {
      var SYTYCJ = localStorage.getItem('SYTYCJ')

      SYTYCJ === null ? (SYTYCJ = []) : (SYTYCJ = JSON.parse(SYTYCJ))

      SYTYCJ.push({ initials: initials, score: Math.max(secondsLeft, 0) })

      localStorage.setItem('SYTYCJ', JSON.stringify(SYTYCJ))

      renderHighScores()
    }
  })
}

function renderHighScores() {
  renderHighScoresHeader()
  renderHighScoresMain()
}

function renderHighScoresHeader() {
  header.innerHTML = ''
  header.className = 'highscore-header'

  icon = document.createElement('i')
  icon.setAttribute('id', 'hsIcon')
  icon.classList.add('far', 'fa-chart-bar')

  label = document.createElement('span')
  label.textContent = '\xa0Hall of Fame'
  label.setAttribute('id', 'hallOfFame')

  header.append(icon, label)
}

function renderHighScoresMain() {
  main.innerHTML = ''
  main.className = 'highscore-main'

  var ul = document.createElement('ul')
  ul.setAttribute('id', 'hs')
  main.appendChild(ul)

  li = document.createElement('li')
  li.classList.add('btn-wrapper')

  var newDiv = document.createElement('button')
  newDiv.setAttribute('id', 'hs-wrapper')
  newDiv.classList.add('btn')

  span = document.createElement('span')
  span.setAttribute('id', 'hs-rank')
  span.textContent = `Rank`
  newDiv.appendChild(span)

  span = document.createElement('span')
  span.setAttribute('id', 'hs-initial')
  span.textContent = `Name`
  newDiv.appendChild(span)

  span = document.createElement('span')
  span.setAttribute('id', 'hs-score')
  span.textContent = `Score`
  newDiv.appendChild(span)

  li.appendChild(newDiv)
  ul.appendChild(li)

  var SYTYCJ = localStorage.getItem('SYTYCJ')

  SYTYCJ = JSON.parse(SYTYCJ)

  if (SYTYCJ != null) {
    SYTYCJ.sort((a, b) => b.score - a.score)

    for (var i = 0; i < SYTYCJ.length; i++) {
      li = document.createElement('li')
      li.classList.add('btn-wrapper')
      newDiv = document.createElement('button')
      newDiv.setAttribute('id', 'hs-wrapper')
      newDiv.classList.add('btn')

      span = document.createElement('span')
      span.setAttribute('id', 'hs-rank')
      span.textContent = `${i + 1}`
      newDiv.appendChild(span)

      span = document.createElement('span')
      span.setAttribute('id', 'hs-initial')
      span.textContent = `${SYTYCJ[i].initials}`
      newDiv.appendChild(span)

      span = document.createElement('span')
      span.setAttribute('id', 'hs-score')
      span.textContent = `${SYTYCJ[i].score}`
      newDiv.appendChild(span)

      li.appendChild(newDiv)
      ul.appendChild(li)
    }
  }

  var button = document.createElement('button')
  button.classList.add('splash-start-button')
  button.setAttribute('id', 'newGame')
  button.append('New Game')
  main.appendChild(button)
  button.addEventListener('click', function () {
    init()
  })

  var button = document.createElement('button')
  button.classList.add('splash-start-button')
  button.setAttribute('id', 'clear')
  button.append('Clear High Scores')
  main.appendChild(button)
  button.addEventListener('click', () => {
    localStorage.clear()

    renderHighScoresMain()
  })
}
