import React from 'react'

const Youtube = () => {
  return (
    <div className='flex flex-row px-8 mt-[50px]'>
      <div className='w-[5%] sm:w-[20%] lg:w-[15%]'>
            
      </div>
      <div className='w-[95%] sm:w-[80%] lg:w-[85%]'>
          <div className='introduction w-[80%] sm:w-[60%] md:w-[60%] lg:w-[50%]'>
             <h2 className='text-[15px] sm:text-[20px] md:text-[30px] lg:text-[35px] font-bold'>Simplify Your Fraction Learning</h2>
             <p className='text-[10px] sm:text-[13px] md:text-[16px] lg:text-[18px] leading-relaxed lg:pr-20'>Your go-to for easy fraction learning. Enjoy interactive guides, instant feedback, and track your progress effortlessly. Start simplifying fractions today!</p>
          </div>
          <div className='youtube bg-red-500 w-[90%] flex items-center justify-center sm:w-[80%] md:w-[70%] md:w-[60%]  aspect-video mt-[40px] mb-[30px]'>
                 <h4 className='text-white font-bold text-[30px] text-center items-center'>Youtube</h4>
          </div>
      </div>
    </div>
  )
}

export default Youtube
