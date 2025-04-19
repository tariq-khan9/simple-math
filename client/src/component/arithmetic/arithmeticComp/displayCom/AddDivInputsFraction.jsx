import React from "react";

const AddDivInputsFraction = ({
  numerator,
  denominator,
  getterFuction,
  setterFuction,
}) => {
  return (
    <table>
      <tbody>
        <tr className="">
          <input
            value={numerator}
            onChange={(e) =>
              setterFuction({
                ...getterFuction,
                numerator: e.target.value,
              })
            }
            id="divisionNum2"
            className="input digit-input"
          />
        </tr>
        <tr className="line-tr">
          <div class="line-input"></div>
        </tr>
        <tr>
          <input
            value={denominator}
            onChange={(e) =>
              setterFuction({
                ...getterFuction,
                denominator: e.target.value,
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
