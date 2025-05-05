import React from "react";

const Part1 = ({ randomDec, sign }) => {
  return (
    <div className="part-1 md:pt-[6px]">
      <table className="digit">
        {/* <button onClick={()=>console.log(inputs)}>show</button> */}
        <tr>
          <td className="flex flex-row items-center">
            <table className="first col">
              <tbody className="">
                <tr className="">{randomDec.numerator1}</tr>

                <tr className="line-tr">
                  <div className="line"></div>
                </tr>

                <tr>{randomDec.denominator1}</tr>
              </tbody>
            </table>

            <table className="opertor mx-3 md:mx-6">
              <tbody>
                <tr>
                  <h2>{sign}</h2>
                </tr>
              </tbody>
            </table>

            <table className="3rd col ">
              <tbody className="">
                <tr className="">{randomDec.number}</tr>
              </tbody>
            </table>

            <table className=".">
              <tbody className="pb-2">
                <tr className="">.</tr>
              </tbody>
            </table>

            <table className="4th col">
              <tbody className="">
                <tr className="">{randomDec.decimal}</tr>
              </tbody>
            </table>

            <table className="opertor mx-3 md:mx-6">
              <tbody>
                <tr>
                  <h2>=</h2>
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
      </table>
    </div>
  );
};

export default Part1;
