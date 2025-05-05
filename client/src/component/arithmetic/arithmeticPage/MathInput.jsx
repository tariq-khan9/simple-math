import React, { useState, useEffect } from 'react';

const MathInput = ({setInputs, inputs, type, difficulty, operation, sameDenoms, mathInputNull, setMathInputNull}) => {
  const [expression, setExpression] = useState('');
  const [inputWidth, setInputWidth] = useState('w-10 sm:w-20');
  
  useEffect(() => {
    

    if(mathInputNull){
      setExpression('')
      setMathInputNull(false)

    }
    
    
 }, [difficulty, operation, sameDenoms, mathInputNull, inputWidth])

 const getTextWidth = (length) => {
   if(length<5){
    setInputWidth('w-10 sm:w-20')
   }
   if(length>=5 && length<8){
    setInputWidth('w-10 sm:w-28')
   }
   if(length>=8 && length<11){
    setInputWidth('w-10 sm:w-36')
   }
   if(length>=11 && length<14){
    setInputWidth('w-10 sm:w-48')
   }
   if(length>14){
    setInputWidth('w-10 sm:w-60')
   }
};


  const handleChange = (event) => {
    const inputValue = event.target.value;
    getTextWidth(inputValue.length)
    setExpression(inputValue);
    // Evaluate the expression and update the result
    if(type==='inputNum'){
      try {
        const evalResult = eval(inputValue); // Use of eval can be dangerous, make sure to validate the input
       
       // setResult(isNaN(evalResult) ? null : evalResult); // Check if the result is a valid number
        setInputs({...inputs, inputNum: isNaN(evalResult) ? null : evalResult })
      } catch (error) {
        setInputs({...inputs, inputNum:  null  })
      }
    }

    if(type==='inputDenom'){
      try {
        const evalResult = eval(inputValue); // Use of eval can be dangerous, make sure to validate the input
       
       // setResult(isNaN(evalResult) ? null : evalResult); // Check if the result is a valid number
        setInputs({...inputs, inputDenom: isNaN(evalResult) ? null : evalResult })
      } catch (error) {
        setInputs({...inputs, inputDenom:  null  })
      }
    }
  

  };

  return (
    <div className=''>
      <input
        className={` text-center h-5 md:h-8  bg-transparent border border-gray-400 rounded-[5px] ${inputWidth}`}
        type="text"
        value={expression}
       
        onChange={handleChange}
      />
    
    </div>
  );
};

export default MathInput;
