const RiddleQuestion = ({ children }) => {
  const style = {
    boxShadow: 'rgba(22,22, 22, 0.5) 0px 0px 4px 2px inset',

    borderRadius: '12px',

    whiteSpace: 'break-spaces',
    padding: '16px',
    backgroundColor: 'white'
  }
  return (
    <div
      style={style}
      className='poem'>
      {children}
    </div>
  )
}
export default RiddleQuestion
