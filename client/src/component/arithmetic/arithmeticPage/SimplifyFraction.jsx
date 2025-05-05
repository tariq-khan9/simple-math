import React from "react";

const SimplifyFraction = ({ numerator, denominator }) => {
  // Find the greatest common divisor (GCD) of numerator and denominator
  const findGCD = (a, b) => {
    while (b !== 0) {
      let temp = b;
      b = a % b;
      a = temp;
    }
    return a;
  };

  const gcd = findGCD(Math.abs(numerator), Math.abs(denominator));

  // Simplify the fraction by dividing both numerator and denominator by their GCD
  let simplifiedNumerator = numerator / gcd;
  let simplifiedDenominator = denominator / gcd;
  console.log("simplify at tope", simplifiedNumerator, simplifiedDenominator);

  if (
    numerator === simplifiedNumerator &&
    denominator === simplifiedDenominator
  )
    return null;

  if (simplifiedNumerator < 0 && simplifiedDenominator < 0) {
    console.log(
      "simplified numbers both neg",
      simplifiedNumerator,
      simplifiedDenominator
    );
    simplifiedNumerator = Math.abs(simplifiedNumerator);
    simplifiedDenominator = Math.abs(simplifiedDenominator);
  }

  if (simplifiedNumerator > 0 && simplifiedDenominator < 0) {
    console.log(
      "simplified numbers denom neg",
      simplifiedNumerator,
      simplifiedDenominator
    );
    simplifiedNumerator = -simplifiedNumerator;
    simplifiedDenominator = Math.abs(simplifiedDenominator);
  }

  if (simplifiedNumerator < 0 && simplifiedDenominator > 0) {
    console.log(
      "simplified numbers num neg ",
      simplifiedNumerator,
      simplifiedDenominator
    );
    //simplifiedNumerator = -simplifiedNumerator;
    simplifiedDenominator = Math.abs(simplifiedDenominator);
  }

  if (simplifiedNumerator === 0 || simplifiedDenominator === 0) {
    return (
      <div className="flex flex-row">
        <div className="flex items-center align-center mr-4 ml-1">=</div>
        <div className="flex flex-col items-center justify-center">
          <div>0</div>
        </div>
      </div>
    );
  }

  if (simplifiedDenominator === 1) {
    return (
      <div className="flex flex-row">
        <div className="flex items-center align-center mr-4 ml-1">=</div>
        <div className="flex flex-col items-center justify-center">
          <div>{simplifiedNumerator}</div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-row">
      <div className="flex items-center align-center mr-4 ml-1">=</div>
      <div className="flex flex-col items-center justify-center">
        <div>{simplifiedNumerator}</div>
        <div class="border-t my-1 border-2  border-gray-500   w-7 mx-auto"></div>
        <div>{simplifiedDenominator}</div>
      </div>
    </div>
  );

  // return { numerator: simplifiedNumerator, denominator: simplifiedDenominator };
};

export default SimplifyFraction;
