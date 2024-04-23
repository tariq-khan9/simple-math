import React from 'react'

const CheckModal = ({showCheckModal, setShowCheckModal, setShowSolutionModal, result}) => {
  console.log("result in check modal", result)
  const correctFlavors = ["Well done!", "Great job!", "Excellent!", "Fantastic!", "Perfect!"];
  const wrongFlavors = ["Oops!", "Try again!", "Not quite!", "Incorrect!", "Keep trying!"];

  // Randomly select a flavor from the correct and wrong arrays
  const randomCorrectFlavor = correctFlavors[Math.floor(Math.random() * correctFlavors.length)];
  const randomWrongFlavor = wrongFlavors[Math.floor(Math.random() * wrongFlavors.length)];

    if(showCheckModal)
    return(
    <div className='fixed inset-0 bg-black  bg-opacity-10 backdrop-blur-sm flex justify-center items-center '>
  
          <div className='bg-white z-50 w-60 md:w-96  p-4  mb-[200px] '> 
                 <div className='flex flex-row justify-between '>
                     <h3 className='text-[16px] md:text-[25px]'>Validation</h3>
                 </div>
                 <div className='w-full flex justify-center mb-6'>
                  {result? <h2 className='text-[30px] md:text-[50px] text-green-800  mt-2'>{randomCorrectFlavor}</h2> :
                           <h2 className='text-[30px] md:text-[50px] text-red-600  mt-2'>{randomWrongFlavor}</h2>
                  }
                 </div>
                 <div className='flex justify-end'>
                   <button onClick={()=>setShowCheckModal(false)}  className='text-[12px] sm:text-[14px] md:text-[18px] text-blue-800 border-blue-800 border px-4 hover:bg-blue-800 hover:text-white'>{result? 'Try more' : 'Try again'}</button>
                   {!result && <button onClick={()=>setShowSolutionModal(true)} className='text-[12px] sm:text-[14px] md:text-[18px] text-blue-800 border-blue-800 border px-4 py-1 md:py-2 hover:bg-blue-800 hover:text-white ml-2 md:ml-3'>Solution</button>}
                 </div>
     
         </div>
         
    </div>
    )
}

export default CheckModal
