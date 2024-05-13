import React, {useState, useEffect} from 'react'
import Fraction1 from './Fraction1'
import Fraction2 from './Fraction2'
import Fraction3 from './Fraction3'
import Fraction4 from './Fraction4'
import CheckModal from '../arithmetic/CheckModal'
import SolutionFracModal from './SolutionFracModal'





const Fraction = ({efraction, difficulty2, btnFracNextRef}) => {

  

  
 
  const [randomFrac, setRandomFrac] = useState({
    numerator : 1,
    denominator : 1
  })

  const [inputs, setInputs] = useState({
    inputNum: null,
    inputDenom: null
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
                       
                  </div>

                  <div className='buttons w-full  flex flex-row justify-start mt-14'>
                    <button onClick={()=>handleCheck()}  className='btn-drill'>Check</button>

                    <button onClick={()=>handleNext(difficulty2)} ref={btnFracNextRef}  className='btn-drill ml-1 md:ml-3'>Next</button>
                  </div>
              </div>   
        </div>   

        <CheckModal showCheckModal={showCheckModal}  setShowSolutionModal={setShowSolutionModal} setShowCheckModal={setShowCheckModal} result={result} />   

        <SolutionFracModal efraction={efraction} showSolutionModal={showSolutionModal} setShowSolutionModal={setShowSolutionModal}  setShowCheckModal={setShowCheckModal} randomFrac={randomFrac} inputs={inputs} multiplyNumber={multiplyNumber} numFactors={numFactors} denomFactors={denomFactors}/>
    </div>
  )
}

export default Fraction
