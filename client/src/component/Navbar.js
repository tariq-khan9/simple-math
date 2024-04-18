import React from 'react'
import logo from './../images/logo.png'

const Navbar = () => {
  return (
    <div className='w-full h-14  px-8  flex flex-row justify-between  border-b'>

        <button className='flex flex-row items-center w-[20%] md:w-[15%]'>
           <img className='w-6 h-6' src={logo} alt="Icon" />
           <h2 className='text-[20px] ml-1 hidden lg:flex'><span className='font-bold'>Simplest</span>Math</h2>
        </button>

        <div className='middle-div  flex flex-row w-[60%] md:w-[70%] items-center'>
            <button className=' pt-2 lg:mx-2 text-gray-800 hover:text-blue-800 lg:text-[18px] border-b-4 border-white focus:border-blue-800'>Arithmetic</button>
            <button className=' pt-2 lg:mx-2 text-gray-800 hover:text-blue-800 lg:text-[18px] border-b-4 border-white focus:border-blue-800 lg:ml-8'>Algebra</button>
            <button className=' pt-2 lg:mx-2 text-gray-800 hover:text-blue-800 lg:text-[18px] border-b-4 border-white focus:border-blue-800 lg:ml-8'>Geometary</button>
        </div>

        <div className='buttom-div flex flex-row w-[20%] md:w-[15%] items-center justify-end'>
            <button className=' bg-blue-800 text-white px-2 lg:px-4 h-8 rounded-[5px] text-[12px] md:text-[15px] '>Register</button>
        </div>
    </div>
  )
}

export default Navbar