import React, {useState, useEffect} from 'react'
import Fraction1 from './Fraction1'
import Fraction2 from './Fraction2'
import Fraction3 from './Fraction3'
import Fraction4 from './Fraction4'
import CheckModal from '../arithmetic/CheckModal'
import SolutionFracModal from './SolutionFracModal'
import CFraction1 from './CFraction1'
import CFraction2 from './CFraction2'
import CFraction3 from './CFraction3'
import CFraction4 from './CFraction4'
import Decimal1 from './Decimal1'
import Decimal2 from './Decimal2'
import Decimal3 from './Decimal3'
import Decimal4 from './Decimal4'






const Fraction = ({efraction, difficulty2, btnFracNextRef}) => {

  

  
 
  const [randomFrac, setRandomFrac] = useState({
    numerator : 1,
    denominator : 1
  })

  const [randomDec, setRandomDec] = useState({
    numerator1 : 1,
    denominator1 : 1,
    number: 1,
    decimal: 5,
    numerator2: 1,
    denominator2: 1
  })

  const [inputs, setInputs] = useState({
    inputNum: null,
    inputDenom: null
  })

  const [inputsDec, setInputsDec] = useState({
    numerator1: null,
    denominator1: null,
    numerator2: null,
    denominator2: null,
    numerator3: null,
    denominator3: null,
    inputsNum: null,
    inputsDenom:null

  })

  const [inputs4, setInputs4] = useState({
    numerator: null,
    denominator: null
   })

  const [inputRange, setInputRange] = useState({
    min: 1,
    max: 9
  })

  const [result, setResult] = useState(false)
  const [showSolutionModal, setShowSolutionModal] = useState(false)
  const [showCheckModal, setShowCheckModal] =  useState(false)
  const [multiplyNumber, setMultiplyNumber] = useState(1)
  const [mathInputNull, setMathInputNull] = useState(false)


  function clearInputs() {
    setInputs({
      inputNum: null,
      inputDenom: null
     })
    
     setInputs4({
      inputNum: null,
      inputDenom: null
     })

     setInputsDec({
      numerator1: null,
      denominator1: null,
      numerator2: null,
      denominator2: null,
      numerator3: null,
      denominator3: null,
      inputsNum: null,
      inputsDenom:null
     })
  }

  function findPrimeFactors(num){
    let factors = [];
    let divisor = 2;

    while (num > 1) {
        if (num % divisor === 0) {
            factors.push(divisor);
            num /= divisor;
        } else {
            divisor++;
        }
    }

    return factors;
}

   const numFactors = findPrimeFactors(randomFrac.numerator)
   const denomFactors = findPrimeFactors(randomFrac.denominator)


  useEffect(() => {
   setMultiplyNumber(getMultiplyNumber())
   
    handleNext(difficulty2)
    clearInputs()

    
   
  }, [difficulty2, efraction]);

  function getRandomNumber(min, max) {
    let randomNumber;
    do {
      randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    } 
    while (randomNumber===0)
    
    return randomNumber;
  }

  
  function  getMultiplyNumber() {
    return Math.floor(Math.random() * 3) + 2;
  }
  
 
  function simplifyFraction(numerator, denominator) {

       if(numerator=="" || denominator==""){
        return;
       }
        // Function to find greatest common divisor (GCD) using Euclid's algorithm
        const gcd = (a, b) => {
            if (b === 0) {
                return a;
            }
            return gcd(b, a % b);
        };
    
        // Find the GCD of numerator and denominator
        const gcdValue = gcd(numerator, denominator);
    
        // Divide both numerator and denominator by their GCD to get the smallest equivalent fraction
        const smallestNumerator = numerator / gcdValue;
        const smallestDenominator = denominator / gcdValue;
    
        return [smallestNumerator, smallestDenominator];
    }



  const handleNext = (difficulty2) => {
    setMultiplyNumber(getMultiplyNumber())
  clearInputs()
  setMathInputNull(true)
  const decimalPoint = getRandomNumber(2,9)
  
  switch (difficulty2) {
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
//////--------/////////-------random numbers for fractions -----//////////-------///////////////////
  var numerator = getRandomNumber(inputRange.min, inputRange.max);
  var denominator = getRandomNumber(inputRange.min, inputRange.max);
 

  if(difficulty2===3 && numerator<0 && denominator<0){
    console.log("both are negative")
    denominator = Math.abs(denominator)
  }

  setRandomFrac({
      numerator: numerator,
      denominator: denominator
  });
////////------/////////----------- random numbers for decimal -------///////////------------/////////////////
  
  var numerator1 = getRandomNumber(inputRange.min, inputRange.max);
  var denominator1 = getRandomNumber(inputRange.min, inputRange.max);
  var num = getRandomNumber(inputRange.min, inputRange.max)
  var numerator2 = getRandomNumber(inputRange.min, inputRange.max);
  var denominato2 = getRandomNumber(inputRange.min, inputRange.max);

  setRandomDec({
    numerator1: numerator1,
    denominator1: denominator1,
    number: num,
    decimal: decimalPoint,
    numerator2: numerator2,
    denominator2: denominato2
  })
}

const handleCheck = () => {
  
  let checkResult=1;
  let inputResult=2;

  const num = Number(inputs.inputNum);
  const denom = Number(inputs.inputDenom)

  if(efraction===1){
    if(inputs.inputNum==multiplyNumber && inputs.inputDenom==multiplyNumber){
      checkResult=1;
      inputResult=1;
    }
  }

  if(efraction===2){
    const [fracNum, fracDenom] = simplifyFraction(randomFrac.numerator, randomFrac.denominator)
    const  [inputNum, inputDenom] = simplifyFraction(inputs.inputNum || 2.5, inputs.inputDenom || 1.3)
    if(fracNum==inputNum && fracDenom==inputDenom){
      checkResult=1;
      inputResult=1;
    }
  }

  if(efraction===3){
    if(inputs.inputNum == randomFrac.numerator*multiplyNumber ){
      checkResult=1;
      inputResult=1;
    }
  }

  if(efraction===4){
    if(randomFrac.numerator>=inputs4.inputNum &&  randomFrac.denominator>=inputs4.inputDenom){
      if(inputs4.inputNum!==null && inputs4.inputDenom!==null && inputs.inputNum!==null && inputs.inputDenom!==null){
        const [fracNum, fracDenom] = simplifyFraction(randomFrac.numerator, randomFrac.denominator)
        const [inputs4Num, inputs4Denom] = simplifyFraction(inputs4.inputNum, inputs4.inputDenom)
        const [inputsNum, inputsDenom] = simplifyFraction(inputs.inputNum, inputs.inputDenom)
  
        if(fracNum == inputs4Num && inputs4Num == inputsNum && fracDenom == inputs4Denom && inputs4Denom == inputsDenom && fracNum==inputs.inputNum && fracDenom==inputs.inputDenom) {
          checkResult=1;
          inputResult=1;
        }
   
      }
     
    }
   
  }
/////--------////////---------- complex fraction checks --------/////////----------///////////////////
  if(efraction===5){ 
     if (inputsDec.numerator1!==null && inputsDec.denominator1!== null &&
         inputsDec.numerator2!==null && inputsDec.denominator2!== null &&
         inputsDec.numerator3!==null && inputsDec.denominator3!== null &&
         inputsDec.inputsNum!==null && inputsDec.inputsDenom!==null)
         {

         
     const [simplyNum, simplyDenom] =  simplifyFraction(randomDec.number * randomDec.denominator2 + randomDec.numerator2, randomDec.denominator2)
    
    //////----------------- multiply random numbers for final  check --------///////////////
    const [simplyRandomNum, simplyRandomDenom] = simplifyFraction(simplyNum * randomDec.numerator1, simplyDenom * randomDec.denominator1) 
    
    //////------------------- multiply random numbers with inputs-3 for final check ------//////////
    const [simplyInputs3Num, simplyInputs3Denom] = simplifyFraction(randomDec.numerator1 * inputsDec.numerator3, randomDec.denominator1 * inputsDec.denominator3)
    
    /////-------------------- simplify the last Inputs for final check ----------////////////////////
    const [simplyInputsNum, simplyInputsDenom] = simplifyFraction(inputsDec.inputsNum, inputsDec.inputsDenom)
    

    if(randomDec.number== Number(inputsDec.numerator1) &&
       inputsDec.denominator1==1 &&
       randomDec.numerator2== Number(inputsDec.numerator2) &&
       randomDec.denominator2== Number(inputsDec.denominator2) &&

       simplyRandomNum== simplyInputs3Num &&
       simplyRandomDenom== simplyInputs3Denom &&
      
       simplyRandomNum == simplyInputsNum &&
       simplyRandomDenom == simplyInputsDenom) 
      {
        checkResult=1
        inputResult=1
      }

    }
  }

  if(efraction===6){ 
    if (inputsDec.numerator1!==null && inputsDec.denominator1!== null &&
        inputsDec.numerator2!==null && inputsDec.denominator2!== null &&
        inputsDec.numerator3!==null && inputsDec.denominator3!== null &&
        inputsDec.inputsNum!==null && inputsDec.inputsDenom!==null)
        {

        
    const [simplyNum, simplyDenom] =  simplifyFraction(randomDec.number * randomDec.denominator2 + randomDec.numerator2, randomDec.denominator2)
   
   //////----------------- multiply random numbers for final  check --------///////////////
   const [simplyRandomNum, simplyRandomDenom] = simplifyFraction(simplyDenom * randomDec.numerator1, simplyNum * randomDec.denominator1) 
   
   //////------------------- multiply random numbers with inputs-3 for final check ------//////////
   const [simplyInputs3Num, simplyInputs3Denom] = simplifyFraction(randomDec.numerator1 * inputsDec.denominator3, randomDec.denominator1 * inputsDec.numerator3)
   
   /////-------------------- simplify the last Inputs for final check ----------////////////////////
   const [simplyInputsNum, simplyInputsDenom] = simplifyFraction(inputsDec.inputsNum, inputsDec.inputsDenom)
   


   if(randomDec.number== Number(inputsDec.numerator1) &&
      inputsDec.denominator1==1 &&
      randomDec.numerator2== Number(inputsDec.numerator2) &&
      randomDec.denominator2== Number(inputsDec.denominator2) &&

      simplyRandomNum== simplyInputs3Num &&
      simplyRandomDenom== simplyInputs3Denom &&
     
      simplyRandomNum == simplyInputsNum &&
      simplyRandomDenom == simplyInputsDenom) 
     {
       checkResult=1
       inputResult=1
     }

   }
 }

  if(efraction===7){ 
    if (inputsDec.numerator1!==null && inputsDec.denominator1!== null &&
        inputsDec.numerator2!==null && inputsDec.denominator2!== null &&
        inputsDec.numerator3!==null && inputsDec.denominator3!== null &&
        inputsDec.inputsNum!==null && inputsDec.inputsDenom!==null)
        {

        
    const [simplyNum, simplyDenom] =  simplifyFraction(randomDec.number * randomDec.denominator2 + randomDec.numerator2, randomDec.denominator2)
   
   //////----------------- multiply random numbers for final  check --------///////////////
   const [simplyRandomNum, simplyRandomDenom] = simplifyFraction((randomDec.numerator1*simplyDenom)+(simplyNum*randomDec.denominator1), randomDec.denominator1*simplyDenom) 
   
   //////------------------- multiply random numbers with inputs-3 for final check ------//////////
   const [simplyInputs3Num, simplyInputs3Denom] = simplifyFraction((randomDec.numerator1*inputsDec.denominator3)+(inputsDec.numerator3*randomDec.denominator1), randomDec.denominator1*inputsDec.denominator3)
   
   /////-------------------- simplify the last Inputs for final check ----------////////////////////
   const [simplyInputsNum, simplyInputsDenom] = simplifyFraction(inputsDec.inputsNum, inputsDec.inputsDenom)
   
   console.log("simply frac", simplyRandomNum, simplyRandomDenom, simplyInputs3Num, simplyInputs3Denom, simplyInputsNum, simplyInputsDenom)

   if(randomDec.number== Number(inputsDec.numerator1) &&
      inputsDec.denominator1==1 &&
      randomDec.numerator2== Number(inputsDec.numerator2) &&
      randomDec.denominator2==Number(inputsDec.denominator2)  &&

      simplyRandomNum== simplyInputs3Num &&
      simplyRandomDenom== simplyInputs3Denom &&
     
      simplyRandomNum == simplyInputsNum &&
      simplyRandomDenom == simplyInputsDenom) 
     {
       checkResult=1
       inputResult=1
     }

   }
 }

 if(efraction===8){ 
  if (inputsDec.numerator1!==null && inputsDec.denominator1!== null &&
      inputsDec.numerator2!==null && inputsDec.denominator2!== null &&
      inputsDec.numerator3!==null && inputsDec.denominator3!== null &&
      inputsDec.inputsNum!==null && inputsDec.inputsDenom!==null)
      {

      
  const [simplyNum, simplyDenom] =  simplifyFraction(randomDec.number * randomDec.denominator2 + randomDec.numerator2, randomDec.denominator2)
 
 //////----------------- multiply random numbers for final  check --------///////////////
 const [simplyRandomNum, simplyRandomDenom] = simplifyFraction((randomDec.numerator1*simplyDenom)-(simplyNum*randomDec.denominator1), randomDec.denominator1*simplyDenom) 
 
 //////------------------- multiply random numbers with inputs-3 for final check ------//////////
 const [simplyInputs3Num, simplyInputs3Denom] = simplifyFraction((randomDec.numerator1*inputsDec.denominator3)-(inputsDec.numerator3*randomDec.denominator1), randomDec.denominator1*inputsDec.denominator3)
 
 /////-------------------- simplify the last Inputs for final check ----------////////////////////
 const [simplyInputsNum, simplyInputsDenom] = simplifyFraction(inputsDec.inputsNum, inputsDec.inputsDenom)
 
 console.log("simply frac", simplyRandomNum, simplyRandomDenom, simplyInputs3Num, simplyInputs3Denom, simplyInputsNum, simplyInputsDenom)

 if(randomDec.number== Number(inputsDec.numerator1) &&
    inputsDec.denominator1==1 &&
    randomDec.numerator2== Number(inputsDec.numerator2) &&
    randomDec.denominator2==Number(inputsDec.denominator2)  &&

    simplyRandomNum== simplyInputs3Num &&
    simplyRandomDenom== simplyInputs3Denom &&
   
    simplyRandomNum == simplyInputsNum &&
    simplyRandomDenom == simplyInputsDenom) 
   {
     checkResult=1
     inputResult=1
   }

 }
}



  

  /////////-------------------------------- final result check -------------------//////////////////
  if(checkResult==inputResult){
    setResult(true)
  }
  else{
    setResult(false)
  }
  setShowCheckModal(true)
}


 
  


  

  return (
    <div className='flex flex-col'>
        <div className='math  flex justify-start  mt-2'>
              <div>
                  <div>
                    {efraction===1 && <Fraction1 randomFrac={randomFrac} multiplyNumber={multiplyNumber} inputs={inputs} setInputs={setInputs} />}    
                    {efraction===2 && <Fraction2 randomFrac={randomFrac} inputs={inputs} setInputs={setInputs} />}   
                    {efraction===3 && <Fraction3 randomFrac={randomFrac} multiplyNumber={multiplyNumber} inputs={inputs} setInputs={setInputs}/>} 

                    {efraction===4 && <Fraction4 randomFrac={randomFrac} multiplyNumber={multiplyNumber} inputs={inputs} setInputs={setInputs} inputs4={inputs4} setInputs4={setInputs4} mathInputNull={mathInputNull} setMathInputNull={setMathInputNull} />}    
                     
                    {efraction===5 && <CFraction1 randomDec={randomDec} inputsDec={inputsDec} setInputsDec={setInputsDec} mathInputNull={mathInputNull} setMathInputNull={setMathInputNull}  />}  
                    {efraction===6 && <CFraction2 randomDec={randomDec} inputsDec={inputsDec} setInputsDec={setInputsDec} mathInputNull={mathInputNull} setMathInputNull={setMathInputNull} />}  
                    {efraction===7 && <CFraction3 randomDec={randomDec} inputsDec={inputsDec} setInputsDec={setInputsDec} mathInputNull={mathInputNull} setMathInputNull={setMathInputNull}  />}  
                    {efraction===8 && <CFraction4 randomDec={randomDec} inputsDec={inputsDec} setInputsDec={setInputsDec} mathInputNull={mathInputNull} setMathInputNull={setMathInputNull}  />}  

                    {efraction===9 && <Decimal1 randomDec={randomDec} inputsDec={inputsDec} setInputsDec={setInputsDec} mathInputNull={mathInputNull} setMathInputNull={setMathInputNull} />}   
                    {efraction===10 && <Decimal2 randomDec={randomDec} inputsDec={inputsDec} setInputsDec={setInputsDec} mathInputNull={mathInputNull} setMathInputNull={setMathInputNull} />}  

                    {efraction===11 && <Decimal3 randomDec={randomDec} inputsDec={inputsDec} setInputsDec={setInputsDec} mathInputNull={mathInputNull} setMathInputNull={setMathInputNull}/>}
                    {efraction===12 && <Decimal4 randomDec={randomDec} inputsDec={inputsDec} setInputsDec={setInputsDec} mathInputNull={mathInputNull} setMathInputNull={setMathInputNull} />}
                       
                  </div>

                  <div className='buttons w-full  flex flex-row justify-start mt-14'>
                    <button onClick={()=>handleCheck()}  className='btn-drill'>Check</button>

                    <button onClick={()=>handleNext(difficulty2)} ref={btnFracNextRef}  className='btn-drill ml-1 md:ml-3'>Next</button>
                  </div>
              </div>   
        </div>   

        <CheckModal showCheckModal={showCheckModal}  setShowSolutionModal={setShowSolutionModal} setShowCheckModal={setShowCheckModal} result={result} />   

        <SolutionFracModal efraction={efraction} showSolutionModal={showSolutionModal} setShowSolutionModal={setShowSolutionModal}  setShowCheckModal={setShowCheckModal} randomFrac={randomFrac} inputs={inputs} multiplyNumber={multiplyNumber} numFactors={numFactors} denomFactors={denomFactors} randomDec={randomDec} inputsDec={inputsDec}/>
    </div>
  )
}

export default Fraction
