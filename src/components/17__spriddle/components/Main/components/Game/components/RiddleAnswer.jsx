const RiddleAnswer = ({ children }) => {
  const style = {
    margin: '0',
    display: 'flex',
    width: '100%',
    background: 'white',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    borderRadius: '8px',
    color: 'red',
    fontFamily: 'Open Sans, sans-serif'
  }
  return <h2 style={style}>{children}</h2>
}
export default RiddleAnswer
