const inquirer = require('inquirer')
const chalk = require('chalk')
const fs = require('fs')
const generateMarkdown = require('./utils/generateMarkdown')

const primary = (w) => chalk.magenta.bgWhite(` ${w} `)
const secondary = (w) => chalk.greenBright.bgGray(` ${w} `)
const tertiary = (w) => chalk.black.bgWhite(` ${w} `)
const greeting = tertiary(`Welcome to Good README Generator! Let's do this!`)

const questions = [
  {
    name: 'title',
    type: 'input',
    message: primary('Title') + secondary("What's the title?")
  },
  {
    name: 'description',
    type: 'input',
    message: primary('Description') + secondary('What does it do? Why was it built? What technologies does it use?')
  },
  {
    name: 'installation',
    type: 'input',
    message: primary('Installation') + secondary('What do users need to run it?')
  },
  {
    name: 'usage',
    type: 'input',
    message: primary('Usage') + secondary('How do users use it?')
  },
  {
    name: 'contributing',
    type: 'input',
    message: primary('Contributions') + secondary('How do developers contribute to it?')
  },
  {
    name: 'tests',
    type: 'input',
    message: primary('Tests') + secondary('How do developers run tests?')
  },
  {
    name: 'license',
    type: 'list',
    message: primary('license') + secondary('What license does it use?'),
    choices: ['MIT License', 'GNU GPLv3', 'ISC License']
  },
  {
    name: 'username',
    type: 'input',
    message: primary('GitHub Username') + secondary('What is your GitHub username?')
  },
  {
    name: 'email',
    type: 'input',
    message: primary('Email') + secondary('What is the best email to contact you about this project?'),
    validate(value) {
      const pass = value.match(/.+@+.+\.+.+/)
      if (pass) return true
      return 'Please enter a valid email (must contain @ and .)'
    }
  }
]

const filePath = './generated/'
const fileType = '.md'
function writeToFile(fileName, data) {
  fs.writeFile(filePath + fileName + fileType, generateMarkdown(data), (err) => (err ? console.warn(err) : console.log(tertiary(`Successfullly created ${filePath + fileName + fileType}!`))))
}

function init() {
  console.log(greeting)
  inquirer.prompt(questions).then((data) => writeToFile('README', data))
}

init()
