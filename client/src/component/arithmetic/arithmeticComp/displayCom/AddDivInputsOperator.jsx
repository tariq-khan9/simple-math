import React from "react";

const AddDivInputsOperator = ({ getterFuction, setterFuction }) => {
  return (
    <table>
      <tbody className="">
        <tr>
          <td className="text-center">
            {" "}
            {/* Add a td element to center the input */}
            <input
              value={getterFuction.sign}
              onChange={(e) =>
                setterFuction({
                  ...getterFuction,
                  sign: e.target.value,
                })
              }
              id="sign"
              className="input-div digit-input text-center"
            />
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default AddDivInputsOperator;
