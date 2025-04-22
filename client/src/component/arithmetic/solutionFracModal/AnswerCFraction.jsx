import React from "react";

const AnswerCFraction = ({ randomDec, inputsDec, efraction }) => {
  return (
    <div className=" flex items-center mb-2 px-2 md:px-4">
      <div className="flex flex-col pl-2 md:pl-0 ">
        <div className="flex flex-col md:flex-row">
          <div className="part-1 md:mt-2 pl-3 md:pl-6">
            <table className="digit-solution">
              {/* <button onClick={()=>console.log(inputs)}>show</button> */}
              <tr>
                <td className="flex flex-row items-center">
                  <table className="first col">
                    <tbody className="">
                      <tr className="text-center">{randomDec.numerator1}</tr>

                      <tr className="flex items-center mt-1 mb-1">
                        <div className="border-t border-2  border-gray-500   w-5 "></div>
                      </tr>

                      <tr className="text-center">{randomDec.denominator1}</tr>
                    </tbody>
                  </table>

                  <table className="opertor mx-3 md:mx-4">
                    <tbody>
                      <tr>
                        {efraction === 5 && <h2>&times;</h2>}
                        {efraction === 6 && <h2>&divide;</h2>}
                        {efraction === 7 && <h2>+</h2>}
                        {efraction === 8 && <h2>-</h2>}
                      </tr>
                    </tbody>
                  </table>

                  <table className="3rd col mr-1 md:mr-2">
                    <tbody className="">
                      <tr className="">{randomDec.number}</tr>
                    </tbody>
                  </table>

                  <table className="4th col">
                    <tbody className="">
                      <tr className="text-center">{randomDec.numerator2}</tr>

                      <tr className="flex items-center mt-1 mb-1">
                        <div className="border-t border-2  border-gray-500   w-5 "></div>
                      </tr>

                      <tr className="text-center">{randomDec.denominator2}</tr>
                    </tbody>
                  </table>

                  <table className="opertor mx-3 md:mx-4">
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

          <div className="part-2 flex flex-row mt-8 md:mt-0">
            <table className="opertor mr-2 md:mr-4 flex items-center md:hidden">
              <tbody>
                <tr>
                  <h2>=</h2>
                </tr>
              </tbody>
            </table>
            <table className="digit-solution">
              {/* <button onClick={()=>console.log(inputs)}>show</button> */}
              <tr>
                <td className="flex flex-row items-center">
                  <table className="first col">
                    <tbody className="">
                      <tr className=" text-center">{randomDec.numerator1}</tr>

                      <tr className="flex items-center mt-1 mb-1">
                        <div className="border-t border-2  border-gray-500   w-5 "></div>
                      </tr>

                      <tr className=" text-center">{randomDec.denominator1}</tr>
                    </tbody>
                  </table>

                  <table className="opertor mx-2 md:mx-3">
                    <tbody>
                      <tr>
                        {efraction === 5 && <h2>&times;</h2>}
                        {efraction === 6 && <h2>&divide;</h2>}
                        {efraction === 7 && <h2>+</h2>}
                        {efraction === 8 && <h2>-</h2>}
                      </tr>
                    </tbody>
                  </table>

                  <table className="( mr-2 md:mr-4 h-[50px]">
                    <tbody className=" flex items-center md:pb-4 pt-2 md:pt-0">
                      <span className="text-[20px] text-gray-500 md:text-[40px]">
                        {"("}
                      </span>
                    </tbody>
                  </table>

                  <table className="2nd col">
                    <tbody className="">
                      <tr className="bg-gray-200 text-center">
                        <label className="px-2 ">{inputsDec.numerator1}</label>
                      </tr>

                      <tr className="flex items-center mt-1 mb-1">
                        <div className="border-t border-2  border-gray-500 w-8 "></div>
                      </tr>

                      <tr className="bg-gray-200 text-center">
                        <label className="px-2 ">
                          {inputsDec.denominator1}
                        </label>
                      </tr>
                    </tbody>
                  </table>

                  <table className="opertor mx-1 md:mx-2">
                    <tbody>
                      <tr>
                        <h2>+</h2>
                      </tr>
                    </tbody>
                  </table>

                  <table className="3rd col">
                    <tbody className="">
                      <tr className="bg-gray-200 text-center">
                        <label className="px-2 ">{inputsDec.numerator2}</label>
                      </tr>

                      <tr className="flex items-center mt-1 mb-1">
                        <div className="border-t border-2  border-gray-500   w-8 "></div>
                      </tr>

                      <tr className="bg-gray-200 text-center">
                        <label className="px-2 ">
                          {inputsDec.denominator2}
                        </label>
                      </tr>
                    </tbody>
                  </table>

                  <table className=") ml-2 md:ml-4 h-[50px]">
                    <tbody className=" flex items-center md:pb-4 pt-2 md:pt-0">
                      <span className="text-[20px] text-gray-500 md:text-[40px]">
                        {")"}
                      </span>
                    </tbody>
                  </table>

                  <table className="opertor mx-3 md:mx-4">
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
        </div>

        <div className="bottom-row mt-6 md:mt-8 ">
          <table className="digit-solution">
            {/* <button onClick={()=>console.log(inputs)}>show</button> */}
            <tr>
              <td className="flex flex-row items-center">
                <table className="opertor mr-3 md:mr-6">
                  <tbody>
                    <tr>
                      <h2>=</h2>
                    </tr>
                  </tbody>
                </table>

                <table className="first col">
                  <tbody className="">
                    <tr className="text-center">{randomDec.numerator1}</tr>

                    <tr className="flex items-center mt-1 mb-1">
                      <div className="border-t border-2  border-gray-500   w-5 "></div>
                    </tr>

                    <tr className="text-center">{randomDec.denominator1}</tr>
                  </tbody>
                </table>

                <table className="opertor mx-3 md:mx-4">
                  <tbody>
                    <tr>
                      {efraction === 5 && <h2>&times;</h2>}
                      {efraction === 6 && <h2>&divide;</h2>}
                      {efraction === 7 && <h2>+</h2>}
                      {efraction === 8 && <h2>-</h2>}
                    </tr>
                  </tbody>
                </table>

                <table className="2nd col">
                  <tbody className="">
                    <tr className="bg-gray-200 text-center">
                      <label className="px-2 ">{inputsDec.numerator3}</label>
                    </tr>

                    <tr className="flex items-center mt-1 mb-1">
                      <div className="border-t border-2  border-gray-500   w-8 "></div>
                    </tr>

                    <tr className="bg-gray-200 text-center">
                      <label className="px-2">{inputsDec.denominator3}</label>
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

                <table className="3rd col">
                  <tbody className="">
                    <tr className="bg-gray-200 text-center">
                      <label className="px-3 ">{inputsDec.inputsNum}</label>
                    </tr>

                    <tr className="flex items-center mt-1 mb-1">
                      <div className="border-t border-2  border-gray-500   w-10 "></div>
                    </tr>

                    <tr className="bg-gray-200 text-center">
                      <label className="px-3 ">{inputsDec.inputsDenom}</label>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
          </table>
        </div>
      </div>

      {/*-------------------   solution section ends here -------------------------------*/}
    </div>
  );
};

export default AnswerCFraction;
