import React from "react";
import SimplifyFraction from "../arithmeticPage/SimplifyFraction";

const DivisionSolution = ({ randomNums }) => {
  return (
    <div>
      {/**========================  first row =========================================**/}
      <table className="solution-digit">
        <tr className="">
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
                <tr>&divide;</tr>
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
                <tr>{randomNums.denominator2}</tr>
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
              <tbody className="">
                <tr className="">
                  {randomNums.numerator1} * {randomNums.denominator2}
                </tr>

                <tr className="flex items-center mt-1 mb-1">
                  <div class="border-t border-2  border-gray-500   w-32 mx-auto"></div>
                </tr>
                <tr>
                  {randomNums.denominator1} * {randomNums.numerator2}
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
      </table>
      {/**========================  third row =========================================**/}
      <table className="solution-digit">
        <tr className="">
          <td className="= px-2">
            <tr>=</tr>
          </td>
          <td className="first-col px-1">
            <table className="">
              <tbody className="">
                <tr className="">
                  {randomNums.numerator1 * randomNums.denominator2}
                </tr>

                <tr className="flex items-center mt-1 mb-1">
                  <div class="border-t border-2  border-gray-500   w-24 mx-auto"></div>
                </tr>
                <tr>{randomNums.denominator1 * randomNums.numerator2}</tr>
              </tbody>
            </table>
          </td>
        </tr>
      </table>

      {/**========================  4th row =========================================**/}
      <table className="solution-digit">
        <tr className="">
          <td className="first-col px-1">
            <table className="">
              <tbody className="">
                <tr className="">
                  <SimplifyFraction
                    numerator={randomNums.numerator1 * randomNums.denominator2}
                    denominator={
                      randomNums.denominator1 * randomNums.numerator2
                    }
                  />
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
      </table>
    </div>
  );
};

export default DivisionSolution;
