const MainFooter = ({ children }) => {
  const style = {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    // backgroundColor: 'white',
    // borderRadius: '1rem',
    // padding: '2px',
    fontSize: '1.5rem',
    fontFamily: 'Arial, sans-serif',
    color: '#3D474D'
  }
  return <footer style={style}>{children}</footer>
}
export default MainFooter
