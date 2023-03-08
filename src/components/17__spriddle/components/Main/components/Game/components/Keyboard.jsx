import Key from './Key.jsx'
const Row = ({ children }) => (
  <div
    style={{
      display: 'flex',
      justifyContent: 'center',
      width: '100%',
      maxWidth: '600px',
      margin: '0 auto 8px',
      touchAction: 'manipulation'
    }}>
    {children}
  </div>
)
const Keyboard = ({ keys, handleClickKey }) => {
  // console.log('Keyboard', { keys })
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
        height: '200px',
        maxWidth: '500px',
        margin: '0 auto'
      }}>
      <Row>
        {'qwertyuiop'.split('').map((letter) => (
          <Key
            key={letter}
            char={letter}
            stage={keys[letter]}
            handleClickKey={handleClickKey}
          />
        ))}
      </Row>
      <Row>
        <div style={{ flex: '0.5' }} />
        {'asdfghjkl'.split('').map((letter) => (
          <Key
            key={letter}
            char={letter}
            stage={keys[letter]}
            handleClickKey={handleClickKey}
          />
        ))}
        <div style={{ flex: '0.5' }} />
      </Row>
      <Row>
        <div style={{ flex: '1' }} />
        {'zxcvbnm'.split('').map((letter) => (
          <Key
            key={letter}
            char={letter}
            stage={keys[letter]}
            handleClickKey={handleClickKey}
          />
        ))}
        <div style={{ flex: '2' }} />
      </Row>
    </div>
  )
}
export default Keyboard
