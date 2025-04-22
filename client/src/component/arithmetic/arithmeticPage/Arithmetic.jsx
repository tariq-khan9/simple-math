import { useRef } from "react";
import { useArithmetic } from "../../../hooks/useArithmetic";
import CheckModal from "./CheckModal";
import RandomSheets from "../randomSheet/RandomSheets";
import SolutionModal from "../solutionModal/SolutionModal";
import DropdownMulti from "./DropdownMulti";

import DifficultySelector from "../arithmeticComp/DifficultySelector";
import ViewTutorial from "../arithmeticComp/ViewTutorial";
import DrillSection from "../arithmeticComp/DrillSection";

const Arithmetic = () => {
  const btnNextRef = useRef(null);
  const btnFracNextRef = useRef(null);

  const {
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
    totalSheets,
    showCheckModal,
    setShowCheckModal,
    showSolutionModal,
    setShowSolutionModal,
    getRandomNumber,
    handleNext,
    handleSetTotalSheets,
    handleCheck,
    mathInputNull,
    setMathInputNull,
    setDivisionInputs,
    setAdditionInputs,
  } = useArithmetic();

  return (
    <div className="flex flex-col">
      <div className="flex flex-row  ">
        <div className=" w-0 sm:w-[5%] md:w-[15%] text-[30px] bg-gray-100"></div>
        <div className=" w-full sm:w-[95%] md:w-[85%] bg-gray-100 pb-8 md:pb-12">
          <div className="px-[8px] sm:px-[50px] md:px-[20px]  lg:pr-[300px] w-full flex flex-col   pt-2 mt-[30px]">
            {/******************************  difficulty level *******************************/}
            <div className="difficulty-div w-100 h-10 text-[10px] sm:text-[14px] md:text-[18px] sm:mb-6 md:mb-10 flex flex-row  justify-start">
              <div className=" w-[25%]  flex items-center justify-start">
                <DropdownMulti
                  setOperation={setOperation}
                  setMixOperation={setMixOperation}
                  setSameDenoms={setSameDenoms}
                  operation={operation}
                  efraction={efraction}
                  setEfraction={setEfraction}
                />
              </div>
            </div>

            <DifficultySelector
              btnFracNextRef={btnFracNextRef}
              btnNextRef={btnNextRef}
              efraction={efraction}
              setDifficulty2={setDifficulty2}
              difficulty2={difficulty2}
              difficulty={difficulty}
              setDifficulty={setDifficulty}
            />

            {/******************************  Drill section  *******************************/}
            <DrillSection
              efraction={efraction}
              operation={operation}
              mixOperation={mixOperation}
              randomNums={randomNums}
              difficulty={difficulty}
              divisionInputs={divisionInputs}
              setDivisionInputs={setDivisionInputs}
              additionInputs={additionInputs}
              setAdditionInputs={setAdditionInputs}
              sameDenoms={sameDenoms}
              inputs={inputs}
              setInputs={setInputs}
              mathInputNull={mathInputNull}
              setMathInputNull={setMathInputNull}
              difficulty2={difficulty2}
              handleNext={handleNext}
              handleCheck={handleCheck}
              btnNextRef={btnNextRef}
              btnFracNextRef={btnFracNextRef}
            />
            <ViewTutorial />
          </div>
        </div>
      </div>
      {/*----------------------- random sheets begin here  ---------------------------------------*/}
      <div className="flex flex-row ">
        <div className=" w-0 sm:w-[5%] md:w-[15%] bg-white"></div>
        <div className=" w-full sm:w-[95%] md:w-[85%] bg-white ">
          <div className="px-[8px] sm:px-[50px] md:px-[20px]  lg:pr-[300px] w-full flex flex-col   pt-2 mt-[30px]">
            <div className="buttons-div w-100 h-12 md:h-16 bg-white  rounded-md flex items-center justify-start px-4 ">
              <div className="flex flex-row justify-center  items-center">
                <label className="text-[10px] sm:text-[14px] md:text-[20px] font-inter text-blue-600 md:mx-2">
                  Generate Sheets:
                </label>
                <input
                  className="input digit-input mx-1"
                  onChange={(e) => handleSetTotalSheets(e.target.value)}
                />
                <div className=" items-end h-4">
                  <label className="text-[6px] sm:text-[8px] md:text-[12px] italic  md:mx-2 text-gray-400">
                    Please provide numbers ranging from 6 to 20.
                  </label>
                </div>
              </div>
            </div>
            <div className=" w-full">
              {totalSheets > 2 && (
                <RandomSheets
                  getRandomNumber={getRandomNumber}
                  showRandomSheets={showRandomSheets}
                  operation={operation}
                  mixOperation={mixOperation}
                  totalSheets={totalSheets}
                  inputRange={inputRange}
                  additionInputs={additionInputs}
                  setAdditionInputs={setAdditionInputs}
                  sameDenoms={sameDenoms}
                  difficulty={difficulty}
                  handleCheck={handleCheck}
                />
              )}
            </div>

            {/* <Temp totalSheets={totalSheets} temp={temp}/> */}

            <CheckModal
              showCheckModal={showCheckModal}
              setShowSolutionModal={setShowSolutionModal}
              setShowCheckModal={setShowCheckModal}
              result={result}
              setInputs={setInputs}
              setAdditionInputs={setAdditionInputs}
              setDivisionInputs={setDivisionInputs}
            />

            <SolutionModal
              showSolutionModal={showSolutionModal}
              setShowSolutionModal={setShowSolutionModal}
              setShowCheckModal={setShowCheckModal}
              randomNums={randomNums}
              operation={operation}
              mixOperation={mixOperation}
              inputs={inputs}
              sameDenoms={sameDenoms}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Arithmetic;
