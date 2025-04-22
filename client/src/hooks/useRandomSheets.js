import { useState, useEffect } from "react";

const useRandomSheets = ({
  getRandomNumber,
  totalSheets,
  operation,
  mixOperation,
  difficulty,
  inputRange,
  sameDenoms,
}) => {
  const [randomSheetArray, setRandomSheetArray] = useState([]);
  const [divisionInputs, setDivisionInputs] = useState([]);
  const [divisionArrayResult, setDivisionArrayResult] = useState([]);
  const [showCheckModal, setShowCheckModal] = useState(false);
  const [showSubmitResultModal, setShowSubmitResultModal] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [arrayResult, setArrayResult] = useState(false);
  const [submitResult, setSubmitResult] = useState(0);
  const [objectSubmitCount, setObjectSubmitCount] = useState(0);
  const [additionInputs, setAdditionInputs] = useState({
    numerator1: "",
    denominator1: "",
    numerator2: "",
    denominator2: "",
  });

  const handleRandomSheets = (sheets) => {
    const updatedArray = [];
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
      if (operation === 0) {
        mixOperation = getRandomOperation();
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
        inputNum: "",
        inputDenom: "",
        isSubmitted: false,
        objectResult: false,
        showSolutionModal: false,
      });

      updatedDivisionInputs.push({
        ind: i,
        divisionNum1: "",
        divisionDenom1: "",
        divisionNum2: "",
        divisionDenom2: "",
        sign: "",
      });
    }

    setRandomSheetArray(updatedArray);
    setDivisionInputs(updatedDivisionInputs);
  };

  const handleArrayCheck = (randomNums, i) => {
    setObjectSubmitCount(objectSubmitCount + 1);
    const { numerator1, denominator1, numerator2, denominator2 } =
      randomNums.randomNums;

    let checkResult;

    if (operation === 1 || randomNums.randomNums.mixOperation === 1) {
      if (sameDenoms) {
        const checkDeno = denominator1;
        const checkNum = numerator1 + numerator2;
        checkResult = checkNum / checkDeno;
      } else {
        const checkDeno = denominator1 * denominator2;
        const checkNum = numerator1 * denominator2 + numerator2 * denominator1;

        if (
          parseInt(additionInputs.numerator1) === denominator2 &&
          parseInt(additionInputs.denominator1) === denominator2 &&
          parseInt(additionInputs.numerator2) === denominator1 &&
          parseInt(additionInputs.denominator2) === denominator1
        ) {
          checkResult = checkNum / checkDeno;
        } else {
          checkResult = checkNum;
        }
      }
    }

    if (operation === 2 || randomNums.randomNums.mixOperation === 2) {
      if (sameDenoms) {
        const checkDeno = denominator1;
        const checkNum = numerator1 - numerator2;
        checkResult = checkNum / checkDeno;
      } else {
        const checkDeno = denominator1 * denominator2;
        const checkNum = numerator1 * denominator2 - numerator2 * denominator1;

        if (
          parseInt(additionInputs.numerator1) === denominator2 &&
          parseInt(additionInputs.denominator1) === denominator2 &&
          parseInt(additionInputs.numerator2) === denominator1 &&
          parseInt(additionInputs.denominator2) === denominator1
        ) {
          checkResult = checkNum / checkDeno;
        } else {
          checkResult = checkNum;
        }
      }
    }

    if (operation === 3 || randomNums.randomNums.mixOperation === 3) {
      const checkNum = numerator1 * numerator2;
      const checkDeno = denominator1 * denominator2;
      checkResult = checkNum / checkDeno;
    }

    if (operation === 4 || randomNums.randomNums.mixOperation === 4) {
      const {
        divisionNum1,
        divisionDenom1,
        divisionNum2,
        divisionDenom2,
        sign,
      } = divisionInputs[i];

      if (difficulty === 1) {
        const deno2 = divisionDenom2;
        const num2 = divisionNum2;

        if (
          numerator2 === divisionDenom2 &&
          denominator2 === divisionNum2 &&
          sign === "*"
        ) {
          const updatedArray = randomSheetArray.map((item, index) => {
            if (index === i) {
              return {
                ...item,
                isSubmitted: true,
                objectResult: true,
                showSolutionModal: false,
              };
            }
            return item;
          });

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
              return {
                ...item,
                isSubmitted: true,
                objectResult: false,
                showSolutionModal: false,
              };
            }
            return item;
          });

          setDivisionArrayResult((prevArray) => {
            const newArray = [...prevArray];
            newArray[i] = { index: i, objectResult: false };
            return newArray;
          });

          setRandomSheetArray(updatedArray);
        }
      }

      if (difficulty > 1) {
        const deno2 = divisionDenom2;
        const num2 = divisionNum2;
        const deno1 = divisionDenom1;
        const num1 = divisionNum1;

        if (
          (numerator2 === deno2 &&
            denominator2 === num2 &&
            numerator1 === num1 &&
            denominator1 === deno1 &&
            divisionInputs[i].sign === "*") ||
          (numerator1 === deno1 &&
            denominator1 === num1 &&
            numerator2 === num2 &&
            denominator2 === deno2 &&
            divisionInputs[i].sign === "*")
        ) {
          const updatedArray = randomSheetArray.map((item, index) => {
            if (index === i) {
              return {
                ...item,
                isSubmitted: true,
                objectResult: true,
                showSolutionModal: false,
              };
            }
            return item;
          });

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
              return {
                ...item,
                isSubmitted: true,
                objectResult: false,
                showSolutionModal: false,
              };
            }
            return item;
          });

          setDivisionArrayResult((prevArray) => {
            const newArray = [...prevArray];
            newArray[i] = { index: i, objectResult: false };
            return newArray;
          });

          setRandomSheetArray(updatedArray);
        }
      }
    }

    if (operation !== 4 || randomNums.randomNums.mixOperation !== 4) {
      const inputResult =
        randomNums.randomNums.inputNum / randomNums.randomNums.inputDenom;

      const newCheckResult = parseFloat(checkResult).toFixed(2);
      const newInputResult = parseFloat(inputResult).toFixed(2);

      if (newCheckResult === newInputResult) {
        const updatedArray = randomSheetArray.map((item, index) => {
          if (index === i) {
            return {
              ...item,
              isSubmitted: true,
              objectResult: true,
              showSolutionModal: false,
            };
          }
          return item;
        });
        setRandomSheetArray(updatedArray);
        setSubmitResult(submitResult + 1);

        if (operation === 0) {
          setDivisionArrayResult((prevArray) => {
            const newArray = [...prevArray];
            newArray[i] = { index: i, objectResult: true };
            return newArray;
          });
        }
      } else {
        const updatedArray = randomSheetArray.map((item, index) => {
          if (index === i) {
            return {
              ...item,
              isSubmitted: true,
              objectResult: false,
              showSolutionModal: false,
            };
          }
          return item;
        });
        setRandomSheetArray(updatedArray);

        if (operation === 0) {
          setDivisionArrayResult((prevArray) => {
            const newArray = [...prevArray];
            newArray[i] = { index: i, objectResult: false };
            return newArray;
          });
        }
      }
    }
  };

  const handleSubmitSheets = () => {
    if (operation === 4) {
      const countTrueValues = (array) => {
        const trueValues = array.filter((item) => item.objectResult === true);
        return trueValues.length;
      };
      setSubmitResult(countTrueValues(divisionArrayResult));
    }
    setSubmitted(true);
    setShowSubmitResultModal(true);
  };

  const handleShowSolutionModal = (index) => {
    const updatedRandomNums = [...randomSheetArray];
    updatedRandomNums[index] = {
      ...updatedRandomNums[index],
      showSolutionModal: true,
    };
    setRandomSheetArray(updatedRandomNums);
  };

  const handleCloseSolutionModal = (index) => {
    const updatedRandomNums = [...randomSheetArray];
    updatedRandomNums[index] = {
      ...updatedRandomNums[index],
      showSolutionModal: false,
    };
    setRandomSheetArray(updatedRandomNums);
  };

  const handleDivisionInputsChange = (index, field, value) => {
    const updatedInputs = [...divisionInputs];
    updatedInputs[index] = {
      ...updatedInputs[index],
      [field]: value,
    };
    setDivisionInputs(updatedInputs);
  };

  useEffect(() => {
    handleRandomSheets(totalSheets);
    setSubmitted(false);
    setObjectSubmitCount(0);
    setSubmitResult(0);
  }, [totalSheets, difficulty, operation, sameDenoms]);

  return {
    randomSheetArray,
    divisionInputs,
    divisionArrayResult,
    showCheckModal,
    showSubmitResultModal,
    submitted,
    arrayResult,
    submitResult,
    objectSubmitCount,
    additionInputs,
    setRandomSheetArray,
    setShowCheckModal,
    setShowSubmitResultModal,
    setAdditionInputs,
    handleArrayCheck,
    handleSubmitSheets,
    handleShowSolutionModal,
    handleCloseSolutionModal,
    handleDivisionInputsChange,
  };
};

export default useRandomSheets;
