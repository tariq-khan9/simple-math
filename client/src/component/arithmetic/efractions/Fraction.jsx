import React, { useState, useEffect } from "react";
import Fraction1 from "./Fraction1";
import Fraction2 from "./Fraction2";
import Fraction3 from "./Fraction3";
import Fraction4 from "./Fraction4";
import CheckModal from "../arithmeticPage/CheckModal";
import SolutionFracModal from "../solutionFracModal/SolutionFracModal";
import CFraction from "./displayCFraction/CFraction";
import useFraction from "../../../hooks/useFraction";
import Decimal from "./displayDecimal/Decimal";

const Fraction = ({ efraction, difficulty2, btnFracNextRef }) => {
  const {
    randomFrac,
    randomDec,
    inputs,
    setInputs,
    inputsDec,
    setInputsDec,
    inputs4,
    setInputs4,
    result,
    showSolutionModal,
    showCheckModal,
    multiplyNumber,
    mathInputNull,
    setMathInputNull,
    numFactors,
    denomFactors,
    handleNext,
    handleCheck,
    setShowSolutionModal,
    setShowCheckModal,
  } = useFraction(efraction, difficulty2);

  return (
    <div className="flex flex-col">
      <div className="math  flex justify-start  mt-2">
        <div>
          <div>
            {efraction === 1 && (
              <Fraction1
                randomFrac={randomFrac}
                multiplyNumber={multiplyNumber}
                inputs={inputs}
                setInputs={setInputs}
              />
            )}
            {efraction === 2 && (
              <Fraction2
                randomFrac={randomFrac}
                inputs={inputs}
                setInputs={setInputs}
              />
            )}
            {efraction === 3 && (
              <Fraction3
                randomFrac={randomFrac}
                multiplyNumber={multiplyNumber}
                inputs={inputs}
                setInputs={setInputs}
              />
            )}

            {efraction === 4 && (
              <Fraction4
                randomFrac={randomFrac}
                multiplyNumber={multiplyNumber}
                inputs={inputs}
                setInputs={setInputs}
                inputs4={inputs4}
                setInputs4={setInputs4}
                mathInputNull={mathInputNull}
                setMathInputNull={setMathInputNull}
              />
            )}

            {efraction === 5 && (
              <CFraction
                randomDec={randomDec}
                inputsDec={inputsDec}
                setInputsDec={setInputsDec}
                mathInputNull={mathInputNull}
                setMathInputNull={setMathInputNull}
                sign="&times;"
              />
            )}
            {efraction === 6 && (
              <CFraction
                randomDec={randomDec}
                inputsDec={inputsDec}
                setInputsDec={setInputsDec}
                mathInputNull={mathInputNull}
                setMathInputNull={setMathInputNull}
                sign="&divide;"
              />
            )}
            {efraction === 7 && (
              <CFraction
                randomDec={randomDec}
                inputsDec={inputsDec}
                setInputsDec={setInputsDec}
                mathInputNull={mathInputNull}
                setMathInputNull={setMathInputNull}
                sign="+"
              />
            )}
            {efraction === 8 && (
              <CFraction
                randomDec={randomDec}
                inputsDec={inputsDec}
                setInputsDec={setInputsDec}
                mathInputNull={mathInputNull}
                setMathInputNull={setMathInputNull}
                sign="-"
              />
            )}

            {efraction === 9 && (
              <Decimal
                randomDec={randomDec}
                inputsDec={inputsDec}
                setInputsDec={setInputsDec}
                mathInputNull={mathInputNull}
                setMathInputNull={setMathInputNull}
                sign="&times;"
              />
            )}
            {efraction === 10 && (
              <Decimal
                randomDec={randomDec}
                inputsDec={inputsDec}
                setInputsDec={setInputsDec}
                mathInputNull={mathInputNull}
                setMathInputNull={setMathInputNull}
                sign="&divide;"
              />
            )}

            {efraction === 11 && (
              <Decimal
                randomDec={randomDec}
                inputsDec={inputsDec}
                setInputsDec={setInputsDec}
                mathInputNull={mathInputNull}
                setMathInputNull={setMathInputNull}
                sign="+"
              />
            )}
            {efraction === 12 && (
              <Decimal
                randomDec={randomDec}
                inputsDec={inputsDec}
                setInputsDec={setInputsDec}
                mathInputNull={mathInputNull}
                setMathInputNull={setMathInputNull}
                sign="-"
              />
            )}
          </div>

          <div className="buttons w-full  flex flex-row justify-start mt-14">
            <button onClick={() => handleCheck()} className="btn-drill">
              Check
            </button>

            <button
              onClick={() => handleNext(difficulty2)}
              ref={btnFracNextRef}
              className="btn-drill ml-1 md:ml-3"
            >
              Next
            </button>
          </div>
        </div>
      </div>

      <CheckModal
        showCheckModal={showCheckModal}
        setShowSolutionModal={setShowSolutionModal}
        setShowCheckModal={setShowCheckModal}
        result={result}
      />

      <SolutionFracModal
        efraction={efraction}
        showSolutionModal={showSolutionModal}
        setShowSolutionModal={setShowSolutionModal}
        setShowCheckModal={setShowCheckModal}
        randomFrac={randomFrac}
        inputs={inputs}
        multiplyNumber={multiplyNumber}
        numFactors={numFactors}
        denomFactors={denomFactors}
        randomDec={randomDec}
        inputsDec={inputsDec}
      />
    </div>
  );
};

export default Fraction;
