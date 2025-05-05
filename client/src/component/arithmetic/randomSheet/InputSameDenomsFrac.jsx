import React from "react";

const InputSameDenomsFrac = ({ additionInputs, setAdditionInputs, change }) => {
  return (
    <div className="md:ml-4 flex flex-row">
      <table className="flex items-center">
        <tbody>
          <tr className="tr-different-deno">
            <td>&times;</td>
          </tr>
        </tbody>
      </table>
      <table className="">
        <tbody className="">
          <tr className="">
            <div className="max-w-4">
              <input
                onChange={(e) =>
                  setAdditionInputs({
                    ...additionInputs,
                    [change === 1 ? "numerator1" : "numerator2"]:
                      e.target.value,
                  })
                }
                id="num"
                className="input digit-input"
              />
            </div>
          </tr>
          <tr className="line-tr">
            <div class="line-input"></div>
          </tr>

          <tr>
            <input
              onChange={(e) =>
                setAdditionInputs({
                  ...additionInputs,
                  [change === 1 ? "denominator1" : "denominator2"]:
                    e.target.value,
                })
              }
              id="num"
              className="input digit-input"
            />
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default InputSameDenomsFrac;
