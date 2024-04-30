import React, { useState, useEffect } from 'react';
import logo from './../images/logo.png';
import menu from './../images/nav-menu.png'
import close from './../images/close.png'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Close the menu when clicking anywhere on the page
  useEffect(() => {
    const closeMenu = () => {
      setIsOpen(false);
    };
  
    const checkSize = () => {
      if (window.innerWidth >= 1024) {
        setIsOpen(false);
      }
    };
  
    document.addEventListener('click', closeMenu);
    window.addEventListener('resize', checkSize);
  
    return () => {
      document.removeEventListener('click', closeMenu);
      window.removeEventListener('resize', checkSize);
    };
  }, []);

  return (
    <div className='w-full h-14 px-8 flex flex-row justify-between border-b bg-white fixed top-0 z-10'>
      <button className='flex flex-row items-center w-[20%] md:w-[15%]'>
        <img className='w-6 h-6' src={logo} alt="Icon" />
        <h2 className='text-[20px] ml-1 hidden md:flex'><span className='font-bold'>Simplest</span>Math</h2>
      </button>
        
     <div className={`${isOpen? 'flex flex-col items-center' : 'flex flex-row lg:w-full lg:ml-12'}`}>
        <button className={`md:hidden ${isOpen ? '' : ''}`} onClick={(e) => { e.stopPropagation(); setIsOpen(!isOpen); }}>   {isOpen
         ? <img onClick={()=>setIsOpen(false)} className=' w-6 h-6 mt-4 mb-2 ' src={close} alt="Icon" />
           : <img className=' w-10 h-8' src={menu} alt="Icon" />
            }</button>

          <div className={`flex flex-col font-inter  items-start md:flex-row md:w-[60%] lg:w-[70%] ${isOpen ? 'bg-white  shadow-md  w-[120px] pt-1  pl-3 h-44 justify-start items-start  rounded-md' : 'items-center hidden md:flex'} `}>
            
               <button className='pt-2 text-gray-800 hover:border-blue-600 lg:text-[18px] border-b-4 border-white focus:border-blue-600 focus:font-bold md:ml-8 '>Home</button>
         
             <button className='pt-2  text-gray-800 hover:border-blue-600 lg:text-[18px] border-b-4 border-white focus:border-blue-600 focus:font-bold md:ml-8  '>Arithmetic</button>
            
           
             <button className='pt-2  text-gray-800 hover:border-blue-600 lg:text-[18px] border-b-4 border-white focus:border-blue-600 focus:font-bold md:ml-8 '>Algebra</button>
        
          
              <button className='pt-2  text-gray-800 hover:border-blue-600 lg:text-[18px] border-b-4 border-white focus:border-blue-600 focus:font-bold md:ml-8 mb-2 md:mb-0 '>Geometry</button>
           
          </div>
     </div>
       

      <div className='buttom-div flex flex-row w-[20%] md:w-[15%] items-center justify-end'>
        <button className='bg-blue-600 hover:bg-blue-700 text-white px-2 lg:px-4 h-8 rounded-[5px] text-[12px] md:text-[15px]'>Register</button>
      </div>

    </div>
  );
}

export default Navbar;
