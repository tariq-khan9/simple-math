import React from "react";

const InputSign = ({ handler, index, value }) => {
  return (
    <table>
      <tbody className="">
        <tr>
          <td className="text-center">
            {" "}
            {/* Add a td element to center the input */}
            <input
              onChange={(e) => handler(index, "sign", e.target.value)}
              id={value}
              className="input-div digit-input text-center"
            />
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default InputSign;
