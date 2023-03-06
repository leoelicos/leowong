const Action = ({ children }) => {
  const style = {
    width: '100%',
    backgroundColor: 'red',
    borderRadius: '1rem',
    padding: '1rem',
    fontSize: '1.5rem',
    fontFamily: 'Arial, sans-serif',
    color: '#3D474D'
  }
  return <div style={style}>{children}</div>
}
export default Action
