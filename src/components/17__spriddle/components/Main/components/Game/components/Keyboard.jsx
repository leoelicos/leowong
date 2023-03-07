const Keyboard = ({ keys }) => {
  return (
    <div>
      <div>
        <div className={keys['q'] === 1 ? 'correct' : keys['q'] === 2 ? 'incorrect' : 'default'}>Q</div>
        <div className={keys['w'] === 1 ? 'correct' : keys['w'] === 2 ? 'incorrect' : 'default'}>W</div>
        <div className={keys['e'] === 1 ? 'correct' : keys['e'] === 2 ? 'incorrect' : 'default'}>E</div>
        <div className={keys['r'] === 1 ? 'correct' : keys['r'] === 2 ? 'incorrect' : 'default'}>R</div>
        <div className={keys['t'] === 1 ? 'correct' : keys['t'] === 2 ? 'incorrect' : 'default'}>T</div>
        <div className={keys['y'] === 1 ? 'correct' : keys['y'] === 2 ? 'incorrect' : 'default'}>Y</div>
      </div>
      <div>
        <div className={keys['a'] === 1 ? 'correct' : keys['a'] === 2 ? 'incorrect' : 'default'}>A</div>
        <div className={keys['s'] === 1 ? 'correct' : keys['s'] === 2 ? 'incorrect' : 'default'}>S</div>
        <div className={keys['d'] === 1 ? 'correct' : keys['d'] === 2 ? 'incorrect' : 'default'}>D</div>
        <div className={keys['f'] === 1 ? 'correct' : keys['f'] === 2 ? 'incorrect' : 'default'}>F</div>
        <div className={keys['g'] === 1 ? 'correct' : keys['g'] === 2 ? 'incorrect' : 'default'}>G</div>
        <div className={keys['h'] === 1 ? 'correct' : keys['h'] === 2 ? 'incorrect' : 'default'}>H</div>
        <div className={keys['j'] === 1 ? 'correct' : keys['j'] === 2 ? 'incorrect' : 'default'}>J</div>
        <div className={keys['k'] === 1 ? 'correct' : keys['k'] === 2 ? 'incorrect' : 'default'}>K</div>
        <div className={keys['l'] === 1 ? 'correct' : keys['l'] === 2 ? 'incorrect' : 'default'}>L</div>
      </div>
      <div>
        <div className={keys['z'] === 1 ? 'correct' : keys['z'] === 2 ? 'incorrect' : 'default'}>Z</div>
        <div className={keys['x'] === 1 ? 'correct' : keys['x'] === 2 ? 'incorrect' : 'default'}>X</div>
        <div className={keys['c'] === 1 ? 'correct' : keys['c'] === 2 ? 'incorrect' : 'default'}>C</div>
        <div className={keys['v'] === 1 ? 'correct' : keys['v'] === 2 ? 'incorrect' : 'default'}>V</div>
        <div className={keys['b'] === 1 ? 'correct' : keys['b'] === 2 ? 'incorrect' : 'default'}>B</div>
        <div className={keys['n'] === 1 ? 'correct' : keys['n'] === 2 ? 'incorrect' : 'default'}>N</div>
        <div className={keys['m'] === 1 ? 'correct' : keys['m'] === 2 ? 'incorrect' : 'default'}>M</div>
      </div>
    </div>
  )
}
export default Keyboard
