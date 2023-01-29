export default function RockPaperScissors() {
  return (
    <div className='app-06'>
      <div className='body'></div>
    </div>
  )
}
function f() {
  // rock, paper, scissors

  const rock = 'R'
  const paper = 'P'
  const scissors = 'S'

  // tallies the player's wins
  var player = {
    wins: 0,
    ties: 0,
    losses: 0
  }

  // 0 = rock, 1 = paper, 2 = scissors
  var gameChoices = [rock, paper, scissors]

  window.alert('*********************\nRock-Paper-Scissors\n*********************\n\nRules:\nrock (R) beats scissors (S)\npaper (P) beats rock (R)\nscissors (S) beats paper (P)')

  var keepPlaying = window.confirm('Play ?')
  var checkValues = ['R', 'P', 'R']

  while (keepPlaying === true) {
    var playerChoice = window.prompt('To play, type R, P or S', 'R')

    // player selects cancel
    if (playerChoice == null) {
      keepPlaying = false
    }
    // check data is either R, P or S. If not, try again.
    else if (!checkValues.includes(playerChoice.toUpperCase())) {
      window.alert('Invalid command. Please type R, P or S. Try again.')
    }
    // player wants to play
    else {
      playerChoice = playerChoice.toUpperCase()
      var result = 'This game: '
      result += 'You chose '
      if (playerChoice === rock) {
        result += 'rock'
      } else if (playerChoice === paper) {
        result += 'paper'
      } else if (playerChoice === scissors) {
        result += 'scissors'
      }
      result += '.\n'

      var computerChoice = gameChoices[Math.floor(Math.random() * gameChoices.length)]

      result += 'Computer chose '
      if (computerChoice === rock) {
        result += 'rock'
      } else if (computerChoice === paper) {
        result += 'paper'
      } else if (computerChoice === scissors) {
        result += 'scissors'
      }
      result += '.\n'

      // tie
      if (playerChoice === computerChoice) {
        player.ties++
        result += 'Result = Tie.\n'
      }

      // player wins
      else if ((playerChoice === rock && computerChoice === scissors) || (playerChoice === scissors && computerChoice === paper) || (playerChoice === paper && computerChoice === rock)) {
        player.wins++
        result += 'Result = You win!\n'
      }

      // player loses
      else {
        player.losses++
        result += 'Result = You lose!\n'
      }

      // display stats and ask if they wanna play again
      keepPlaying = window.confirm(result + '\nYour current standings:\n' + player.wins + ' wins, ' + player.ties + ' ties, ' + player.losses + ' losses.\n\nPlay another game?')
    }
  }

  window.alert('Thanks for playing, bye now!')
}
