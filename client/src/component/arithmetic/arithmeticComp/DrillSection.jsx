import React from "react";
import MathInput from "./../arithmetic/MathInput";
import Fraction from "./../efractions/Fraction";
import FractionDisplay from "./displayCom/FractionDisplay";
import OperatorDisplay from "./displayCom/OperatorDisplay";
import AddDivInputsOperator from "./displayCom/AddDivInputsOperator";
import AddDivInputsFraction from "./displayCom/AddDivInputsFraction";

const DrillSection = ({
  efraction,
  operation,
  mixOperation,
  randomNums,
  difficulty,
  divisionInputs,
  setDivisionInputs,
  additionInputs,
  setAdditionInputs,
  sameDenoms,
  inputs,
  setInputs,
  mathInputNull,
  setMathInputNull,
  difficulty2,
  handleNext,
  handleCheck,
  btnNextRef,
  btnFracNextRef,
}) => {
  return (
    <div className="card-drill">
      <div className="math  flex justify-start  mt-4">
        {efraction === 0 ? (
          <div>
            {operation === 4 || mixOperation === 4 ? (
              <div>
                {difficulty === 1 && (
                  <table className="digit">
                    <tr className="">
                      <td className="first-col px-2 ">
                        <FractionDisplay
                          numerator={randomNums.numerator1}
                          denominator={randomNums.denominator1}
                        />
                      </td>
                      <td className="opertor px-4 ">
                        <OperatorDisplay
                          operation={operation}
                          mixOperation={mixOperation}
                        />
                      </td>
                      <td className="second-col px-2 ">
                        <FractionDisplay
                          numerator={randomNums.numerator2}
                          denominator={randomNums.denominator2}
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

                        <td className="opertor px-2 md:px-4  flex items-center">
                          <AddDivInputsOperator
                            getterFuction={divisionInputs}
                            setterFuction={setDivisionInputs}
                          />
                        </td>

                        <td className="second-col md:px-4">
                          <AddDivInputsFraction
                            numerator={divisionInputs.numerator2}
                            denominator={divisionInputs.denominator2}
                            getterFuction={divisionInputs}
                            setterFuction={setDivisionInputs}
                          />
                        </td>
                      </td>
                    </tr>
                  </table>
                )}

                {difficulty > 1 && (
                  <table className="digit">
                    <tr className="">
                      <td className="first-col ">
                        <FractionDisplay
                          numerator={randomNums.numerator1}
                          denominator={randomNums.denominator1}
                        />
                      </td>

                      <td className="opertor px-2  md:pl-4">
                        <OperatorDisplay
                          operation={operation}
                          mixOperation={mixOperation}
                        />
                      </td>

                      <td className="second-col md:px-4">
                        <FractionDisplay
                          numerator={randomNums.numerator2}
                          denominator={randomNums.denominator2}
                        />
                      </td>

                      <td className="= px-2 md:px-6">
                        <tr>=</tr>
                      </td>
                      {/* ================================================== input side ========================================== */}
                      <td className="inputs md:px-4 flex flex-row items-center">
                        <td className="first-col md:px-4">
                          <AddDivInputsFraction
                            numerator={divisionInputs.numerator1}
                            denominator={divisionInputs.denominator1}
                            getterFuction={divisionInputs}
                            setterFuction={setDivisionInputs}
                          />
                        </td>

                        <td className="opertor px-2 md:px-4  flex items-center">
                          <AddDivInputsOperator
                            getterFuction={divisionInputs}
                            setterFuction={setDivisionInputs}
                          />
                        </td>

                        <td className="second-col md:px-4">
                          <AddDivInputsFraction
                            numerator={divisionInputs.numerator2}
                            denominator={divisionInputs.denominator2}
                            getterFuction={divisionInputs}
                            setterFuction={setDivisionInputs}
                          />
                        </td>
                      </td>
                    </tr>
                  </table>
                )}
              </div>
            ) : (
              <table className="digit  pl-0 pr-0 justify-start">
                <tr className="">
                  <td className="first-col flex flex-row justify-start   ">
                    <table className="">
                      <tbody className="">
                        <tr className="">{randomNums.numerator1}</tr>
                        <tr className="line-tr">
                          <div class="line"></div>
                        </tr>
                        <tr>{randomNums.denominator1}</tr>
                      </tbody>
                    </table>
                    {/* ======= check if the operation is addition and denominators are different, then put extra inputs. */}
                    {operation < 3 && !sameDenoms && (
                      <div className="md:ml-4 flex flex-row ">
                        <table className="flex items-center">
                          <tbody>
                            <tr className="tr-different-deno">
                              <td>&times;</td>
                            </tr>
                          </tbody>
                        </table>

                        <AddDivInputsFraction
                          numerator={additionInputs.numerator1}
                          denominator={additionInputs.denominator1}
                          getterFuction={additionInputs}
                          setterFuction={setAdditionInputs}
                        />
                      </div>
                    )}
                  </td>

                  <td className="opertor px-2 md:px-3 pl-3 md:pl-5 ">
                    <OperatorDisplay
                      operation={operation}
                      mixOperation={mixOperation}
                    />
                  </td>

                  <td className="second-col flex  flex-row px-2 md:px-3">
                    <table>
                      <tbody>
                        <tr>{randomNums.numerator2}</tr>
                        <tr className="line-tr">
                          <div class="line"></div>
                        </tr>
                        <tr>
                          {operation < 3 && sameDenoms
                            ? randomNums.denominator1
                            : randomNums.denominator2}
                        </tr>
                      </tbody>
                    </table>
                    {operation < 3 && !sameDenoms && (
                      <div className="md:ml-4 flex flex-row">
                        <table className="flex items-center">
                          <tbody>
                            <tr className="tr-different-deno ">
                              <td className="">&times;</td>
                            </tr>
                          </tbody>
                        </table>
                        <AddDivInputsFraction
                          numerator={additionInputs.numerator2}
                          denominator={additionInputs.denominator2}
                          getterFuction={additionInputs}
                          setterFuction={setAdditionInputs}
                        />
                      </div>
                    )}
                  </td>

                  <td className="= md:px-3">
                    <tr>=</tr>
                  </td>

                  <td className="inputs md:px-3">
                    <table>
                      <tbody>
                        <tr>
                          <MathInput
                            type="inputNum"
                            setInputs={setInputs}
                            inputs={inputs}
                            difficulty={difficulty}
                            operation={operation}
                            sameDenoms={sameDenoms}
                            mathInputNull={mathInputNull}
                            setMathInputNull={setMathInputNull}
                          />
                        </tr>
                        <tr className="line-tr">
                          <div class="line-input"></div>
                        </tr>
                        <tr>
                          <MathInput
                            type="inputDenom"
                            setInputs={setInputs}
                            inputs={inputs}
                            difficulty={difficulty}
                            operation={operation}
                            sameDenoms={sameDenoms}
                            mathInputNull={mathInputNull}
                            setMathInputNull={setMathInputNull}
                          />
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
              </table>
            )}

            <div className="buttons w-full  flex flex-row justify-start mt-14">
              <button onClick={handleCheck} className="btn-drill">
                Check
              </button>

              <button
                ref={btnNextRef}
                onClick={() => {
                  handleNext();
                  setMathInputNull(true);
                }}
                className="btn-drill ml-1 md:ml-3"
              >
                Next
              </button>
            </div>
          </div>
        ) : (
          <div>
            {efraction > 0 && (
              <Fraction
                efraction={efraction}
                difficulty2={difficulty2}
                btnFracNextRef={btnFracNextRef}
              />
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default DrillSection;
