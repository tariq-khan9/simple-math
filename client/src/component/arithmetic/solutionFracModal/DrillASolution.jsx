import React from "react";

const DrillASolution = ({ randomFrac, multiplyNumber }) => {
  return (
    <div className="flex flex-row">
      <td className="= px-2 md:pr-4 flex items-center">
        <tr>=</tr>
      </td>
      <table className="text-[11px] md:text-[18px] font-semibold  text-gray-500 text-center mt-4">
        <tr>
          <td className="flex flex-row items-center">
            <table className="first col">
              <tbody className="">
                <tr className="">{randomFrac.numerator}</tr>

                <tr className="flex items-center mt-1 mb-1">
                  <div className="border-t border-2  border-gray-500   w-5 "></div>
                </tr>

                <tr>{randomFrac.denominator}</tr>
              </tbody>
            </table>

            <table className="opertor mx-2 md:mx-3">
              <tbody>
                <tr>
                  <h2>&times;</h2>
                </tr>
              </tbody>
            </table>

            <table className="  w-[25px] md:w-[40px]">
              <tbody className="">
                <tr className="flex justify-center items-center bg-gray-200 text-gray-700 rounded-[4px]">
                  <label className="  ">{multiplyNumber} </label>
                </tr>

                <tr className="flex items-center justify-center  mt-1 mb-1">
                  <div className="border-t border-2  border-gray-500   w-8 "></div>
                </tr>

                <tr className="flex justify-center items-center bg-gray-200 text-gray-700 rounded-[4px]">
                  <label className="  ">{multiplyNumber} </label>
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

            <table className="fourth col">
              <tbody className="">
                <tr className="">{randomFrac.numerator * multiplyNumber}</tr>

                <tr className="flex items-center mt-1 mb-1">
                  <div className="border-t border-2  border-gray-500   w-5 "></div>
                </tr>

                <tr>{randomFrac.denominator * multiplyNumber}</tr>
              </tbody>
            </table>
          </td>
        </tr>
      </table>
    </div>
  );
};

export default DrillASolution;
