import React, { useState, useEffect, useRef } from "react";
import CheckModal from "../arithmeticPage/CheckModal";
import SolutionModal from "../solutionModal/SolutionModal";
import MathArrayInput from "../arithmeticPage/MathArrayInput";
import SubmitResultModal from "./SubmitResultModal";
import useRandomSheets from "../../../hooks/useRandomSheets";
import OperationSign from "./OperationSign";
import FractionDisplay from "./FractionDisplay";
import InputFraction from "./InputFraction";
import InputSign from "./InputSign";
import InputSameDenomsFrac from "./InputSameDenomsFrac";

const RandomSheets = ({
  getRandomNumber,
  showRandomSheets,
  totalSheets,
  setShowRandom,
  operation,
  mixOperation,
  difficulty,
  inputRange,
  additionInputs,
  setAdditionInputs,
  sameDenoms,
}) => {
  let sheets = totalSheets;
  let DivisionResult = [];

  const {
    randomSheetArray,
    divisionInputs,
    divisionArrayResult,
    showCheckModal,
    showSubmitResultModal,
    submitted,
    arrayResult,
    submitResult,
    objectSubmitCount,

    setRandomSheetArray,
    setShowCheckModal,
    setShowSubmitResultModal,

    handleArrayCheck,
    handleSubmitSheets,
    handleShowSolutionModal,
    handleCloseSolutionModal,
    handleDivisionInputsChange,
  } = useRandomSheets({
    getRandomNumber,
    totalSheets,
    operation,
    mixOperation,
    difficulty,
    inputRange,
    sameDenoms,
  });

  if (showRandomSheets)
    return (
      <div className="flex flex-col justify-center  rounded-md ">
        <div className="px-auto flex flex-col  gap-4 ">
          {randomSheetArray.map((randomNums, index) => (
            <div className="px-[8px] sm:px-[15px] md:px-[40px] pt-1 sm:pt-2  md:pt-4 pb-2  md:pb-4 mt-3 md:mt-6 bg-gray-50 rounded-md">
              <div className="bg-white w-5 h-5 md:w-10 md:h-10 rounded-full flex items-center justify-center mb-2 md:mb-4">
                <h2 className="text-gray-500 italic text-[12px] md:text-[18px]">
                  {index + 1}
                </h2>
              </div>
              {operation === 4 || randomNums.mixOperation === 4 ? (
                <div className="flex items-center justify-start   ">
                  {difficulty === 1 && (
                    <table className="digit ">
                      <tr className="">
                        <td className="first-col px-2">
                          <FractionDisplay
                            numerator={randomNums.numerator1}
                            denominator={randomNums.denominator1}
                          />
                        </td>

                        <td className="opertor px-1 md:px-4">
                          <OperationSign
                            operation={operation}
                            randomNums={randomNums}
                          />
                        </td>

                        <td className="second-col px-2">
                          <FractionDisplay
                            numerator={randomNums.numerator2}
                            denominator={
                              operation < 3 && sameDenoms
                                ? randomNums.denominator1
                                : randomNums.denominator2
                            }
                          />
                        </td>

                        <td className="= px-1 md:px-6">
                          <tr>=</tr>
                        </td>
                        {/* ================================================== input side ========================================== */}
                        <td className="inputs md:px-4 flex flex-row  items-center">
                          <td className="first-col px-2 md:px-4">
                            <FractionDisplay
                              numerator={randomNums.numerator1}
                              denominator={randomNums.denominator1}
                            />
                          </td>

                          <td className="opertor  px-2 md:px-4  flex items-center">
                            <InputSign
                              handler={handleDivisionInputsChange}
                              index={index}
                              value="sign"
                            />
                          </td>

                          <td className="second-col md:px-4">
                            <InputFraction
                              handler={handleDivisionInputsChange}
                              index={index}
                              value1="divisionNum2"
                              value2="divisionDenom2"
                            />
                          </td>
                        </td>
                      </tr>
                    </table>
                  )}

                  {difficulty > 1 && (
                    <table className="digit">
                      <tr className="">
                        <td className="first-col">
                          <FractionDisplay
                            numerator={randomNums.numerator1}
                            denominator={randomNums.denominator1}
                          />
                        </td>

                        <td className="opertor px-2 md:px-4">
                          <OperationSign
                            operation={operation}
                            randomNums={randomNums}
                          />
                        </td>

                        <td className="second-col md:px-4">
                          <FractionDisplay
                            numerator={randomNums.numerator2}
                            denominator={
                              operation < 3 && sameDenoms
                                ? randomNums.denominator1
                                : randomNums.denominator2
                            }
                          />
                        </td>

                        <td className="= px-2 md:px-6">
                          <tr>=</tr>
                        </td>
                        {/* ================================================== input side ========================================== */}
                        <td className="inputs md:px-4 flex flex-row items-center">
                          <td className="first-col md:px-4">
                            <InputFraction
                              handler={handleDivisionInputsChange}
                              index={index}
                              value1="divisionNum1"
                              value2="divisionDenom1"
                            />
                          </td>

                          <td className="opertor px-2 md:px-4  flex items-center">
                            <InputSign
                              handler={handleDivisionInputsChange}
                              index={index}
                              value="divisionSign"
                            />
                          </td>

                          <td className="second-col md:px-4">
                            <InputFraction
                              handler={handleDivisionInputsChange}
                              index={index}
                              value1="divisionNum2"
                              value2="divisionDenom2"
                            />
                          </td>
                        </td>
                      </tr>
                    </table>
                  )}
                </div>
              ) : (
                <div className="digit  pl-0 pr-0 justify-start">
                  <table className="">
                    <tr className="">
                      <td className="first-col flex flex-row justify-start ">
                        <FractionDisplay
                          numerator={randomNums.numerator1}
                          denominator={randomNums.denominator1}
                        />
                        {/* ======= check if the operation is addition and denominators are different, then put extra inputs. */}
                        {operation < 3 && !sameDenoms && (
                          <InputSameDenomsFrac
                            additionInputs={additionInputs}
                            setAdditionInputs={setAdditionInputs}
                            change={1}
                          />
                        )}
                      </td>

                      <td className="operator px-2 md:px-3 pl-3 md:pl-5">
                        <OperationSign
                          operation={operation}
                          randomNums={randomNums}
                        />
                      </td>

                      <td className="second-col flex  flex-row px-2 md:px-3">
                        <FractionDisplay
                          numerator={randomNums.numerator2}
                          denominator={
                            operation < 3 && sameDenoms
                              ? randomNums.denominator1
                              : randomNums.denominator2
                          }
                        />
                        {operation < 3 && !sameDenoms && (
                          <InputSameDenomsFrac
                            additionInputs={additionInputs}
                            setAdditionInputs={setAdditionInputs}
                            change={2}
                          />
                        )}
                      </td>

                      <td className="= md:px-3">
                        <tr>=</tr>
                      </td>

                      <td className="inputs md:px-3">
                        <table>
                          <tbody>
                            <tr>
                              <MathArrayInput
                                type="inputNum"
                                index={index}
                                randomSheetArray={randomSheetArray}
                                setRandomSheetArray={setRandomSheetArray}
                                difficulty={difficulty}
                                operation={operation}
                                sameDenoms={sameDenoms}
                              />
                            </tr>
                            <tr className="line-tr">
                              <div class="line-input"></div>
                            </tr>
                            <tr>
                              <MathArrayInput
                                type="inputDenom"
                                index={index}
                                randomSheetArray={randomSheetArray}
                                setRandomSheetArray={setRandomSheetArray}
                                difficulty={difficulty}
                                operation={operation}
                                sameDenoms={sameDenoms}
                              />
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                  </table>
                </div>
              )}

              <div className="mt-6 w-full  flex justify-center">
                {randomNums.isSubmitted ? (
                  <div className="w-full">
                    {submitted ? (
                      <div>
                        {operation === 4 || mixOperation === 4 ? (
                          <div>
                            {divisionArrayResult[index]?.objectResult ? (
                              <div className="w-full flex justify-start">
                                <button className="btn-random text-white bg-blue-600 px-8 sm:px-14 md:px-0">
                                  Excellent!
                                </button>
                              </div>
                            ) : (
                              <div className="w-full flex justify-start">
                                {console.log(
                                  "after submited random objectresult ",
                                  randomNums.objectResult
                                )}
                                <button
                                  onClick={() =>
                                    handleShowSolutionModal(index, true)
                                  }
                                  className="btn-random text-white bg-orange-600 hover:bg-orange-500"
                                >
                                  Oops.. Solution?
                                </button>
                              </div>
                            )}
                          </div>
                        ) : (
                          <div>
                            {randomNums.objectResult ? (
                              <div className="w-full flex justify-start">
                                <button className="btn-random text-white bg-blue-600 px-8 sm:px-16 md:px-0">
                                  Excellent!
                                </button>
                              </div>
                            ) : (
                              <div className="w-full flex justify-start">
                                {console.log(
                                  "after submited random objectresult ",
                                  randomNums.objectResult
                                )}
                                <button
                                  onClick={() =>
                                    handleShowSolutionModal(index, true)
                                  }
                                  className="btn-random text-white bg-orange-600 hover:bg-orange-500"
                                >
                                  Oops.. Solution?
                                </button>
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                    ) : (
                      <div className="w-full flex justify-start">
                        <button
                          disabled={true}
                          className=" btn-random bg-yellow-300 italic"
                        >
                          Submitted
                        </button>
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="w-full flex justify-start ">
                    <button
                      onClick={() => handleArrayCheck({ randomNums }, index)}
                      className=" btn-random border-blue-600 text-blue-600 hover:text-white hover:bg-blue-600"
                    >
                      Submit
                    </button>
                  </div>
                )}
              </div>
              {randomNums.showSolutionModal && (
                <SolutionModal
                  showSolutionModal={randomNums.showSolutionModal}
                  setShowSolutionModal={(value) =>
                    handleCloseSolutionModal(index, value)
                  }
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

          <div className=" w-full text-center  items-center  my-4 pb-4 md:pb-8">
            <button
              onClick={() => handleSubmitSheets()}
              disabled={objectSubmitCount < totalSheets}
              className=" w-[60%] rounded-[5px] text-[12px] sm:text-[14px] md:text-[18px] py-2 border text-blue-600  border-blue-600 bg-white  hover:text-white hover:bg-blue-600 font-inter"
            >
              Submit your sheets
            </button>
          </div>
        </div>

        <CheckModal
          showCheckModal={showCheckModal}
          setShowCheckModal={setShowCheckModal}
          result={arrayResult}
        />
        <SubmitResultModal
          showSubmitResultModal={showSubmitResultModal}
          setShowSubmitResultModal={setShowSubmitResultModal}
          submitResult={submitResult}
          divisionArrayResult={divisionArrayResult}
          sheets={sheets}
        />
      </div>
    );
};

export default RandomSheets;
