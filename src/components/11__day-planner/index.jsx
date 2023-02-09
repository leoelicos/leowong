/* hooks */
import { useState } from 'react'

/* custom components */
import CustomHeader from './components/CustomHeader'
import CustomFooter from './components/CustomFooter'
import AutoComplete from './components/AutoComplete'

export default function DayPlanner() {
  /* state */
  const [toggle, setToggle] = useState(false)

  /* event handlers */
  const handleToggle = () => {
    setToggle((prev) => {
      console.log(`Setting toggle to ${!prev}`)
      return !prev
    })
  }

  return (
    <div className={`app-11 ${toggle ? 'dark' : ''}`}>
      <div className='body'>
        <CustomHeader />
        <main className={`container ${toggle ? 'dark' : ''}`}>
          <AutoComplete />
        </main>
        <CustomFooter
          toggle={toggle}
          handleToggle={handleToggle}
        />
      </div>
    </div>
  )
}
