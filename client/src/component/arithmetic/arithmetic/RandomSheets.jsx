import React,{useState, useEffect, useRef} from 'react'
import CheckModal from './CheckModal'
import SolutionModal from './SolutionModal';
import MathArrayInput from './MathArrayInput'



const RandomSheets = ({getRandomNumber, showRandomSheets, totalSheets,  setShowRandom, operation, difficulty, inputRange, additionInputs, setAdditionInputs, sameDenoms}) => {

 
  
  let sheets = totalSheets;
  let DivisionResult = []
  
 const [randomSheetArray, setRandomSheetArray] = useState([])
 const [divisionInputs, setDivisionInputs] = useState([])
 const [divisionArrayResult, setDivisionArrayResult] = useState([])
 const [showCheckModal, setShowCheckModal] = useState(false)
 const [showSolutionModal, setShowSolutionModal] = useState(false)
 const [showSubmitResultModal, setShowSubmitResultModal] = useState(false)
 const [submitted, setSubmitted] = useState(false)
 const [arrayResult, setArrayResult] = useState(false)
 const [submitResult, setSubmitResult] =  useState(0)
 const [objectSubmitCount, setObjectSubmitCount] = useState(0)
 const mixOperation= 0;

 
 const [inputs, setInputs] = useState(randomSheetArray.map(() => ({
  numerator: 1,
  denominator: 1
})));



  useEffect(() => {
     
   
    handleRandomSheets(sheets)
    setSubmitted(false)
    setObjectSubmitCount(0)
    setSubmitResult(0)
   
  
   
  
  }, [totalSheets, showRandomSheets,showSolutionModal,difficulty, operation, sameDenoms]);
 
 



  const handleArrayCheck = (randomNums, i) => {
    console.log("both index are ", i, divisionInputs[i].ind, randomNums)
    setObjectSubmitCount(objectSubmitCount+1)
    const { numerator1, denominator1, numerator2, denominator2, showSolutionBtn } = randomNums.randomNums;
    if (operation === 1 || randomNums.randomNums.mixOperation===1) {
        if (sameDenoms) {
            const checkDeno = denominator1;
            const checkNum = numerator1 + numerator2;
            var checkResult = checkNum / checkDeno;
        } else {
            const checkDeno = denominator1 * denominator2
            const checkNum = (numerator1 * denominator2) + (numerator2 * denominator1);

            if (parseInt(additionInputs.numerator1) === denominator2 &&
                parseInt(additionInputs.denominator1) === denominator2 &&
                parseInt(additionInputs.numerator2) === denominator1 &&
                parseInt(additionInputs.denominator2) === denominator1) {
                var checkResult = checkNum / checkDeno;
            } else {
                var checkResult = checkNum;
            }
        }
    }

    if (operation === 2 || randomNums.randomNums.mixOperation===2) {
        if (sameDenoms) {
            const checkDeno = denominator1;
            const checkNum = numerator1 - numerator2;
            var checkResult = checkNum / checkDeno;
        } else {
            const checkDeno = denominator1 * denominator2
            const checkNum = (numerator1 * denominator2) - (numerator2 * denominator1);

            if (parseInt(additionInputs.numerator1) === denominator2 &&
                parseInt(additionInputs.denominator1) === denominator2 &&
                parseInt(additionInputs.numerator2) === denominator1 &&
                parseInt(additionInputs.denominator2) === denominator1) {
                var checkResult = checkNum / checkDeno;
            } else {
                var checkResult = checkNum;
            }
        }

    }

    if (operation === 3 || randomNums.randomNums.mixOperation===3) {
        const checkNum = numerator1 * numerator2;
        const checkDeno = denominator1 * denominator2;

        var checkResult = checkNum / checkDeno;
    }

    if (operation === 4 || randomNums.randomNums.mixOperation===4) {
      console.log("whole object ", divisionInputs[i], "operation", operation, randomNums.randomNums.mixOperation)
         
       const {divisionNum1, divisionDenom1, divisionNum2, divisionDenom2, sign} = divisionInputs[i]


        if (difficulty === 1) {
            var deno2 = divisionDenom2
            var num2 = divisionNum2
            console.log(numerator2,deno2,denominator2,num2, divisionInputs[i].sign)
            if (numerator2 === divisionDenom2 && denominator2 === divisionNum2 && sign === '*') {
                const updatedArray = randomSheetArray.map((item, index) => {
                  // Check if the index matches the index of the item to update
                  
                  if (index === i) {
                      console.log("true is hit", index, i)
                      // Return a new object with updated properties
                      return { ...item, isSubmitted: true, objectResult: true, showSolutionModal: false };
                  }
                  // Return the original object if it's not the one to update
                  return item;
                });
                // Update the state with the updated array
                setDivisionArrayResult((prevArray) => {
                  const newArray = [...prevArray];
                  newArray[i] = { index: i, objectResult: true };
                  return newArray;
                });

                setRandomSheetArray(updatedArray);
                setSubmitResult(submitResult + 1);

          } else {
            const updatedArray = randomSheetArray.map((item, index) => {
              if (index === i) {
                  
                  // If the properties match, return a new object with the updated 
                  return { ...item, isSubmitted: true, objectResult: false, showSolutionModal: false };
              }
              // If the properties don't match, return the original object
              return item;
          });
          
          setDivisionArrayResult((prevArray) => {
            const newArray = [...prevArray];
            newArray[i] = { index: i, objectResult: false};
            return newArray;
          });

          setRandomSheetArray(updatedArray);
      
              

          }
        }

        if (difficulty > 1) {
            var deno2 = divisionDenom2
            var num2 = divisionNum2
            var deno1 = divisionDenom1
            var num1 = divisionNum1

            if ((numerator2 === deno2 &&
                    denominator2 === num2 &&
                    numerator1 === num1 &&
                    denominator1 === deno1 &&
                    divisionInputs[i].sign === '*') ||
                (numerator1 === deno1 &&
                    denominator1 === num1 &&
                    numerator2 === num2 &&
                    denominator2 === deno2 &&
                    divisionInputs[i].sign === '*')) {
                      console.log("true is hit")
                      const updatedArray = randomSheetArray.map((item, index) => {
                        // Check if the index matches the index of the item to update
                        if (index === i) {
                            // Return a new object with updated properties
                            return { ...item, isSubmitted: true, objectResult: true, showSolutionModal: false };
                        }
                        // Return the original object if it's not the one to update
                        return item;
                      });
                      // Update the state with the updated array

                      setDivisionArrayResult((prevArray) => {
                        const newArray = [...prevArray];
                        newArray[i] = { index: i, objectResult: true};
                        return newArray;
                      });

                      setRandomSheetArray(updatedArray);
                      setSubmitResult(submitResult + 1);
            }
            else {
              console.log("false is hit")
              const updatedArray = randomSheetArray.map((item, index) => {
                if (index === i) {
                    // If the properties match, return a new object with the updated 
                    return { ...item, isSubmitted: true, objectResult: false, showSolutionModal: false };
                }
                // If the properties don't match, return the original object
                return item;
            });
            setDivisionArrayResult((prevArray) => {
              const newArray = [...prevArray];
              newArray[i] = { index: i, objectResult: false};
              return newArray;
            });
            
            setRandomSheetArray(updatedArray);
            }
        }

    }

  //   if (operation === 4 || randomNums.randomNums.mixOperation ===4) {
  //     var inputResult = randomNums.randomNums.inputNum / randomNums.randomNums.inputDenom;

  //     console.log(inputResult)
  //      var newCheckResult = parseFloat(checkResult).toFixed(2);
  //      var newInputResult = parseFloat(inputResult).toFixed(2)

  //      console.log(randomNums.randomNums.numerator2,divisionInputs[i].divisionDenom2, randomNums.randomNums.denominator2,divisionInputs[i].divisionNum2)
  //     if (
  //       randomNums.randomNums.numerator2 === divisionInputs[i].divisionDenom2 &&
  //       randomNums.randomNums.denominator2 === divisionInputs[i].divisionNum2 &&
  //       divisionInputs[i].sign === '*'
  //     ) {
  //         const updatedArray = randomSheetArray.map((item, index) => {
  //           // Compare properties of the objects to determine if they are equal
  //           if (index===i) {
  //               // If the properties match, return a new object with the updated 
                
  //               return { ...item, isSubmitted:true, objectResult: true, showSolutionModal: false };
               
  //           }
  //           // If the properties don't match, return the original object
  //           return item;
  //       });

  //       setDivisionArrayResult((prevArray) => {
  //         const newArray = [...prevArray];
  //         newArray[i] = { index: i, objectResult: true };
  //         return newArray;
  //       });
  //       setRandomSheetArray(updatedArray);
  //       setSubmitResult(submitResult+1)
        

         
  //     } else {
  //       const updatedArray = randomSheetArray.map((item, index)=> {
  //         // Compare properties of the objects to determine if they are equal
  //         if (index===i) {
  //             // If the properties match, return a new object with the updated 
  //             return { ...item, isSubmitted: true, objectResult: false, showSolutionModal: false };
              
  //         }
  //         // If the properties don't match, return the original object
  //         return item;
  //     });
  //     setDivisionArrayResult((prevArray) => {
  //       const newArray = [...prevArray];
  //       newArray[i] = { index: i, objectResult: false };
  //       return newArray;
  //     });
  //     setRandomSheetArray(updatedArray);
      
  //     }

  // }

    if (operation !== 4 || randomNums.randomNums.mixOperation!==4) {
        var inputResult = randomNums.randomNums.inputNum / randomNums.randomNums.inputDenom;

        console.log(inputResult)
         var newCheckResult = parseFloat(checkResult).toFixed(2);
         var newInputResult = parseFloat(inputResult).toFixed(2)
        if (newCheckResult === newInputResult) {
            const updatedArray = randomSheetArray.map((item, index) => {
              // Compare properties of the objects to determine if they are equal
              if (index===i) {
                  // If the properties match, return a new object with the updated 
                  return { ...item, isSubmitted:true, objectResult: true, showSolutionModal: false };
                  
              }
              // If the properties don't match, return the original object
              return item;
          });
          setRandomSheetArray(updatedArray);
          setSubmitResult(submitResult+1)

          if(operation===0){
            setDivisionArrayResult((prevArray) => {
              const newArray = [...prevArray];
              newArray[i] = { index: i, objectResult: true };
              return newArray;
            });
          }
          
  
           
        } else {
          const updatedArray = randomSheetArray.map((item, index)=> {
            // Compare properties of the objects to determine if they are equal
            if (index===i) {
                // If the properties match, return a new object with the updated 
                return { ...item, isSubmitted: true, objectResult: false, showSolutionModal: false };
            }
            // If the properties don't match, return the original object
            return item;
        });
        setRandomSheetArray(updatedArray);

        if(operation===0){
          setDivisionArrayResult((prevArray) => {
            const newArray = [...prevArray];
            newArray[i] = { index: i, objectResult: false };
            return newArray;
          });
        }
        
        }
 
    }
 
}

const handleSubmitSheets = () => {
  if(operation===4 || mixOperation===4){
    function countTrueValues(array) {
      const trueValues = array.filter(item => item.objectResult === true);
       return trueValues.length;   }
    
      setSubmitResult(countTrueValues(divisionArrayResult))
  }

  // if(operation===0){
  //   function countTrueValues(array) {
  //     const trueValues = array.filter(item => item.objectResult === true);
  //      return trueValues.length;   }
    
  //     setSubmitResult(countTrueValues(divisionArrayResult))
  // }
  
  setSubmitted(true)
  setShowSubmitResultModal(true)

}

const handleShowSolutionModal = (index) => {
  // Create a copy of the randomNums array
  const updatedRandomNums = [...randomSheetArray];
  // Set the showSolutionModal property of the specific object to true
  updatedRandomNums[index] = { ...updatedRandomNums[index], showSolutionModal: true };
  // Update the state with the modified array
  setRandomSheetArray(updatedRandomNums);
};

const handleCloseSolutionModal = (index) => {
  // Create a copy of the randomNums array
  const updatedRandomNums = [...randomSheetArray];
  // Set the showSolutionModal property of the specific object to true
  updatedRandomNums[index] = { ...updatedRandomNums[index], showSolutionModal: false };
  // Update the state with the modified array
  setRandomSheetArray(updatedRandomNums);
};

   
 const handleRandomSheets = (sheets) => {

   const updatedArray= [];
   const updatedDivisionInputs = [];

   const getRandomOperation = () => {
    let randomNum;
    do {
      randomNum = Math.floor(Math.random() * 4) + 1;
    } while (randomNum === 3); 
    return randomNum;
  };
  
  let mixOperation;
 
  
  for (let i = 0; i < sheets; i++) {
    if(operation===0){
      
       mixOperation = getRandomOperation();
      console.log("mix operation in array", mixOperation)
    }
    
    const numerator1 = getRandomNumber(inputRange.min, inputRange.max);
    const denominator1 = getRandomNumber(inputRange.min, inputRange.max);
    const numerator2 = getRandomNumber(inputRange.min, inputRange.max);
    const denominator2 = getRandomNumber(inputRange.min, inputRange.max);

  
    updatedArray.push({
      numerator1,
      denominator1,
      numerator2,
      denominator2,
      mixOperation,
      inputNum:'',
      inputDenom:'',
      isSubmitted: false,
      objectResult: false

    });

    updatedDivisionInputs.push({
      ind: i,
      divisionNum1:'',
      divisionDenom1:'',
      divisionNum2:'',
      divisionDenom2:'',
      sign:''
        })

  }

  setRandomSheetArray(updatedArray)
  setDivisionInputs(updatedDivisionInputs)
  console.log("checking divisioninputs in ", divisionInputs)
} 

const handleDivisionInputsChange = (index, field, value) => {
  const updatedInputs = [...divisionInputs];
  updatedInputs[index] = {
    ...updatedInputs[index],
    [field]: value
  };
  setDivisionInputs(updatedInputs);
};

// const handleDivisionInputsChange = (index, field, event) => {
//   // Make a copy of the array
//   const updatedInputs = [...divisionInputs];

//   // Update the field in the object at the given index
//   updatedInputs[index] = {
//     ...updatedInputs[index],
//     [field]: event.target.value
//   };

//   // Update the state
//   setDivisionInputs(updatedInputs);
// };

 if(showRandomSheets)

  return  (
    <div className='flex flex-col justify-center  rounded-md '>
        <div className='px-auto flex flex-col  gap-4 '>
                    
                      {randomSheetArray.map((randomNums, index)=> (
                        <div className='px-[8px] sm:px-[15px] md:px-[40px] pt-1 sm:pt-2  md:pt-4 pb-2  md:pb-4 mt-3 md:mt-6 bg-gray-50 rounded-md'>
                          <div className='bg-white w-5 h-5 md:w-10 md:h-10 rounded-full flex items-center justify-center mb-2 md:mb-4'><h2 className='text-gray-500 italic text-[12px] md:text-[18px]' >{index+1}</h2></div>
                              {(operation===4 || randomNums.mixOperation===4)?
                                    <div className='flex items-center justify-start   '>
                                      {difficulty===1 &&
                                            <table className='digit '>
                                            <tr className=''>
                                              <td className='first-col px-2'>
                                                  <table className=''>
                                                    <tbody className=''>
                                                        <tr className=''>
                                                          {randomNums.numerator1}
                                                        </tr>
                                                        <tr className='line-tr'>
                                                            <div class="line"></div>
                                                        </tr>
                                                        <tr>
                                                          {randomNums.denominator1}
                                                        </tr>
                                                    </tbody>
                                                  </table>
                                                  
                                              </td>

                                          
                
                                              <td className='opertor px-1 md:px-4'>
                                                  <table>
                                                    <tbody>
                                                      {(operation>0)?
                                                        <tr>
                                                            {operation===1  && <h2>+</h2>}
                                                            {operation===2 && <h2>-</h2>}
                                                            {operation===3 && <h2>&times;</h2>}
                                                            {operation===4 && <h2>&divide;</h2>}
                                                        </tr>
                                                          :
                                                          <tr>
                                                            { randomNums.mixOperation===1 && <h2>+</h2>}
                                                            { randomNums.mixOperation===2 && <h2>-</h2>}
                                                            { randomNums.mixOperation===3 && <h2>&times;</h2>}
                                                            { randomNums.mixOperation===4 && <h2>&divide;</h2>}
                                                        </tr>
                
                                                        }
                                                    </tbody>
                                                  </table>
                                              </td>
                
                                              <td className='second-col px-2'>
                                                  <table>
                                                    <tbody>
                                                        <tr>
                                                          {randomNums.numerator2}
                                                        </tr>
                                                        <tr className='line-tr'>
                                                            <div class="line"></div>
                                                        </tr>
                                                        <tr>
                                                          {(operation<3 && sameDenoms)? randomNums.denominator1 : randomNums.denominator2}
                                                        </tr>
                                                    </tbody>
                                                  </table>
                                              </td>
                
                                              <td className='= px-1 md:px-6'>
                                                <tr>=</tr>
                                              </td>
                        {/* ================================================== input side ========================================== */}
                                              <td className='inputs md:px-4 flex flex-row  items-center'>
                                              <td className='first-col px-2 md:px-4'>
                                                  <table className=''>
                                                    <tbody className=''>
                                                        <tr className=''>
                                                          {randomNums.numerator1}
                                                        </tr>
                                                        <tr className='line-tr'>
                                                            <div class="line"></div>
                                                        </tr>
                                                        <tr>
                                                          {randomNums.denominator1}
                                                        </tr>
                                                    </tbody>
                                                  </table>
                                              </td>
                
                                              <td className='opertor px-2 md:px-4  flex items-center'>
                                                  <table>
                                                    <tbody className=''>
                                                        <tr>
                                                        <td className="text-center"> {/* Add a td element to center the input */}
                                                        <input onChange={(e)=>handleDivisionInputsChange(index, 'sign', e.target.value)} id='sign' className='input-div digit-input text-center'/>
                                                        </td>
                                                      </tr>
                                                    </tbody>
                                                  </table>
                                              </td>
                
                                              <td className='second-col md:px-4'>
                                                  <table>
                                                    <tbody>
                                                        <tr className=''>
                                                        <input onChange={(e)=>handleDivisionInputsChange(index, 'divisionNum2', parseInt(e.target.value))} id='divisionNum2' className='input digit-input'/>
                                                        </tr>
                                                        <tr className='line-tr'>
                                                            <div class="line-input"></div>
                                                        </tr>
                                                        <tr>
                                                        <input onChange={(e)=>handleDivisionInputsChange(index, 'divisionDenom2', parseInt(e.target.value))} id='divisionDenom2' className='input digit-input'/>
                                                        </tr>
                                                    </tbody>
                                                  </table>
                                              </td>       
                                                </td>
                                            </tr>
                                            </table>
                                      }

                                      {difficulty>1 &&
                                            <table className='digit'>
                                            <tr className=''>
                                              <td className='first-col'>
                                                  <table className=''>
                                                    <tbody className=''>
                                                        <tr className=''>
                                                          {randomNums.numerator1}
                                                        </tr>
                                                        <tr className='line-tr'>
                                                            <div class="line"></div>
                                                        </tr>
                                                        <tr>
                                                          {randomNums.denominator1}
                                                        </tr>
                                                    </tbody>
                                                  </table>
                                              </td>
                
                                              <td className='opertor px-2 md:px-4'>
                                                  <table>
                                                    <tbody>
                                                      {(operation>0)?
                                                        <tr>
                                                            {operation===1  && <h2>+</h2>}
                                                            {operation===2 && <h2>-</h2>}
                                                            {operation===3 && <h2>&times;</h2>}
                                                            {operation===4 && <h2>&divide;</h2>}
                                                        </tr>
                                                          :
                                                          <tr>
                                                            { randomNums.mixOperation===1 && <h2>+</h2>}
                                                            { randomNums.mixOperation===2 && <h2>-</h2>}
                                                            { randomNums.mixOperation===3 && <h2>&times;</h2>}
                                                            { randomNums.mixOperation===4 && <h2>&divide;</h2>}
                                                        </tr>
                
                                                        }
                                                    </tbody>
                                                  </table>
                                              </td>
                
                                              <td className='second-col md:px-4'>
                                                  <table>
                                                    <tbody>
                                                        <tr>
                                                          {randomNums.numerator2}
                                                        </tr>
                                                        <tr className='line-tr'>
                                                            <div class="line"></div>
                                                        </tr>
                                                        <tr>
                                                          {(operation<3 && sameDenoms)? randomNums.denominator1 : randomNums.denominator2}
                                                        </tr>
                                                    </tbody>
                                                  </table>
                                              </td>
                
                                              <td className='= px-2 md:px-6'>
                                                <tr>=</tr>
                                              </td>
        {/* ================================================== input side ========================================== */}
                                              <td className='inputs md:px-4 flex flex-row items-center'>
                                              <td className='first-col md:px-4'>
                                                  <table>
                                                    <tbody>
                                                        <tr className=''>
                                                          <input onChange={(e)=>handleDivisionInputsChange(index, 'divisionNum1', parseInt(e.target.value))} id='divisionNum1' className='input digit-input'/>
                                                        </tr>
                                                        <tr className='line-tr'>
                                                            <div class="line-input"></div>
                                                        </tr>
                                                        <tr>
                                                        <input onChange={(e)=>handleDivisionInputsChange(index, 'divisionDenom1', parseInt(e.target.value))} id='divisionDenom1' className='input digit-input'/>
                                                        
                                                        </tr>
                                                    </tbody>
                                                  </table>
                                              </td>  
                
                                              <td className='opertor px-2 md:px-4  flex items-center'>
                                                  <table>
                                                    <tbody className=''>
                                                        <tr>
                                                        <td className="text-center"> {/* Add a td element to center the input */}
                                                        <input onChange={(e)=>handleDivisionInputsChange(index, 'sign', e.target.value)} id='divisionSign' className='input-div digit-input text-center'/>
                                                        </td>
                                                      </tr>
                                                    </tbody>
                                                  </table>
                                              </td>
                
                                              <td className='second-col md:px-4'>
                                                  <table>
                                                    <tbody>
                                                        <tr className=''>
                                                        <input  onChange={(e)=>handleDivisionInputsChange(index, 'divisionNum2', parseInt(e.target.value))} id='divisionNum2' className='input digit-input'/>
                                                        </tr>
                                                      
                                                        <tr className='line-tr'>
                                                            <div class="line-input"></div>
                                                        </tr>
                                                        <tr>
                                                        <input onChange={(e)=>handleDivisionInputsChange(index, 'divisionDenom2', parseInt(e.target.value))} id='divisionDenom2' className='input digit-input'/>
                                                        </tr>
                                                    </tbody>
                                                  </table>
                                              </td>       
                                                </td>
                                            </tr>
                                            </table>
                                      }
                                      
                                    </div>
                                :
                                   <div className='digit  pl-0 pr-0 justify-start'>

                                      <table className=''>
                                      <tr className=''>
                                        <td className='first-col flex flex-row justify-start '>
                                            <table className=''>
                                              <tbody className=''>
                                                  <tr className=''>
                                                    {randomNums.numerator1}
                                                  </tr>
                                                  <tr className='line-tr'>
                                                      <div class="line"></div>
                                                  </tr>
                                                  <tr>
                                                    {randomNums.denominator1}
                                                  </tr>
                                              </tbody>
                                            </table>
                                      {/* ======= check if the operation is addition and denominators are different, then put extra inputs. */}
                                            {(operation<3 && !sameDenoms) &&
                                                    <div className='md:ml-4 flex flex-row'>
                                                        <table className='flex items-center'>
                                                          <tbody>
                                                          <tr className='tr-different-deno'>
                                                            <td>
                                                            &times;
                                                            </td>
                                                          </tr>
                                                          </tbody>
                                                        </table>
                                                        <table className=''>
                                                        <tbody className=''>
                                                            <tr className=''>
                                                              <div className='max-w-3'>
                                                              <input onChange={(e)=>setAdditionInputs({...additionInputs, numerator1: e.target.value})} id='num' className='input digit-input'/>
                                                              </div>
                                                            
                                                            </tr>
                                                            <tr className='line-tr'>
                                                                <div class="line-input"></div>
                                                            </tr>
                                                            <tr>
                                                            <input required onChange={(e)=>setAdditionInputs({...additionInputs, denominator1: e.target.value})} id='num' className='input digit-input'/>
                                                            </tr>
                                                        </tbody>
                                                      </table>
                                                    </div>
                                            }
                                        </td>

                                        <td className='operator px-2 md:px-3 pl-3 md:pl-5'>
                                            <table>
                                              <tbody>
                                                {(operation>0)?
                                                  <tr>
                                                      {operation===1  && <h2>+</h2>}
                                                      {operation===2 && <h2>-</h2>}
                                                      {operation===3 && <h2>&times;</h2>}
                                                      {operation===4 && <h2>&divide;</h2>}
                                                  </tr>
                                                  :
                                                  <tr>
                                                      { randomNums.mixOperation===1 && <h2>+</h2>}
                                                      { randomNums.mixOperation===2 && <h2>-</h2>}
                                                      { randomNums.mixOperation===3 && <h2>&times;</h2>}
                                                      { randomNums.mixOperation===4 && <h2>&divide;</h2>}
                                                  </tr>

                                                  }
                                              </tbody>
                                            </table>
                                        </td>

                                        <td className='second-col flex  flex-row px-2 md:px-3'>
                                            <table>
                                              <tbody>
                                                  <tr>
                                                    {randomNums.numerator2}
                                                  </tr>
                                                  <tr className='line-tr'>
                                                      <div class="line"></div>
                                                  </tr>
                                                  <tr>
                                                    {(operation<3 && sameDenoms)? randomNums.denominator1 : randomNums.denominator2}
                                                  </tr>
                                              </tbody>
                                            </table>
                                            {(operation<3 && !sameDenoms) &&
                                                    <div className='md:ml-4 flex flex-row'>
                                                        <table className='flex items-center'>
                                                          <tbody>
                                                          <tr className='tr-different-deno'>
                                                            <td>
                                                            &times;
                                                            </td>
                                                          </tr>
                                                          </tbody>
                                                        </table>
                                                        <table className=''>
                                                        <tbody className=''>
                                                            <tr className=''>
                                                              <div className='max-w-4'>
                                                              <input onChange={(e)=>setAdditionInputs({...additionInputs, numerator2: e.target.value})} id='num' className='input digit-input'/>
                                                              </div>
                                                            
                                                            </tr>
                                                            <tr className='line-tr'>
                                                                <div class="line-input"></div>
                                                            </tr>
                                                            <tr>
                                                            <input onChange={(e)=>setAdditionInputs({...additionInputs, denominator2: e.target.value})} id='num' className='input digit-input'/>
                                                            </tr>
                                                        </tbody>
                                                      </table>
                                                    </div>
                                            }
                                        </td>

                                        <td className='= md:px-3'>
                                          <tr>=</tr>
                                        </td>

                                        <td className='inputs md:px-3'>
                                            <table>
                                              <tbody>
                                             
                                                  <tr>
                                                  <MathArrayInput  type='inputNum' index={index}  randomSheetArray={randomSheetArray} setRandomSheetArray={setRandomSheetArray} difficulty={difficulty} operation={operation} sameDenoms={sameDenoms}/>
                                                  </tr>
                                                  <tr className='line-tr'>
                                                      <div class="line-input"></div>
                                                  </tr>
                                                  <tr>
                                                  <MathArrayInput  type='inputDenom' index={index}  randomSheetArray={randomSheetArray} setRandomSheetArray={setRandomSheetArray} difficulty={difficulty} operation={operation} sameDenoms={sameDenoms}/>
                                                  </tr>
                                               </tbody>
                                            </table>
                                        </td>
                                      </tr>
                                      </table>  
                                      </div>                 
                       }

                         <div className='mt-6 w-full  flex justify-center'>
                       
                          {randomNums.isSubmitted?
                             <div className='w-full'>
                                {submitted ? (
                                    <div>
                                    {(operation===4 || mixOperation===4) ?
                                      <div>{console.log("divisionarrayresutl in submite", divisionArrayResult)}
                                         { divisionArrayResult[index]?.objectResult ? (
                                        <div className='w-full flex justify-start'>
                                          
                                        <button className='btn-random text-white bg-blue-600 px-8 sm:px-14 md:px-0'>Excellent!</button>
                                        </div>
                                      ) : (
                                        <div className='w-full flex justify-start'>
                                            {console.log("after submited random objectresult ", randomNums.objectResult)}
                                        <button  onClick={() => handleShowSolutionModal(index, true)} className='btn-random text-white bg-orange-600 hover:bg-orange-500'>Oops.. Solution?</button>
                                        </div>
                                      )}
                                      </div>
                                    :
                                     <div>
                                      { randomNums.objectResult ? (
                                        <div className='w-full flex justify-start'>
                                          
                                        <button className='btn-random text-white bg-blue-600 px-8 sm:px-16 md:px-0'>Excellent!</button>
                                        </div>
                                      ) : (
                                        <div className='w-full flex justify-start'>
                                            {console.log("after submited random objectresult ", randomNums.objectResult)}
                                        <button  onClick={() => handleShowSolutionModal(index, true)} className='btn-random text-white bg-orange-600 hover:bg-orange-500'>Oops.. Solution?</button>
                                        </div>
                                      )}
                                      </div>}
                                      
                                    </div>
                                  ) : (
                                    <div className='w-full flex justify-start'>
                                    <button  disabled={true} className=' btn-random bg-yellow-300 italic'>Submitted</button>
                                    </div>
                                  )}

                            </div>
                           :
                           <div className='w-full flex justify-start '>
                       
                               <button onClick={()=>handleArrayCheck({randomNums}, index)} className=' btn-random border-blue-600 text-blue-600 hover:text-white hover:bg-blue-600'>Submit</button>
                          </div>
                        }
                          </div>
                          {randomNums.showSolutionModal && (
                            <SolutionModal
                              showSolutionModal={randomNums.showSolutionModal}
                              setShowSolutionModal={(value) => handleCloseSolutionModal(index, value)}
                              setShowCheckModal={setShowCheckModal}
                              randomNums={randomNums}
                              operation={operation}
                              mixOperation={mixOperation}
                              inputs={randomNums}
                              sameDenoms={sameDenoms}
                            />
                          )}
                        </div>
                      ))} 


                      <div className=' w-full text-center  items-center  my-4 pb-4 md:pb-8'>
                         <button onClick={()=>handleSubmitSheets()} disabled={objectSubmitCount<totalSheets}  className=' w-[60%] rounded-[5px] text-[12px] sm:text-[14px] md:text-[18px] py-2 border text-blue-600  border-blue-600 bg-white  hover:text-white hover:bg-blue-600 font-inter'>Submit your sheets</button>
                      </div>
              </div>
              
              <CheckModal showCheckModal={showCheckModal} setShowCheckModal={setShowCheckModal} result={arrayResult}/>
              <SubmitResultModal showSubmitResultModal={showSubmitResultModal} setShowSubmitResultModal={setShowSubmitResultModal} submitResult={submitResult} divisionArrayResult={divisionArrayResult} sheets={sheets}/>
           
    </div>
  )
}

