const Alarm = ({ seconds }) => {
  return (
    <section className='alarm-wrapper'>
      <div className='alarm'>
        0:<span id='secondsLeft'>{seconds.toString().padStart(2, '0')}</span>
      </div>
    </section>
  )
}
export default Alarm
