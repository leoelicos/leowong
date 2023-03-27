export default function GradientText({ color1, color2, children }) {
  return (
    <span
      className='gradient-text'
      style={{
        background: `linear-gradient(to right, ${color1}, ${color2})`,
        backgroundClip: 'text',
        WebkitBackgroundClip: 'text',
        color: 'transparent'
      }}>
      {children}
    </span>
  )
}
