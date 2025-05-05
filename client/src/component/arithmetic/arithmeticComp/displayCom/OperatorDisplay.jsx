import React from "react";

const OperatorDisplay = ({ operation, mixOperation }) => {
  return (
    <div>
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
              {mixOperation === 1 && <h2>+</h2>}
              {mixOperation === 2 && <h2>-</h2>}
              {mixOperation === 3 && <h2>&times;</h2>}
              {mixOperation === 4 && <h2>&divide;</h2>}
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default OperatorDisplay;
