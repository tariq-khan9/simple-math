import React from "react";

const FractionDisplay = ({ numerator, denominator }) => {
  return (
    <table className="">
      <tbody className="">
        <tr className="">{numerator}</tr>
        <tr className="line-tr">
          <div class="line"></div>
        </tr>
        <tr>{denominator}</tr>
      </tbody>
    </table>
  );
};

export default FractionDisplay;
