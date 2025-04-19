import React, { useState, useEffect, useRef, useContext } from "react";

export const useArithmetic = () => {
  const [randomNums, setRandomNums] = useState({
    numerator1: 1,
    denominator1: 1,
    numerator2: 1,
    denominator2: 1,
  });

  const [divisionInputs, setDivisionInputs] = useState({
    numerator1: 0,
    numerator2: 0,
    denominator1: 0,
    denominator2: 0,
    sign: "",
  });

  const [additionInputs, setAdditionInputs] = useState({
    numerator1: 0,
    numerator2: 0,
    denominator1: 0,
    denominator2: 0,
  });

  const [result, setResult] = useState(false);
  const [difficulty, setDifficulty] = useState(1);
  const [difficulty2, setDifficulty2] = useState(1);
  const [operation, setOperation] = useState(3);
  const [sameDenoms, setSameDenoms] = useState(true);
  const [mixOperation, setMixOperation] = useState(0);
  const [efraction, setEfraction] = useState(0);
  const [mathInputNull, setMathInputNull] = useState(false);

  const [inputs, setInputs] = useState({
    inputNum: 0,
    inputDenom: 0,
  });

  const [inputRange, setInputRange] = useState({
    min: 1,
    max: 9,
  });

  const [showRandomSheets, setShowRandomSheets] = useState(false);
  const [totalSheets, setTotalSheets] = useState(0);
  const [showCheckModal, setShowCheckModal] = useState(false);
  const [showSolutionModal, setShowSolutionModal] = useState(false);
  const [prevRandomNums, setPrevRandomNums] = useState();

  function clearAllInputs() {
    setInputs({
      inputNum: null,
      inputDenom: null,
    });

    setAdditionInputs({
      numerator1: "",
      numerator2: "",
      denominator1: "",
      denominator2: "",
    });

    setDivisionInputs({
      numerator1: "",
      numerator2: "",
      denominator1: "",
      denominator2: "",
      sign: "",
    });
  }

  useEffect(() => {
    if (prevRandomNums !== randomNums) {
      handleNext();
      setPrevRandomNums(randomNums);
    }

    clearAllInputs();

    handleNext();
  }, [difficulty, operation, sameDenoms, showRandomSheets, totalSheets]);

  function getRandomNumber(min, max) {
    let randomNumber;
    do {
      randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    } while (randomNumber === 0);

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
    clearAllInputs();
    if (mixOperation > 0) {
      setOperation(0);
      const operator = getRandomOperation();
      setMixOperation(operator);
    }

    switch (difficulty) {
      case 1:
        setInputRange({ min: 1, max: 9 });
        break;

      case 2:
        setInputRange({ min: 1, max: 30 });
        break;

      case 3:
        setInputRange({ min: -9, max: 9 });
        break;

      case 4:
        setInputRange({ min: -9, max: 9 });
        break;

      default:
        setInputRange({ min: 1, max: 9 });
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

      // Check if difficulty is 3 and there are more than 1 negative numbers
      if (difficulty === 3) {
        if (
          (operation < 3 && negativeCount > 1) ||
          (sameDenoms && denominator1 < 0)
        ) {
          continue; // Skip this iteration and generate new numbers
        }
        if (operation >= 3 && negativeCount > 2) {
          continue;
        }
      }

      if (operation < 3 && sameDenoms) {
        var checkDeno = denominator1 * denominator1;
      } else {
        checkDeno = denominator1 * denominator2;
      }

      if (operation > 0) {
        if (operation === 1)
          var checkNum = numerator1 * denominator2 + numerator2 * denominator1;
        if (operation === 2)
          var checkNum = numerator1 * denominator2 - numerator2 * denominator1;
        if (operation === 3) var checkNum = numerator1 * numerator2;
        if (operation === 4) {
          checkDeno = denominator1 * numerator2;
          checkNum = numerator1 * denominator2;
        }
      }

      if (mixOperation > 0) {
        if (mixOperation === 1)
          var checkNum = numerator1 * denominator2 + numerator2 * denominator1;
        if (mixOperation === 2)
          var checkNum = numerator1 * denominator2 - numerator2 * denominator1;
        if (mixOperation === 3) var checkNum = numerator1 * numerator2;
        if (mixOperation === 4) {
          checkDeno = denominator1 * numerator2;
          checkNum = numerator1 * denominator2;
        }
      }

      var checkResult = checkNum / checkDeno;

      if (difficulty === 3) {
        if (checkResult > 0) {
          break;
        }
      } else {
        break;
      }
    } while (true);

    setRandomNums({
      numerator1: numerator1,
      denominator1: denominator1,
      numerator2: numerator2,
      denominator2: denominator2,
    });
  };

  const handleSetTotalSheets = (value) => {
    const intValue = parseInt(value);
    if (!isNaN(intValue) && intValue >= 3 && intValue <= 20) {
      setTotalSheets(intValue);
      setShowRandomSheets(true);
    } else {
      setTotalSheets(0);
    }
  };

  const handleCheck = () => {
    let checkResult;
    let inputResult = inputs.inputNum / inputs.inputDenom;

    if (operation === 1 || mixOperation === 1) {
      if (sameDenoms) {
        const checkDeno = randomNums.denominator1;
        const checkNum = randomNums.numerator1 + randomNums.numerator2;
        checkResult = checkNum / checkDeno;
      } else {
        const checkDeno = randomNums.denominator1 * randomNums.denominator2;
        const checkNum =
          randomNums.numerator1 * randomNums.denominator2 +
          randomNums.numerator2 * randomNums.denominator1;

        if (
          parseInt(additionInputs.numerator1) === randomNums.denominator2 &&
          parseInt(additionInputs.denominator1) === randomNums.denominator2 &&
          parseInt(additionInputs.numerator2) === randomNums.denominator1 &&
          parseInt(additionInputs.denominator2) === randomNums.denominator1
        ) {
          checkResult = checkNum / checkDeno;
        } else {
          checkResult = checkNum;
        }
      }
      inputResult = inputs.inputNum / inputs.inputDenom;
    }

    if (operation === 2 || mixOperation === 2) {
      if (sameDenoms) {
        const checkDeno = randomNums.denominator1;
        const checkNum = randomNums.numerator1 - randomNums.numerator2;
        checkResult = checkNum / checkDeno;
      } else {
        const checkDeno = randomNums.denominator1 * randomNums.denominator2;
        const checkNum =
          randomNums.numerator1 * randomNums.denominator2 -
          randomNums.numerator2 * randomNums.denominator1;

        if (
          parseInt(additionInputs.numerator1) === randomNums.denominator2 &&
          parseInt(additionInputs.denominator1) === randomNums.denominator2 &&
          parseInt(additionInputs.numerator2) === randomNums.denominator1 &&
          parseInt(additionInputs.denominator2) === randomNums.denominator1
        ) {
          checkResult = checkNum / checkDeno;
        } else {
          checkResult = checkNum;
        }
      }
      inputResult = inputs.inputNum / inputs.inputDenom;
    }

    if (operation === 3 || mixOperation === 3) {
      const checkNum = randomNums.numerator1 * randomNums.numerator2;
      const checkDeno = randomNums.denominator1 * randomNums.denominator2;

      checkResult = checkNum / checkDeno;
      inputResult = inputs.inputNum / inputs.inputDenom;
    }

    if (operation === 4 || mixOperation === 4) {
      if (difficulty === 1) {
        var deno2 = parseInt(divisionInputs.denominator2);
        var num2 = parseInt(divisionInputs.numerator2);
        var randomsFraction = randomNums.numerator2 / randomNums.denominator2;
        var divisionFraction = deno2 / num2;
        console.log(
          "fracion ",
          randomsFraction,
          divisionFraction,
          typeof randomsFraction,
          typeof divisionFraction
        );
        var epsilon = 0.00001; // A small number
        if (randomsFraction === divisionFraction) {
          //setResult(true)
          console.log("true is hit in division");
          checkResult = 1;
          inputResult = 1;
          console.log(checkResult, inputResult);
        } else {
          //setResult(false)
          checkResult = 1;
          inputResult = 2;
        }
      }

      if (difficulty > 1) {
        console.log("operation 4 and diffi is >1==");
        var deno2 = parseInt(divisionInputs.denominator2);
        var num2 = parseInt(divisionInputs.numerator2);
        var deno1 = parseInt(divisionInputs.denominator1);
        var num1 = parseInt(divisionInputs.numerator1);

        var divisionFraction1 =
          divisionInputs.numerator1 / divisionInputs.denominator1;
        var divisionFraction1r =
          divisionInputs.denominator1 / divisionInputs.numerator1;
        var divisionFraction2 =
          divisionInputs.numerator2 / divisionInputs.denominator2;
        var divisionFraction2r =
          divisionInputs.denominator2 / divisionInputs.numerator2;
        var randomFraction1 = randomNums.numerator1 / randomNums.denominator1;
        var randomFraction2 = randomNums.numerator2 / randomNums.denominator2;

        console.log(
          "all division fractions ",
          randomNums.numerator2,
          deno2,
          randomNums.denominator2,
          randomFraction1,
          divisionFraction1
        );
        if (
          (randomFraction1 === divisionFraction1 &&
            randomFraction2 === divisionFraction2r &&
            divisionInputs.sign === "*") ||
          (randomFraction2 === divisionFraction2 &&
            randomFraction1 === divisionFraction1r &&
            divisionInputs.sign === "*")
        ) {
          //setResult(true)
          checkResult = 1;
          inputResult = 1;
        } else {
          // setResult(false)
          checkResult = 1;
          inputResult = 2;
        }
      }
    }

    if (checkResult == inputResult) {
      setResult(true);
      console.log("result is true", result);
    } else {
      setResult(false);
    }
    console.log("result right before check", result);
    setShowCheckModal(true);
  };

  return {
    randomNums,
    divisionInputs,
    additionInputs,
    result,
    difficulty,
    setDifficulty,
    difficulty2,
    setDifficulty2,
    operation,
    setOperation,
    sameDenoms,
    setSameDenoms,
    mixOperation,
    setMixOperation,
    efraction,
    setEfraction,
    inputs,
    setInputs,
    inputRange,
    showRandomSheets,
    setShowRandomSheets,
    totalSheets,
    showCheckModal,
    setShowCheckModal,
    showSolutionModal,
    setShowSolutionModal,

    clearAllInputs,
    getRandomNumber,
    getRandomOperation,
    handleNext,
    handleSetTotalSheets,
    handleCheck,
    mathInputNull,
    setMathInputNull,
    setDivisionInputs,
    setAdditionInputs,
  };
};
