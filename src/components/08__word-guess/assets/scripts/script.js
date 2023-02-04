var lettersPattern = /[A-Za-z]/
var solutionWord = ''
var time = 10000
var finished = true
var alarm = document.getElementById('secondsLeft')
var totalWins = 0
var totalLosses = 0
var i = 0
var found = [false, false, false, false]
var timer

updateTally()

function updateAlarm() {
  alarm.innerHTML = String(time / 1000).padStart(2, '0')
}

function startTimer() {
  finished = false

  alarm.innerHTML = String(time / 1000).padStart(2, '0')

  timer = setInterval(() => {
    if (time === 0) {
      clearInterval(timer)

      if (finished === false) {
        totalLosses++
        document.getElementById('tally-losses-value').innerHTML = totalLosses
        document.getElementById('button-start-games').innerHTML = 'Oh no! Word was ' + solutionWord + '. Start again?'

        finished = true
      }
    } else {
      time -= 1000
      updateAlarm()
    }
  }, 1000)
}

function resetGame() {
  time = 10000
  finished = false
  chooseWord()
  for (var i = 0; i < 4; i++) {
    document.getElementById('tile' + i).innerHTML = '_'
    found[i] = false
  }
}

document.getElementById('button-start-games').addEventListener('click', (e) => {
  e.preventDefault()

  if (finished === true) {
    document.getElementById('button-start-games').innerHTML = 'Quick! Guess the letters!'
    resetGame()
    startTimer()
  }
})

document.addEventListener('keyup', (e) => {
  var keypress = e.key.toLowerCase()

  if (finished === false && keypress.length == 1 && lettersPattern.test(e.key) && solutionWord.includes(keypress) && !allFound()) {
    for (i = 0; i < solutionWord.length; i++) {
      if (solutionWord[i] === keypress) {
        document.getElementById('tile' + i).innerHTML = keypress
        found[i] = true
        if (allFound() && time >= 0) {
          finished = true
          totalWins++
          clearInterval(timer)
          document.getElementById('tally-wins-value').innerHTML = totalWins
          document.getElementById('button-start-games').innerHTML = 'You win! Start again?'
        }
      }
    }
  }

  localStorage.setItem('totalWins', totalWins)
  localStorage.setItem('totalLosses', totalLosses)
})

function allFound() {
  return found[0] && found[1] && found[2] && found[3]
}

document.getElementById('button-reset-games').addEventListener('click', (e) => {
  localStorage.setItem('totalWins', 0)
  localStorage.setItem('totalLosses', 0)
  updateTally()
})

function updateTally() {
  totalWins = localStorage.getItem('totalWins', totalWins)
  totalLosses = localStorage.getItem('totalLosses', totalLosses)
  document.getElementById('tally-wins-value').innerHTML = localStorage.getItem('totalWins', totalWins)
  document.getElementById('tally-losses-value').innerHTML = localStorage.getItem('totalLosses', totalLosses)
}

document.getElementById('button-help').addEventListener('click', function () {
  document.getElementById('modal').classList.add('show')
  document.getElementById('modal').classList.remove('hide')
})

document.getElementById('closeModal').addEventListener('click', function () {
  document.getElementById('modal').classList.add('hide')
  document.getElementById('modal').classList.remove('show')
})
