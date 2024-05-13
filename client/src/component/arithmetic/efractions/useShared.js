// useShared.js
import { useState, useEffect, useContext} from 'react';

function useShared(difficulty2) {
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

  // Other shared functionality...

  return {
    
     randomFrac,
     setRandomFrac,
     getMultiplyNumber,
     clearInputs,
     inputRange,
     getRandomNumber,
     handleNext,
     

  };
}

export default useShared;
