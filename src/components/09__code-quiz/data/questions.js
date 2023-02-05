const questionBank = [
  //* This is a global array of objects to store each question's title, choices and answer
  // Reference: Trilogy Coding Bootcamp Week 3, Lesson 04
  { title: 'Which operator is used to combine values to log a single message to the console?', choices: ['+', '-', '*', '/'], answer: '+' },
  // Reference: Trilogy Coding Bootcamp Week 3, Lesson 07
  { title: 'Which operator compares strict inequality?', choices: ['!', '!=', '!==', '!==='], answer: '!==' },
  // Reference: Trilogy Coding Bootcamp Week 3, Lesson 08
  { title: 'The expression (!true && !false) will return …', choices: ['true', '!true', 'false', '!false'], answer: 'false' },
  // Reference: Trilogy Coding Bootcamp Week 3, Lesson 13
  { title: 'How many times will this loop run? for (var i = 0; i < 5; i++) {…}', choices: ['2', '4', '5', '0'], answer: '5' },
  // Reference: Trilogy Coding Bootcamp Week 3, Lesson 15
  { title: 'Which of these is NOT a valid way to write a function?', choices: ['function f() {}', 'var f = function() {}', 'function f(x,y,z) {}', 'function () {}'], answer: 'function () {}' },
  // Reference: Trilogy Coding Bootcamp Week 3, Lesson 19
  { title: 'Which of these array methods can change [1, 2, 3] to [1, 2, 3, 4]?', choices: ['Array.sort()', 'Array.push()', 'Array.slice()', 'Array.replace()'], answer: 'Array.push()' }
]
export default questionBank
