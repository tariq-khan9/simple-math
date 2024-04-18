import React, { useState, useEffect } from 'react';
import logo from './../images/logo.png';
import menu from './../images/nav-menu.png'
import close from './../images/close.png'

const Nav = () => {
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
    <div className='w-full h-14 px-8 flex flex-row justify-between border-b'>
      <button className='flex flex-row items-center w-[20%] md:w-[15%]'>
        <img className='w-6 h-6' src={logo} alt="Icon" />
        <h2 className='text-[20px] ml-1 hidden md:flex'><span className='font-bold'>Simplest</span>Math</h2>
      </button>
        
     <div className={`${isOpen? 'flex flex-col items-center' : 'flex flex-row lg:w-full lg:ml-12'}`}>
        <button className={`md:hidden ${isOpen ? '' : ''}`} onClick={(e) => { e.stopPropagation(); setIsOpen(!isOpen); }}>   {isOpen
         ? <img className=' w-6 h-6 mt-4 mb-2 ml-10' src={close} alt="Icon" />
           : <img className=' w-10 h-8' src={menu} alt="Icon" />
            }</button>

          <div className={`flex flex-col md:flex-row w-[60%] lg:w-[70%]  ${isOpen ? 'bg-white  shadow-md  w-28 pt-2  pl-3 h-32 justify-start items-start rounded-md' : 'items-center hidden md:flex'} `}>
             <button className='pt-2 lg:mx-2 text-gray-800 hover:text-blue-800 lg:text-[18px] border-b-4 border-white focus:border-blue-800 md:ml-8'>Arithmetic</button>

             <button className='pt-2 lg:mx-2 text-gray-800 hover:text-blue-800 lg:text-[18px] border-b-4 border-white focus:border-blue-800 md:ml-8 '>Algebra</button>
              <button className='pt-2 lg:mx-2 text-gray-800 hover:text-blue-800 lg:text-[18px] border-b-4 border-white focus:border-blue-800 md:ml-8'>Geometary</button>
          </div>
     </div>
       

      <div className='buttom-div flex flex-row w-[20%] md:w-[15%] items-center justify-end'>
        <button className='bg-blue-800 text-white px-2 lg:px-4 h-8 rounded-[5px] text-[12px] md:text-[15px]'>Register</button>
      </div>

    </div>
  );
}

export default Nav;
