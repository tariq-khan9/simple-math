import React from 'react'

const Fraction3 = ({randomFrac, multiplyNumber, inputs, setInputs}) => {
    return (
       
        <table className='digit'>
          <tr>
            <td className='flex flex-row items-center'>
                <table className='first col'>
                <tbody className=''>
                    <tr className=''>{randomFrac.numerator}</tr>
                      
                    <tr className='line-tr'>
                      <div className='line'></div>
                    </tr>

                    <tr>{randomFrac.denominator}</tr>      
                  </tbody>
                </table>

                <table className='opertor mx-3 md:mx-6'>
                  <tbody>
                      <tr>
                        <h2>=</h2>
                      </tr>
                  </tbody>
                </table>

                
                <table className='third col'>
                <tbody className=''>
                    <tr className=''>
                        <input value={inputs.inputNum===null? "" : inputs.inputNum} onChange={(e)=>setInputs({...inputs, inputNum: e.target.value})}  className='input digit-input '/>
                    </tr>
                      
                    <tr className='line-tr'>
                      <div className='line-input'></div>
                    </tr>

                    <tr>
                    {randomFrac.denominator*multiplyNumber}
                    </tr>      
                  </tbody>
                </table>
              
            </td>
          </tr>
        </table>                 
 
      )
}

export default Fraction3
