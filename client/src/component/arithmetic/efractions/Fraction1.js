import React, {useState, useEffect} from 'react'



const Fraction1 = ({randomFrac}) => {
 

  
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
                                      <h2>&times;</h2>
                                    </tr>
                                </tbody>
                              </table>

                              <table className='third col'>
                              <tbody className=''>
                                  <tr className=''>
                                     <input  className='input digit-input '/>
                                  </tr>
                                   
                                  <tr className='line-tr'>
                                    <div className='line-input'></div>
                                  </tr>

                                  <tr>
                                     <input  className='input digit-input '/>
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
                                  <tr className=''>34</tr>
                                   
                                  <tr className='line-tr'>
                                    <div className='line'></div>
                                  </tr>

                                  <tr>32</tr>      
                               </tbody>
                             </table>
                            
                          </td>
                        </tr>
                      </table>                 
                                       
                                            
  )
}

export default Fraction1
