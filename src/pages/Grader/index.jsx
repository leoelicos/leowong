import useFavicon from '../../hooks/useFavicon'
import useTitle from '../../hooks/useTitle'

export default function Grader() {
  useTitle('Grader')
  useFavicon('favicons/grader.png')
  return <div>Grader</div>
}
