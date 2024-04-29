import React, { useState, useEffect, useRef } from 'react';
import dropdown from './../../../images/dropdown.png'

const Dropdown = ({setOperation, setMixOperation, setSameDenoms, operation}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isAdditionSubOpen, setIsAdditionSubOpen] = useState(false);
  const [isSubtractionSubOpen, setIsSubtractionSubOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleOperation = (op, same) => {
    if(op===5){
      setOperation(0)
      setMixOperation(2)
    }
    else{
      setOperation(op)
      setMixOperation(0)
    }

    if(op<3 && same===true){
   
      setSameDenoms(true)
    }
    if(op<3 && same===false){
      
        setSameDenoms(false)
    }

    setIsOpen(false);

  }

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleAdditionMouseEnter = () => {
    setIsAdditionSubOpen(true);
  };

  const handleAdditionMouseLeave = () => {
    setIsAdditionSubOpen(false);
  };

  const handleSubtractionMouseEnter = () => {
    setIsSubtractionSubOpen(true);
  };

  const handleSubtractionMouseLeave = () => {
    setIsSubtractionSubOpen(false);
  };

  useEffect(() => {
   

    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
        setIsAdditionSubOpen(false);
        setIsSubtractionSubOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className=' pt-8 relative h-[100px]'>
         <div className=" z-50" ref={dropdownRef}>
      <button
        className="px-6 md:px-12 py-1 md:py-2 z-50 font-inter font-semibold rounded-sm border border-gray-800  text-gray-800 hover:text-white bg-white hover:bg-gray-700  "
        onClick={toggleDropdown}
      >
        <div className='flex flex-row'>
        {
          operation>0 ? <div>
            {operation===1 && <div>Addition</div>}
            {operation===2 && <div>Subtraction</div>}
            {operation===3 && <div>Multiplication</div>}
            {operation===4 && <div>Division</div>}
          </div> 
          : 
          <div>Mixed</div>
        }
        {/* <div className=' ml-1 flex items-center '>
        <img src={dropdown} alt='dropdown' className='w-[8px] md:w-[10px]   h-[6px]'/>
        </div> */}
        
        </div>
      </button>
      {isOpen && (
        <div className="absolute left-0 mt-2 w-42 font-inter  bg-white rounded-md shadow-lg">
          <button
            className="block font-inter w-full py-2 px-4 text-left hover:bg-gray-700  hover:text-white focus:outline-none relative"
            onMouseEnter={handleAdditionMouseEnter}
            onMouseLeave={handleAdditionMouseLeave}
             // Close dropdown when clicked
          >
            Addition
            {isAdditionSubOpen && (
              <div className="absolute top-0 left-full mt-0 w-[180px] bg-white text-gray-700 rounded-md shadow-lg">
                <button
                  className="block w-full p-2 pl-3  text-left hover:bg-gray-700 hover:text-white focus:outline-none"
                  onClick={()=>handleOperation(1, true)} // Close dropdown when clicked
                >
                  Same-Denoms
                </button>
                <button
                  className="block w-full py-2 pl-3 text-left hover:bg-gray-700  hover:text-white focus:outline-none"
                  onClick={()=>handleOperation(1, false)} // Close dropdown when clicked
                >
                  Different-Denoms
                </button>
              </div>
            )}
          </button>
          <button
            className="block w-full py-2 px-4 text-left hover:bg-gray-700 hover:text-white focus:outline-none relative"
            onMouseEnter={handleSubtractionMouseEnter}
            onMouseLeave={handleSubtractionMouseLeave}
             // Close dropdown when clicked
          >
            Subtraction
            {isSubtractionSubOpen && (
              <div className="absolute top-0 left-full mt-0 w-[180px] bg-white text-gray-700 rounded-md shadow-lg">
                <button
                  className="block w-full py-2 pl-3 text-left hover:bg-gray-700 hover:text-white focus:outline-none"
                  onClick={()=>handleOperation(2, true)} // Close dropdown when clicked
                >
                  Same-Denoms
                </button>
                <button
                  className="block w-full py-2 pl-3 text-left hover:bg-gray-700 hover:text-white focus:outline-none"
                  onClick={()=>handleOperation(2, false)} // Close dropdown when clicked
                >
                  Different-Denoms
                </button>
              </div>
            )}
          </button>
          <button onClick={()=>handleOperation(3, false)} className="block w-full py-2 px-4 text-left hover:bg-gray-700 hover:text-white focus:outline-none" >
            Multiplication
          </button>
          <button onClick={()=>handleOperation(4, false)} className="block w-full py-2 px-4 text-left hover:bg-gray-700  hover:text-white focus:outline-none" >
            Division
          </button>
          <button onClick={()=>handleOperation(5, false)} className="block w-full py-2 px-4 text-left hover:bg-gray-700 hover:text-white focus:outline-none" >
            Mixed
          </button>
        </div>
      )}
    </div>
    </div>
   
  );
};

export default Dropdown;
