const Hero = ({ children }) => {
  const style = {
    backgroundColor: '#FFD426 ',
    borderRadius: '1rem',
    padding: '2rem',
    fontSize: '1.15rem',
    fontWeight: 'bold',
    fontFamily: 'Arial, sans-serif',
    color: '#3D474D'
  }
  return <div style={style}>{children}</div>
}
export default Hero
