import React from 'react'

const Fraction3 = () => {
    return (
        <div className='flex flex-col'>
            <div className='math  flex justify-start  mt-6'>
                  <div>
                      <div>
                         <table className='digit'>
                            <tr>
                              <td className='flex flex-row items-center'>
                                 <table className='first col'>
                                  <tbody className=''>
                                      <tr className=''>45</tr>
                                       
                                      <tr className='line-tr'>
                                        <div className='line'></div>
                                      </tr>
    
                                      <tr>36</tr>      
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
                                         <input  className='input digit-input '/>
                                      </tr>
                                       
                                      <tr className='line-tr'>
                                        <div className='line-input'></div>
                                      </tr>
    
                                      <tr>
                                         34
                                      </tr>      
                                   </tbody>
                                 </table>
                                
                              </td>
                            </tr>
                          </table>                 
                                           
                                                
                      </div>
                                    
                      
    
                      <div className='buttons w-full  flex flex-row justify-start mt-14'>
                        <button  className='btn-drill'>Check</button>
    
                        <button  className='btn-drill ml-1 md:ml-3'>Next</button>
                      </div>
                  </div>   
            </div>      
        </div>
      )
}

export default Fraction3
