import React, {useState, useEffect, useRef} from 'react'

import CheckModal from './CheckModal';
import RandomSheets from './RandomSheets';
import SolutionModal from './SolutionModal';
import DropdownMulti from './DropdownMulti';
import MathInput from './MathInput';
import play from './../../../images/play.png'



const Arithmetic = () => {

  const btnNextRef = useRef(null)

  const [randomNums, setRandomNums] = useState({
    numerator1 : 1,
    denominator1 : 1,
    numerator2 : 1,
    denominator2 : 1
  })

  const [divisionInputs, setDivisionInputs] = useState({
    numerator1: 0,
    numerator2: 0,
    denominator1: 0,
    denominator2: 0,
    sign: ''
  })

  const [additionInputs, setAdditionInputs] = useState({
    numerator1: 0,
    numerator2: 0,
    denominator1: 0,
    denominator2: 0
  })

  const [result, setResult] = useState(false)
  const [difficulty, setDifficulty] =  useState(1)
  const [operation, setOperation] = useState(1);
  const [sameDenoms, setSameDenoms] = useState(true)
  const [mixOperation, setMixOperation] =  useState(0);

  const [inputs, setInputs] = useState({
    inputNum: 0,
    inputDenom: 0
  })

  const [inputRange, setInputRange] = useState({
    min:1,
    max:9
  })

  const [showRandomSheets, setShowRandomSheets] = useState(false)
  const [totalSheets, setTotalSheets] = useState(0);
  const [showCheckModal, setShowCheckModal] = useState(false)
  const [showSolutionModal, setShowSolutionModal]= useState(false)
  const [prevRandomNums, setPrevRandomNums] = useState();
  
 
  function clearAllInputs() {
    setInputs({
      inputNum: null,
      inputDenom: null
     })

     setAdditionInputs({
      numerator1:'',
      numerator2:'',
      denominator1:'',
      denominator2:''
     })

     setDivisionInputs({
      numerator1:'',
      numerator2:'',
      denominator1:'',
      denominator2:'',
      sign:''
     })   
  }
  useEffect(() => {

    if (prevRandomNums !== randomNums) {
      handleNext();
      setPrevRandomNums(randomNums);
    }
     
    clearAllInputs()    
 
    handleNext()
  }, [difficulty, operation, sameDenoms, showRandomSheets, totalSheets])


 
  
  
 
  function getRandomNumber(min, max) {
    let randomNumber;
    do {
      randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    } 
    while (randomNumber===0)
    
    return randomNumber;
  }

  const getRandomOperation = () => {
    let randomNum;
    do {
      randomNum = Math.floor(Math.random() * 4) + 1;
    } while (randomNum === 3); 
    return randomNum;
  };

  const handleNext = () => {
      clearAllInputs()
    if(mixOperation>0){
       setOperation(0)
       const operator = getRandomOperation()
       setMixOperation(operator)
    }

    switch (difficulty) {
      case 1: 
          setInputRange({min:1, max:9});
        break;

      case 2:    
      setInputRange({min:1, max:30});
        break;

      case 3:
        setInputRange({min:-9, max:9});
      break;

      case 4:
        setInputRange({min:-9, max:9});
    break;

      default:
        setInputRange({min:1, max:9});
        break;
    }
   
    do {
        var negativeCount = 0;
        var numerator1 = getRandomNumber(inputRange.min, inputRange.max);
        var denominator1 = getRandomNumber(inputRange.min, inputRange.max);
        var numerator2 = getRandomNumber(inputRange.min, inputRange.max);
        var denominator2 = getRandomNumber(inputRange.min, inputRange.max);

        if (numerator1 < 0) negativeCount++;
        if (denominator1 < 0) negativeCount++;
        if (numerator2 < 0) negativeCount++;
        if (denominator2 < 0) negativeCount++;  
        
        console.log("negative count", negativeCount)
         // Check if difficulty is 3 and there are more than 1 negative numbers
        if ((difficulty === 3 && negativeCount>1) || (sameDenoms && denominator1<0)) {
          continue; // Skip this iteration and generate new numbers
        }       

      // when operation is add or subtranct and sameDenoms is true
        if(operation<3 && sameDenoms){
          var checkDeno = denominator1 * denominator1;
        }
        else{
          checkDeno = denominator1 * denominator2;
        }
        
        if(operation>0){
            if(operation===1)  var checkNum = (numerator1 * denominator2) + (numerator2 * denominator1);
            if(operation===2)  var checkNum = (numerator1 * denominator2) - (numerator2 * denominator1);
            if(operation===3)  var checkNum = (numerator1 * numerator2);
            if(operation===4){
              checkDeno= denominator1*numerator2;
              checkNum= numerator1*denominator2
            }
        }

        if(mixOperation>0){
          console.log("mix operation in ", mixOperation)
            if(mixOperation===1)  var checkNum = (numerator1 * denominator2) + (numerator2 * denominator1);
            if(mixOperation===2)  var checkNum = (numerator1 * denominator2) - (numerator2 * denominator1);
            if(mixOperation===3)  var checkNum = (numerator1 * numerator2);
            if(mixOperation===4){
              checkDeno= denominator1*numerator2;
              checkNum= numerator1*denominator2
            }
        }
        

        var checkResult = checkNum / checkDeno;
        console.log("checkresult is ", checkResult)
        
        if (difficulty === 3) {
            if (checkResult > 0) {
                break; // Exit the loop if checkResult is greater than 0
            }
        } else {
            break; // Exit the loop if difficulty is not 3
        }
    } while (true);

    setRandomNums({
        numerator1: numerator1,
        denominator1: denominator1,
        numerator2: numerator2,
        denominator2: denominator2
    });

    console.log("random in the end. ", randomNums)
    
  }



  const handleSetTotalSheets = (value) => {
    const intValue = parseInt(value);
  if (!isNaN(intValue) && intValue >= 3 && intValue <= 20 ) {
    setTotalSheets(intValue);
    setShowRandomSheets(true)
  } else {
    setTotalSheets(0)

  }
    
  };

  const handleCheck = () => {
    let checkResult;
    let inputResult = inputs.inputNum/inputs.inputDenom;

    if(operation===1 || mixOperation===1){
        if(sameDenoms){
          const checkDeno = randomNums.denominator1;
          const checkNum = randomNums.numerator1  + randomNums.numerator2;
           checkResult = checkNum / checkDeno;
        }
        else{
              const checkDeno = randomNums.denominator1 * randomNums.denominator2
              const checkNum = (randomNums.numerator1 * randomNums.denominator2) + (randomNums.numerator2 * randomNums.denominator1);
            
              if(parseInt(additionInputs.numerator1)===randomNums.denominator2 
                && parseInt(additionInputs.denominator1)===randomNums.denominator2 
                && parseInt(additionInputs.numerator2)===randomNums.denominator1 
                && parseInt(additionInputs.denominator2)===randomNums.denominator1)
              {
                 checkResult = checkNum / checkDeno;
              }
              else{
                 checkResult = checkNum;
              }
              
        }
        inputResult = inputs.inputNum/inputs.inputDenom;
    }

    if(operation===2 || mixOperation===2){
      if(sameDenoms){
        const checkDeno = randomNums.denominator1;
        const checkNum = randomNums.numerator1  - randomNums.numerator2;
         checkResult = checkNum / checkDeno;
        
      }
      else{
            const checkDeno = randomNums.denominator1 * randomNums.denominator2
            const checkNum = (randomNums.numerator1 * randomNums.denominator2) - (randomNums.numerator2 * randomNums.denominator1);

            if(parseInt(additionInputs.numerator1)===randomNums.denominator2 
            && parseInt(additionInputs.denominator1)===randomNums.denominator2 
            && parseInt(additionInputs.numerator2)===randomNums.denominator1 
            && parseInt(additionInputs.denominator2)===randomNums.denominator1)
          {
             checkResult = checkNum / checkDeno;
          }
          else{
             checkResult = checkNum;
          }
            
      }
      inputResult = inputs.inputNum/inputs.inputDenom;
    }

    if(operation===3 || mixOperation===3){
      const checkNum = randomNums.numerator1 * randomNums.numerator2;
      const checkDeno = randomNums.denominator1 * randomNums.denominator2;
     
      checkResult = checkNum / checkDeno;
      inputResult = inputs.inputNum/inputs.inputDenom;
    }

    if(operation===4 || mixOperation===4){
        if(difficulty===1){
          
          var deno2 = parseInt(divisionInputs.denominator2)
          var num2 = parseInt(divisionInputs.numerator2)
          var randomsFraction = randomNums.numerator2/randomNums.denominator2
          var divisionFraction = deno2/num2
          console.log("fracion ", randomsFraction, divisionFraction, typeof(randomsFraction), typeof(divisionFraction))
          var epsilon = 0.00001; // A small number
          if(randomsFraction===divisionFraction)
          {
            //setResult(true)
            console.log(
              "true is hit in division"
            )
            checkResult=1;
            inputResult=1;
            console.log(checkResult, inputResult)
          }
          else{
            //setResult(false)
            checkResult=1;
            inputResult=2;
          }
        }

        if(difficulty>1){
          console.log("operation 4 and diffi is >1==")
          var deno2 = parseInt(divisionInputs.denominator2)
          var num2 = parseInt(divisionInputs.numerator2)
          var deno1 = parseInt(divisionInputs.denominator1)
          var num1 = parseInt(divisionInputs.numerator1)
          
          var divisionFraction1 = divisionInputs.numerator1/divisionInputs.denominator1
          var divisionFraction1r = divisionInputs.denominator1/divisionInputs.numerator1
          var divisionFraction2 = divisionInputs.numerator2/divisionInputs.denominator2
          var divisionFraction2r = divisionInputs.denominator2/divisionInputs.numerator2
          var randomFraction1 = randomNums.numerator1/randomNums.denominator1
          var randomFraction2 = randomNums.numerator2/randomNums.denominator2

          console.log("all division fractions ", randomNums.numerator2, deno2, randomNums.denominator2, randomFraction1, divisionFraction1)
          if((randomFraction1===divisionFraction1 &&
              randomFraction2===divisionFraction2r &&
              divisionInputs.sign==='*'
            
            )
            ||
            (randomFraction2===divisionFraction2 &&
              randomFraction1===divisionFraction1r &&
              divisionInputs.sign==='*'
            )){
            //setResult(true)
            checkResult=1;
            inputResult=1;
          }
         
        

          else{
           // setResult(false)
           checkResult=1;
           inputResult=2;
          }
        }
     
    }

   
    
    if(checkResult==inputResult){
      setResult(true)
      console.log("result is true", result)
    }
    else{
      setResult(false)
    }
    console.log("result right before check", result)
    setShowCheckModal(true)
  }

  return (
    <div className='flex flex-col'>
        <div className='flex flex-row  '>
            <div className=' w-0 sm:w-[5%] md:w-[15%] bg-gray-100'>          
            </div>
           <div className=' w-full sm:w-[95%] md:w-[85%] bg-gray-100 pb-8 md:pb-12'>
              <div className='px-[8px] sm:px-[50px] md:px-[20px]  lg:pr-[300px] w-full flex flex-col   pt-2 mt-[30px]'>
        
            {/******************************  difficulty level *******************************/}
               <div className='difficulty-div w-100 h-10 text-[10px] sm:text-[14px] md:text-[18px] sm:mb-4 md:mb-6 flex flex-row  justify-start'>
              <div className=' w-[25%]  flex items-center justify-start'>
                  <DropdownMulti setOperation={setOperation} setMixOperation={setMixOperation} setSameDenoms={setSameDenoms} operation={operation} />
              </div >
               </div>
    
      
                <h4 className='font-inter text-[11px] sm:text-[14px] md:text-[16px] text-black text-start'>Level of Difficulty</h4>
    
               <div className='difficulty-div w-100 h-6 sm:h-8 md:h-11 text-[12px] sm:text-[14px] md:text-[16px] mt-2  md:rounded-sm flex flex-row  justify-start'>
                <button onClick={()=> {setDifficulty(1)
                  setTimeout(() => {
                   btnNextRef.current.click();
                  }, 20)}} className={`flex-1 border font-inter font-semibold rounded-l-sm md:rounded-l-md border-gray-700 hover:tracking-widest transition-all duration-300 ease-in-out ${difficulty==1 && 'bg-gray-700 text-white hover:tracking-normal'} `}>Simple</button>
    
                <button onClick={()=> {setDifficulty(2)
                setTimeout(() => {
                btnNextRef.current.click();
                 }, 20)}} className={`flex-1 font-inter font-semibold border border-gray-700 hover:tracking-widest transition-all duration-300 ease-in-out ${difficulty==2 && 'bg-gray-700 text-white hover:tracking-normal'} `}>Easy</button>
    
                <button onClick={()=> {setDifficulty(3)
                 setTimeout(() => {
                btnNextRef.current.click();
                 }, 20)}} className={`flex-1 font-inter font-semibold border border-gray-700 hover:tracking-widest transition-all duration-300 ease-in-out ${difficulty==3 && 'bg-gray-700 text-white hover:tracking-normal'} `}>Medium</button>
    
                  <button onClick={()=> {setDifficulty(4)
                  setTimeout(() => {
                 btnNextRef.current.click();
                  }, 20)}} className={`flex-1 font-inter  rounded-r-sm md:rounded-r-md font-semibold border border-gray-700 hover:tracking-widest transition-all duration-300 ease-in-out ${difficulty==4 && 'bg-gray-700 text-white hover:tracking-normal'} `}>Hard</button>
             </div>
          
    
          
              {/******************************  Drill section  *******************************/}
             <div className='card-drill'> 
                    <div className='math  flex justify-start  mt-6'>
                          {(operation===4 || mixOperation===4)?
                              <div>
                                {difficulty===1 &&
                                      <table className='digit'>
                                      <tr className=''>
                                        <td className='first-col px-2 '>
                                            <table className=''>
                                              <tbody className=''>
                                                  <tr className=''>
                                                    {randomNums.numerator1}
                                                  </tr>
                                                  <tr className='line-tr'>
                                                      <div className='line'></div>
                                                  </tr>
                                                  <tr>
                                                    {randomNums.denominator1}
                                                  </tr>
                                              </tbody>
                                            </table>
                                            
                                        </td>
    
                                    
          
                                        <td className='opertor px-4 '>
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
                                                      { mixOperation===1 && <h2>+</h2>}
                                                      { mixOperation===2 && <h2>-</h2>}
                                                      { mixOperation===3 && <h2>&times;</h2>}
                                                      { mixOperation===4 && <h2>&divide;</h2>}
                                                  </tr>
          
                                                  }
                                              </tbody>
                                            </table>
                                        </td>
          
                                        <td className='second-col px-2 '>
                                            <table>
                                              <tbody>
                                                  <tr>
                                                    {randomNums.numerator2}
                                                  </tr>
                                                  <tr className='line-tr'>
                                                      <div className='line'></div>
                                                  </tr>
                                                  <tr>
                                                    {/* //{(operation<3 && sameDenoms)? randomNums.denominator1 : randomNums.denominator2} */}
                                                    {randomNums.denominator2}
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
                                                      <div className='line'></div>
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
                                                    <input value={divisionInputs.sign} onChange={(e)=>setDivisionInputs({...divisionInputs, sign: e.target.value})} id='sign' className='input-div digit-input text-center'   />
                                                  </td>
                                                </tr>
                                              </tbody>
                                            </table>
                                        </td>
          
                                        <td className='second-col md:px-4'>
                                            <table>
                                              <tbody>
                                                  <tr className=''>
                                                    <input value={divisionInputs.numerator2} onChange={(e)=>setDivisionInputs({...divisionInputs, numerator2: e.target.value})} id='divisionNum2' className='input digit-input'/>
                                                  </tr>
                                                  <tr className='line-tr'>
                                                      <div class="line-input"></div>
                                                  </tr>
                                                  <tr>
                                                    <input value={divisionInputs.denominator2} onChange={(e)=>setDivisionInputs({...divisionInputs, denominator2: e.target.value})} id='divisionDeno2' className='input digit-input '/>
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
                                        <td className='first-col '>
                                            <table className=''>
                                              <tbody className=''>
                                                  <tr className=''>
                                                    {randomNums.numerator1}
                                                  </tr>
                                                  <tr className='line-tr'>
                                                      <div className="line"></div>
                                                  </tr>
                                                  <tr>
                                                    {randomNums.denominator1}
                                                  </tr>
                                              </tbody>
                                            </table>
                                        </td>
          
                                        <td className='opertor px-2  md:pl-4'>
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
                                                      { mixOperation===1 && <h2>+</h2>}
                                                      { mixOperation===2 && <h2>-</h2>}
                                                      { mixOperation===3 && <h2>&times;</h2>}
                                                      { mixOperation===4 && <h2>&divide;</h2>}
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
                                                    {/* {(operation<3 && sameDenoms)? randomNums.denominator1 : randomNums.denominator2}
                                                      */} 
                                                      {randomNums.denominator2}
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
                                                    <input value={divisionInputs.numerator1} onChange={(e)=>setDivisionInputs({...divisionInputs, numerator1: e.target.value})} id='divisionNum1' className='input digit-input'/>
                                                  </tr>
                                                  <tr className='line-tr'>
                                                      <div class="line-input"></div>
                                                  </tr>
                                                  <tr>
                                                    <input value={divisionInputs.denominator1} onChange={(e)=>setDivisionInputs({...divisionInputs, denominator1: e.target.value})} id='divisionDeno1' className='input digit-input '/>
                                                  </tr>
                                              </tbody>
                                            </table>
                                        </td>  
          
                                        <td className='opertor px-2 md:px-4  flex items-center'>
                                            <table>
                                              <tbody className=''>
                                                  <tr>
                                                  <td className="text-center"> {/* Add a td element to center the input */}
                                                    <input value={divisionInputs.sign} onChange={(e)=>setDivisionInputs({...divisionInputs, sign: e.target.value})} id='divisionSign' className='input-div digit-input text-center'   />
                                                  </td>
                                                </tr>
                                              </tbody>
                                            </table>
                                        </td>
          
                                        <td className='second-col md:px-4'>
                                            <table>
                                              <tbody>
                                                  <tr className=''>
                                                    <input value={divisionInputs.numerator2} onChange={(e)=>setDivisionInputs({...divisionInputs, numerator2: e.target.value})} id='divisionNum2' className='input digit-input'/>
                                                  </tr>
                                                  <tr className='line-tr'>
                                                      <div class="line-input"></div>
                                                  </tr>
                                                  <tr>
                                                    <input value={divisionInputs.denominator2} onChange={(e)=>setDivisionInputs({...divisionInputs, denominator2: e.target.value})} id='divisionDeno2' className='input digit-input '/>
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
                                <table className='digit  pl-0 pr-0 justify-start'>
                                <tr className=''>
                                  <td className='first-col flex flex-row justify-start   '>
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
                                              <div className='md:ml-4 flex flex-row '>
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
                                                        <input value={additionInputs.numerator1} onChange={(e)=>setAdditionInputs({...additionInputs, numerator1: e.target.value})} id='num' className='input digit-input'/>
                                                        </div>
                                                      
                                                      </tr>
                                                      <tr className='line-tr'>
                                                          <div class="line-input"></div>
                                                      </tr>
                                                      <tr>
                                                      <input value={additionInputs.denominator1} onChange={(e)=>setAdditionInputs({...additionInputs, denominator1: e.target.value})} id='num' className='input digit-input'/>
                                                      </tr>
                                                  </tbody>
                                                </table>
                                              </div>
                                      }
                                  </td>
    
                                  <td className='opertor px-2 md:px-3 pl-3 md:pl-5 '>
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
                                                { mixOperation===1 && <h2>+</h2>}
                                                { mixOperation===2 && <h2>-</h2>}
                                                { mixOperation===3 && <h2>&times;</h2>}
                                                { mixOperation===4 && <h2>&divide;</h2>}
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
                                                    <tr className='tr-different-deno '>
                                                      <td className=''>
                                                      &times;
                                                      </td>
                                                    </tr>
                                                    </tbody>
                                                  </table>
                                                  <table className=''>
                                                  <tbody className=''>
                                                      <tr className=''>
                                                        <div className='max-w-4'>
                                                        <input value={additionInputs.numerator2} onChange={(e)=>setAdditionInputs({...additionInputs, numerator2: e.target.value})} id='num' className='input digit-input'/>
                                                        </div>
                                                      
                                                      </tr>
                                                      <tr className='line-tr'>
                                                          <div class="line-input"></div>
                                                      </tr>
                                                      <tr>
                                                      <input value={additionInputs.denominator2} onChange={(e)=>setAdditionInputs({...additionInputs, denominator2: e.target.value})} id='num' className='input digit-input'/>
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
                                                
                                                <MathInput  type='inputNum' setInputs={setInputs} inputs={inputs} difficulty={difficulty} operation={operation} sameDenoms={sameDenoms}/>
                                                
                                            </tr>
                                            <tr className='line-tr'>
                                                <div class="line-input"></div>
                                            </tr>
                                            <tr>
                                            <MathInput type='inputDenom' setInputs={setInputs} inputs={inputs} difficulty={difficulty} operation={operation} sameDenoms={sameDenoms}/>
                                            </tr>
                                        </tbody>
                                      </table>
                                  </td>
                                </tr>
                                </table>                   
                          }
                              
                          
                    </div>
    
                    <div className='buttons w-full  flex flex-row justify-start mt-14'>
                          <button onClick={handleCheck} className='btn-drill'>Check</button>
    
                          <button ref={btnNextRef} onClick={handleNext} className='btn-drill ml-1 md:ml-3'>Next</button>
                        
                          
                    </div>
             </div>
    
              <div className='buttons-div w-100 h-10 md:h-14 bg-gray-200 border-l-4 border-gray-500 mt-8 rounded-md flex items-center justify-start '> 
              <button className='flex flex-row items-center px-2 md:px-4'>
                  <img className='w-6 h-6 md:w-10 md:h-10' src={play} alt='play'/>
                  <span className='font-inter text-[8px] md:text-[16px] ml-1 md:ml-2'>View Our Tutorial - Quick tips to complete this exercise</span>
              </button>
          
              </div>
          
              </div>
           </div>
        </div>
    {/*----------------------- random sheets begin here  ---------------------------------------*/}
         <div className='flex flex-row '>
              <div className=' w-0 sm:w-[5%] md:w-[15%] bg-white'>
              
             </div>
             <div className=' w-full sm:w-[95%] md:w-[85%] bg-white '>  
                <div className='px-[8px] sm:px-[50px] md:px-[20px]  lg:pr-[300px] w-full flex flex-col   pt-2 mt-[30px]'>
                 <div className='buttons-div w-100 h-12 md:h-16 bg-white  rounded-md flex items-center justify-start px-4 '> 
                <div className='flex flex-row justify-center  items-center'>
                  <label className='text-[10px] sm:text-[14px] md:text-[20px] font-inter text-blue-600 md:mx-2'>Generate Sheets:</label>
                  <input  className='input digit-input mx-1' onChange={(e)=>handleSetTotalSheets(e.target.value)}/>
                  <div className=' items-end h-4'>
                    <label className='text-[6px] sm:text-[8px] md:text-[12px] italic  md:mx-2 text-gray-400'>Please provide numbers ranging from 6 to 20.</label>
                  </div>
    
                </div>
          
                 </div>
                 <div className=' w-full'>
            {totalSheets>2 && 
              <RandomSheets getRandomNumber={getRandomNumber} showRandomSheets={showRandomSheets}  operation={operation} totalSheets={totalSheets} inputRange={inputRange} additionInputs={additionInputs} setAdditionInputs={setAdditionInputs} sameDenoms={sameDenoms}   difficulty={difficulty}  handleCheck={handleCheck}/>
            }
                 </div>
            
    
            {/* <Temp totalSheets={totalSheets} temp={temp}/> */}
            
              <CheckModal showCheckModal={showCheckModal}  setShowSolutionModal={setShowSolutionModal} setShowCheckModal={setShowCheckModal} result={result} setInputs={setInputs} setAdditionInputs={setAdditionInputs} setDivisionInputs={setDivisionInputs}/>
    
    
              <SolutionModal showSolutionModal={showSolutionModal} setShowSolutionModal={setShowSolutionModal} setShowCheckModal={setShowCheckModal} randomNums={randomNums} operation={operation} mixOperation={mixOperation} inputs={inputs} sameDenoms={sameDenoms}/>
    
                </div>
             </div>
        </div>
    </div>
    
    
  )
}

export default Arithmetic




