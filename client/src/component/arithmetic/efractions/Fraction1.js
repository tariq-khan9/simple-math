import React, {useEffect} from 'react'



const Fraction1 = ({randomFrac, multiplyNumber,inputs, setInputs}) => {
 
  useEffect(()=>{
    setInputs(prevInputs => ({ inputNum: null, inputDenom: null }));
  },[])

  
  return (
    
                     <table className='digit'>
                      {/* <button onClick={()=>console.log(inputs)}>show</button> */}
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
                                      <h2>&times;</h2>
                                    </tr>
                                </tbody>
                              </table>

                              <table className='third col'>
                              <tbody className=''>
                                  <tr className=''>
                                     <input value={inputs.inputNum===null? "" : inputs.inputNum} onChange={(e)=>setInputs({...inputs, inputNum: e.target.value})}   className='input digit-input '/>
                                  </tr>
                                   
                                  <tr className='line-tr'>
                                    <div className='line-input'></div>
                                  </tr>

                                  <tr>
                                     <input value={inputs.inputDenom===null? "" : inputs.inputDenom} onChange={(e)=>setInputs({...inputs, inputDenom: e.target.value})}  className='input digit-input '/>
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

                              <table className='fourth col'>
                              <tbody className=''>
                                  <tr className=''>{randomFrac.numerator*multiplyNumber}</tr>
                                   
                                  <tr className='line-tr'>
                                    <div className='line'></div>
                                  </tr>

                                  <tr>{randomFrac.denominator*multiplyNumber}</tr>      
                               </tbody>
                             </table>
                            
                          </td>
                        </tr>
                      </table>                 
                                       
                                            
  )
}

export default Fraction1
