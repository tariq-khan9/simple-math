import React, { useState } from 'react'
import Youtube from './Youtube'
import DrillSection from './DrillSection'
import Arithmetic from './arithmetic/Arithmetic'


const Main = () => {
  const [component, setComponent] = useState(1)
  return (
    <div className='mt-20 '>
      <Youtube/>
      {component===1 &&    <Arithmetic/>}
    
   
    </div>
  )
}

export default Main
