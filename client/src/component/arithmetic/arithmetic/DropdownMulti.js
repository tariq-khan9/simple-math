import React, { useState, useEffect, useRef } from 'react';
import dropdown from './../../../images/dropdown.png'

const Dropdown = ({setOperation, setMixOperation, setSameDenoms, operation, efraction, setEfraction}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isAdditionSubOpen, setIsAdditionSubOpen] = useState(false);
  const [isSubtractionSubOpen, setIsSubtractionSubOpen] = useState(false);
  const [isEfractionSubOpen, setIsEfractionSubOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleOperation = (op, same) => {
    setEfraction(0)
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

  const handleEfraction = (fr) => {
       setEfraction(fr)
       console.log("e fraction ", efraction)
       setIsOpen(false)
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

  const handleEfractionMouseEnter = () => {
    setIsEfractionSubOpen(true);
  };

  const handleEfractionMouseLeave = () => {
    setIsEfractionSubOpen(false);
  };

  useEffect(() => {
       setIsAdditionSubOpen(false);
        setIsSubtractionSubOpen(false);
        setIsEfractionSubOpen(false);

    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
        setIsAdditionSubOpen(false);
        setIsSubtractionSubOpen(false);
        setIsEfractionSubOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className=' pt-8 relative h-[100px]'>
         <div className=" z-50" ref={dropdownRef}>
      <button
        className="px-2 md:px-4 py-1 w-28 sm:w-36 md:w-60 md:mb-2 md:text-[24px] md:py-2 z-50 font-inter font-semibold rounded-[3px] border border-gray-800  text-gray-800 hover:text-white bg-white hover:bg-gray-700  "
        onClick={toggleDropdown}
      >
        <div className='flex flex-row justify-center'>
        { efraction>0?
          <div>
              {efraction===1 && <div>Fraction 1</div>}
              {efraction===2 && <div>Fraction 2</div>}
              {efraction===3 && <div>Fraction 3</div>}
              {efraction===4 && <div>Fraction 4</div>}
            </div>
            :
            <div>
                {
                    operation>0 ? <div>
                    {operation===1 && <div>Addition</div>}
                    {operation===2 && <div>Subtraction</div>}
                    {operation===3 && <div>Multiplication</div>}
                    {operation===4 && <div>Division</div>}
                  </div> 
                  :<div>Mixed</div>
                }
            </div>
        
        }
        {/* <div className=' ml-1 flex items-center '>
        <img src={dropdown} alt='dropdown' className='w-[8px] md:w-[10px]   h-[6px]'/>
        </div> */}
        
        </div>
      </button>
      {isOpen && (
        <div className="absolute z-10 left-0  w-32 md:w-44 font-inter  bg-white rounded-md shadow-lg">
          <button onClick={()=>handleOperation(3, false)} className="block w-full py-2 px-4 text-left hover:bg-gray-700 hover:text-white focus:outline-none" >
            Multiplication
          </button>
          <button onClick={()=>handleOperation(4, false)} className="block w-full py-2 px-4 text-left hover:bg-gray-700  hover:text-white focus:outline-none" >
            Division
          </button>
          <button
            className="block font-inter  w-full py-2 px-4 text-left hover:bg-gray-700  hover:text-white focus:outline-none relative"
            onMouseEnter={handleEfractionMouseEnter}
            onMouseLeave={handleEfractionMouseLeave}
             // Close dropdown when clicked
          >
            Equal Fractions
            {isEfractionSubOpen && (
              <div className="absolute top-0 left-full mt-0 w-[180px] bg-white text-gray-700 rounded-md shadow-lg">
                <button
                  className="block w-full p-2 pl-3  text-left hover:bg-gray-700 hover:text-white focus:outline-none"
                  onClick={()=>handleEfraction(1)} // Close dropdown when clicked
                >
                  Fraction 1
                </button>
                <button
                  className="block w-full py-2 pl-3 text-left hover:bg-gray-700  hover:text-white focus:outline-none"
                  onClick={()=>handleEfraction(2)} // Close dropdown when clicked
                >
                  Fraction 2
                </button>
                <button
                  className="block w-full py-2 pl-3 text-left hover:bg-gray-700  hover:text-white focus:outline-none"
                  onClick={()=>handleEfraction(3)} // Close dropdown when clicked
                >
                  Fraction 3
                </button>
                <button
                  className="block w-full py-2 pl-3 text-left hover:bg-gray-700  hover:text-white focus:outline-none"
                  onClick={()=>handleEfraction(4)} // Close dropdown when clicked
                >
                  Fraction 4
                </button>
              </div>
            )}
          </button>


          <button
            className="block font-inter  w-full py-2 px-4 text-left hover:bg-gray-700  hover:text-white focus:outline-none relative"
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
