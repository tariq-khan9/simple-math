import React, { useState } from 'react'
import Youtube from './Youtube'
import DrillSection from './DrillSection'
import Arithmetic from './arithmetic/Arithmetic'
import Efractions from '../efractions/Efractions'

const Main = () => {
  const [component, setComponent] = useState(1)
  return (
    <div className='mt-20 '>
      <Youtube/>
      {component===1 &&    <Arithmetic/>}
      {component===2 && <Efractions/>}
   
    </div>
  )
}

export default Main
