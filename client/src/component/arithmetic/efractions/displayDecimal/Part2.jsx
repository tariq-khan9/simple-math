import React from "react";

const Part2 = ({ randomDec, inputsDec, setInputsDec, sign }) => {
  return (
    <div className="part-2 flex flex-row mt-8 md:mt-0">
      <table className="opertor mr-2 md:mr-4 flex items-center md:hidden">
        <tbody>
          <tr>
            <h2>=</h2>
          </tr>
        </tbody>
      </table>
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

            <table className="opertor mx-2 md:mx-4">
              <tbody>
                <tr>
                  <h2>{sign}</h2>
                </tr>
              </tbody>
            </table>

            <table className="( mr-2 md:mr-4 h-[100px]">
              <tbody className=" flex items-center md:pb-4 pt-2 md:pt-0">
                <span className="text-[50px] text-gray-500 md:text-[80px]">
                  {"("}
                </span>
              </tbody>
            </table>

            <table className="2nd col">
              <tbody className="">
                <tr className="">
                  <input
                    value={
                      inputsDec.numerator1 === null ? "" : inputsDec.numerator1
                    }
                    onChange={(e) =>
                      setInputsDec({
                        ...inputsDec,
                        numerator1: e.target.value,
                      })
                    }
                    className="input-decimal digit-input "
                  />
                </tr>

                <tr className="line-tr">
                  <div className="line"></div>
                </tr>

                <tr>
                  <input
                    value={
                      inputsDec.denominator1 === null
                        ? ""
                        : inputsDec.denominator1
                    }
                    onChange={(e) =>
                      setInputsDec({
                        ...inputsDec,
                        denominator1: e.target.value,
                      })
                    }
                    className="input-decimal digit-input "
                  />
                </tr>
              </tbody>
            </table>

            <table className="opertor mx-2 md:mx-4">
              <tbody>
                <tr>
                  <h2>+</h2>
                </tr>
              </tbody>
            </table>

            <table className="3rd col">
              <tbody className="">
                <tr className="">
                  <input
                    value={
                      inputsDec.numerator2 === null ? "" : inputsDec.numerator2
                    }
                    onChange={(e) =>
                      setInputsDec({
                        ...inputsDec,
                        numerator2: e.target.value,
                      })
                    }
                    className="input-decimal digit-input "
                  />
                </tr>

                <tr className="line-tr">
                  <div className="line"></div>
                </tr>

                <tr>
                  <input
                    value={
                      inputsDec.denominator2 === null
                        ? ""
                        : inputsDec.denominator2
                    }
                    onChange={(e) =>
                      setInputsDec({
                        ...inputsDec,
                        denominator2: e.target.value,
                      })
                    }
                    className="input-decimal digit-input "
                  />
                </tr>
              </tbody>
            </table>

            <table className=") ml-2 md:ml-4 h-[100px]">
              <tbody className=" flex items-center md:pb-4 pt-2 md:pt-0">
                <span className="text-[50px] text-gray-500 md:text-[80px]">
                  {")"}
                </span>
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

export default Part2;
