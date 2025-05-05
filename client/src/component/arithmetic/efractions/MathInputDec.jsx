import React, { useState, useEffect } from 'react';

const MathInputDec = ({setInputs, inputs,type,   mathInputNull, setMathInputNull}) => {
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

    if(type==='inputsNum'){
      try {
        const evalResult = eval(inputValue); // Use of eval can be dangerous, make sure to validate the input
       
       // setResult(isNaN(evalResult) ? null : evalResult); // Check if the result is a valid number
        setInputs({...inputs, inputsNum: isNaN(evalResult) ? null : evalResult })
      } catch (error) {
        setInputs({...inputs, inputsNum:  null  })
      }
    }

    if(type==='inputsDenom'){
      try {
        const evalResult = eval(inputValue); // Use of eval can be dangerous, make sure to validate the input
       
       // setResult(isNaN(evalResult) ? null : evalResult); // Check if the result is a valid number
        setInputs({...inputs, inputsDenom: isNaN(evalResult) ? null : evalResult })
      } catch (error) {
        setInputs({...inputs, inputsDenom:  null  })
      }
    }

    if(type==='numerator3'){
        try {
          const evalResult = eval(inputValue); // Use of eval can be dangerous, make sure to validate the input
         
         // setResult(isNaN(evalResult) ? null : evalResult); // Check if the result is a valid number
          setInputs({...inputs, numerator3: isNaN(evalResult) ? null : evalResult })
        } catch (error) {
          setInputs({...inputs, numerator3:  null  })
        }
      }
  
      if(type==='denominator3'){
        try {
          const evalResult = eval(inputValue); // Use of eval can be dangerous, make sure to validate the input
         
         // setResult(isNaN(evalResult) ? null : evalResult); // Check if the result is a valid number
          setInputs({...inputs, denominator3: isNaN(evalResult) ? null : evalResult })
        } catch (error) {
          setInputs({...inputs, denominator3:  null  })
        }
      }
  

  };

  return (
    <div className=''>
      <input
        className={`text-[14px] md:text-[22px] text-center h-5 md:h-8  bg-transparent border border-gray-400 rounded-[5px]   ${inputWidth}`}
        type="text"
        value={expression}
        onChange={handleChange}
      />
    
    </div>
  );
};

export default MathInputDec;
