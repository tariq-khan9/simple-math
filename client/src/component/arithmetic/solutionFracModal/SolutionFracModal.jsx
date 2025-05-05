import React, { useEffect, useState } from "react";
import AnswerCFraction from "./AnswerCFraction";
import SolutionCFraction from "./SolutionCFraction";

import DrillASolution from "./DrillASolution";
import DrillBSolution from "./DrillBSolution";
import DrillCSolution from "./DrillCSolution";
import DrillDSolution from "./DrillDSolution";

const SolutionFracModal = ({
  efraction,
  showSolutionModal,
  setShowSolutionModal,
  setShowCheckModal,
  randomFrac,
  multiplyNumber,
  inputs,
  numFactors,
  denomFactors,
  randomDec,
  inputsDec,
}) => {
  const [simplifiedFraction, setSimplifiedFraction] = useState({
    numerator: 1,
    denominator: 2,
  });

  const [simpDec, setSimpDec] = useState({
    numerator3: null,
    denominator3: null,
    numerator36: null,
    denominator36: null,
    inputsNum: null,
    inputsDenom: null,
    inputsDivNum: null,
    inputsDivDenom: null,
    inputsAddNum: null,
    inputsAddDenom: null,
    inputsSubNum: null,
    inputsSubDenom: null,
    inputsNum6: null,
    inputsDenom6: null,
  });

  function simplifyFraction(numerator, denominator) {
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

  useEffect(() => {
    const [smallestNumerator, smallestDenominator] = simplifyFraction(
      randomFrac.numerator,
      randomFrac.denominator
    );
    setSimplifiedFraction({
      numerator: smallestNumerator,
      denominator: smallestDenominator,
    });

    const [simpDecNum3, simpDecDenom3] = simplifyFraction(
      randomDec.number * randomDec.denominator2 + randomDec.numerator2,
      randomDec.denominator2
    );
    const [simpDecNum36, simpDecDenom36] = simplifyFraction(
      randomDec.number * 10 + randomDec.decimal,
      10
    );

    const [simpDecNum, simpDecDenom] = simplifyFraction(
      randomDec.numerator1 *
        (randomDec.number * randomDec.denominator2 + randomDec.numerator2),
      randomDec.denominator1 * randomDec.denominator2
    );

    ///////////////    for division, addition and subtraction, each would have their own final simplified inputs results which are calculated here ///////////////////////////////////////////////

    const [simpDecDivNum, simpDecDivDenom] = simplifyFraction(
      randomDec.numerator1 * randomDec.denominator2,
      randomDec.denominator1 *
        (randomDec.number * randomDec.denominator2 + randomDec.numerator2)
    );

    const [simpDecAddNum, simpDecAddDenom] = simplifyFraction(
      randomDec.numerator1 * simpDecDenom3 +
        randomDec.denominator1 * simpDecNum3,
      randomDec.denominator1 * simpDecDenom3
    );

    const [simpDecSubNum, simpDecSubDenom] = simplifyFraction(
      randomDec.numerator1 * simpDecDenom3 -
        randomDec.denominator1 * simpDecNum3,
      randomDec.denominator1 * simpDecDenom3
    );

    const [simpDecNum6, simpDecDenom6] = simplifyFraction(
      randomDec.numerator1 * simpDecDenom36 +
        randomDec.denominator1 * simpDecNum36,
      randomDec.denominator1 * simpDecDenom36
    );

    setSimpDec({
      numerator3: simpDecNum3,
      denominator3: simpDecDenom3,
      numerator36: simpDecNum36,
      denominator36: simpDecDenom36,
      inputsNum: simpDecNum,
      inputsDenom: simpDecDenom,
      inputsDivNum: simpDecDivNum,
      inputsDivDenom: simpDecDivDenom,
      inputsAddNum: simpDecAddNum,
      inputsAddDenom: simpDecAddDenom,
      inputsSubNum: simpDecSubNum,
      inputsSubDenom: simpDecSubDenom,
      inputsNum6: simpDecNum6,
      inputsDenom6: simpDecDenom6,
    });
  }, [randomFrac]);

  if (showSolutionModal) {
    return (
      <div className=" fixed top-0 left-0 w-full h-full pt-48  bg-transparent w-scree  backdrop-blur-sm flex justify-center items-center ">
        <div className="bg-white border border-gray-300 rounded-md z-40  md:max-h-85 mt-[80px] overflow-y-auto  p-4  mb-[200px]">
          <div className="text-center w-full">
            <h2 className="text-[14px] md:text-[20px] font-bold underline text-blue-800  ">
              Solution
            </h2>
          </div>
          {efraction < 5 && (
            <div className="overflow-y-auto max-h-[380px]">
              {efraction !== 4 && (
                <div>
                  <h2 className="font-bold text-[12px] md:text-[16px]">
                    Your answer:
                  </h2>{" "}
                  <div className="solution-digit">
                    <div className=" flex items-center mb-2">
                      {/* <TeX>{`\= \\frac{${inputs.inputNum}}{${inputs.inputDenom}}`}</TeX> */}
                      <td className="= px-2 ">
                        <tr>=</tr>
                      </td>
                      <td className="first-col px-1">
                        <table className="  w-[25px] md:w-[40px]">
                          <tbody className="">
                            <tr className="flex justify-center items-center bg-gray-200 text-gray-700 rounded-[4px]">
                              <label className="  ">
                                {inputs.inputNum ? inputs.inputNum : "Null"}{" "}
                              </label>
                            </tr>

                            <tr className="flex items-center justify-center  mt-1 mb-1">
                              <div className="border-t border-2  border-gray-500   w-8 "></div>
                            </tr>

                            {efraction < 3 && (
                              <tr className="flex justify-center items-center bg-gray-200 text-gray-700 rounded-[4px]">
                                {
                                  <label className="  ">
                                    {inputs.inputDenom
                                      ? inputs.inputDenom
                                      : "Null"}{" "}
                                  </label>
                                }
                              </tr>
                            )}

                            {efraction === 3 && (
                              <tr className="flex justify-center items-center  text-gray-700 rounded-[4px]">
                                {
                                  <label className="  ">
                                    {randomFrac.denominator * multiplyNumber}{" "}
                                  </label>
                                }
                              </tr>
                            )}
                          </tbody>
                        </table>
                      </td>
                    </div>
                  </div>
                </div>
              )}
              <div className="flex flex-col justify-items-start">
                <div className="w-[200px] md:w-[300px] flex justify-start">
                  <h2 className="font-bold text-[12px] md:text-[16px] mt-4">
                    Solution:
                  </h2>
                </div>

                {efraction === 1 && (
                  <DrillASolution
                    randomFrac={randomFrac}
                    multiplyNumber={multiplyNumber}
                  />
                )}

                {efraction === 2 && (
                  <DrillBSolution
                    randomFrac={randomFrac}
                    simplifiedFraction={simplifiedFraction}
                  />
                )}

                {efraction === 3 && (
                  <DrillCSolution
                    randomFrac={randomFrac}
                    multiplyNumber={multiplyNumber}
                  />
                )}

                {efraction === 4 && (
                  <DrillDSolution
                    randomFrac={randomFrac}
                    numFactors={numFactors}
                    denomFactors={denomFactors}
                    simplifiedFraction={simplifiedFraction}
                  />
                )}
              </div>
            </div>
          )}
          {efraction > 4 && (
            <div className="overflow-y-auto max-h-[380px]">
              <div>
                <h2 className="font-bold text-[12px] md:text-[16px]">
                  Your answer:
                </h2>{" "}
                <div className="solution-digit"></div>
                {efraction > 4 && efraction < 9 && (
                  <AnswerCFraction
                    randomDec={randomDec}
                    inputsDec={inputsDec}
                    efraction={efraction}
                  />
                )}
              </div>

              <div className="flex flex-col justify-items-start">
                <div className="w-[200px] md:w-[300px] flex justify-start">
                  <h2 className="font-bold text-[12px] md:text-[16px] mt-6 mb-2">
                    Solution:
                  </h2>
                </div>

                {efraction > 4 && efraction < 9 && (
                  <SolutionCFraction
                    randomDec={randomDec}
                    simpDec={simpDec}
                    efraction={efraction}
                  />
                )}
              </div>
            </div>
          )}
          {/* ====================================== close button ======================================== */}
          <div className="flex flex-row w-full  justify-end mt-10 md:mt-16 pr-4">
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

export default SolutionFracModal;
