import React from "react";
import SimplifyFraction from "../arithmeticPage/SimplifyFraction";

const AdditionSolution = ({ randomNums, operation, sameDenoms }) => {
  return (
    <div>
      {/**========================  first row =========================================**/}
      <table className="solution-digit">
        <tr className="">
          <div className="text-[20px] flex items-start mb-2"></div>
          <td className="= px-2">
            <tr>=</tr>
          </td>
          <td className="first-col px-1">
            <table className="">
              <tbody className="">
                <tr className="">{randomNums.numerator1}</tr>
                <tr className="flex items-center mt-1 mb-1">
                  <div class="border-t border-2  border-gray-500   w-5 mx-auto"></div>
                </tr>
                <tr>{randomNums.denominator1}</tr>
              </tbody>
            </table>
          </td>

          <td className="opertor px-1">
            <table>
              <tbody>
                <tr>
                  {operation === 1 && <h2>+</h2>}
                  {operation === 2 && <h2>-</h2>}
                  {operation === 3 && <h2>&times;</h2>}
                  {operation === 4 && <h2>&divide;</h2>}
                </tr>
              </tbody>
            </table>
          </td>

          <td className="second-col px-1">
            <table>
              <tbody>
                <tr>{randomNums.numerator2}</tr>
                <tr className="flex items-center mt-1 mb-1">
                  <div class="border-t border-2  border-gray-500   w-6 mx-auto"></div>
                </tr>
                <tr>
                  {sameDenoms
                    ? randomNums.denominator1
                    : randomNums.denominator2}
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
      </table>
      {/**========================  second row =========================================**/}
      <table className="solution-digit">
        <tr className="">
          <td className="= px-2">
            <tr>=</tr>
          </td>
          <td className="first-col px-1">
            <table className="">
              {sameDenoms ? (
                <tbody className="">
                  <tr className="">
                    {randomNums.numerator1} + {randomNums.numerator2}
                  </tr>

                  <tr className="flex items-center mt-1 mb-1">
                    <div class="border-t border-2  border-gray-500   w-32 mx-auto"></div>
                  </tr>
                  <tr>{randomNums.denominator1}</tr>
                </tbody>
              ) : (
                <tbody className="">
                  <tr className="">
                    <table className="flex items-center">
                      <td className="first-col px-1">
                        <table className="">
                          <tbody className="">
                            <tr className="">{randomNums.numerator1}</tr>
                            <tr className="flex items-center mt-1 mb-1">
                              <div class="border-t border-2  border-gray-500   w-5 mx-auto"></div>
                            </tr>
                            <tr>{randomNums.denominator1}</tr>
                          </tbody>
                        </table>
                      </td>

                      <td className="opertor-* px-1 text-center   ">
                        <table className=" ">
                          <tbody className="flex items-center  justify-center">
                            <tr className="flex h-full text-center ">
                              <h2>&times;</h2>
                            </tr>
                          </tbody>
                        </table>
                      </td>

                      <td className="second-col px-1">
                        <table>
                          <tbody>
                            <tr>{randomNums.denominator2}</tr>
                            <tr className="flex items-center mt-1 mb-1">
                              <div class="border-t border-2  border-gray-500   w-6 mx-auto"></div>
                            </tr>
                            <tr>{randomNums.denominator2}</tr>
                          </tbody>
                        </table>
                      </td>

                      <td className="opertor-+ px-1 text-center">
                        <table className=" ">
                          <tbody className="flex items-center  justify-center">
                            <tr className="flex h-full text-center ">
                              <h2>+</h2>
                            </tr>
                          </tbody>
                        </table>
                      </td>

                      <td className="first-col px-1">
                        <table className="">
                          <tbody className="">
                            <tr className="">{randomNums.numerator2}</tr>
                            <tr className="flex items-center mt-1 mb-1">
                              <div class="border-t border-2  border-gray-500   w-5 mx-auto"></div>
                            </tr>
                            <tr>{randomNums.denominator2}</tr>
                          </tbody>
                        </table>
                      </td>

                      <td className="opertor-* px-1 text-center   ">
                        <table className=" ">
                          <tbody className="flex items-center  justify-center">
                            <tr className="flex h-full text-center ">
                              <h2>&times;</h2>
                            </tr>
                          </tbody>
                        </table>
                      </td>

                      <td className="second-col px-1">
                        <table>
                          <tbody>
                            <tr>{randomNums.denominator1}</tr>
                            <tr className="flex items-center mt-1 mb-1">
                              <div class="border-t border-2  border-gray-500   w-6 mx-auto"></div>
                            </tr>
                            <tr>{randomNums.denominator1}</tr>
                          </tbody>
                        </table>
                      </td>
                    </table>
                  </tr>
                </tbody>
              )}
            </table>
          </td>
        </tr>
      </table>

      {/**========================  third row  if different denoms =========================================**/}
      {!sameDenoms && (
        <table className="solution-digit">
          <tr className="">
            <td className="= px-2">
              <tr>=</tr>
            </td>
            <td className="first-col px-1">
              <table className="">
                <tbody className="">
                  <tr className="">
                    <table className="flex items-center">
                      <td className="first-col px-1">
                        <table className="">
                          <tbody className="">
                            <tr className="">
                              {randomNums.numerator1 * randomNums.denominator2}
                            </tr>
                            <tr className="flex items-center mt-1 mb-1">
                              <div class="border-t border-2  border-gray-500   w-5 mx-auto"></div>
                            </tr>
                            <tr>
                              {randomNums.denominator1 *
                                randomNums.denominator2}
                            </tr>
                          </tbody>
                        </table>
                      </td>

                      <td className="opertor-+ px-1 text-center   ">
                        <table className=" ">
                          <tbody className="flex items-center  justify-center">
                            <tr className="flex h-full text-center ">
                              <h2>+</h2>
                            </tr>
                          </tbody>
                        </table>
                      </td>

                      <td className="second-col px-1">
                        <table>
                          <tbody>
                            <tr>
                              {randomNums.numerator2 * randomNums.denominator1}
                            </tr>
                            <tr className="flex items-center mt-1 mb-1">
                              <div class="border-t border-2  border-gray-500   w-6 mx-auto"></div>
                            </tr>
                            <tr>
                              {randomNums.denominator2 *
                                randomNums.denominator1}
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </table>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        </table>
      )}

      {/**========================  third row =========================================**/}
      <table className="solution-digit">
        <tr className="">
          {!sameDenoms && (
            <td className="= px-2">
              <tr>=</tr>
            </td>
          )}

          <td className="first-col px-1">
            <table className="">
              {!sameDenoms && (
                <tbody className="">
                  <tr className="">
                    {randomNums.numerator1 * randomNums.denominator2} +{" "}
                    {randomNums.denominator1 * randomNums.numerator2}
                  </tr>

                  <tr className="flex items-center mt-1 mb-1">
                    <div class="border-t border-2  border-gray-500   w-24 mx-auto"></div>
                  </tr>
                  <tr>{randomNums.denominator1 * randomNums.denominator2}</tr>
                </tbody>
              )}
            </table>
          </td>
        </tr>
      </table>

      {/**========================  4th row =========================================**/}
      <table className="solution-digit">
        <tr className="">
          <td className="= px-2">
            <tr>=</tr>
          </td>
          <td className="first-col px-1">
            <table className="">
              {sameDenoms ? (
                <tbody className="">
                  <tr className="">
                    {randomNums.numerator1 + randomNums.numerator2}
                  </tr>

                  <tr className="flex items-center mt-1 mb-1">
                    <div class="border-t border-2  border-gray-500   w-12 mx-auto"></div>
                  </tr>
                  <tr>{randomNums.denominator1}</tr>
                </tbody>
              ) : (
                <tbody className="">
                  <tr className="">
                    {randomNums.numerator1 * randomNums.denominator2 +
                      randomNums.denominator1 * randomNums.numerator2}
                  </tr>

                  <tr className="flex items-center mt-1 mb-1">
                    <div class="border-t border-2  border-gray-500   w-12 mx-auto"></div>
                  </tr>
                  <tr>{randomNums.denominator1 * randomNums.denominator2}</tr>
                </tbody>
              )}
            </table>
          </td>
        </tr>
      </table>

      {/**========================  5th row =========================================**/}
      <table className="solution-digit">
        <tr className="">
          <td className="first-col px-1">
            <table className="">
              {sameDenoms ? (
                <tbody className="">
                  <tr className="">
                    <SimplifyFraction
                      numerator={randomNums.numerator1 + randomNums.numerator2}
                      denominator={randomNums.denominator1}
                    />
                  </tr>
                </tbody>
              ) : (
                <tbody className="">
                  <tr className="">
                    <SimplifyFraction
                      numerator={
                        randomNums.numerator1 * randomNums.denominator2 +
                        randomNums.denominator1 * randomNums.numerator2
                      }
                      denominator={
                        randomNums.denominator1 * randomNums.denominator2
                      }
                    />
                  </tr>
                </tbody>
              )}
            </table>
          </td>
        </tr>
      </table>
    </div>
  );
};

export default AdditionSolution;
