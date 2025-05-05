import React, { useState, useEffect } from 'react';

const MathInputFrac = ({setInputs4, inputs4,type,   mathInputNull, setMathInputNull}) => {
  const [expression, setExpression] = useState('');
  const [inputWidth, setInputWidth] = useState('w-10 sm:w-20');
  
  useEffect(() => {
    

    if(mathInputNull){
      setExpression('')
      setMathInputNull(false)
      setInputWidth('w-10 sm:w-20')

    }
    
    
 }, [ mathInputNull, inputWidth])

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
        setInputs4({...inputs4, inputNum: isNaN(evalResult) ? null : evalResult })
      } catch (error) {
        setInputs4({...inputs4, inputNum:  null  })
      }
    }

    if(type==='inputDenom'){
      try {
        const evalResult = eval(inputValue); // Use of eval can be dangerous, make sure to validate the input
       
       // setResult(isNaN(evalResult) ? null : evalResult); // Check if the result is a valid number
        setInputs4({...inputs4, inputDenom: isNaN(evalResult) ? null : evalResult })
      } catch (error) {
        setInputs4({...inputs4, inputDenom:  null  })
      }
    }

    
  

  };

  return (
    <div className=''>
      <input
        className={`text-[14px] md:text-[22px] text-center h-5 md:h-8  bg-transparent border border-gray-400 rounded-[5px]   ${inputWidth}`}
        type="text"
        value={expression}
        placeholder=' 2 × 3 × 4'
        onChange={handleChange}
      />
    
    </div>
  );
};

export default MathInputFrac;
