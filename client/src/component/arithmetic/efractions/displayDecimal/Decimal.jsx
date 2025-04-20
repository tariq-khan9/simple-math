import React, { useEffect } from "react";
import MathInputDec from "../MathInputDec";
import Part1 from "./Part1";
import Part2 from "./Part2";

const Decimal = ({
  randomDec,
  inputsDec,
  setInputsDec,
  mathInputNull,
  setMathInputNull,
  sign,
}) => {
  return (
    <div className="flex flex-col pl-2 md:pl-0 ">
      <div className="flex flex-col md:flex-row">
        <Part1 randomDec={randomDec} sign={sign} />
        <Part2
          randomDec={randomDec}
          inputsDec={inputsDec}
          setInputsDec={setInputsDec}
          sign={sign}
        />
      </div>

      <div className="bottom-row mt-8 md:mt-16 ">
        <table className="digit">
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
                    <h2>&times;</h2>
                  </tr>
                </tbody>
              </table>

              <table className="2nd col">
                <tbody className="">
                  <tr className="">
                    <MathInputDec
                      type="numerator3"
                      setInputs={setInputsDec}
                      inputs={inputsDec}
                      mathInputNull={mathInputNull}
                      setMathInputNull={setMathInputNull}
                    />
                  </tr>

                  <tr className="line-tr">
                    <div className="line-input"></div>
                  </tr>

                  <tr>
                    <MathInputDec
                      type="denominator3"
                      setInputs={setInputsDec}
                      inputs={inputsDec}
                      mathInputNull={mathInputNull}
                      setMathInputNull={setMathInputNull}
                    />
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
                  <tr className="">
                    {/* <input value={inputsDec.inputsNum===null? "" : inputsDec.inputsNum} onChange={(e)=>setInputsDec({...inputsDec, inputsNum: e.target.value})}   className='input-decimal digit-input '/> */}

                    <MathInputDec
                      type="inputsNum"
                      setInputs={setInputsDec}
                      inputs={inputsDec}
                      mathInputNull={mathInputNull}
                      setMathInputNull={setMathInputNull}
                    />
                  </tr>

                  <tr className="line-tr">
                    <div className="line-input"></div>
                  </tr>

                  <tr>
                    <MathInputDec
                      type="inputsDenom"
                      setInputs={setInputsDec}
                      inputs={inputsDec}
                      mathInputNull={mathInputNull}
                      setMathInputNull={setMathInputNull}
                    />
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default Decimal;
