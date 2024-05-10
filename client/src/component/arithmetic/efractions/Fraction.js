import React, {useState, useEffect} from 'react'
import Fraction1 from './Fraction1'
import Fraction2 from './Fraction2'



const Fraction = ({efraction, difficulty2}) => {
 
  const [randomFrac, setRandomFrac] = useState({
    numerator : 1,
    denominator : 1
  })

  const [inputs, setInputs] = useState({
    inputNum: 2,
    inputDenom: 3
  })

  const [inputRange, setInputRange] = useState({
    min: 1,
    max: 9
  })


  function clearInputs() {
    setInputs({
      inputNum: null,
      inputDenom: null
     })
  }

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
  



  const handleNext = (difficulty2) => {
    clearInputs()
 
  
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
 
  // do {
  //     var negativeCount = 0;
  //     var numerator1 = getRandomNumber(inputRange.min, inputRange.max);
  //     var denominator1 = getRandomNumber(inputRange.min, inputRange.max);

  //     if (numerator1 < 0) negativeCount++;
  //     if (denominator1 < 0) negativeCount++;

  //      // Check if difficulty is 3 and there are more than 1 negative numbers
  //     if (difficulty === 3 && negativeCount>1) {
  //       continue; // Skip this iteration and generate new numbers
  //     }             
    
  // } while (true);

  setRandomFrac({
      numerator: numerator,
      denominator: denominator
  });

  
}

 const multiplyNumber = getMultiplyNumber()
  

  useEffect(() => {
    handleNext(difficulty2)
  }, [difficulty2]);
  

  return (
    <div className='flex flex-col'>
        <div className='math  flex justify-start  mt-2'>
              <div>
                  <div>
                    {efraction===1 && <Fraction1 randomFrac={randomFrac} multiplyNumber={multiplyNumber}/>}    
                    {efraction===2 && <Fraction2 randomFrac={randomFrac} />}           
                                       
                                            
                  </div>
                                
                  

                  <div className='buttons w-full  flex flex-row justify-start mt-14'>
                    <button  className='btn-drill'>Check</button>

                    <button onClick={()=>handleNext()}  className='btn-drill ml-1 md:ml-3'>Next</button>
                  </div>
              </div>   
        </div>      
    </div>
  )
}

export default Fraction
