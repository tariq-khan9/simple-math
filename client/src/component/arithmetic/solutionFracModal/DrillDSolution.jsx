import React from "react";
import NumberArrayDisplay from "../efractions/NumberArrayDisplay";

const DrillDSolution = ({
  randomFrac,
  numFactors,
  denomFactors,
  simplifiedFraction,
}) => {
  return (
    <div className="flex flex-row">
      <td className="= px-2 md:pr-4 flex items-center">
        <tr>=</tr>
      </td>
      <table className="solution-digit">
        <tr>
          <td className="flex flex-row items-center">
            <table className="first col">
              <tbody className="">
                <tr className="">{randomFrac.numerator}</tr>

                <tr className="line-tr">
                  <div className="line"></div>
                </tr>

                <tr>{randomFrac.denominator}</tr>
              </tbody>
            </table>

            <table className="opertor mx-2 md:mx-4">
              <tbody>
                <tr>
                  <h2>=</h2>
                </tr>
              </tbody>
            </table>

            <table className="third col">
              <tbody className="">
                <tr className="flex justify-center items-center bg-gray-200 text-gray-700 px-2 rounded-[4px]">
                  <label className="  ">
                    {numFactors.length ? (
                      <NumberArrayDisplay numbers={numFactors} />
                    ) : (
                      randomFrac.numerator
                    )}
                  </label>
                </tr>

                <tr className="line-tr">
                  <div className="line-input"></div>
                </tr>

                <tr className="flex justify-center items-center bg-gray-200 text-gray-700 px-2 rounded-[4px]">
                  <label className="  ">
                    {denomFactors.length ? (
                      <NumberArrayDisplay numbers={denomFactors} />
                    ) : (
                      randomFrac.denominator
                    )}
                  </label>
                </tr>
              </tbody>
            </table>

            <table className="opertor mx-2 md:mx-4">
              <tbody>
                <tr>
                  <h2>=</h2>
                </tr>
              </tbody>
            </table>

            <table className="final col">
              <tbody className="">
                <tr className="flex justify-center items-center bg-gray-200 text-gray-700 px-2 rounded-[4px]">
                  <label className="  ">{simplifiedFraction.numerator}</label>
                </tr>

                <tr className="line-tr">
                  <div className="line-input"></div>
                </tr>

                <tr className="flex justify-center items-center bg-gray-200 text-gray-700 px-2 rounded-[4px]">
                  <label className="  ">{simplifiedFraction.denominator}</label>
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
      </table>
    </div>
  );
};

export default DrillDSolution;
