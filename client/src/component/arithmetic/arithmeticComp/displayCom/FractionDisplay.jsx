import React from "react";

const FractionDisplay = ({ numerator, denominator }) => {
  return (
    <div>
      <table className="">
        <tbody className="">
          <tr className="">{numerator}</tr>
          <tr className="line-tr">
            <div className="line"></div>
          </tr>
          <tr>{denominator}</tr>
        </tbody>
      </table>
    </div>
  );
};

export default FractionDisplay;
