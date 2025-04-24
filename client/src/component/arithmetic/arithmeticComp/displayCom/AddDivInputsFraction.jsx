import React from "react";

const AddDivInputsFraction = ({ getterFuction, setterFuction, change }) => {
  console.log("getterfuction in ", getterFuction);
  return (
    <table>
      <tbody>
        <tr className="">
          <td>
            <input
              value={
                change == 1
                  ? getterFuction.numerator1
                  : getterFuction.numerator2
              }
              onChange={(e) =>
                setterFuction({
                  ...getterFuction,
                  [change == 1 ? "numerator1" : "numerator2"]: e.target.value,
                })
              }
              id="divisionNum2"
              className="input digit-input"
            />
          </td>
        </tr>
        <tr className="line-tr">
          <div class="line-input"></div>
        </tr>
        <tr>
          <input
            value={
              change == 1
                ? getterFuction.denominator1
                : getterFuction.denominator2
            }
            onChange={(e) =>
              setterFuction({
                ...getterFuction,
                [change == 1 ? "denominator1" : "denominator2"]: e.target.value,
              })
            }
            id="divisionDeno2"
            className="input digit-input "
          />
        </tr>
      </tbody>
    </table>
  );
};

export default AddDivInputsFraction;
