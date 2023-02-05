import { useEffect } from 'react'
import questionBank from './data/questions'
import './style/style.css'
export default function CodeQuiz() {
  useEffect(() => {
    document.querySelector('#favicon').setAttribute('href', './favicon.png')
  }, [])
  return (
    <div className='app-09'>
      <div className='body'>
        <header></header>
        <main></main>
      </div>
    </div>
  )
}

const body = document.body
const header = body.children[0]
const main = body.children[1]

var timer

var index
var correctQuestions = 0
var currentQuestion = 0
var secondsLeft

var currentQuestionEl
var startButtonEl
var secondsEl
var feedbackEl
var section, p, icon, img, span, h1, button, ul, li, label, input

init()

function init() {
  index = 0
  currentQuestion = index + 1
  correctQuestions = 0
  secondsLeft = 60

  renderSplashHeader()
  renderSplashMain()

  startButtonEl = document.getElementById('startTime')
  startButtonEl.addEventListener('click', () => {
    document.querySelector('.nav-view').parentNode.removeChild(document.querySelector('.nav-view'))
    renderQuizQuestions(index)

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
  })
}

function renderSplashHeader() {
  header.innerHTML = ''
  header.classList = ''

  p = document.createElement('p')
  p.classList.add('nav-timer')
  icon = document.createElement('i')
  icon.classList.add('fa', 'fa-clock')
  p.append(icon)
  span = document.createElement('span')
  span.append('0:')
  p.append(span)
  span = document.createElement('span')
  span.setAttribute('id', 'seconds')
  span.append('60')
  p.append(span)
  header.append(p)

  p = document.createElement('p')
  p.classList.add('nav-question')
  p.append('Question ')
  span = document.createElement('span')
  span.setAttribute('id', 'currentQuestion')
  span.append('0/6')
  p.append(span)
  header.append(p)

  p = document.createElement('p')
  p.classList.add('nav-view')
  icon = document.createElement('i')
  icon.classList.add('far', 'fa-chart-bar')
  p.append(icon)
  p.addEventListener('click', renderHighScores)
  header.append(p)
}

function renderSplashMain() {
  main.innerHTML = ''
  main.classList = ''

  section = document.createElement('section')
  section.setAttribute('id', 'splash')

  img = document.createElement('img')
  img.classList.add('splash-image')
  img.setAttribute('src', './assets/images/favicon.png')
  img.setAttribute('alt', 'quiz icon')
  section.append(img)

  h1 = document.createElement('h1')
  h1.classList.add('splash-heading')
  h1.append('So You Think You Can Javascript?')
  section.append(h1)

  p = document.createElement('p')
  p.classList.add('splash-description')
  p.append(`${questionBank.length} questions.`)
  section.append(p)

  p = document.createElement('p')
  p.classList.add('splash-description')
  p.append(`${secondsLeft} seconds.`)
  section.append(p)

  p = document.createElement('p')
  p.classList.add('splash-description')
  p.append(`Wrong answers will deduct 10 seconds!`)
  section.append(p)

  button = document.createElement('button')
  button.classList.add('splash-start-button')
  button.setAttribute('id', 'startTime')
  button.append('Ready?')
  section.append(button)

  main.append(section)
}

function renderQuizQuestions(index) {
  currentQuestionEl = document.getElementById('currentQuestion')
  currentQuestionEl.innerHTML = `${currentQuestion}/6`

  main.innerHTML = ''
  main.classList.add('quiz')

  p = document.createElement('p')
  p.setAttribute('id', 'quiz-title')
  p.append(questionBank[index].title)

  main.append(p)
  ul = document.createElement('ul')

  questionBank[index].choices.forEach((newItem) => {
    button = document.createElement('button')
    button.classList.add('btn')
    button.textContent = newItem

    li = document.createElement('li')
    li.classList.add('btn-wrapper')
    li.addEventListener('click', checkAnswer)
    li.appendChild(button)

    ul.appendChild(li)
  })

  main.appendChild(ul)
}
function checkAnswer(event) {
  feedbackEl = document.createElement('p')
  feedbackEl.setAttribute('id', 'feedback')

  if (event.target.textContent == questionBank[index].answer) {
    correctQuestions++
    feedbackEl.classList.add('greenfeedback')
    feedbackEl.append(`Question ${currentQuestion} was correct!`)
  } else {
    secondsLeft = secondsLeft - 10
    feedbackEl.classList.add('redfeedback')
    feedbackEl.innerHTML = `Question ${currentQuestion} was incorrect.<br>"${questionBank[index].title}"<br>Answer: "${questionBank[index].answer}".<br>Penalty: -10 seconds`
  }

  index++
  currentQuestion = index + 1

  if (index >= questionBank.length) {
    secondsEl.textContent = secondsLeft.toString().padStart(2, '0')
    recordSection()
  } else {
    renderQuizQuestions(index)
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
