const Key = ({ char, stage, handleClickKey }) => {
  return (
    <button
      style={{
        backgroundColor: stage === 1 ? 'red' : stage === 2 ? 'green' : '#818384',
        fontFamily: 'sans-serif',
        fontSize: '2em',
        fontWeight: 'normal',
        border: '0',
        padding: '0',
        margin: '0 6px 0 0',
        height: '58px',
        borderRadius: '4px',
        cursor: 'pointer',
        WebkitUserSelect: 'none',
        MozUserSelect: 'none',
        userSelect: 'none',

        color: 'white',
        flex: '1',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textTransform: 'uppercase'
      }}
      onClick={() => {
        handleClickKey(char)
      }}>
      {char}
    </button>
  )
}
export default Key