export default RandomSheets


const SubmitResultModal = ({showSubmitResultModal, setShowSubmitResultModal,divisionArrayResult, submitResult, sheets}) => {
  
  useEffect(()=>{
    console.log("final result", submitResult)
  },[])
  
  const percentage = ((submitResult/sheets) * 100).toFixed(0);
  const handleClose = () => {
    setShowSubmitResultModal(false)
    
  }
  if(showSubmitResultModal)
  {
   return (
     <div className=' fixed top-0 left-0 w-full h-full pt-48 bg-transparent w-scree  backdrop-blur-sm flex justify-center items-center '>
 
       <div className='bg-white rounded-md z-40 w-96 max-h-85 mt-[80px] overflow-y-auto  p-4  mb-[200px]'>
             <div className='text-center w-full'>
               <h2 className='text-[25px] font-bold italic  text-green-800 '>Final Result</h2>
               <div className='mt-10 mb-10 p-6'>
                  {percentage<50 && 
                    <p className='text-[22px] font-thin'><span className='text-orange-600 italic text-[25px]'>Oops!</span> you secured <span className='font-semibold text-[30px] italic'>{percentage}%</span> result.</p>
                  }
                    {percentage>=50 && 
                    <p className='text-[22px] font-thin'><span className='text-green-800 italic text-[25px]'>Excellent!</span> you secured <span className='font-semibold text-[30px] italic'>{percentage}%</span> result.</p>
                  }
               </div>
             </div>
           
                {/* ====================================== close button ======================================== */}
                <div onClick={()=>handleClose()} className='flex flex-row w-full  justify-end mt-4 pr-4'>
                      <button className='flex justify-items-end p-1 pb-2 px-8 text-white rounded-md bg-orange-500' >Close</button>
              </div>
             
       </div>
    </div>
   )
  }
}
