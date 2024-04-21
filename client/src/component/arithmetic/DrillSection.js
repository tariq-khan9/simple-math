import React from 'react'
import Arithmetic from './arithmetic/Arithmetic'

const DrillSection = () => {
  return (
    <div className='flex flex-row  '>
      <div className=' w-0 sm:w-[5%] md:w-[15%] bg-gray-100'>
            
      </div>
      <div className=' w-full sm:w-[95%] md:w-[85%] bg-gray-100 '>
          <Arithmetic/>
      </div>
    </div>
  )
}

export default DrillSection
