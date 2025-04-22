import React from 'react';

const NumberArrayDisplay = ({ numbers }) => {
    const displayExpression = numbers.join(' × ');

    return (
        <div>
            <p>{displayExpression}</p>
        </div>
    );
}

export default NumberArrayDisplay;
