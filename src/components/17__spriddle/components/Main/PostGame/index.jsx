import { Button } from 'antd'

const PostGame = ({ goToNextStage }) => {
  return (
    <div>
      <header>PostGame Header</header>
      <main>PostGame Main</main>
      <footer>
        <Button
          type='primary'
          onClick={goToNextStage}>
          Next Stage
        </Button>
      </footer>
    </div>
  )
}
export default PostGame
