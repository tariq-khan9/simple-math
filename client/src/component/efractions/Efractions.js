import React from 'react'

const Efractions = () => {
    return (
        <div className='flex flex-col'>
            <div className='flex flex-row  '>
                <div className=' w-0 sm:w-[5%] md:w-[15%] bg-gray-100'>          
                </div>
                <div className=' w-full sm:w-[95%] md:w-[85%] bg-gray-100 pb-8 md:pb-12'>
                    <div className='px-[8px] sm:px-[50px] md:px-[20px]  lg:pr-[300px] w-full flex    flex-col   pt-2 mt-[30px]'>

                           <div className='w-full h-20 bg-gray-500'></div>
                          
                           <div className='w-full flex flex-col md:flex-row'>
                             <div className='w-[100%] md:w-[50%] h-20 bg-red-300'></div>
                              <div className='w-[100%] md:w-[50%] h-20 bg-blue-300'></div>
                          </div>
                    </div>
                </div>
              
            </div>
     
        </div>
        
        
      )
}

export default Efractions
