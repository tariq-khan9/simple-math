import React, {useState, useEffect} from 'react'
import MathInputFrac from './MathInputFrac'


const Fraction4 = ({randomFrac, inputs, setInputs, inputs4, setInputs4, mathInputNull, setMathInputNull}) => {

   
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
                <MathInputFrac   type='inputNum' setInputs4={setInputs4} inputs4={inputs4}  mathInputNull={mathInputNull} setMathInputNull={setMathInputNull}/>
                </tr>
                 
                <tr className='line-tr'>
                  <div className='line-input'></div>
                </tr>

                <tr>
                <MathInputFrac   type='inputDenom' setInputs4={setInputs4} inputs4={inputs4}  mathInputNull={mathInputNull} setMathInputNull={setMathInputNull}/>
                
                </tr>        
             </tbody>
           </table>
          
           <table className='opertor mx-3 md:mx-6'>
              <tbody>
                  <tr>
                    <h2>=</h2>
                  </tr>
              </tbody>
            </table>

            
            <table className='final col'>
            <tbody className=''>
                <tr className=''>
                   <input placeholder='minimum' value={inputs.inputNum===null? "" : inputs.inputNum} onChange={(e)=>setInputs({...inputs, inputNum: e.target.value})}   className='input digit-input '/>
                </tr>
                 
                <tr className='line-tr'>
                  <div className='line-input'></div>
                </tr>

                <tr>
                   <input placeholder='fraction' value={inputs.inputDenom===null? "" : inputs.inputDenom} onChange={(e)=>setInputs({...inputs, inputDenom: e.target.value})}  className='input digit-input '/>
                </tr>        
             </tbody>
           </table>
        </td>
      </tr>
    </table>             
 
      )
}

export default Fraction4
