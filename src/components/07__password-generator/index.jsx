// import './css/style.css'
import {
  Button,
  Input,
  message,
  Typography //
} from 'antd'
import { useState } from 'react'
const { Title } = Typography
const { TextArea } = Input
export default function PasswordGenerator() {
  const [password, setPassword] = useState('')
  return (
    <div className='app-07'>
      <div className='body'>
        <div className='wrapper'>
          <header>
            <Title>Password Generator</Title>
          </header>
          <div className='card'>
            <div className='card-header'>
              <Button
                id='generate'
                className='btn'
                onClick={() => {
                  let g = generatePassword()
                  setPassword(g)
                }}>
                Generate Password
              </Button>
            </div>
            <div className='card-body'>
              <TextArea
                onClick={async () => {
                  await navigator.clipboard.writeText(password)
                  message.success(`Copied password to clipboard`)
                }}
                value={password}
                placeholder='Your Secure Password'
                aria-label='Generated Password'
                style={{ cursor: 'pointer' }}></TextArea>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

var preference = {
  characters: 0,
  numbers: true,
  upperLetters: true,
  lowerLetters: true,
  symbols: true
}

const minCharacters = 8
const maxCharacters = 128
var validations = ''

function cancelMessage() {
  window.alert(validations + '\nYou cancelled. Bye ✌🏻\n')
}

function generatePassword() {
  validations = 'Password preferences\n***********************\n'
  validations += 'Number of characters? '

  preference.characters = window.prompt(validations + '(8–128)', '128')

  if (preference.characters === null) {
    cancelMessage()
    return ''
  }
  while (!(+preference.characters >= minCharacters && +preference.characters <= maxCharacters)) {
    preference.characters = window.prompt(`${validations}\n"${preference.characters}" is invalid. Type a number from 8 to 128`, '8')
    if (preference.characters === null) {
      cancelMessage()
      return ''
    }
  }
  if (+preference.characters >= minCharacters && +preference.characters <= maxCharacters) {
    validations += preference.characters + '\n'
  }

  validations += 'Include numbers? '
  preference.numbers = window.prompt(validations + ' (y/n)', 'y')

  if (preference.numbers === null) {
    cancelMessage()
    return ''
  }
  while (preference.numbers.toLowerCase() !== 'y' && preference.numbers.toLowerCase() !== 'n') {
    preference.numbers = window.prompt(`${validations}\n"${preference.numbers}" is invalid. Type (y/n)`, 'y')
    if (preference.numbers === null) {
      cancelMessage()
      return ''
    }
  }
  if (preference.numbers.toLowerCase() === 'y') {
    validations += '✅\n'
    preference.numbers = true
  } else if (preference.numbers.toLowerCase() === 'n') {
    validations += '🚫\n'
    preference.numbers = false
  }

  validations += 'Include uppercase letters? '
  preference.upperLetters = window.prompt(validations + ' (y/n)', 'y')

  if (preference.upperLetters === null) {
    cancelMessage()
    return ''
  }

  while (preference.upperLetters.toLowerCase() !== 'y' && preference.upperLetters.toLowerCase() !== 'n') {
    preference.upperLetters = window.prompt(`${validations}\n"${preference.upperLetters}" is invalid. Type (y/n)`, 'y')
    if (preference.upperLetters === null) {
      cancelMessage()
      return ''
    }
  }

  if (preference.upperLetters.toLowerCase() === 'y') {
    validations += '✅\n'
    preference.upperLetters = true
  } else if (preference.upperLetters.toLowerCase() === 'n') {
    validations += '🚫\n'
    preference.upperLetters = false
  }

  validations += 'Include lowercase letters? '
  preference.lowerLetters = window.prompt(validations + ' (y/n)', 'y')

  if (preference.lowerLetters === null) {
    cancelMessage()
    return ''
  }

  while (preference.lowerLetters.toLowerCase() !== 'y' && preference.lowerLetters.toLowerCase() !== 'n') {
    preference.lowerLetters = window.prompt(`${validations}\n"${preference.lowerLetters}" is invalid. Type (y/n)`, 'y')
    if (preference.lowerLetters === null) {
      cancelMessage()
      return ''
    }
  }

  if (preference.lowerLetters.toLowerCase() === 'y') {
    validations += '✅\n'
    preference.lowerLetters = true
  } else if (preference.lowerLetters.toLowerCase() === 'n') {
    validations += '🚫\n'
    preference.lowerLetters = false
  }

  validations += 'Include symbols? '
  preference.symbols = window.prompt(validations + ' (y/n)', 'y')

  if (preference.symbols === null) {
    cancelMessage()
    return ''
  }
  while (preference.symbols.toLowerCase() !== 'y' && preference.symbols.toLowerCase() !== 'n') {
    preference.symbols = window.prompt(`${validations}\n"${preference.symbols}" is invalid. Type (y/n)`, 'y')
    if (preference.symbols === null) {
      cancelMessage()
      return ''
    }
  }
  if (preference.symbols.toLowerCase() === 'y') {
    validations += '✅\n'
    preference.symbols = true
  } else if (preference.symbols.toLowerCase() === 'n') {
    validations += '🚫\n'
    preference.symbols = false
  }

  var finalPassword = getPassword(preference.characters, preference.numbers, preference.upperLetters, preference.lowerLetters, preference.symbols)

  if (finalPassword.length === 0) {
    validations += 'No numbers, letters or symbols were chosen. Try again?'
    if (window.confirm(validations) === true) {
      return generatePassword()
    } else {
      cancelMessage()
      return ''
    }
  } else {
    validations += 'Password generated selected!\nPress OK to also display on screen, or Cancel to not show on screen.'
    var displayOnScreen = window.prompt(validations, finalPassword)
    if (displayOnScreen === null) {
      finalPassword = ''
    }
    return finalPassword
  }
}

function getPassword(characters, randomNumbers, randomUpperLetters, randomLowerLetters, randomSymbols) {
  var randomString = getRandomString(randomNumbers, randomUpperLetters, randomLowerLetters, randomSymbols)
  var password = ''
  for (var i = 0; i < characters; i++) {
    password += getRandomCharacter(randomString)
  }
  return password
}

function getRandomString(number, upper, lower, symbol) {
  return (number ? '0123456789' : '') + (upper ? 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' : '') + (lower ? 'abcdefghijklmnopqrstuvwxyz' : '') + (symbol ? '!"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~' : '')
}

function getRandomCharacter(string) {
  return string.length === 0 ? '' : string[Math.floor(Math.random() * string.length)]
}
