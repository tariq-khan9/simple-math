import React from "react";

const OperationSign = ({ operation, randomNums }) => {
  return (
    <table>
      <tbody>
        {operation > 0 ? (
          <tr>
            {operation === 1 && <h2>+</h2>}
            {operation === 2 && <h2>-</h2>}
            {operation === 3 && <h2>&times;</h2>}
            {operation === 4 && <h2>&divide;</h2>}
          </tr>
        ) : (
          <tr>
            {randomNums.mixOperation === 1 && <h2>+</h2>}
            {randomNums.mixOperation === 2 && <h2>-</h2>}
            {randomNums.mixOperation === 3 && <h2>&times;</h2>}
            {randomNums.mixOperation === 4 && <h2>&divide;</h2>}
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default OperationSign;
