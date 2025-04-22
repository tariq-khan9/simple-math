import React from "react";

const InputFraction = ({ handler, index, value1, value2 }) => {
  return (
    <table>
      <tbody>
        <tr className="">
          <input
            onChange={(e) => handler(index, value1, parseInt(e.target.value))}
            id={value1}
            className="input digit-input"
          />
        </tr>
        <tr className="line-tr">
          <div class="line-input"></div>
        </tr>
        <tr>
          <input
            onChange={(e) => handler(index, value2, parseInt(e.target.value))}
            id={value2}
            className="input digit-input"
          />
        </tr>
      </tbody>
    </table>
  );
};

export default InputFraction;
