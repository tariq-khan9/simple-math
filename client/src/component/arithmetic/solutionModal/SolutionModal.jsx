import React from "react";
import AdditionSolution from "./AdditionSolution";
import SubtractionSolution from "./SubtractionSolution";
import MultiplicationSolution from "./MultiplicationSolution";
import DivisionSolution from "./DivisionSolution";
import MixAdditionSolution from "./MixAdditionSolution";
import MixSubtractionSolution from "./MixSubtractionSolution";
import MixMultiplySolution from "./MixMultiplySolution";
import MixDivisionSolution from "./MixDivisionSolution";

const SolutionModal = ({
  showSolutionModal,
  setShowSolutionModal,
  setShowCheckModal,
  randomNums,
  mixOperation,
  inputs,
  operation,
  sameDenoms,
}) => {
  if (showSolutionModal) {
    return (
      <div className=" fixed top-0 left-0 w-full h-full pt-48  bg-transparent w-scree  backdrop-blur-sm flex justify-center items-center ">
        <div className="bg-white border border-gray-300 rounded-md z-40 w-60  md:w-96 md:max-h-85 mt-[80px] overflow-y-auto  p-4  mb-[200px]">
          <div className="text-center w-full">
            <h2 className="text-[14px] md:text-[20px] font-bold underline text-blue-800 ">
              Solution
            </h2>
          </div>
          <div className="overflow-y-auto max-h-[380px]">
            <div>
              {" "}
              {(inputs.inputNum !== null || inputs.inputDenom !== null) && (
                <h2 className="font-bold text-[12px] md:text-[16px]">
                  Your answer:
                </h2>
              )}
              <div className="solution-digit">
                {(inputs.inputNum || inputs.inputDenom) && (
                  <div className=" flex items-center mb-2">
                    <td className="= px-2 ">
                      <tr>=</tr>
                    </td>
                    <td className="first-col px-1">
                      <table className="">
                        <tbody className="">
                          <tr className="">{inputs.inputNum}</tr>
                          <tr className="flex items-center mt-1 mb-1">
                            <div class="border-t border-2  border-gray-500   w-5 mx-auto"></div>
                          </tr>
                          <tr>{inputs.inputDenom}</tr>
                        </tbody>
                      </table>
                    </td>
                  </div>
                )}
              </div>
            </div>

            <div className="">
              <h2 className="font-bold text-[12px] md:text-[16px]">
                Solution:
              </h2>
              {operation > 0 && (
                <div>
                  {operation === 1 && (
                    <AdditionSolution
                      randomNums={randomNums}
                      operation={operation}
                      sameDenoms={sameDenoms}
                    />
                  )}

                  {operation === 2 && (
                    <SubtractionSolution
                      randomNums={randomNums}
                      operation={operation}
                      sameDenoms={sameDenoms}
                    />
                  )}

                  {operation === 3 && (
                    <MultiplicationSolution randomNums={randomNums} />
                  )}

                  {operation === 4 && (
                    <DivisionSolution randomNums={randomNums} />
                  )}
                </div>
              )}

              {mixOperation > 0 && (
                <div>
                  {mixOperation === 1 && (
                    <MixAdditionSolution randomNums={randomNums} />
                  )}

                  {mixOperation === 2 && (
                    <MixSubtractionSolution randomNums={randomNums} />
                  )}

                  {mixOperation === 3 && (
                    <MixMultiplySolution randomNums={randomNums} />
                  )}

                  {mixOperation === 4 && (
                    <MixDivisionSolution randomNums={randomNums} />
                  )}
                </div>
              )}
            </div>
          </div>
          {/* ====================================== close button ======================================== */}
          <div className="flex flex-row w-full  justify-end md:mt-4 pr-4">
            <button
              className="flex justify-items-end p-1 text-[12px] md:text-[16px] px-4 md:px-8 border border-blue-800 text-blue-800 hover:bg-blue-800 hover:text-white"
              onClick={() => {
                setShowCheckModal(false);
                setShowSolutionModal(false);
              }}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    );
  }
};

export default SolutionModal;
