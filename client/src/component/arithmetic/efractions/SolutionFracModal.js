import React, { useEffect, useState } from 'react'
import NumberArrayDisplay from './NumberArrayDisplay';



const SolutionFracModal = ({efraction, showSolutionModal,setShowSolutionModal,setShowCheckModal, randomFrac, multiplyNumber, inputs, numFactors, denomFactors}) => {
    
    const [simplifiedFraction, setSimplifiedFraction] = useState({
        numerator: 1,
        denominator: 2
    })
     
    function simplifyFraction(numerator, denominator) {

       
        // Function to find greatest common divisor (GCD) using Euclid's algorithm
        const gcd = (a, b) => {
            if (b === 0) {
                return a;
            }
            return gcd(b, a % b);
        };
    
        // Find the GCD of numerator and denominator
        const gcdValue = gcd(numerator, denominator);
    
        // Divide both numerator and denominator by their GCD to get the smallest equivalent fraction
        const smallestNumerator = numerator / gcdValue;
        const smallestDenominator = denominator / gcdValue;
    
        return [smallestNumerator, smallestDenominator];
    }

    useEffect(()=>{
      const [smallestNumerator, smallestDenominator] = simplifyFraction(randomFrac.numerator, randomFrac.denominator);
      setSimplifiedFraction({
        numerator: smallestNumerator,
        denominator: smallestDenominator
       })
    },[randomFrac])

   
    
    if(showSolutionModal)
    {
     return (
       <div className=' fixed top-0 left-0 w-full h-full pt-48  bg-transparent w-scree  backdrop-blur-sm flex justify-center items-center '>
   
         <div className='bg-white border border-gray-300 rounded-md z-40  md:max-h-85 mt-[80px] overflow-y-auto  p-4  mb-[200px]'>
               <div className='text-center w-full'>
                 <h2 className='text-[14px] md:text-[20px] font-bold underline text-blue-800  '>Solution</h2>
               </div>
               <div className='overflow-y-auto max-h-[380px]'>     
                   {efraction!==4 && <div>
                        <h2 className='font-bold text-[12px] md:text-[16px]'>Your answer:</h2>                                <div className='solution-digit'>
                                     
                                <div className=' flex items-center mb-2'>
                                        {/* <TeX>{`\= \\frac{${inputs.inputNum}}{${inputs.inputDenom}}`}</TeX> */}
                                        <td className='= px-2 '>
                                        <tr>=</tr>
                                        </td>
                                        <td className='first-col px-1'>
                                        <table className='  w-[25px] md:w-[40px]'>
                                        <tbody className=''>
                                            <tr className='flex justify-center items-center bg-gray-200 text-gray-700 rounded-[4px]'>
                                               
                                                <label  className='  '>{inputs.inputNum? inputs.inputNum : 'Null'} </label>
                                            </tr>
                                            
                                            <tr className='flex items-center justify-center  mt-1 mb-1'>
                                                <div className='border-t border-2  border-gray-500   w-8 '></div>
                                            </tr>
                                            
                                            {efraction<3 &&  
                                            <tr className='flex justify-center items-center bg-gray-200 text-gray-700 rounded-[4px]'>
                                                { <label  className='  '>{inputs.inputDenom? inputs.inputDenom : 'Null'} </label>}

                                            </tr>  }

                                            {efraction===3 &&  
                                            <tr className='flex justify-center items-center  text-gray-700 rounded-[4px]'>
                                                { <label  className='  '>{randomFrac.denominator*multiplyNumber} </label>}

                                            </tr>  }
                                             
                                        </tbody>
                                        </table>
                                        </td>

                                </div>
                            </div>
                     </div>
                   }
                        <div className='flex flex-col justify-items-start'>
                            <div className='w-[200px] md:w-[300px] flex justify-start'>
                            <h2 className='font-bold text-[12px] md:text-[16px] mt-4'>Solution:</h2>
                            </div>
                            
                
                            {efraction===1  &&
                                <div className='flex flex-row'>
                                    <td className='= px-2 md:pr-4 flex items-center'>
                                        <tr>=</tr>
                                        </td>
                                  <table className='text-[11px] md:text-[18px] font-semibold  text-gray-500 text-center mt-4'>
                                    <tr>
                                    <td className='flex flex-row items-center'>
                                        <table className='first col'>
                                        <tbody className=''>
                                            <tr className=''>{randomFrac.numerator}</tr>
                                            
                                            <tr className='flex items-center mt-1 mb-1'>
                                                <div className='border-t border-2  border-gray-500   w-5 '></div>
                                            </tr>

                                            <tr>{randomFrac.denominator}</tr>      
                                        </tbody>
                                        </table>

                                        <table className='opertor mx-2 md:mx-3'>
                                            <tbody>
                                                <tr>
                                                <h2>&times;</h2>
                                                </tr>
                                            </tbody>
                                        </table>

                                        <table className='  w-[25px] md:w-[40px]'>
                                        <tbody className=''>
                                            <tr className='flex justify-center items-center bg-gray-200 text-gray-700 rounded-[4px]'>
                                                <label  className='  '>{multiplyNumber} </label>
                                            </tr>
                                            
                                            <tr className='flex items-center justify-center  mt-1 mb-1'>
                                                <div className='border-t border-2  border-gray-500   w-8 '></div>
                                            </tr>

                                            <tr className='flex justify-center items-center bg-gray-200 text-gray-700 rounded-[4px]'>
                                            <label  className='  '>{multiplyNumber} </label>
                                            </tr>      
                                        </tbody>
                                        </table>

                                    

                                        <table className='opertor mx-2 md:mx-4'>
                                            <tbody>
                                                <tr>
                                                <h2>=</h2>
                                                </tr>
                                            </tbody>
                                        </table>

                                        <table className='fourth col'>
                                        <tbody className=''>
                                            <tr className=''>{randomFrac.numerator*multiplyNumber}</tr>
                                            
                                            <tr className='flex items-center mt-1 mb-1'>
                                                <div className='border-t border-2  border-gray-500   w-5 '></div>
                                            </tr>

                                            <tr>{randomFrac.denominator*multiplyNumber}</tr>      
                                        </tbody>
                                        </table>
                                        
                                    </td>
                                    </tr>
                                  </table>  
                                </div>
                            }

                            {efraction===2  &&
                                <div className='flex flex-row'>
                                    <td className='= px-2 md:pr-4 flex items-center'>
                                        <tr>=</tr>
                                        </td>
                                  <table className='text-[11px] md:text-[18px] font-semibold  text-gray-500 text-center mt-4'>
                                    <tr>
                                    <td className='flex flex-row items-center'>
                                        <table className='first col'>
                                        <tbody className=''>
                                            <tr className=''>{randomFrac.numerator}</tr>
                                            
                                            <tr className='flex items-center mt-1 mb-1'>
                                                <div className='border-t border-2  border-gray-500   w-5 '></div>
                                            </tr>

                                            <tr>{randomFrac.denominator}</tr>      
                                        </tbody>
                                        </table>

                                        <table className='opertor mx-2 md:mx-3'>
                                            <tbody>
                                                <tr>
                                                <h2>=</h2>
                                                </tr>
                                            </tbody>
                                        </table>

                                        {((randomFrac.numerator<0  || randomFrac.denominator<0) && !(randomFrac.numerator<0  && randomFrac.denominator<0)) &&
                                           <table className='opertor'>
                                           <tbody>
                                               <tr>
                                               <h2>-</h2>
                                               </tr>
                                           </tbody>
                                       </table>
                                        
                                       }

                                        {randomFrac.numerator==randomFrac.denominator? 
                                         <table className='  w-[25px] md:w-[40px]'>
                                         <tbody className=''>
                                             <tr className='flex justify-center items-center bg-gray-200 text-gray-700 rounded-[4px]'>
                                                 <label  className='  '>1</label>
                                             </tr>
                                             </tbody>
                                             </table>
                                             :
                                             <table className='  w-[25px] md:w-[40px]'>
                                             <tbody className=''>
                                                 <tr className='flex justify-center items-center bg-gray-200 text-gray-700 rounded-[4px]'>
                                                     <label  className='  '>{Math.abs(simplifiedFraction.numerator)} </label>
                                                 </tr>
                                                 
                                                 <tr className='flex items-center justify-center  mt-1 mb-1'>
                                                     <div className='border-t border-2  border-gray-500   w-8 '></div>
                                                 </tr>
     
                                                 <tr className='flex justify-center items-center bg-gray-200 text-gray-700 rounded-[4px]'>
                                                 <label  className='  '>{Math.abs(simplifiedFraction.denominator)} </label>
                                                 </tr>      
                                             </tbody>
                                             </table>
                                             }

                                      

                                    </td>
                                    </tr>
                                  </table>  
                                </div>
                            }

                            {efraction===3  &&
                                <div className='flex flex-row'>
                                    <td className='= px-2 md:pr-4 flex items-center'>
                                        <tr>=</tr>
                                        </td>
                                  <table className='text-[11px] md:text-[18px] font-semibold  text-gray-500 text-center mt-4'>
                                    <tr>
                                    <td className='flex flex-row items-center'>
                                        <table className='first col'>
                                        <tbody className=''>
                                            <tr className=''>{randomFrac.numerator}</tr>
                                            
                                            <tr className='flex items-center mt-1 mb-1'>
                                                <div className='border-t border-2  border-gray-500   w-5 '></div>
                                            </tr>

                                            <tr>{randomFrac.denominator}</tr>      
                                        </tbody>
                                        </table>

  
                                        <table className='opertor mx-2 md:mx-4'>
                                            <tbody>
                                                <tr>
                                                <h2>=</h2>
                                                </tr>
                                            </tbody>
                                        </table>

                                        <table className='fourth col'>
                                        <tbody className=''>
                                            
                                            <tr className='flex justify-center items-center bg-gray-200 text-gray-700 px-2 rounded-[4px]'>
                                                <label  className='  '>{randomFrac.numerator*multiplyNumber}</label>
                                            </tr>
                                            
                                            <tr className='flex items-center mt-1 mb-1'>
                                                <div className='border-t border-2  border-gray-500   w-8'></div>
                                            </tr>

                                            <tr>{randomFrac.denominator*multiplyNumber}</tr>      
                                        </tbody>
                                        </table>
                                        
                                    </td>
                                    </tr>
                                  </table>  
                                </div>
                            }

                           
                            {efraction===4  &&
                                <div className='flex flex-row'>
                                    <td className='= px-2 md:pr-4 flex items-center'>
                                        <tr>=</tr>
                                        </td>
                                        <table className='solution-digit'>
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

                                                <table className='opertor mx-2 md:mx-4'>
                                                 <tbody>
                                                    <tr>
                                                         <h2>=</h2>
                                                     </tr>
                                                 </tbody>
                                                 </table>
  
                                                <table className='third col'>
                                                  <tbody className=''>
                                                     <tr className='flex justify-center items-center bg-gray-200 text-gray-700 px-2 rounded-[4px]'>
                                                       <label  className='  '>{numFactors.length? <NumberArrayDisplay numbers={numFactors}/> : randomFrac.numerator}</label>
                                                     </tr>
                                                            
                                                    <tr className='line-tr'>
                                                    <div className='line-input'></div>
                                                    </tr>

                                                    <tr className='flex justify-center items-center bg-gray-200 text-gray-700 px-2 rounded-[4px]'>
                                                    <label  className='  '>{denomFactors.length? <NumberArrayDisplay numbers={denomFactors}/> : randomFrac.denominator}</label>
                                                    </tr>      
                                                  </tbody>
                                                 </table>
                                                    
                                                 <table className='opertor mx-2 md:mx-4'>
                                                    <tbody>
                                                        <tr>
                                                           <h2>=</h2>
                                                        </tr>
                                                    </tbody>
                                                </table>

                                                <table className='final col'>
                                                  <tbody className=''>
                                                    <tr className='flex justify-center items-center bg-gray-200 text-gray-700 px-2 rounded-[4px]'>
                                                       <label  className='  '>{simplifiedFraction.numerator}</label>
                                                    </tr>
                                                            
                                                    <tr className='line-tr'>
                                                    <div className='line-input'></div>
                                                    </tr>

                                                    <tr className='flex justify-center items-center bg-gray-200 text-gray-700 px-2 rounded-[4px]'>
                                                        <label  className='  '>{simplifiedFraction.denominator}</label>
                                                    </tr>      
                                                  </tbody>
                                                 </table>
                                              </td>
                                            </tr>
                                          </table>   
                                </div>
                            }
                          

                        </div>
               </div>
                  {/* ====================================== close button ======================================== */}
                  <div className='flex flex-row w-full  justify-end mt-10 md:mt-16 pr-4'>
                        <button className='flex justify-items-end p-1 text-[12px] md:text-[16px] px-4 md:px-8 border border-blue-800 text-blue-800 hover:bg-blue-800 hover:text-white' onClick={()=>
                        { setShowCheckModal(false)
                        setShowSolutionModal(false)}}>Close</button>
                </div>
   
         </div>
      </div>
     )
    }
}

export default SolutionFracModal

