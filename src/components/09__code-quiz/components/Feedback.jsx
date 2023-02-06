const Feedback = ({ question, correct, questionNumber }) => {
  const questionNumberAdjusted = questionNumber + 1
  return correct ? (
    <p
      id='feedback'
      className='greenfeedback'>
      Question {questionNumberAdjusted} was correct!
    </p>
  ) : (
    <p
      id='feedback'
      className='redfeedback'>
      {`Question ${questionNumberAdjusted} was incorrect.`}
      <br />
      {question.title}
      <br />
      {`Answer: ${question.answer}.`}
      <br />
      Penalty: -10 seconds
    </p>
  )
}

export default Feedback
