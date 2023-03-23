import RiddleAnswer from '../RiddleAnswer.jsx'
import RiddleQuestion from '../RiddleQuestion.jsx'
import MainHeader from '../MainHeader.jsx'

const PreGame = ({ preGameTime, attempt }) => {
  return (
    <>
      <MainHeader
        time={60}
        health={10}
      />

      <RiddleQuestion>
        <h2>Get ready!</h2>
        <h1>{preGameTime}</h1>
      </RiddleQuestion>
      <RiddleAnswer>{attempt}</RiddleAnswer>
    </>
  )
}
export default PreGame
